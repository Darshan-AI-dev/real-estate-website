import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, TrendingUp, Building2, DollarSign, Target, AlertTriangle, BarChart3, Calendar, ExternalLink, ArrowRight, Zap, CheckCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const LandBankingStrategy = () => {
  const keyMetrics = [
    { label: 'Lennar Q2 Purchase', value: '$2.7B', subtitle: '22,000 lots from land bankers', icon: DollarSign, color: 'green' },
    { label: 'Controlled Lots', value: '2.4M', subtitle: 'Public builders Q1 2025', icon: MapPin, color: 'blue' },
    { label: 'Ownership Shift', value: '26%', subtitle: 'Owned vs 74% optioned', icon: TrendingUp, color: 'purple' },
    { label: 'Walton Global AUM', value: '$4.5B', subtitle: '89,000 acres planned', icon: Building2, color: 'orange' }
  ]

  const landBankingBenefits = [
    {
      benefit: 'Capital Efficiency',
      description: '10-20% deposit vs 35% traditional down payment',
      impact: 'Frees up capital for construction',
      icon: DollarSign
    },
    {
      benefit: 'Risk Mitigation',
      description: 'Ability to rework deals during market downturns',
      impact: 'Avoids 2008-style land losses',
      icon: Target
    },
    {
      benefit: 'Pipeline Security',
      description: '2-4 year option periods ensure future supply',
      impact: 'Faster response to demand',
      icon: Zap
    },
    {
      benefit: 'Market Flexibility',
      description: 'Can delay purchases during soft markets',
      impact: 'Maintains relationships',
      icon: CheckCircle
    }
  ]

  const marketCycle = [
    { phase: '2017', owned: '64%', optioned: '36%', description: 'Traditional ownership model' },
    { phase: '2020', owned: '45%', optioned: '55%', description: 'Pandemic shift begins' },
    { phase: '2025', owned: '26%', optioned: '74%', description: 'Land-light strategy dominates' }
  ]

  const majorPlayers = [
    {
      company: 'Walton Global',
      assets: '$4.5B',
      acres: '89,000',
      focus: 'Construction-ready lots',
      strategy: 'Builder partnerships'
    },
    {
      company: 'Land Advisors Org',
      assets: 'N/A',
      acres: 'N/A',
      focus: 'Land brokerage',
      strategy: 'Market expertise'
    },
    {
      company: 'John Burns Research',
      assets: 'N/A',
      acres: 'N/A',
      focus: 'Market analysis',
      strategy: 'Data-driven insights'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-emerald-200 border-emerald-300">
              🏗️ LAND STRATEGY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              America's Next Big <span className="text-emerald-300">Land Grab</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto">
              Homebuilders are staking out huge swaths of land through innovative "land banking" strategies, betting on future housing demand despite current market uncertainty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original Business Insider Article
              </Button>
              <Link to="/tools/investment-analysis">
                <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-300 hover:bg-emerald-800">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Land Banking Revolution</h2>
            <p className="text-lg text-gray-600">Key metrics showing the transformation of homebuilder land strategies</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Land-Light Strategy Revolution</h2>
            
            <p className="text-gray-700 mb-6">
              There's a fascinating contradiction at the heart of America's real estate market. While homebuilders are cutting prices and offering incentives due to high borrowing costs and economic uncertainty, they're simultaneously staking out huge swaths of land in anticipation of the next homebuilding boom. This strategic land grab signals faith in long-term housing demand and recognition of the country's deep housing shortage.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">Strategic Transformation</h3>
                  <p className="text-emerald-800">
                    Public builders now own just 26% of their lots and have options on the other 74%, a complete reversal from 2017 when they owned 64% and optioned 36%.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">What is Land Banking?</h3>
            <p className="text-gray-700 mb-6">
              Land banking involves specialized companies that purchase construction-ready land on behalf of builders for a fee, then hold it until the builder is ready to develop. This "land-light strategy" allows builders to control land for years before technically owning it, preserving development pipelines while freeing up cash for actual construction.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Learning from 2008</h3>
            <p className="text-gray-700 mb-6">
              The current approach represents a dramatic shift from pre-2008 practices. During the housing bubble, builders hoovered up land using traditional debt, only to be stuck with devalued properties when the market crashed. Many builders went bankrupt or were forced to sell lots at steep discounts. The industry learned that being forced to scramble for land when markets recover puts them at a severe disadvantage.
            </p>
          </div>
        </div>
      </section>

      {/* Land Banking Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Land Banking Advantages</h2>
            <p className="text-lg text-gray-600">How the land-light strategy benefits homebuilders and the housing market</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {landBankingBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <benefit.icon className="h-8 w-8 text-emerald-600" />
                    <Badge variant="outline" className="text-xs">
                      {benefit.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{benefit.benefit}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Evolution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Evolution of Land Ownership</h2>
            <p className="text-lg text-gray-600">How public builders shifted from ownership to option-based strategies</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Owned</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Optioned</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Market Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {marketCycle.map((phase, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{phase.phase}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-red-600">{phase.owned}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{phase.optioned}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{phase.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Current Market Challenges */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Market Headwinds</h2>
            <p className="text-lg text-gray-600">Challenges facing homebuilders despite land banking strategies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-red-900">Market Softness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Spring selling season "hugely disappointing"</p>
                <p className="text-sm text-gray-700">• New home prices down 1.5% year-over-year in June</p>
                <p className="text-sm text-gray-700">• 119,000 new homes available for sale (highest since 2009)</p>
                <p className="text-sm text-gray-700">• Single-family starts down 10% in June</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">Affordability Crisis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Mortgage rates stuck near 7%</p>
                <p className="text-sm text-gray-700">• Hundreds to thousands more in monthly interest</p>
                <p className="text-sm text-gray-700">• Existing homeowners reluctant to give up low rates</p>
                <p className="text-sm text-gray-700">• Economic uncertainty deterring buyers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Players */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Industry Players</h2>
            <p className="text-lg text-gray-600">Major land banking companies and industry experts</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {majorPlayers.map((player, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <Badge variant="outline" className="text-xs">
                      {player.assets}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{player.company}</CardTitle>
                  <CardDescription>{player.focus}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Acres:</span>
                    <span className="text-sm font-semibold">{player.acres}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Strategy:</span>
                    <span className="text-sm font-semibold text-green-600">{player.strategy}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Insights</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Greg Vogel</h3>
                  <p className="text-sm text-gray-600 mb-3">CEO, Land Advisors Organization</p>
                  <p className="text-gray-700">
                    "We like to joke about a seven-year cycle and a three-year memory. But I do think the GFC scars ran deep. They learned last time that they're in a much worse position having to go scramble and find land when the market did come back."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Will Frank</h3>
                  <p className="text-sm text-gray-600 mb-3">Land Banking Expert, John Burns Research</p>
                  <p className="text-gray-700">
                    "It's not an easy machine to turn on and off. Land bankers have aided builders in vastly expanding their land holdings to get ready for demand that may arrive years in the future."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Katie Hubbard</h3>
                  <p className="text-sm text-gray-600 mb-3">Executive, Walton Global</p>
                  <p className="text-gray-700">
                    "They learned last time that they're in a much worse position having to go scramble and find land when the market did come back. Land banking offers flexibility to rework deals rather than walk away from land positions altogether."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Market Implications</h2>
            <p className="text-lg text-gray-600">How land banking could reshape housing supply cycles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">Potential Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Faster response to housing demand recovery</p>
                <p className="text-sm text-gray-700">• More reliable homebuilding machine</p>
                <p className="text-sm text-gray-700">• Potentially cheaper houses for buyers</p>
                <p className="text-sm text-gray-700">• Reduced boom-bust cycle severity</p>
                <p className="text-sm text-gray-700">• Better capital allocation efficiency</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• First test of land banking during downturn</p>
                <p className="text-sm text-gray-700">• Benefits still largely theoretical</p>
                <p className="text-sm text-gray-700">• Local permitting remains a bottleneck</p>
                <p className="text-sm text-gray-700">• Land bankers add cost to final prices</p>
                <p className="text-sm text-gray-700">• Market timing uncertainty persists</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Estate Investment Tools</h2>
            <p className="text-lg text-gray-600">Analyze land and development opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/investment-analysis">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>Calculate development returns and risks</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/property-comparison">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Property Comparison</CardTitle>
                  <CardDescription>Compare land and development sites</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/affordability-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>Calculate what buyers can afford</CardDescription>
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
                Business Insider
              </span>
              <Badge variant="outline">Land Banking</Badge>
              <Badge variant="outline">Homebuilding</Badge>
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
      <CommentSection articleId="land-banking-strategy" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default LandBankingStrategy

