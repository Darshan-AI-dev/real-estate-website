import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingDown, Home, DollarSign, Target, Users, BarChart3, Calendar, ExternalLink, ArrowRight, TrendingUp, CheckCircle, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const MortgageRateMagic = () => {
  const keyMetrics = [
    { label: 'Current Rate', value: '6.75%', subtitle: '30-year fixed mortgage', icon: TrendingDown, color: 'red' },
    { label: 'Magic Number', value: '6.0%', subtitle: 'Target rate for market revival', icon: Target, color: 'green' },
    { label: 'Additional Households', value: '5.5M', subtitle: 'Could afford homes at 6%', icon: Home, color: 'blue' },
    { label: 'New Renters', value: '1.6M', subtitle: 'Renters who could buy', icon: Users, color: 'purple' }
  ]

  const marketImpact = [
    {
      metric: 'Home Sales Boost (2025)',
      value: '3%',
      description: 'Estimated increase in home sales',
      icon: TrendingUp
    },
    {
      metric: 'Home Sales Boost (2026)',
      value: '14%',
      description: 'Projected increase in following year',
      icon: TrendingUp
    },
    {
      metric: 'Quick Buyers',
      value: '10%',
      description: 'Of newly qualified would buy in 12-18 months',
      icon: CheckCircle
    },
    {
      metric: 'Monthly Savings',
      value: '$147',
      description: 'Lower payment on $300K loan at 6% vs current',
      icon: DollarSign
    }
  ]

  const topMarkets = [
    { city: 'Atlanta', state: 'GA', impact: 'Greatest increase expected' },
    { city: 'Dallas', state: 'TX', impact: 'Greatest increase expected' },
    { city: 'Minneapolis', state: 'MN', impact: 'Greatest increase expected' },
    { city: 'Cleveland', state: 'OH', impact: 'Greatest increase expected' },
    { city: 'Kansas City', state: 'MO', impact: 'Greatest increase expected' }
  ]

  const expertQuotes = [
    {
      expert: 'Susan Wachter',
      title: 'Professor of Finance and Real Estate, Wharton School',
      quote: 'Six percent could be a magic mortgage number that will push Americans to buy, but only if it comes about because inflation declines, bringing interest rates down, without a recession.',
      insight: 'The fear of buyers\' remorse in a housing slowdown is sidelining buyers, including those who would newly qualify for a mortgage with rate drops.'
    },
    {
      expert: 'Lawrence Yun',
      title: 'Chief Economist, National Association of Realtors',
      quote: 'Your past clients are all happy. But for new homebuyers, their monthly payment obligation has increased, and this is what\'s killing the housing market.',
      insight: 'Mortgage rates are the magic bullet, and we\'re waiting and waiting until those come down.'
    },
    {
      expert: 'Alexei Morgado',
      title: 'Real Estate Agent and Founder, Lexawise',
      quote: 'Many of my clients tell me the same thing: They want to buy, but they feel that mortgage rates are holding them back.',
      insight: 'What I hear most often is the fear of making a bad decision, of getting into something they can\'t sustain.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-purple-200 border-purple-300">
              🎯 MAGIC NUMBER
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-purple-300">6% Mortgage Rate</span> That Could Change Everything
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Experts believe a modest decline to 6% could inject much-needed momentum into home sales and help revive the broader U.S. housing market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original Newsweek Article
              </Button>
              <Link to="/tools/mortgage-calculator">
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-800">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Mortgage Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 6% Impact</h2>
            <p className="text-lg text-gray-600">How a drop to 6% mortgage rates could transform the housing market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className={`text-center border-l-4 border-${metric.color}-500`}>
                <CardHeader>
                  <metric.icon className={`h-12 w-12 text-${metric.color}-600 mx-auto mb-4`} />
                  <CardTitle className="text-3xl font-bold text-gray-900">{metric.value}</CardTitle>
                  <CardDescription className="font-semibold text-gray-700">{metric.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{metric.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why 6% Matters</h2>
            
            <p className="text-gray-700 mb-6">
              Owning a home remains prohibitively expensive for many Americans, but experts believe a modest decline in mortgage rates to 6% could inject much-needed momentum into home sales and help revive the broader U.S. housing market. According to recent analysis from the National Association of Realtors (NAR), this seemingly small rate drop could unlock homeownership for millions.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">The Magic Number</h3>
                  <p className="text-purple-800">
                    A drop to 6% would enable an additional 5.5 million households to afford a home, including 1.6 million renters who could transition to homeownership.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Current Market Challenges</h3>
            <p className="text-gray-700 mb-6">
              Affordability remains one of the key issues threatening the stability of the U.S. housing market. Rising costs of buying a home have dragged ownership rates to a post-pandemic low this year, exacerbated by persistently high borrowing costs that prevent a large number of Americans from entering the property market.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Rate Context</h3>
            <p className="text-gray-700 mb-6">
              According to data from the Mortgage Bankers Association (MBA) and Freddie Mac, 30-year fixed mortgage rates are currently hovering around 6.75%. While these are below the levels seen in October 2023, when rates surged to around 8%, they are far from the pandemic lows of under 3%.
            </p>
          </div>
        </div>
      </section>

      {/* Market Impact Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projected Market Impact</h2>
            <p className="text-lg text-gray-600">How a 6% rate could boost home sales and market activity</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketImpact.map((impact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <impact.icon className="h-8 w-8 text-green-600" />
                    <Badge variant="outline" className="text-xs">
                      NAR Analysis
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{impact.metric}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-green-600">{impact.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Impact</h2>
            <p className="text-lg text-gray-600">How much homebuyers could save with a 6% rate</p>
          </div>
          
          <Card className="max-w-2xl mx-auto border-l-4 border-green-500">
            <CardHeader className="text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Monthly Payment Savings</CardTitle>
              <CardDescription>$300,000 loan comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-semibold">Current Rate (6.75%):</span>
                  <span className="text-xl font-bold text-red-600">$1,946/month</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold">Target Rate (6.0%):</span>
                  <span className="text-xl font-bold text-green-600">$1,799/month</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                  <span className="font-semibold text-blue-900">Monthly Savings:</span>
                  <span className="text-2xl font-bold text-blue-600">$147</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Source: Mortgage News Daily loan calculator
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Markets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Markets to Watch</h2>
            <p className="text-lg text-gray-600">Cities expected to see the greatest increase in home sales activity at 6% rates</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Market</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expected Impact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Market Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topMarkets.map((market, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                        {market.city}, {market.state}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{market.impact}</td>
                    <td className="px-6 py-4">
                      <Badge variant="default" className="text-xs">
                        Top 5
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expert Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Perspectives</h2>
            <p className="text-lg text-gray-600">What industry leaders are saying about the 6% magic number</p>
          </div>
          
          <div className="space-y-8">
            {expertQuotes.map((expert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{expert.expert}</h3>
                    <p className="text-sm text-gray-600 mb-3">{expert.title}</p>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{expert.quote}"
                    </blockquote>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <p className="text-sm text-purple-800">
                        <strong>Additional Insight:</strong> {expert.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Outlook */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Forecast</h2>
            <p className="text-lg text-gray-600">NAR Chief Economist's mortgage rate predictions</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <TrendingDown className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Lawrence Yun's Forecast</CardTitle>
              <CardDescription>NAR Chief Economist projections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">H2 2025 Average:</span>
                <span className="text-xl font-bold text-blue-600">6.4%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-semibold">2026 Average:</span>
                <span className="text-xl font-bold text-green-600">6.1%</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Path to 6%:</strong> Yun's forecast suggests rates could approach the "magic" 6% level by 2026, potentially unlocking significant pent-up demand in the housing market.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Market Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Market Reality</h2>
            <p className="text-lg text-gray-600">Understanding today's housing market challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-900">Supply Increases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Homes for sale up nearly 30% year-over-year (June)</p>
                <p className="text-sm text-gray-700">• 20th straight month of inventory increases</p>
                <p className="text-sm text-gray-700">• Housing inventory hit five-year high (Zillow)</p>
                <p className="text-sm text-gray-700">• More homes sitting longer on market</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <Home className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">Buyer Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Fear of making bad financial decisions</p>
                <p className="text-sm text-gray-700">• Concern about paying more for same property</p>
                <p className="text-sm text-gray-700">• Worry about sustainability of payments</p>
                <p className="text-sm text-gray-700">• Buyers' remorse in uncertain market</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Scenario</h2>
            <p className="text-lg text-gray-600">Use our tools to see how different rates affect your homebuying power</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/mortgage-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Mortgage Calculator</CardTitle>
                  <CardDescription>Compare payments at different rates</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/affordability-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>See what you can afford at 6% rates</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/mortgage-rates">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <TrendingDown className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Rate Tracker</CardTitle>
                  <CardDescription>Monitor current mortgage rates</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Article Metadata */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                July 24, 2025
              </span>
              <span className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Newsweek
              </span>
              <Badge variant="outline">Mortgage Rates</Badge>
              <Badge variant="outline">Housing Market</Badge>
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <span>Share:</span>
              <Button size="sm" variant="outline">Twitter</Button>
              <Button size="sm" variant="outline">LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <CommentSection articleId="mortgage-rate-magic" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default MortgageRateMagic

