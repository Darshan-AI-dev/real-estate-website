import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Home, Plus, Minus, Calculator, Star, AlertTriangle } from 'lucide-react'

const PropertyComparison = () => {
  const [properties, setProperties] = useState([
    { 
      id: 1, 
      address: '', 
      price: '', 
      sqft: '', 
      beds: '', 
      baths: '', 
      yearBuilt: '',
      lotSize: '',
      propertyTax: '',
      hoa: '',
      condition: '',
      notes: ''
    },
    { 
      id: 2, 
      address: '', 
      price: '', 
      sqft: '', 
      beds: '', 
      baths: '', 
      yearBuilt: '',
      lotSize: '',
      propertyTax: '',
      hoa: '',
      condition: '',
      notes: ''
    }
  ])

  const addProperty = () => {
    if (properties.length < 4) {
      setProperties([...properties, { 
        id: properties.length + 1, 
        address: '', 
        price: '', 
        sqft: '', 
        beds: '', 
        baths: '', 
        yearBuilt: '',
        lotSize: '',
        propertyTax: '',
        hoa: '',
        condition: '',
        notes: ''
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

  const calculateMonthlyPayment = (price) => {
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

  const getConditionColor = (condition) => {
    switch(condition) {
      case 'major-work': return 'text-red-600 bg-red-50'
      case 'cosmetic': return 'text-orange-600 bg-orange-50'
      case 'move-in': return 'text-green-600 bg-green-50'
      case 'renovated': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getConditionText = (condition) => {
    switch(condition) {
      case 'major-work': return 'Major Work Needed'
      case 'cosmetic': return 'Cosmetic Updates'
      case 'move-in': return 'Move-in Ready'
      case 'renovated': return 'Newly Renovated'
      default: return 'Not Specified'
    }
  }

  const exportComparison = () => {
    const data = properties.map(p => ({
      Address: p.address,
      Price: p.price,
      'Square Feet': p.sqft,
      'Price per Sq Ft': calculatePricePerSqFt(p.price, p.sqft),
      Bedrooms: p.beds,
      Bathrooms: p.baths,
      'Year Built': p.yearBuilt,
      'Lot Size': p.lotSize,
      'Property Tax': p.propertyTax,
      'HOA Fees': p.hoa,
      'Est Monthly Payment': calculateMonthlyPayment(p.price),
      Condition: getConditionText(p.condition),
      Notes: p.notes
    }))

    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'property-comparison.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-purple-200 border-purple-300">
              Property Comparison Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare Properties Side-by-Side
            </h1>
            <p className="text-xl text-purple-100">
              Analyze and compare up to 4 properties using standardized metrics
            </p>
          </div>
        </div>
      </section>

      {/* Tool Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={addProperty} disabled={properties.length >= 4} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Property ({properties.length}/4)
              </Button>
              {properties.length > 2 && (
                <Button 
                  onClick={() => removeProperty(properties[properties.length - 1].id)} 
                  variant="outline" 
                  size="sm"
                >
                  <Minus className="h-4 w-4 mr-2" />
                  Remove Property
                </Button>
              )}
            </div>
            <Button onClick={exportComparison} variant="outline" size="sm">
              Export to CSV
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-purple-600" />
                <span>Property Comparison</span>
              </CardTitle>
              <CardDescription>
                Compare properties across key metrics to make informed decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="border border-gray-300 p-3 text-left font-medium text-purple-900">Feature</th>
                      {properties.map((property) => (
                        <th key={property.id} className="border border-gray-300 p-3 text-center font-medium text-purple-900">
                          Property {property.id}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Address */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Address</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            value={property.address}
                            onChange={(e) => updateProperty(property.id, 'address', e.target.value)}
                            placeholder="Enter full address"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Listing Price */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Listing Price</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.price}
                            onChange={(e) => updateProperty(property.id, 'price', e.target.value)}
                            placeholder="500000"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Square Footage */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Square Footage</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.sqft}
                            onChange={(e) => updateProperty(property.id, 'sqft', e.target.value)}
                            placeholder="2000"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Price per Sq Ft - Calculated */}
                    <tr className="bg-purple-50">
                      <td className="border border-gray-300 p-3 font-medium text-purple-900">
                        <div className="flex items-center space-x-1">
                          <Calculator className="h-4 w-4" />
                          <span>Price per Sq Ft</span>
                        </div>
                      </td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-3 text-center font-bold text-purple-600">
                          ${calculatePricePerSqFt(property.price, property.sqft)}
                        </td>
                      ))}
                    </tr>

                    {/* Bedrooms */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Bedrooms</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.beds}
                            onChange={(e) => updateProperty(property.id, 'beds', e.target.value)}
                            placeholder="3"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Bathrooms */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Bathrooms</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            step="0.5"
                            value={property.baths}
                            onChange={(e) => updateProperty(property.id, 'baths', e.target.value)}
                            placeholder="2.5"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Year Built */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Year Built</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.yearBuilt}
                            onChange={(e) => updateProperty(property.id, 'yearBuilt', e.target.value)}
                            placeholder="2010"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Lot Size */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Lot Size (sq ft)</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.lotSize}
                            onChange={(e) => updateProperty(property.id, 'lotSize', e.target.value)}
                            placeholder="8000"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Property Tax */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Annual Property Tax</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.propertyTax}
                            onChange={(e) => updateProperty(property.id, 'propertyTax', e.target.value)}
                            placeholder="6000"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* HOA Fees */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Monthly HOA</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Input
                            type="number"
                            value={property.hoa}
                            onChange={(e) => updateProperty(property.id, 'hoa', e.target.value)}
                            placeholder="150"
                            className="w-full"
                          />
                        </td>
                      ))}
                    </tr>

                    {/* Est Monthly Payment - Calculated */}
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 p-3 font-medium text-green-900">
                        <div className="flex items-center space-x-1">
                          <Calculator className="h-4 w-4" />
                          <span>Est. Monthly PITI</span>
                        </div>
                      </td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-3 text-center font-bold text-green-600">
                          ${calculateMonthlyPayment(property.price)}
                        </td>
                      ))}
                    </tr>

                    {/* Property Condition */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Property Condition</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Select 
                            value={property.condition} 
                            onValueChange={(value) => updateProperty(property.id, 'condition', value)}
                          >
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

                    {/* Condition Status - Visual */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Condition Status</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-3 text-center">
                          {property.condition ? (
                            <Badge className={getConditionColor(property.condition)}>
                              {getConditionText(property.condition)}
                            </Badge>
                          ) : (
                            <span className="text-gray-400">Not specified</span>
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* Notes */}
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">My Notes</td>
                      {properties.map((property) => (
                        <td key={property.id} className="border border-gray-300 p-2">
                          <Textarea
                            value={property.notes}
                            onChange={(e) => updateProperty(property.id, 'notes', e.target.value)}
                            placeholder="Pros, cons, observations..."
                            className="w-full h-24 resize-none"
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

      {/* Analysis Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comparison Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Key Metrics to Compare</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Price per sq ft:</strong> Standardizes value comparison</li>
                  <li>• <strong>Monthly payment:</strong> Total cost of ownership</li>
                  <li>• <strong>Property taxes:</strong> Ongoing annual expense</li>
                  <li>• <strong>HOA fees:</strong> Additional monthly costs</li>
                  <li>• <strong>Condition:</strong> Immediate repair/update needs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span>Red Flags to Watch</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Price significantly above comparable properties</li>
                  <li>• Very high property taxes relative to home value</li>
                  <li>• Major structural or system issues</li>
                  <li>• Properties that have been on market too long</li>
                  <li>• Unusually high HOA fees without clear benefits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Beyond the Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• School district quality and ratings</li>
                  <li>• Neighborhood safety and walkability</li>
                  <li>• Commute times to work</li>
                  <li>• Future development plans in the area</li>
                  <li>• Resale potential and market trends</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Making Your Decision</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Rank properties by total monthly cost</li>
                  <li>• Consider immediate repair/update costs</li>
                  <li>• Factor in your lifestyle preferences</li>
                  <li>• Think about 5-10 year plans</li>
                  <li>• Get professional inspections before buying</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyComparison

