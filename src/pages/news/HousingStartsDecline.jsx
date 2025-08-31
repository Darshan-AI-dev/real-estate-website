import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingDown, Building2, DollarSign, Target, AlertTriangle, BarChart3, Calendar, ExternalLink, ArrowRight, TrendingUp, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const HousingStartsDecline = () => {
  const keyMetrics = [
    { label: 'June Starts Rate', value: '883K', subtitle: 'Seasonally adjusted annual rate', icon: Building2, color: 'red' },
    { label: 'Permits Issued', value: '866K', subtitle: 'Lowest since March 2023', icon: TrendingDown, color: 'orange' },
    { label: 'Builders Offering Incentives', value: '62%', subtitle: 'July 2025 survey data', icon: DollarSign, color: 'blue' },
    { label: 'ETF Performance', value: '-7.4%', subtitle: 'iShares Home Construction YTD', icon: BarChart3, color: 'red' }
  ]

  const analystInsights = [
    {
      analyst: 'Buck Horne',
      firm: 'Raymond James',
      insight: 'Pullback in construction could signal margin bottom',
      focus: 'Volume vs. profitability balance',
      icon: Target
    },
    {
      analyst: 'John Lovallo',
      firm: 'UBS',
      insight: 'Rate stability key to margin recovery',
      focus: 'Mortgage rate impact on incentives',
      icon: TrendingUp
    }
  ]

  const marketIndicators = [
    {
      indicator: 'Consumer Sentiment',
      value: '71%',
      description: 'Say June was bad time to buy (Fannie Mae)',
      trend: 'Negative',
      icon: AlertTriangle
    },
    {
      indicator: 'Sales Incentives',
      value: '62%',
      description: 'Builders offering incentives in July',
      trend: 'High',
      icon: DollarSign
    },
    {
      indicator: 'Margin Pressure',
      value: 'Ongoing',
      description: 'Discounts weighing on profitability',
      trend: 'Negative',
      icon: TrendingDown
    },
    {
      indicator: 'Strategic Shift',
      value: 'Emerging',
      description: 'Willingness to reduce volume for margins',
      trend: 'Positive',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-red-200 border-red-300">
              📉 MARKET ANALYSIS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Housing Starts <span className="text-red-300">Decline</span> Signals Strategy Shift
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto">
              Single-family construction weakened in June, but analysts see potential positive signs for builder margins as industry shows willingness to prioritize profitability over volume
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original Barron's Article
              </Button>
              <Link to="/tools/investment-analysis">
                <Button size="lg" variant="outline" className="border-red-300 text-red-300 hover:bg-red-800">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">June Housing Data</h2>
            <p className="text-lg text-gray-600">Key metrics showing the construction slowdown and market response</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Pullback or Market Weakness?</h2>
            
            <p className="text-gray-700 mb-6">
              Construction on new single-family homes weakened in June, with starts falling to a seasonally adjusted annual rate of 883,000—the slowest pace in nearly a year. While this represents bad news for buyers hunting for deals, analysts see it as a potentially positive sign for investors waiting for builders' margins to bottom out.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Market Conditions</h3>
                  <p className="text-orange-800">
                    It has been a tough year for the industry as mortgage rates have remained high and economic uncertainty has pushed many buyers to the sidelines, necessitating continued incentives and discounts.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Permits Signal Future Outlook</h3>
            <p className="text-gray-700 mb-6">
              Issuance of permits, which indicates how builders see the outlook for demand by measuring units authorized for construction, fell to a rate of 866,000—the lowest since March 2023. This forward-looking indicator suggests builders are becoming more cautious about future market conditions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Investor Perspective: Volume vs. Margins</h3>
            <p className="text-gray-700 mb-6">
              Perhaps counterintuitively, a pullback in starts could signal a shift in strategy that is favorable for investors, if problematic for buyers. The industry is showing a willingness to pull back on construction rather than continue pumping through inventory at all costs, with sales incentives effectively acting as price cuts.
            </p>
          </div>
        </div>
      </section>

      {/* Market Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Health Indicators</h2>
            <p className="text-lg text-gray-600">Key metrics showing current market conditions and builder responses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketIndicators.map((indicator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <indicator.icon className="h-8 w-8 text-blue-600" />
                    <Badge 
                      variant={indicator.trend === 'Positive' ? 'default' : indicator.trend === 'Negative' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {indicator.trend}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{indicator.indicator}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-gray-900">{indicator.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analyst Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Analysis</h2>
            <p className="text-lg text-gray-600">Wall Street analysts weigh in on the housing starts decline</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Buck Horne</h3>
                  <p className="text-sm text-gray-600 mb-3">Analyst, Raymond James</p>
                  <p className="text-gray-700 mb-4">
                    "There's a fear that just the builders are just going to keep pumping through inventory at all costs. Sales incentives are effectively a price cut."
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Key Insight:</strong> The industry is showing willingness to pull back on construction. Investors "just want to see some visibility that margins will find a bottom point pretty soon, and that they are willing to pull back on volume a little bit to maintain profitability."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">John Lovallo</h3>
                  <p className="text-sm text-gray-600 mb-3">Analyst, UBS</p>
                  <p className="text-gray-700 mb-4">
                    "A big improvement for the sector still depends on mortgage rates."
                  </p>
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="text-sm text-green-800">
                      <strong>Rate Impact:</strong> "If we do get stability in rates and, man, if we actually got a little bit of decline in rates from here, there's a lot of leverage in that margin that could come back as incentives are rolled back a bit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Implications */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Implications</h2>
            <p className="text-lg text-gray-600">What the housing starts decline means for different market participants</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">For Investors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Potential margin stabilization ahead</p>
                <p className="text-sm text-gray-700">• Strategic volume reduction over price cuts</p>
                <p className="text-sm text-gray-700">• Less inventory pumping at all costs</p>
                <p className="text-sm text-gray-700">• Improved profitability focus</p>
                <p className="text-sm text-gray-700">• Better capital allocation discipline</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-900">For Buyers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Reduced new home construction</p>
                <p className="text-sm text-gray-700">• Less inventory coming to market</p>
                <p className="text-sm text-gray-700">• Potential for fewer incentives</p>
                <p className="text-sm text-gray-700">• Continued affordability challenges</p>
                <p className="text-sm text-gray-700">• Limited supply relief</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ETF Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sector Performance</h2>
            <p className="text-lg text-gray-600">How homebuilding stocks have performed amid market challenges</p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">iShares U.S. Home Construction ETF</CardTitle>
              <CardDescription>Year-to-date performance through July 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-4">-7.4%</div>
              <p className="text-gray-600 mb-6">
                The sector has faced headwinds from high mortgage rates, economic uncertainty, and margin pressure from continued incentives and discounts.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Market Context:</strong> Performance reflects broader challenges in the homebuilding industry, including reduced buyer demand, elevated borrowing costs, and the need for builders to offer significant incentives to move inventory.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Consumer Sentiment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consumer Sentiment</h2>
            <p className="text-lg text-gray-600">Buyer attitudes continue to weigh on market demand</p>
          </div>
          
          <Card className="max-w-2xl mx-auto border-l-4 border-orange-500">
            <CardHeader className="text-center">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-orange-900">Fannie Mae Consumer Survey</CardTitle>
              <CardDescription>June 2025 homebuying sentiment</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">71%</div>
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Said June was a bad time to buy a home
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800">
                  This high level of negative sentiment reflects ongoing affordability challenges, with high mortgage rates and elevated home prices continuing to deter potential buyers from entering the market.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Housing Market Analysis Tools</h2>
            <p className="text-lg text-gray-600">Analyze market conditions and investment opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/affordability-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>Calculate what buyers can afford in current market</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/mortgage-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Mortgage Calculator</CardTitle>
                  <CardDescription>Calculate payments at current rates</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/investment-analysis">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>Analyze homebuilder investment potential</CardDescription>
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
                July 18, 2025
              </span>
              <span className="flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                Barron's
              </span>
              <Badge variant="outline">Housing Starts</Badge>
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
      <CommentSection articleId="housing-starts-decline" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default HousingStartsDecline

