import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, Home, DollarSign, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

const AffordabilityCalculator = () => {
  const [inputs, setInputs] = useState({
    annualIncome: '',
    monthlyDebt: '',
    downPayment: '20',
    interestRate: '6.74',
    loanTerm: '30',
    propertyTax: '1.2',
    homeInsurance: '0.5',
    pmi: '0.5',
    hoaFees: '',
    debtToIncomeRatio: '28'
  })

  const [results, setResults] = useState(null)

  const calculateAffordability = () => {
    const annualIncome = parseFloat(inputs.annualIncome)
    const monthlyIncome = annualIncome / 12
    const monthlyDebt = parseFloat(inputs.monthlyDebt) || 0
    const downPaymentPercent = parseFloat(inputs.downPayment)
    const annualRate = parseFloat(inputs.interestRate) / 100
    const loanTermYears = parseFloat(inputs.loanTerm)
    const propertyTaxRate = parseFloat(inputs.propertyTax) / 100
    const insuranceRate = parseFloat(inputs.homeInsurance) / 100
    const pmiRate = parseFloat(inputs.pmi) / 100
    const hoaMonthly = parseFloat(inputs.hoaFees) || 0
    const dtiRatio = parseFloat(inputs.debtToIncomeRatio) / 100

    if (!annualIncome || !downPaymentPercent || !annualRate || !loanTermYears) {
      return
    }

    // Calculate maximum monthly housing payment based on DTI ratio
    const maxMonthlyHousing = (monthlyIncome * dtiRatio) - monthlyDebt

    if (maxMonthlyHousing <= 0) {
      setResults({
        error: 'Your current debt payments exceed the recommended debt-to-income ratio. Consider paying down existing debt before buying a home.'
      })
      return
    }

    // Work backwards from monthly payment to find affordable home price
    const monthlyRate = annualRate / 12
    const numPayments = loanTermYears * 12

    // Estimate other monthly costs as percentage of home price
    let estimatedHomePrice = 400000 // Starting estimate
    let iterations = 0
    const maxIterations = 50

    while (iterations < maxIterations) {
      const loanAmount = estimatedHomePrice * (1 - downPaymentPercent / 100)
      const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
      const monthlyPropertyTax = (estimatedHomePrice * propertyTaxRate) / 12
      const monthlyInsurance = (estimatedHomePrice * insuranceRate) / 12
      const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * pmiRate) / 12 : 0
      
      const totalMonthlyPayment = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyPMI + hoaMonthly

      if (Math.abs(totalMonthlyPayment - maxMonthlyHousing) < 10) {
        break
      }

      if (totalMonthlyPayment > maxMonthlyHousing) {
        estimatedHomePrice *= 0.95
      } else {
        estimatedHomePrice *= 1.05
      }

      iterations++
    }

    // Calculate final numbers based on estimated home price
    const loanAmount = estimatedHomePrice * (1 - downPaymentPercent / 100)
    const downPaymentAmount = estimatedHomePrice * (downPaymentPercent / 100)
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    const monthlyPropertyTax = (estimatedHomePrice * propertyTaxRate) / 12
    const monthlyInsurance = (estimatedHomePrice * insuranceRate) / 12
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * pmiRate) / 12 : 0
    const totalMonthlyPayment = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyPMI + hoaMonthly

    // Calculate different affordability scenarios
    const conservativePrice = estimatedHomePrice * 0.8
    const aggressivePrice = estimatedHomePrice * 1.2

    setResults({
      maxHomePrice: estimatedHomePrice.toFixed(0),
      conservativePrice: conservativePrice.toFixed(0),
      aggressivePrice: aggressivePrice.toFixed(0),
      downPaymentAmount: downPaymentAmount.toFixed(0),
      loanAmount: loanAmount.toFixed(0),
      monthlyPayment: totalMonthlyPayment.toFixed(2),
      monthlyPI: monthlyPI.toFixed(2),
      monthlyPropertyTax: monthlyPropertyTax.toFixed(2),
      monthlyInsurance: monthlyInsurance.toFixed(2),
      monthlyPMI: monthlyPMI.toFixed(2),
      hoaMonthly: hoaMonthly.toFixed(2),
      maxMonthlyHousing: maxMonthlyHousing.toFixed(2),
      remainingIncome: (monthlyIncome - totalMonthlyPayment - monthlyDebt).toFixed(2),
      totalDebtRatio: (((totalMonthlyPayment + monthlyDebt) / monthlyIncome) * 100).toFixed(1)
    })
  }

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-green-200 border-green-300">
              Affordability Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Home Affordability Calculator
            </h1>
            <p className="text-xl text-green-100">
              Determine how much house you can afford based on your income and debt
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
                  <Calculator className="h-6 w-6 text-green-600" />
                  <span>Your Financial Information</span>
                </CardTitle>
                <CardDescription>
                  Enter your income and debt information to calculate affordability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="annualIncome">Annual Gross Income ($)</Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    value={inputs.annualIncome}
                    onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                    placeholder="75000"
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Before taxes and deductions</p>
                </div>

                <div>
                  <Label htmlFor="monthlyDebt">Monthly Debt Payments ($)</Label>
                  <Input
                    id="monthlyDebt"
                    type="number"
                    value={inputs.monthlyDebt}
                    onChange={(e) => handleInputChange('monthlyDebt', e.target.value)}
                    placeholder="500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Car loans, credit cards, student loans, etc.</p>
                </div>

                <div>
                  <Label htmlFor="debtToIncomeRatio">Max Debt-to-Income Ratio (%)</Label>
                  <Select value={inputs.debtToIncomeRatio} onValueChange={(value) => handleInputChange('debtToIncomeRatio', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="28">28% (Conservative)</SelectItem>
                      <SelectItem value="31">31% (FHA Standard)</SelectItem>
                      <SelectItem value="36">36% (Conventional)</SelectItem>
                      <SelectItem value="43">43% (Maximum)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">Total monthly debt as % of gross income</p>
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

                <Button onClick={calculateAffordability} className="w-full" size="lg">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Affordability
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-6 w-6 text-green-600" />
                  <span>Affordability Results</span>
                </CardTitle>
                <CardDescription>
                  How much house you can afford
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results?.error ? (
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-red-800">Unable to Calculate</div>
                        <div className="text-red-700 mt-1">{results.error}</div>
                      </div>
                    </div>
                  </div>
                ) : results ? (
                  <div className="space-y-6">
                    {/* Affordability Range */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Affordability Range</h4>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            ${parseFloat(results.maxHomePrice).toLocaleString()}
                          </div>
                          <div className="text-green-800 font-medium">Recommended Maximum</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-lg font-bold text-blue-600">
                            ${parseFloat(results.conservativePrice).toLocaleString()}
                          </div>
                          <div className="text-blue-800 text-sm">Conservative</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg text-center">
                          <div className="text-lg font-bold text-orange-600">
                            ${parseFloat(results.aggressivePrice).toLocaleString()}
                          </div>
                          <div className="text-orange-800 text-sm">Aggressive</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly Payment Breakdown */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Monthly Payment Breakdown</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-center mb-3">
                          <div className="text-xl font-bold text-gray-900">
                            ${results.monthlyPayment}
                          </div>
                          <div className="text-gray-600">Total Monthly Payment</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Principal & Interest</span>
                            <span>${results.monthlyPI}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Property Tax</span>
                            <span>${results.monthlyPropertyTax}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Home Insurance</span>
                            <span>${results.monthlyInsurance}</span>
                          </div>
                          {parseFloat(results.monthlyPMI) > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">PMI</span>
                              <span>${results.monthlyPMI}</span>
                            </div>
                          )}
                          {parseFloat(results.hoaMonthly) > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">HOA Fees</span>
                              <span>${results.hoaMonthly}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold text-gray-900">Financial Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Down Payment Needed</span>
                          <span className="font-medium">${parseFloat(results.downPaymentAmount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loan Amount</span>
                          <span className="font-medium">${parseFloat(results.loanAmount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Debt-to-Income</span>
                          <span className="font-medium">{results.totalDebtRatio}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Remaining Monthly Income</span>
                          <span className="font-medium">${parseFloat(results.remainingIncome).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-green-800">Good Financial Position</div>
                          <div className="text-green-700 text-sm mt-1">
                            Your debt-to-income ratio is within recommended guidelines
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Home className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Enter your financial information to see affordability</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Affordability Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Debt-to-Income Ratios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>28%:</strong> Conservative, leaves room for emergencies</li>
                  <li><strong>31%:</strong> FHA standard, good balance</li>
                  <li><strong>36%:</strong> Conventional loan maximum</li>
                  <li><strong>43%:</strong> Absolute maximum, risky</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Additional Costs to Consider</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Closing costs (2-5% of home price)</li>
                  <li>• Moving expenses</li>
                  <li>• Home maintenance and repairs</li>
                  <li>• Utilities and services</li>
                  <li>• Emergency fund for homeownership</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Improving Affordability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Pay down existing debt</li>
                  <li>• Increase your down payment</li>
                  <li>• Improve your credit score</li>
                  <li>• Consider a longer loan term</li>
                  <li>• Shop for better interest rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">First-Time Buyer Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• FHA loans (3.5% down)</li>
                  <li>• VA loans (0% down for veterans)</li>
                  <li>• USDA loans (rural areas)</li>
                  <li>• State and local assistance programs</li>
                  <li>• Down payment assistance grants</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AffordabilityCalculator

