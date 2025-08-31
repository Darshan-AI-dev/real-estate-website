import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calculator, Home, DollarSign, TrendingUp, AlertCircle } from 'lucide-react'

const MortgageCalculator = () => {
  const [inputs, setInputs] = useState({
    homePrice: '',
    downPayment: '20',
    loanTerm: '30',
    interestRate: '6.74',
    propertyTax: '1.2',
    homeInsurance: '0.5',
    pmi: '0.5',
    hoaFees: ''
  })

  const [results, setResults] = useState(null)

  const calculateMortgage = () => {
    const homePrice = parseFloat(inputs.homePrice)
    const downPaymentPercent = parseFloat(inputs.downPayment)
    const loanTermYears = parseFloat(inputs.loanTerm)
    const annualRate = parseFloat(inputs.interestRate) / 100
    const propertyTaxRate = parseFloat(inputs.propertyTax) / 100
    const insuranceRate = parseFloat(inputs.homeInsurance) / 100
    const pmiRate = parseFloat(inputs.pmi) / 100
    const hoaMonthly = parseFloat(inputs.hoaFees) || 0

    if (!homePrice || !downPaymentPercent || !loanTermYears || !annualRate) {
      return
    }

    const downPaymentAmount = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPaymentAmount
    const monthlyRate = annualRate / 12
    const numPayments = loanTermYears * 12

    // Calculate monthly principal and interest
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)

    // Calculate other monthly costs
    const monthlyPropertyTax = (homePrice * propertyTaxRate) / 12
    const monthlyInsurance = (homePrice * insuranceRate) / 12
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * pmiRate) / 12 : 0

    const totalMonthlyPayment = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyPMI + hoaMonthly

    // Calculate total costs
    const totalInterest = (monthlyPI * numPayments) - loanAmount
    const totalCost = homePrice + totalInterest + (monthlyPropertyTax * numPayments) + (monthlyInsurance * numPayments) + (monthlyPMI * numPayments) + (hoaMonthly * numPayments)

    // Calculate required income (28% front-end ratio)
    const requiredIncome = (totalMonthlyPayment * 12) / 0.28

    setResults({
      loanAmount,
      downPaymentAmount,
      monthlyPI: monthlyPI.toFixed(2),
      monthlyPropertyTax: monthlyPropertyTax.toFixed(2),
      monthlyInsurance: monthlyInsurance.toFixed(2),
      monthlyPMI: monthlyPMI.toFixed(2),
      hoaMonthly: hoaMonthly.toFixed(2),
      totalMonthlyPayment: totalMonthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalCost: totalCost.toFixed(2),
      requiredIncome: requiredIncome.toFixed(0)
    })
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Mortgage Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mortgage Payment Calculator
            </h1>
            <p className="text-xl text-blue-100">
              Calculate your monthly mortgage payment including principal, interest, taxes, and insurance (PITI)
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  <span>Loan Details</span>
                </CardTitle>
                <CardDescription>
                  Enter your loan information to calculate monthly payments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="homePrice">Home Price ($)</Label>
                  <Input
                    id="homePrice"
                    type="number"
                    value={inputs.homePrice}
                    onChange={(e) => handleInputChange('homePrice', e.target.value)}
                    placeholder="500000"
                    className="text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="downPayment">Down Payment (%)</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={inputs.downPayment}
                      onChange={(e) => handleInputChange('downPayment', e.target.value)}
                      placeholder="20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="loanTerm">Loan Term (years)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={inputs.loanTerm}
                      onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                      placeholder="30"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={inputs.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    placeholder="6.74"
                  />
                  <p className="text-sm text-gray-500 mt-1">Current average: 6.74%</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyTax">Property Tax (%)</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      step="0.1"
                      value={inputs.propertyTax}
                      onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                      placeholder="1.2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="homeInsurance">Home Insurance (%)</Label>
                    <Input
                      id="homeInsurance"
                      type="number"
                      step="0.1"
                      value={inputs.homeInsurance}
                      onChange={(e) => handleInputChange('homeInsurance', e.target.value)}
                      placeholder="0.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pmi">PMI (%)</Label>
                    <Input
                      id="pmi"
                      type="number"
                      step="0.1"
                      value={inputs.pmi}
                      onChange={(e) => handleInputChange('pmi', e.target.value)}
                      placeholder="0.5"
                    />
                    <p className="text-sm text-gray-500 mt-1">If down payment &lt; 20%</p>
                  </div>
                  <div>
                    <Label htmlFor="hoaFees">HOA Fees ($/month)</Label>
                    <Input
                      id="hoaFees"
                      type="number"
                      value={inputs.hoaFees}
                      onChange={(e) => handleInputChange('hoaFees', e.target.value)}
                      placeholder="0"
                    />
                  </div>
                </div>

                <Button onClick={calculateMortgage} className="w-full" size="lg">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Payment
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span>Payment Breakdown</span>
                </CardTitle>
                <CardDescription>
                  Your monthly mortgage payment details
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    {/* Total Monthly Payment */}
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        ${results.totalMonthlyPayment}
                      </div>
                      <div className="text-blue-800 font-medium">Total Monthly Payment</div>
                    </div>

                    {/* Payment Breakdown */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Monthly Payment Breakdown</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Principal & Interest</span>
                          <span className="font-medium">${results.monthlyPI}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Property Tax</span>
                          <span className="font-medium">${results.monthlyPropertyTax}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Home Insurance</span>
                          <span className="font-medium">${results.monthlyInsurance}</span>
                        </div>
                        {parseFloat(results.monthlyPMI) > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">PMI</span>
                            <span className="font-medium">${results.monthlyPMI}</span>
                          </div>
                        )}
                        {parseFloat(results.hoaMonthly) > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">HOA Fees</span>
                            <span className="font-medium">${results.hoaMonthly}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Loan Summary */}
                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold text-gray-900">Loan Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loan Amount</span>
                          <span className="font-medium">${results.loanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Down Payment</span>
                          <span className="font-medium">${results.downPaymentAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Interest</span>
                          <span className="font-medium">${parseFloat(results.totalInterest).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Cost</span>
                          <span className="font-medium">${parseFloat(results.totalCost).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Income Requirement */}
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-yellow-800">Income Requirement</div>
                          <div className="text-yellow-700">
                            Recommended annual income: <span className="font-semibold">${parseFloat(results.requiredIncome).toLocaleString()}</span>
                          </div>
                          <div className="text-sm text-yellow-600 mt-1">
                            Based on 28% front-end debt-to-income ratio
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Enter loan details to see payment breakdown</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mortgage Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Down Payment Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A larger down payment reduces your monthly payment and eliminates PMI if you put down 20% or more.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20%+ down payment eliminates PMI</li>
                  <li>• Lower loan amount = lower monthly payment</li>
                  <li>• More equity from day one</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interest Rate Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Even a small difference in interest rate can save thousands over the life of your loan.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shop with multiple lenders</li>
                  <li>• Compare APR, not just interest rate</li>
                  <li>• Consider points vs. no-points options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Property Taxes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Property tax rates vary significantly by location and can impact your monthly payment substantially.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Research local tax rates</li>
                  <li>• Consider future tax increases</li>
                  <li>• Factor in homestead exemptions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insurance Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Home insurance costs vary by location, home age, and coverage level. Shop around for the best rates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Get quotes from multiple insurers</li>
                  <li>• Consider bundling with auto insurance</li>
                  <li>• Factor in flood insurance if needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MortgageCalculator

