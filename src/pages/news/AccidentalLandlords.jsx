import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Home, Users, TrendingDown, MapPin, DollarSign, AlertTriangle, BarChart3, Calendar, ExternalLink, ArrowRight, Building2, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const AccidentalLandlords = () => {
  const keyMetrics = [
    { label: 'Inventory Growth', value: '20%+', subtitle: 'In major SFR markets', icon: TrendingDown, color: 'red' },
    { label: 'Major Players', value: '50K+', subtitle: 'Homes per portfolio', icon: Building2, color: 'blue' },
    { label: 'Geographic Focus', value: '6', subtitle: 'Primary markets', icon: MapPin, color: 'green' },
    { label: 'Renewal Rates', value: '75%', subtitle: 'Institutional retention', icon: Users, color: 'purple' }
  ]

  const majorMarkets = [
    { city: 'Atlanta', state: 'GA', inventoryGrowth: '25%', institutionalPresence: 'High' },
    { city: 'Phoenix', state: 'AZ', inventoryGrowth: '22%', institutionalPresence: 'High' },
    { city: 'Dallas', state: 'TX', inventoryGrowth: '28%', institutionalPresence: 'High' },
    { city: 'Houston', state: 'TX', inventoryGrowth: '24%', institutionalPresence: 'High' },
    { city: 'Tampa', state: 'FL', inventoryGrowth: '26%', institutionalPresence: 'High' },
    { city: 'Charlotte', state: 'NC', inventoryGrowth: '23%', institutionalPresence: 'High' }
  ]

  const institutionalPlayers = [
    {
      name: 'Invitation Homes',
      portfolio: '80,000+',
      strategy: 'Build-to-rent focus',
      renewalRate: '75%',
      rentGrowth: '4-5%'
    },
    {
      name: 'American Homes 4 Rent',
      portfolio: '60,000+',
      strategy: 'Acquisition & development',
      renewalRate: '75%',
      rentGrowth: '4-5%'
    },
    {
      name: 'Progress Residential',
      portfolio: '40,000+',
      strategy: 'Technology-driven operations',
      renewalRate: '75%',
      rentGrowth: '4-5%'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-orange-200 border-orange-300">
              🏠 MARKET DISRUPTION
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-orange-300">Accidental Landlords</span> Challenge Institutions
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto">
              Frustrated home sellers are converting to rentals, creating unexpected competition for institutional investors in key single-family rental markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original CNBC Article
              </Button>
              <Link to="/institutional-players">
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-300 hover:bg-orange-800">
                  <Building2 className="mr-2 h-5 w-5" />
                  Institutional Players Analysis
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Impact Indicators</h2>
            <p className="text-lg text-gray-600">Key metrics showing the rise of accidental landlords in institutional markets</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Rise of Accidental Landlords</h2>
            
            <p className="text-gray-700 mb-6">
              As rising supply, high mortgage rates, and waning consumer confidence conspire to keep potential buyers on the sidelines, frustrated home sellers are increasingly choosing to delist their properties and offer them on the rental market instead. This trend is creating what Parcl Labs terms "accidental landlords"—owners who enter the single-family rental market not by design, but by necessity.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Market Disruption</h3>
                  <p className="text-orange-800">
                    "When these home sellers cannot find buyers, they face three choices: delist and wait, cut price to find market clearing level, or convert to rental." - Jesus Leal Trujillo, Parcl Labs
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Concentration</h3>
            <p className="text-gray-700 mb-6">
              The largest institutional investors are highly concentrated geographically, with companies like Invitation Homes, American Homes 4 Rent, and Progress Residential each holding over a third of their assets in just six U.S. housing markets: Atlanta, Phoenix, Dallas, Houston, Tampa, and Charlotte. These same markets have seen inventory growth of well over 20% in the past year—much of it from former owner-occupants.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study: Dallas Market</h3>
            <p className="text-gray-700 mb-6">
              Garret Johnson's experience illustrates the trend perfectly. After buying his Dallas home two years ago, he received a new job in Houston and attempted to sell in March 2025. Facing limited buyer interest and economic uncertainty, Johnson converted his property to a rental. While the rent doesn't fully cover his mortgage, he recast his loan and changed to landlord insurance to make the numbers work.
            </p>
          </div>
        </div>
      </section>

      {/* Major Markets Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key SFR Markets</h2>
            <p className="text-lg text-gray-600">Markets with highest institutional concentration and inventory growth</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Market</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Inventory Growth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Institutional Presence</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Competition Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {majorMarkets.map((market, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {market.city}, {market.state}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-red-600">{market.inventoryGrowth}</td>
                    <td className="px-6 py-4">
                      <Badge variant="destructive" className="text-xs">
                        {market.institutionalPresence}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="text-xs">
                        Increasing
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutional Response */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Player Response</h2>
            <p className="text-lg text-gray-600">How major SFR companies are adapting to increased competition</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {institutionalPlayers.map((player, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <Badge variant="outline" className="text-xs">
                      {player.portfolio} homes
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{player.name}</CardTitle>
                  <CardDescription>{player.strategy}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Renewal Rate:</span>
                    <span className="text-sm font-semibold">{player.renewalRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Rent Growth:</span>
                    <span className="text-sm font-semibold text-green-600">{player.rentGrowth}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Impact Analysis</h2>
            <p className="text-lg text-gray-600">Understanding the implications for rental pricing and institutional strategies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <TrendingDown className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-900">Pricing Pressure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Limited ability to achieve 4-5% rent increases</p>
                <p className="text-sm text-gray-700">• Potential for 1-2% growth in competitive markets</p>
                <p className="text-sm text-gray-700">• Increased supply from accidental landlords</p>
                <p className="text-sm text-gray-700">• Occupancy optimization over rent maximization</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Strategic Adaptation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Shift to build-to-rent projects</p>
                <p className="text-sm text-gray-700">• Reduced competition for resale properties</p>
                <p className="text-sm text-gray-700">• Focus on operational efficiency</p>
                <p className="text-sm text-gray-700">• Technology-driven tenant retention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Insights</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Haendel St. Juste</h3>
                  <p className="text-sm text-gray-600 mb-3">Senior Equity Research Analyst, Mizuho Securities</p>
                  <p className="text-gray-700">
                    "You're not going to see big reductions in rent, but maybe you won't be able to get 4% or 5% increases on your rent. Maybe it's just 1% to 2% in some cases. The professional big guys have been getting 4% to 5% renewal rates and 75% retention in their portfolio."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rick Sharga</h3>
                  <p className="text-sm text-gray-600 mb-3">CEO, CJ Patrick Co.</p>
                  <p className="text-gray-700">
                    "We saw something like this in 2022 after mortgage rates doubled: A huge uptick in the number of people who owned one property besides their primary residence. The largest single-family rental REITs are now selling more homes than they're buying, deploying more funds into build-to-rent projects."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analyze Rental Markets</h2>
            <p className="text-lg text-gray-600">Tools to evaluate single-family rental opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/investment-analysis">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Rental Analysis</CardTitle>
                  <CardDescription>Calculate rental yields and cash flow</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/property-comparison">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Property Comparison</CardTitle>
                  <CardDescription>Compare rental properties side-by-side</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/institutional-players">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Institutional Players</CardTitle>
                  <CardDescription>Analyze major SFR companies</CardDescription>
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
                July 23, 2025
              </span>
              <span className="flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                CNBC
              </span>
              <Badge variant="outline">Single-Family Rental</Badge>
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
      <CommentSection articleId="accidental-landlords" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default AccidentalLandlords

