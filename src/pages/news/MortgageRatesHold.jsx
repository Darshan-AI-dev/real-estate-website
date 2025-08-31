import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingDown, TrendingUp, DollarSign, Calendar, ExternalLink, BarChart3, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'

const MortgageRatesHold = () => {
  const rateData = [
    { 
      type: '30-Year Fixed', 
      rate: '6.74%', 
      change: '-0.01%', 
      trend: 'down',
      description: 'Primary mortgage product for most buyers'
    },
    { 
      type: '15-Year Fixed', 
      rate: '5.87%', 
      change: 'Stable', 
      trend: 'neutral',
      description: 'Shorter term, lower rate option'
    },
    { 
      type: 'Refinance Share', 
      rate: 'Historic Lows', 
      change: 'Minimal activity', 
      trend: 'down',
      description: 'Very few homeowners refinancing'
    }
  ]

  const marketFactors = [
    {
      factor: 'Federal Reserve Policy',
      impact: 'High rates maintained to combat inflation',
      status: 'Negative'
    },
    {
      factor: 'Inflation Readings',
      impact: 'Persistent inflation keeping pressure on rates',
      status: 'Negative'
    },
    {
      factor: 'Economic Uncertainty',
      impact: 'Policy uncertainty affecting long-term rates',
      status: 'Negative'
    },
    {
      factor: 'Housing Demand',
      impact: 'Constrained affordability reducing buyer activity',
      status: 'Negative'
    }
  ]

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-600" />
      case 'down': return <TrendingDown className="h-4 w-4 text-green-600" />
      default: return <DollarSign className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'up': return 'text-red-600 bg-red-50'
      case 'down': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Mortgage Market • July 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              30-Year Fixed Mortgage Rate Holds at 6.74%
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Rates remain near two-decade highs as Fed policy uncertainty and inflation concerns persist
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>July 24, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <ExternalLink className="h-4 w-4" />
                <span>Freddie Mac PMMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Dashboard */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Mortgage Rates</h2>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {rateData.map((rate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{rate.type}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 my-2">{rate.rate}</div>
                  <div className={`flex items-center justify-center space-x-1 px-2 py-1 rounded-full text-sm ${getTrendColor(rate.trend)}`}>
                    {getTrendIcon(rate.trend)}
                    <span>{rate.change}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{rate.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Minimal Movement in Mortgage Markets</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Freddie Mac's Primary Mortgage Market Survey showed the average U.S. 30-year fixed-rate mortgage at 6.74% 
              for the week ending July 24, 2025, edging down just one basis point from the prior week's 6.75%. The 
              15-year fixed-rate averaged 5.87%, showing similar stability in the mortgage market.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This minimal movement reflects the current state of mortgage markets, where rates have remained stubbornly 
              elevated near their two-decade highs. High inflation readings and Federal Reserve policy uncertainty have 
              kept rates in this elevated range, significantly constraining affordability for both first-time and 
              move-up buyers.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Refinancing Activity Remains Muted</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Perhaps more telling than the purchase market impact is the state of refinancing activity. The refinance 
              share of total mortgage applications continues to hover near historic lows, as very few homeowners have 
              incentive to refinance when current rates are significantly higher than what most existing homeowners 
              are paying.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This creates a "lock-in effect" where homeowners are reluctant to sell their current homes and take on 
              new mortgages at much higher rates. This dynamic is contributing to the ongoing inventory shortage in 
              the housing market, as fewer existing homes come to market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Factors */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Factors Keeping Rates Elevated</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{factor.factor}</CardTitle>
                    <Badge variant={factor.status === 'Negative' ? 'destructive' : 'default'}>
                      {factor.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{factor.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Market Impact Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Affordability Crisis Deepens</h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With rates holding near 6.74%, the monthly payment on a median-priced home has increased dramatically 
                  compared to the low-rate environment of 2020-2021. A buyer purchasing a $435,300 home (the current 
                  national median) with a 20% down payment would face a monthly principal and interest payment of 
                  approximately $2,350, not including taxes and insurance.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This payment level requires a household income of roughly $100,000 to meet traditional debt-to-income 
                  ratios, pricing out many potential buyers and contributing to reduced sales activity across most markets.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Builder and Seller Adaptations</h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Homebuilders are increasingly offering rate buydowns and other incentives to help buyers qualify for 
                  mortgages. Some builders are providing temporary rate reductions or paying closing costs to make their 
                  homes more affordable in the current rate environment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Existing home sellers are also adapting by offering seller concessions or considering owner financing 
                  arrangements to attract buyers who might otherwise be priced out by current mortgage rates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculate Your Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Mortgage Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Calculate monthly payments at current rates
                </p>
                <Link 
                  to="/tools"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Calculate Now
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Affordability Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Determine your budget at current rates
                </p>
                <Link 
                  to="/tools"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Check Affordability
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Financing Guide</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn about mortgage options and strategies
                </p>
                <Link 
                  to="/financing"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommentSection 
            articleId="mortgage-rates-hold-674-2025"
            articleTitle="30-Year Fixed Mortgage Rate Holds at 6.74%"
          />
        </div>
      </section>
    </div>
  )
}

export default MortgageRatesHold

