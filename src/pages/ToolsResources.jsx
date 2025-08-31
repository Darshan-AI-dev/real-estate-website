import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calculator, Home, TrendingUp, DollarSign, BarChart3, Plus, Minus, AlertCircle } from 'lucide-react'

const ToolsResources = () => {
  // Property Comparison Tool State
  const [properties, setProperties] = useState([
    { id: 1, address: '', price: '', type: '', yearBuilt: '', sqft: '', beds: '', baths: '', lotSize: '', garage: '', propertyTax: '', hoa: '', schoolRating: '', walkScore: '', condition: '', notes: '' },
    { id: 2, address: '', price: '', type: '', yearBuilt: '', sqft: '', beds: '', baths: '', lotSize: '', garage: '', propertyTax: '', hoa: '', schoolRating: '', walkScore: '', condition: '', notes: '' }
  ])

  // Cap Rate Calculator State
  const [capRateInputs, setCapRateInputs] = useState({
    purchasePrice: '',
    monthlyRent: '',
    propertyTax: '',
    insurance: '',
    vacancyRate: 5,
    repairsMaintenance: 8,
    managementFee: 10,
    otherCosts: ''
  })

  // Cash-on-Cash Calculator State
  const [cocInputs, setCocInputs] = useState({
    ...capRateInputs,
    downPayment: 25,
    interestRate: '',
    loanTerm: 30,
    closingCosts: ''
  })

  // Market Trends State
  const [marketLocation, setMarketLocation] = useState('')
  const [marketData, setMarketData] = useState(null)

  // Property Comparison Functions
  const addProperty = () => {
    if (properties.length < 4) {
      setProperties([...properties, { 
        id: properties.length + 1, 
        address: '', price: '', type: '', yearBuilt: '', sqft: '', beds: '', baths: '', 
        lotSize: '', garage: '', propertyTax: '', hoa: '', schoolRating: '', walkScore: '', 
        condition: '', notes: '' 
      }])
    }
  }

  const removeProperty = (id) => {
    if (properties.length > 2) {
      setProperties(properties.filter(p => p.id !== id))
    }
  }

  const updateProperty = (id, field, value) => {
    setProperties(properties.map(p => p.id === id ? { ...p, [field]: value } : p))
  }

  const calculatePricePerSqFt = (price, sqft) => {
    if (price && sqft) {
      return (parseFloat(price) / parseFloat(sqft)).toFixed(2)
    }
    return '-'
  }

  const calculatePITI = (price) => {
    if (price) {
      const loanAmount = parseFloat(price) * 0.8 // 20% down
      const monthlyRate = 0.0674 / 12 // 6.74% annual rate
      const numPayments = 30 * 12
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
      const monthlyTI = (parseFloat(price) * 0.015) / 12 // Estimated 1.5% annual for taxes and insurance
      return (monthlyPI + monthlyTI).toFixed(0)
    }
    return '-'
  }

  // Cap Rate Calculator Functions
  const calculateCapRate = () => {
    const { purchasePrice, monthlyRent, propertyTax, insurance, vacancyRate, repairsMaintenance, managementFee, otherCosts } = capRateInputs
    
    if (!purchasePrice || !monthlyRent) return null

    const grossAnnualRent = parseFloat(monthlyRent) * 12
    const vacancyLoss = grossAnnualRent * (parseFloat(vacancyRate) / 100)
    const repairCosts = grossAnnualRent * (parseFloat(repairsMaintenance) / 100)
    const managementCosts = grossAnnualRent * (parseFloat(managementFee) / 100)
    const otherAnnualCosts = (parseFloat(otherCosts) || 0) * 12
    
    const totalOperatingExpenses = parseFloat(propertyTax || 0) + parseFloat(insurance || 0) + vacancyLoss + repairCosts + managementCosts + otherAnnualCosts
    const noi = grossAnnualRent - totalOperatingExpenses
    const capRate = (noi / parseFloat(purchasePrice)) * 100

    return {
      grossAnnualRent,
      totalOperatingExpenses,
      noi,
      capRate: capRate.toFixed(2)
    }
  }

  // Cash-on-Cash Calculator Functions
  const calculateCashOnCash = () => {
    const capRateResult = calculateCapRate()
    if (!capRateResult) return null

    const { purchasePrice, downPayment, interestRate, loanTerm, closingCosts } = cocInputs
    
    if (!interestRate) return null

    const downPaymentAmount = parseFloat(purchasePrice) * (parseFloat(downPayment) / 100)
    const loanAmount = parseFloat(purchasePrice) - downPaymentAmount
    const totalCashInvested = downPaymentAmount + (parseFloat(closingCosts) || (parseFloat(purchasePrice) * 0.03))
    
    const monthlyRate = parseFloat(interestRate) / 100 / 12
    const numPayments = parseFloat(loanTerm) * 12
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    const annualDebtService = monthlyPayment * 12
    
    const annualCashFlow = capRateResult.noi - annualDebtService
    const cashOnCashReturn = (annualCashFlow / totalCashInvested) * 100

    return {
      ...capRateResult,
      totalCashInvested,
      annualDebtService,
      annualCashFlow,
      cashOnCashReturn: cashOnCashReturn.toFixed(2)
    }
  }

  // Market Trends Functions
  const searchMarket = () => {
    // Simulated market data for Austin, TX
    if (marketLocation.toLowerCase().includes('austin')) {
      setMarketData({
        location: 'Austin, TX',
        medianPrice: 550000,
        priceChange: 2.5,
        daysOnMarket: 65,
        monthsSupply: 3.8,
        saleToListRatio: 98.5,
        medianRent: 2300,
        marketTemp: 'Balanced Market'
      })
    } else {
      setMarketData({
        location: marketLocation,
        medianPrice: 425000,
        priceChange: 1.8,
        daysOnMarket: 45,
        monthsSupply: 2.9,
        saleToListRatio: 101.2,
        medianRent: 1850,
        marketTemp: 'Strong Seller\'s Market'
      })
    }
  }

  const capRateResult = calculateCapRate()
  const cocResult = calculateCashOnCash()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-600">
              Tools & Calculators
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Real Estate Analysis Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade calculators and tools to help you make informed real estate decisions
            </p>
          </div>
        </div>
      </section>

      {/* Tool 1: Property Comparison */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-orange-600" />
                <span>Property Comparison Tool</span>
              </CardTitle>
              <CardDescription>
                Compare 2-4 properties side-by-side using standardized metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center space-x-4">
                <Button onClick={addProperty} disabled={properties.length >= 4} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Property
                </Button>
                {properties.length > 2 && (
                  <Button onClick={() => removeProperty(properties[properties.length - 1].id)} variant="outline" size="sm">
                    <Minus className="h-4 w-4 mr-2" />
                    Remove Property
                  </Button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-medium">Feature</th>
                      {properties.map((property) => (
                        <th key={property.id} className="border border-gray-300 p-3 text-center font-medium">
                          Property {property.id}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Address</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            value={property.address}
                            onChange={(e) => updateProperty(property.id, 'address', e.target.value)}
                            placeholder="Enter address"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Listing Price</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.price}
                            onChange={(e) => updateProperty(property.id, 'price', e.target.value)}
                            placeholder="$"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Square Footage</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.sqft}
                            onChange={(e) => updateProperty(property.id, 'sqft', e.target.value)}
                            placeholder="sq ft"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-orange-50">Price per Sq Ft</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-3 text-center font-semibold text-orange-600">
                          ${calculatePricePerSqFt(property.price, property.sqft)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Bedrooms</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.beds}
                            onChange={(e) => updateProperty(property.id, 'beds', e.target.value)}
                            placeholder="Beds"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Bathrooms</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            step="0.5"
                            value={property.baths}
                            onChange={(e) => updateProperty(property.id, 'baths', e.target.value)}
                            placeholder="Baths"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-orange-50">Est. Monthly PITI</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-3 text-center font-semibold text-orange-600">
                          ${calculatePITI(property.price)}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Property Condition</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Select value={property.condition} onValueChange={(value) => updateProperty(property.id, 'condition', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="major-work">Needs Major Work</SelectItem>
                              <SelectItem value="cosmetic">Cosmetic Updates Needed</SelectItem>
                              <SelectItem value="move-in">Move-in Ready</SelectItem>
                              <SelectItem value="renovated">Newly Renovated</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">My Notes</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Textarea
                            value={property.notes}
                            onChange={(e) => updateProperty(property.id, 'notes', e.target.value)}
                            placeholder="Pros & cons..."
                            className="w-full h-20"
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tool 2: Investment Calculators */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cap Rate Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                  <span>Cap Rate Calculator</span>
                </CardTitle>
                <CardDescription>
                  Calculate the unleveraged annual return of a property
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={capRateInputs.purchasePrice}
                      onChange={(e) => setCapRateInputs({...capRateInputs, purchasePrice: e.target.value})}
                      placeholder="400000"
                    />
                  </div>
                  <div>

(Content truncated due to size limit. Use line ranges to read in chunks)