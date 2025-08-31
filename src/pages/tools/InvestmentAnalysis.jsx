import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BarChart3, TrendingUp, DollarSign, Calculator, AlertCircle, CheckCircle } from 'lucide-react'

const InvestmentAnalysis = () => {
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

  const [cocInputs, setCocInputs] = useState({
    ...capRateInputs,
    downPayment: 25,
    interestRate: '6.74',
    loanTerm: 30,
    closingCosts: ''
  })

  const [results, setResults] = useState({
    capRate: null,
    cashOnCash: null
  })

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

    const result = {
      grossAnnualRent: grossAnnualRent.toFixed(0),
      vacancyLoss: vacancyLoss.toFixed(0),
      repairCosts: repairCosts.toFixed(0),
      managementCosts: managementCosts.toFixed(0),
      totalOperatingExpenses: totalOperatingExpenses.toFixed(0),
      noi: noi.toFixed(0),
      capRate: capRate.toFixed(2)
    }

    setResults(prev => ({ ...prev, capRate: result }))
    return result
  }

  const calculateCashOnCash = () => {
    const capRateResult = calculateCapRate()
    if (!capRateResult) return null

    const { purchasePrice, downPayment, interestRate, loanTerm, closingCosts } = cocInputs
    
    if (!interestRate) return null

    const downPaymentAmount = parseFloat(purchasePrice) * (parseFloat(downPayment) / 100)
    const loanAmount = parseFloat(purchasePrice) - downPaymentAmount
    const closingCostAmount = parseFloat(closingCosts) || (parseFloat(purchasePrice) * 0.03)
    const totalCashInvested = downPaymentAmount + closingCostAmount
    
    const monthlyRate = parseFloat(interestRate) / 100 / 12
    const numPayments = parseFloat(loanTerm) * 12
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    const annualDebtService = monthlyPayment * 12
    
    const annualCashFlow = parseFloat(capRateResult.noi) - annualDebtService
    const cashOnCashReturn = (annualCashFlow / totalCashInvested) * 100

    const result = {
      ...capRateResult,
      downPaymentAmount: downPaymentAmount.toFixed(0),
      loanAmount: loanAmount.toFixed(0),
      closingCostAmount: closingCostAmount.toFixed(0),
      totalCashInvested: totalCashInvested.toFixed(0),
      monthlyPayment: monthlyPayment.toFixed(2),
      annualDebtService: annualDebtService.toFixed(0),
      annualCashFlow: annualCashFlow.toFixed(0),
      cashOnCashReturn: cashOnCashReturn.toFixed(2)
    }

    setResults(prev => ({ ...prev, cashOnCash: result }))
    return result
  }

  const handleCapRateInputChange = (field, value) => {
    setCapRateInputs(prev => ({ ...prev, [field]: value }))
    setCocInputs(prev => ({ ...prev, [field]: value }))
  }

  const handleCocInputChange = (field, value) => {
    setCocInputs(prev => ({ ...prev, [field]: value }))
  }

  const getCapRateRating = (capRate) => {
    const rate = parseFloat(capRate)
    if (rate >= 10) return { rating: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' }
    if (rate >= 8) return { rating: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (rate >= 6) return { rating: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { rating: 'Poor', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const getCocRating = (coc) => {
    const rate = parseFloat(coc)
    if (rate >= 12) return { rating: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' }
    if (rate >= 8) return { rating: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' }
    if (rate >= 4) return { rating: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { rating: 'Poor', color: 'text-red-600', bg: 'bg-red-50' }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-indigo-200 border-indigo-300">
              Investment Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Investment Calculator
            </h1>
            <p className="text-xl text-indigo-100">
              Calculate cap rates, cash-on-cash returns, and analyze investment properties
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Tabs */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="cap-rate" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cap-rate">Cap Rate Calculator</TabsTrigger>
              <TabsTrigger value="cash-on-cash">Cash-on-Cash Calculator</TabsTrigger>
            </TabsList>

            {/* Cap Rate Calculator */}
            <TabsContent value="cap-rate">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-6 w-6 text-indigo-600" />
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
                          onChange={(e) => handleCapRateInputChange('purchasePrice', e.target.value)}
                          placeholder="400000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                        <Input
                          id="monthlyRent"
                          type="number"
                          value={capRateInputs.monthlyRent}
                          onChange={(e) => handleCapRateInputChange('monthlyRent', e.target.value)}
                          placeholder="3200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyTax">Annual Property Tax ($)</Label>
                        <Input
                          id="propertyTax"
                          type="number"
                          value={capRateInputs.propertyTax}
                          onChange={(e) => handleCapRateInputChange('propertyTax', e.target.value)}
                          placeholder="4800"
                        />
                      </div>
                      <div>
                        <Label htmlFor="insurance">Annual Insurance ($)</Label>
                        <Input
                          id="insurance"
                          type="number"
                          value={capRateInputs.insurance}
                          onChange={(e) => handleCapRateInputChange('insurance', e.target.value)}
                          placeholder="1200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                        <Input
                          id="vacancyRate"
                          type="number"
                          value={capRateInputs.vacancyRate}
                          onChange={(e) => handleCapRateInputChange('vacancyRate', e.target.value)}
                          placeholder="5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="repairsMaintenance">Repairs/Maintenance (%)</Label>
                        <Input
                          id="repairsMaintenance"
                          type="number"
                          value={capRateInputs.repairsMaintenance}
                          onChange={(e) => handleCapRateInputChange('repairsMaintenance', e.target.value)}
                          placeholder="8"
                        />
                      </div>
                      <div>
                        <Label htmlFor="managementFee">Management Fee (%)</Label>
                        <Input
                          id="managementFee"
                          type="number"
                          value={capRateInputs.managementFee}
                          onChange={(e) => handleCapRateInputChange('managementFee', e.target.value)}
                          placeholder="10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="otherCosts">Other Monthly Costs ($)</Label>
                      <Input
                        id="otherCosts"
                        type="number"
                        value={capRateInputs.otherCosts}
                        onChange={(e) => handleCapRateInputChange('otherCosts', e.target.value)}
                        placeholder="100"
                      />
                      <p className="text-sm text-gray-500 mt-1">HOA, utilities, etc.</p>
                    </div>

                    <Button onClick={calculateCapRate} className="w-full" size="lg">
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculate Cap Rate
                    </Button>
                  </CardContent>
                </Card>

                {/* Cap Rate Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      <span>Cap Rate Analysis</span>
                    </CardTitle>
                    <CardDescription>
                      Property return without financing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {results.capRate ? (
                      <div className="space-y-6">
                        {/* Cap Rate Result */}
                        <div className="text-center">
                          <div className="text-4xl font-bold text-indigo-600 mb-2">
                            {results.capRate.capRate}%
                          </div>
                          <div className="text-gray-600 mb-4">Cap Rate</div>
                          {(() => {
                            const rating = getCapRateRating(results.capRate.capRate)
                            return (
                              <Badge className={`${rating.color} ${rating.bg}`}>
                                {rating.rating}
                              </Badge>
                            )
                          })()}
                        </div>

                        {/* Income Breakdown */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Annual Income</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Gross Rental Income</span>
                              <span className="font-medium">${parseFloat(results.capRate.grossAnnualRent).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span>Vacancy Loss</span>
                              <span>-${parseFloat(results.capRate.vacancyLoss).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Expense Breakdown */}
                        <div className="space-y-3 pt-4 border-t">
                          <h4 className="font-semibold text-gray-900">Annual Expenses</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Property Tax</span>
                              <span>${parseFloat(capRateInputs.propertyTax || 0).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Insurance</span>
                              <span>${parseFloat(capRateInputs.insurance || 0).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Repairs/Maintenance</span>
                              <span>${parseFloat(results.capRate.repairCosts).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Management</span>
                              <span>${parseFloat(results.capRate.managementCosts).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-medium pt-2 border-t">
                              <span>Total Expenses</span>
                              <span>${parseFloat(results.capRate.totalOperatingExpenses).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* NOI */}
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-green-900">Net Operating Income (NOI)</span>
                            <span className="text-xl font-bold text-green-600">
                              ${parseFloat(results.capRate.noi).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">Enter property details to calculate cap rate</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Cash-on-Cash Calculator */}
            <TabsContent value="cash-on-cash">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="h-6 w-6 text-indigo-600" />
                      <span>Cash-on-Cash Calculator</span>
                    </CardTitle>
                    <CardDescription>
                      Calculate leveraged returns with financing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Property Details (shared with cap rate) */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cocPurchasePrice">Purchase Price ($)</Label>
                        <Input
                          id="cocPurchasePrice"
                          type="number"
                          value={cocInputs.purchasePrice}
                          onChange={(e) => handleCapRateInputChange('purchasePrice', e.target.value)}
                          placeholder="400000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cocMonthlyRent">Monthly Rent ($)</Label>
                        <Input
                          id="cocMonthlyRent"
                          type="number"
                          value={cocInputs.monthlyRent}
                          onChange={(e) => handleCapRateInputChange('monthlyRent', e.target.value)}
                          placeholder="3200"
                        />
                      </div>
                    </div>

                    {/* Financing Details */}
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="downPayment">Down Payment (%)</Label>
                        <Input
                          id="downPayment"
                          type="number"
                          value={cocInputs.downPayment}
                          onChange={(e) => handleCocInputChange('downPayment', e.target.value)}
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interestRate">Interest Rate (%)</Label>
                        <Input
                          id="interestRate"
                          type="number"
                          step="0.01"
                          value={cocInputs.interestRate}
                          onChange={(e) => handleCocInputChange('interestRate', e.target.value)}
                          placeholder="6.74"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loanTerm">Loan Term (years)</Label>
                        <Input
                          id="loanTerm"
                          type="number"
                          value={cocInputs.loanTerm}
                          onChange={(e) => handleCocInputChange('loanTerm', e.target.value)}
                          placeholder="30"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="closingCosts">Closing Costs ($)</Label>
                      <Input
                        id="closingCosts"
                        type="number"
                        value={cocInputs.closingCosts}
                        onChange={(e) => handleCocInputChange('closingCosts', e.target.value)}
                        placeholder="12000"
                      />
                      <p className="text-sm text-gray-500 mt-1">Leave blank to estimate 3% of purchase price</p>
                    </div>

                    {/* Operating Expenses */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cocPropertyTax">Annual Property Tax ($)</Label>
                        <Input
                          id="cocPropertyTax"
                          type="number"
                          value={cocInputs.propertyTax}
                          onChange={(e) => handleCapRateInputChange('propertyTax', e.target.value)}
                          placeholder="4800"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cocInsurance">Annual Insurance ($)</Label>
                        <Input
                          id="cocInsurance"
                          type="number"
                          value={cocInputs.insurance}
                          onChange={(e) => handleCapRateInputChange('insurance', e.target.value)}
                          placeholder="1200"
                        />
                      </div>
                    </div>

                    <Button onClick={calculateCashOnCash} className="w-full" size="lg">
                      <Calculator className="h-5 w-5 mr-2" />
                      Calculate Cash-on-Cash Return
                    </Button>
                  </CardContent>
                </Card>

                {/* Cash-on-Cash Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      <span>Cash-on-Cash Analysis</span>
                    </CardTitle>
                    <CardDescription>
                      Leveraged return on cash invested
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {results.cashOnCash ? (
                      <div className="space-y-6">
                        {/* Cash-on-Cash Result */}
                        <div className="text-center">
                          <div className="text-4xl font-bold text-indigo-600 mb-2">
                            {results.cashOnCash.cashOnCashReturn}%
                          </div>
                          <div className="text-gray-600 mb-4">Cash-on-Cash Return</div>
                          {(() => {
                            const rating = getCocRating(results.cashOnCash.cashOnCashReturn)
                            return (
                              <Badge className={`${rating.color} ${rating.bg}`}>
                                {rating.rating}
                              </Badge>
                            )
                          })()}
                        </div>

                        {/* Cash Investment */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Cash Investment</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Down Payment</span>
                              <span className="font-medium">${parseFloat(results.cashOnCash.downPaymentAmount).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Closing Costs</span>
                              <span className="font-medium">${parseFloat(results.cashOnCash.closingCostAmount).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-medium pt-2 border-t">
                              <span>Total Cash Invested</span>
                              <span>${parseFloat(results.cashOnCash.totalCashInvested).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Annual Cash Flow */}
                        <div className="space-y-3 pt-4 border-t">
                          <h4 className="font-semibold text-gray-900">Annual Cash Flow</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Net Operating Income</span>
                              <span className="font-medium">${parseFloat(results.cashOnCash.noi).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-red-600">
                              <span>Debt Service</span>
                              <span>-${parseFloat(results.cashOnCash.annualDebtService).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-medium pt-2 border-t">
                              <span>Annual Cash Flow</span>
                              <span className={parseFloat(results.cashOnCash.annualCashFlow) >= 0 ? 'text-green-600' : 'text-red-600'}>
                                ${parseFloat(results.cashOnCash.annualCashFlow).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Loan Details */}
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">Loan Details</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-blue-700">Loan Amount</span>
                              <span>${parseFloat(results.cashOnCash.loanAmount).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-blue-700">Monthly Payment</span>
                              <span>${results.cashOnCash.monthlyPayment}</span>
                            </div>
                          </div>
                        </div>

                        {/* Performance Indicator */}
                        {parseFloat(results.cashOnCash.annualCashFlow) >= 0 ? (
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <div className="font-medium text-green-800">Positive Cash Flow</div>
                                <div className="text-green-700 text-sm mt-1">
                                  This property generates positive monthly cash flow
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-red-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                              <div>
                                <div className="font-medium text-red-800">Negative Cash Flow</div>
                                <div className="text-red-700 text-sm mt-1">
                                  This property requires monthly contributions to cover expenses
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <DollarSign className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">Enter property and financing details to calculate cash-on-cash return</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Investment Analysis Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cap Rate Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>10%+:</strong> Excellent return, higher risk markets</li>
                  <li>• <strong>8-10%:</strong> Good return, moderate risk</li>
                  <li>• <strong>6-8%:</strong> Fair return, stable markets</li>
                  <li>• <strong>&lt;6%:</strong> Low return, premium locations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cash-on-Cash Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>12%+:</strong> Excellent leveraged return</li>
                  <li>• <strong>8-12%:</strong> Good return with financing</li>
                  <li>• <strong>4-8%:</strong> Fair return, consider alternatives</li>
                  <li>• <strong>&lt;4%:</strong> Poor return, high risk</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Factor in property appreciation potential</li>
                  <li>• Consider tax benefits and depreciation</li>
                  <li>• Account for capital improvements needed</li>
                  <li>• Evaluate local market trends</li>
                  <li>• Plan for vacancy and maintenance costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Market volatility and economic cycles</li>
                  <li>• Tenant turnover and vacancy risk</li>
                  <li>• Unexpected repair and maintenance costs</li>
                  <li>• Interest rate changes affecting financing</li>
                  <li>• Local regulations and rent control</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestmentAnalysis

