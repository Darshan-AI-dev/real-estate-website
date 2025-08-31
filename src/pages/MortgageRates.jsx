import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TrendingUp, TrendingDown, Calendar, Info, ExternalLink } from 'lucide-react'

const MortgageRates = () => {
  const [timeRange, setTimeRange] = useState('6months')
  const [selectedLoanType, setSelectedLoanType] = useState('all')

  // Mortgage rate data from Freddie Mac PMMS
  const mortgageData = [
    { date: '2024-08-01', thirtyYear: 6.88, fifteenYear: 6.25, arm: 6.20 },
    { date: '2024-08-08', thirtyYear: 6.95, fifteenYear: 6.30, arm: 6.24 },
    { date: '2024-08-15', thirtyYear: 6.90, fifteenYear: 6.28, arm: 6.21 },
    { date: '2024-08-22', thirtyYear: 7.05, fifteenYear: 6.45, arm: 6.35 },
    { date: '2024-08-29', thirtyYear: 7.18, fifteenYear: 6.55, arm: 6.40 },
    { date: '2024-09-05', thirtyYear: 7.12, fifteenYear: 6.50, arm: 6.38 },
    { date: '2024-09-12', thirtyYear: 7.03, fifteenYear: 6.48, arm: 6.35 },
    { date: '2024-09-19', thirtyYear: 6.94, fifteenYear: 6.40, arm: 6.29 },
    { date: '2024-09-26', thirtyYear: 6.85, fifteenYear: 6.32, arm: 6.22 },
    { date: '2024-10-03', thirtyYear: 6.72, fifteenYear: 6.21, arm: 6.15 },
    { date: '2024-10-10', thirtyYear: 6.78, fifteenYear: 6.25, arm: 6.18 },
    { date: '2024-10-17', thirtyYear: 6.85, fifteenYear: 6.30, arm: 6.24 },
    { date: '2024-10-24', thirtyYear: 6.92, fifteenYear: 6.35, arm: 6.28 },
    { date: '2024-10-31', thirtyYear: 6.89, fifteenYear: 6.31, arm: 6.25 },
    { date: '2024-11-07', thirtyYear: 6.75, fifteenYear: 6.20, arm: 6.18 },
    { date: '2024-11-14', thirtyYear: 6.68, fifteenYear: 6.15, arm: 6.10 },
    { date: '2024-11-21', thirtyYear: 6.62, fifteenYear: 6.10, arm: 6.05 },
    { date: '2024-11-28', thirtyYear: 6.55, fifteenYear: 6.04, arm: 6.00 },
    { date: '2024-12-05', thirtyYear: 6.49, fifteenYear: 5.98, arm: 5.95 },
    { date: '2024-12-12', thirtyYear: 6.42, fifteenYear: 5.90, arm: 5.88 },
    { date: '2024-12-19', thirtyYear: 6.35, fifteenYear: 5.85, arm: 5.82 },
    { date: '2024-12-26', thirtyYear: 6.33, fifteenYear: 5.83, arm: 5.80 },
    { date: '2025-01-02', thirtyYear: 6.40, fifteenYear: 5.89, arm: 5.85 },
    { date: '2025-01-09', thirtyYear: 6.48, fifteenYear: 5.95, arm: 5.92 },
    { date: '2025-01-16', thirtyYear: 6.55, fifteenYear: 6.02, arm: 6.00 },
    { date: '2025-01-23', thirtyYear: 6.52, fifteenYear: 5.99, arm: 5.98 },
    { date: '2025-01-30', thirtyYear: 6.48, fifteenYear: 5.95, arm: 5.94 },
    { date: '2025-02-06', thirtyYear: 6.50, fifteenYear: 5.98, arm: 5.95 },
    { date: '2025-02-13', thirtyYear: 6.58, fifteenYear: 6.05, arm: 6.01 },
    { date: '2025-02-20', thirtyYear: 6.65, fifteenYear: 6.12, arm: 6.08 },
    { date: '2025-02-27', thirtyYear: 6.72, fifteenYear: 6.18, arm: 6.15 },
    { date: '2025-03-06', thirtyYear: 6.75, fifteenYear: 6.20, arm: 6.18 },
    { date: '2025-03-13', thirtyYear: 6.69, fifteenYear: 6.15, arm: 6.12 },
    { date: '2025-03-20', thirtyYear: 6.71, fifteenYear: 6.17, arm: 6.14 },
    { date: '2025-03-27', thirtyYear: 6.79, fifteenYear: 6.22, arm: 6.20 },
    { date: '2025-04-03', thirtyYear: 6.82, fifteenYear: 6.25, arm: 6.22 },
    { date: '2025-04-10', thirtyYear: 6.80, fifteenYear: 6.24, arm: 6.21 },
    { date: '2025-04-17', thirtyYear: 6.75, fifteenYear: 6.20, arm: 6.18 },
    { date: '2025-04-24', thirtyYear: 6.78, fifteenYear: 6.22, arm: 6.20 },
    { date: '2025-05-01', thirtyYear: 6.83, fifteenYear: 6.25, arm: 6.24 },
    { date: '2025-05-08', thirtyYear: 6.85, fifteenYear: 6.28, arm: 6.26 },
    { date: '2025-05-15', thirtyYear: 6.81, fifteenYear: 6.25, arm: 6.23 },
    { date: '2025-05-22', thirtyYear: 6.77, fifteenYear: 6.21, arm: 6.20 },
    { date: '2025-05-29', thirtyYear: 6.74, fifteenYear: 6.18, arm: 6.17 },
    { date: '2025-06-05', thirtyYear: 6.70, fifteenYear: 6.15, arm: 6.14 },
    { date: '2025-06-12', thirtyYear: 6.72, fifteenYear: 6.17, arm: 6.16 },
    { date: '2025-06-19', thirtyYear: 6.78, fifteenYear: 6.22, arm: 6.20 },
    { date: '2025-06-26', thirtyYear: 6.81, fifteenYear: 6.25, arm: 6.23 },
    { date: '2025-07-03', thirtyYear: 6.80, fifteenYear: 6.24, arm: 6.22 },
    { date: '2025-07-10', thirtyYear: 6.83, fifteenYear: 6.26, arm: 6.24 },
    { date: '2025-07-17', thirtyYear: 6.88, fifteenYear: 6.30, arm: 6.28 },
    { date: '2025-07-24', thirtyYear: 6.90, fifteenYear: 6.32, arm: 6.30 }
  ]

  const getFilteredData = () => {
    const now = new Date('2025-07-24')
    let startDate

    switch (timeRange) {
      case '1month':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      case '3months':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
        break
      case '6months':
        startDate = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000)
        break
      case '1year':
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
        break
      default:
        return mortgageData
    }

    return mortgageData.filter(item => new Date(item.date) >= startDate)
  }

  const filteredData = getFilteredData()
  const latestData = mortgageData[mortgageData.length - 1]
  const previousData = mortgageData[mortgageData.length - 2]

  const SimpleChart = ({ data, selectedType }) => {
    const maxRate = Math.max(...data.map(d => Math.max(d.thirtyYear, d.fifteenYear, d.arm)))
    const minRate = Math.min(...data.map(d => Math.min(d.thirtyYear, d.fifteenYear, d.arm)))
    const range = maxRate - minRate

    const getYPosition = (rate) => {
      return ((maxRate - rate) / range) * 100
    }

    const formatDate = (dateStr) => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    return (
      <div className="relative h-96 bg-gray-50 rounded-lg p-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
          <span>{maxRate.toFixed(1)}%</span>
          <span>{((maxRate + minRate) / 2).toFixed(1)}%</span>
          <span>{minRate.toFixed(1)}%</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 mr-4 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[0, 25, 50, 75, 100].map(y => (
              <div key={y} className="absolute w-full border-t border-gray-200" style={{ top: `${y}%` }} />
            ))}
          </div>

          {/* Data lines */}
          <svg className="absolute inset-0 w-full h-full">
            {/* 30-Year line */}
            {(selectedType === 'all' || selectedType === '30year') && (
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points={data.map((d, i) => 
                  `${(i / (data.length - 1)) * 100},${getYPosition(d.thirtyYear)}`
                ).join(' ')}
              />
            )}
            
            {/* 15-Year line */}
            {(selectedType === 'all' || selectedType === '15year') && (
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                points={data.map((d, i) => 
                  `${(i / (data.length - 1)) * 100},${getYPosition(d.fifteenYear)}`
                ).join(' ')}
              />
            )}
            
            {/* ARM line */}
            {(selectedType === 'all' || selectedType === '5arm') && (
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                points={data.map((d, i) => 
                  `${(i / (data.length - 1)) * 100},${getYPosition(d.arm)}`
                ).join(' ')}
              />
            )}

            {/* Data points */}
            {data.map((d, i) => (
              <g key={i}>
                {(selectedType === 'all' || selectedType === '30year') && (
                  <circle
                    cx={`${(i / (data.length - 1)) * 100}%`}
                    cy={`${getYPosition(d.thirtyYear)}%`}
                    r="3"
                    fill="#3b82f6"
                    className="hover:r-5 cursor-pointer"
                    title={`${formatDate(d.date)}: ${d.thirtyYear}%`}
                  />
                )}
                {(selectedType === 'all' || selectedType === '15year') && (
                  <circle
                    cx={`${(i / (data.length - 1)) * 100}%`}
                    cy={`${getYPosition(d.fifteenYear)}%`}
                    r="3"
                    fill="#10b981"
                    className="hover:r-5 cursor-pointer"
                    title={`${formatDate(d.date)}: ${d.fifteenYear}%`}
                  />
                )}
                {(selectedType === 'all' || selectedType === '5arm') && (
                  <circle
                    cx={`${(i / (data.length - 1)) * 100}%`}
                    cy={`${getYPosition(d.arm)}%`}
                    r="3"
                    fill="#f59e0b"
                    className="hover:r-5 cursor-pointer"
                    title={`${formatDate(d.date)}: ${d.arm}%`}
                  />
                )}
              </g>
            ))}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500 transform translate-y-6">
            <span>{formatDate(data[0]?.date)}</span>
            <span>{formatDate(data[Math.floor(data.length / 2)]?.date)}</span>
            <span>{formatDate(data[data.length - 1]?.date)}</span>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-sm border">
          {(selectedType === 'all' || selectedType === '30year') && (
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span>30-Year Fixed</span>
            </div>
          )}
          {(selectedType === 'all' || selectedType === '15year') && (
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <span>15-Year Fixed</span>
            </div>
          )}
          {(selectedType === 'all' || selectedType === '5arm') && (
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-0.5 bg-yellow-500"></div>
              <span>5/1 ARM</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  const getRateChange = (current, previous) => {
    const change = current - previous
    return {
      value: Math.abs(change).toFixed(2),
      direction: change >= 0 ? 'up' : 'down',
      isPositive: change >= 0
    }
  }

  const thirtyYearChange = getRateChange(latestData.thirtyYear, previousData.thirtyYear)
  const fifteenYearChange = getRateChange(latestData.fifteenYear, previousData.fifteenYear)
  const armChange = getRateChange(latestData.arm, previousData.arm)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Current Mortgage Rates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mortgage Rate Chart & Trends
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Track current mortgage rates and historical trends from Freddie Mac's Primary Mortgage Market Survey®
            </p>
          </div>
        </div>
      </section>

      {/* Current Rates Dashboard */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Rates</h2>
            <p className="text-gray-600">As of July 24, 2025</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-blue-600">30-Year Fixed</CardTitle>
                <CardDescription>Most popular mortgage option</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {latestData.thirtyYear}%
                </div>
                <div className={`flex items-center justify-center space-x-1 ${thirtyYearChange.isPositive ? 'text-red-600' : 'text-green-600'}`}>
                  {thirtyYearChange.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">
                    {thirtyYearChange.direction === 'up' ? '+' : '-'}{thirtyYearChange.value}% this week
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-green-600">15-Year Fixed</CardTitle>
                <CardDescription>Lower rate, higher payments</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {latestData.fifteenYear}%
                </div>
                <div className={`flex items-center justify-center space-x-1 ${fifteenYearChange.isPositive ? 'text-red-600' : 'text-green-600'}`}>
                  {fifteenYearChange.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">
                    {fifteenYearChange.direction === 'up' ? '+' : '-'}{fifteenYearChange.value}% this week
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-yellow-600">5/1 ARM</CardTitle>
                <CardDescription>Adjustable after 5 years</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {latestData.arm}%
                </div>
                <div className={`flex items-center justify-center space-x-1 ${armChange.isPositive ? 'text-red-600' : 'text-green-600'}`}>
                  {armChange.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">
                    {armChange.direction === 'up' ? '+' : '-'}{armChange.value}% this week
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Chart */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div>
                  <CardTitle className="text-2xl">Historical Mortgage Rates</CardTitle>
                  <CardDescription>
                    Weekly data from Freddie Mac Primary Mortgage Market Survey®
                  </CardDescription>
                </div>
                <div className="flex space-x-4">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1month">1 Month</SelectItem>
                      <SelectItem value="3months">3 Months</SelectItem>
                      <SelectItem value="6months">6 Months</SelectItem>
                      <SelectItem value="1year">1 Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedLoanType} onValueChange={setSelectedLoanType}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="30year">30-Year</SelectItem>
                      <SelectItem value="15year">15-Year</SelectItem>
                      <SelectItem value="5arm">5/1 ARM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SimpleChart data={filteredData} selectedType={selectedLoanType} />
              <div className="mt-4 text-sm text-gray-500 text-center">
                Source: Freddie Mac Primary Mortgage Market Survey® | Data as of July 24, 2025
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-6 w-6 text-blue-600" />
                <span>Current Market Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mortgage rates have ticked up slightly in the last month, with the 30-year fixed-rate mortgage now hovering just below 7%. 
                This reflects continued uncertainty in the bond market and the Federal Reserve's recent commentary on inflation. Rates remain 
                elevated compared to historical lows, continuing to challenge housing affordability for many potential buyers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Trends</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 30-year rates peaked at 7.18% in late August 2024</li>
                    <li>• Rates declined through winter, reaching lows near 6.3%</li>
                    <li>• Recent uptick reflects inflation concerns</li>
                    <li>• 15-year rates remain about 0.6% below 30-year rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Driving Rates</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Federal Reserve policy uncertainty</li>
                    <li>• Inflation data and economic indicators</li>
                    <li>• 10-Year Treasury yield movements</li>
                    <li>• Global economic conditions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rate Factors */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Influences Mortgage Rates?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Federal Reserve Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  The Fed doesn't directly set mortgage rates, but its policies have massive influence. When the Fed raises 
                  the Federal Funds Rate, it increases borrowing costs for banks, indirectly pushing up mortgage rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inflation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Inflation is the number one enemy of mortgage rates. When inflation is high, the future value of dollars 
                  lenders will be repaid is lower, so they demand higher interest rates to compensate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">10-Year Treasury Yield</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  This is the most important indicator to watch. Mortgage rates tend to move up and down in lockstep with 
                  the 10-Year Treasury yield, as investors see both as similar types of long-term investments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Economic Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  When the economy is strong (low unemployment, high GDP growth), demand for loans increases and inflation 
                  tends to rise, both of which push rates up. In weak economies, rates typically fall.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bond Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Mortgage-backed securities compete with Treasury bonds for investor dollars. If Treasury yields rise, 
                  mortgage rates must rise to remain attractive to investors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lender Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Rates include lenders' operational costs, profit margins, and risk assessments. This is why rates can 
                  vary slightly from lender to lender even in the same market conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Tools & Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mortgage Calculator</CardTitle>
                <CardDescription>Calculate monthly payments with current rates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Use our mortgage calculator to see how current rates affect your monthly payment, including principal, 
                  interest, taxes, and insurance.
                </p>
                <Button asChild>
                  <a href="/tools/mortgage-calculator">
                    Calculate Payment <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Affordability Calculator</CardTitle>
                <CardDescription>Determine how much house you can afford</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Calculate your home buying budget based on current mortgage rates, your income, and existing debt obligations.
                </p>
                <Button asChild>
                  <a href="/tools/affordability-calculator">
                    Check Affordability <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financing Guide</CardTitle>
                <CardDescription>Learn about different loan types and options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Understand the differences between 30-year, 15-year, and adjustable-rate mortgages to choose the best option.
                </p>
                <Button asChild>
                  <a href="/financing">
                    Learn About Loans <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Market News</CardTitle>
                <CardDescription>Stay updated on rate trends and market analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Read our latest analysis on mortgage rate trends, Federal Reserve policy, and housing market conditions.
                </p>
                <Button asChild>
                  <a href="/news">
                    Read Market News <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MortgageRates

