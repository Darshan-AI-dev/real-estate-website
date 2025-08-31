import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, Building2, DollarSign, BarChart3, Calendar, ExternalLink, ArrowRight, Target, Globe, Briefcase, AlertTriangle, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const BrookfieldMegaDeals = () => {
  const keyMetrics = [
    { label: 'Brookfield Sales 2025', value: '$13B', subtitle: 'vs $3B in H1 2024', icon: DollarSign, color: 'green' },
    { label: 'Global AUM', value: '$272B', subtitle: 'Real estate assets', icon: Building2, color: 'blue' },
    { label: 'Fundraising Q1', value: '$5.9B', subtitle: 'Fifth vintage fund', icon: TrendingUp, color: 'purple' },
    { label: 'Total Fund Size', value: '$16B', subtitle: 'Flagship real estate fund', icon: Target, color: 'orange' }
  ]

  const marketTrends = [
    {
      trend: 'Transaction Volume Recovery',
      description: 'US commercial real estate investment jumped 14% in Q1 compared to year earlier',
      impact: 'Positive',
      icon: TrendingUp
    },
    {
      trend: 'Fundraising Challenges',
      description: 'Private real estate fundraising declined for third straight year to $131.1B in 2024',
      impact: 'Negative',
      icon: AlertTriangle
    },
    {
      trend: 'Sector Bifurcation',
      description: 'Strong demand for data centers, rental housing, logistics vs. struggling office sector',
      impact: 'Mixed',
      icon: BarChart3
    },
    {
      trend: 'Liquidity Return',
      description: 'Capital returning to best-in-class assets while distressed properties face continued pressure',
      impact: 'Positive',
      icon: CheckCircle
    }
  ]

  const majorDeals = [
    {
      property: 'Fundamental Income Properties',
      location: 'Phoenix, Arizona',
      buyer: 'Starwood Property Trust',
      value: '$2.2B',
      type: 'Sale'
    },
    {
      property: 'Australian Retirement Housing',
      location: 'Australia',
      buyer: 'Undisclosed',
      value: 'Undisclosed',
      type: 'Sale'
    },
    {
      property: 'Spanish Student Dorms',
      location: 'Spain',
      buyer: 'Undisclosed',
      value: 'Undisclosed',
      type: 'Sale'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-green-200 border-green-300">
              📈 MARKET RECOVERY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Brookfield Sees Return of <span className="text-green-300">Mega Deals</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              After three years of anemic transaction volumes, large real estate deals are making a comeback as liquidity returns to commercial property markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original Bloomberg Article
              </Button>
              <Link to="/tools/investment-analysis">
                <Button size="lg" variant="outline" className="border-green-300 text-green-300 hover:bg-green-800">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Investment Analysis Tools
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Recovery Indicators</h2>
            <p className="text-lg text-gray-600">Key metrics showing the return of liquidity to real estate markets</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Liquidity Returns After Three-Year Drought</h2>
            
            <p className="text-gray-700 mb-6">
              Lowell Baron, the new CEO of Brookfield Asset Management's real estate business, reports that large real estate deals are making a comeback after three years of severely limited transaction volumes. The alternative asset manager has sold $13 billion of property in 2025, a dramatic increase from $3 billion in the first half of 2024 and just $2 billion in the first six months of 2023.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Market Normalization</h3>
                  <p className="text-green-800">
                    "We're edging back to a more normalized rate of transactions. Over the last couple of years, there has been a severe lack of liquidity in the market and there haven't been larger transactions trading." - Lowell Baron, CEO
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">The Interest Rate Impact</h3>
            <p className="text-gray-700 mb-6">
              The end of the low interest-rate era created a significant stalemate in commercial real estate markets. Buyers sought higher returns while sellers clung to backward-looking valuations, creating a pricing disconnect that severely limited transaction activity. This lack of sales particularly impacted private equity real estate fund managers, whose fundraising capabilities were hampered by investors' capital being tied up in older vehicles awaiting disposals.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Fundraising Recovery</h3>
            <p className="text-gray-700 mb-6">
              Private real estate fundraising declined for its third straight year in 2024, with managers raising $131.1 billion—less than half the 2021 peak. However, Brookfield's recent success in raising $5.9 billion for its flagship fund's fifth vintage in Q1 2025 signals renewed investor confidence as capital returns to limited partners.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Market Trends</h2>
            <p className="text-lg text-gray-600">Key developments shaping the commercial real estate recovery</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <trend.icon className="h-8 w-8 text-blue-600" />
                    <Badge 
                      variant={trend.impact === 'Positive' ? 'default' : trend.impact === 'Negative' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {trend.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{trend.trend}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Deals Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Brookfield Transactions</h2>
            <p className="text-lg text-gray-600">Major deals completed in 2025 signaling market recovery</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Property</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Buyer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {majorDeals.map((deal, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{deal.property}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{deal.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{deal.buyer}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{deal.value}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="text-xs">
                        {deal.type}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Implications */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Implications</h2>
            <p className="text-lg text-gray-600">What this market recovery means for real estate investors</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Increased liquidity for quality assets</p>
                <p className="text-sm text-gray-700">• Renewed fundraising capabilities</p>
                <p className="text-sm text-gray-700">• Sector-specific growth in data centers and rental housing</p>
                <p className="text-sm text-gray-700">• Contrarian opportunities in distressed office properties</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Recovery remains uneven across sectors</p>
                <p className="text-sm text-gray-700">• Office properties face continued headwinds</p>
                <p className="text-sm text-gray-700">• Large debt maturities still pending</p>
                <p className="text-sm text-gray-700">• Competition increasing for prime assets</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analyze Your Investments</h2>
            <p className="text-lg text-gray-600">Use our tools to evaluate real estate investment opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/investment-analysis">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>Calculate cap rates, cash flow, and ROI</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/property-comparison">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Property Comparison</CardTitle>
                  <CardDescription>Compare multiple investment properties</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/investment/cap-rate-guide">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Cap Rate Guide</CardTitle>
                  <CardDescription>Understanding capitalization rates</CardDescription>
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
                July 25, 2025
              </span>
              <span className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                Bloomberg
              </span>
              <Badge variant="outline">Commercial Real Estate</Badge>
              <Badge variant="outline">Market Analysis</Badge>
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
      <CommentSection articleId="brookfield-mega-deals" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default BrookfieldMegaDeals

