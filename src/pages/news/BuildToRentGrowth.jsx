import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, TrendingUp, Users, BarChart3, Calendar, ExternalLink, Home, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'

const BuildToRentGrowth = () => {
  const btrStats = [
    { 
      label: 'BTR Starts', 
      value: '84,000', 
      description: 'Units in 12 months ending March 2025',
      icon: Building2 
    },
    { 
      label: 'Market Share', 
      value: '8.4%', 
      description: 'Of all single-family housing starts',
      icon: BarChart3 
    },
    { 
      label: 'Average Rent', 
      value: '$2,201', 
      description: 'Monthly rent in BTR communities',
      icon: Home 
    },
    { 
      label: 'Occupancy Rate', 
      value: '94.9%', 
      description: 'Professional management occupancy',
      icon: Target 
    }
  ]

  const marketTrends = [
    {
      trend: 'Stabilization Phase',
      description: 'BTR market share has held steady for five of the past six quarters, indicating maturation rather than rapid expansion.',
      impact: 'Market Maturity'
    },
    {
      trend: 'Demographic Demand',
      description: 'Millennials and Gen Z renters priced out of for-sale markets continue to drive demand for quality rental housing.',
      impact: 'Strong Fundamentals'
    },
    {
      trend: 'Developer Balance',
      description: 'Developers are balancing demand from rental-focused households with returning for-sale buyers.',
      impact: 'Strategic Positioning'
    },
    {
      trend: 'Sustainable Equilibrium',
      description: 'BTR appears to be reaching a sustainable equilibrium rather than experiencing rapid expansion.',
      impact: 'Long-term Viability'
    }
  ]

  const keyPlayers = [
    {
      company: 'Amherst Holdings',
      focus: 'StudioBuilt modular construction with 350+ homes produced',
      strategy: 'Vertical integration and manufacturing innovation'
    },
    {
      company: 'Invitation Homes',
      focus: 'Large-scale BTR communities in Sun Belt markets',
      strategy: 'Institutional-grade development and management'
    },
    {
      company: 'Tricon Residential',
      focus: 'Cross-border BTR strategy with Canadian backing',
      strategy: 'Joint venture partnerships and technology integration'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-purple-200 border-purple-300">
              Industry Analysis • March 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build-to-Rent Starts Remain Robust at 84,000 Units
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              BTR sector stabilizes at 8.4% of single-family starts, indicating sustainable market equilibrium
            </p>
            <div className="flex items-center justify-center space-x-4 text-purple-200">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>March 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <ExternalLink className="h-4 w-4" />
                <span>Arbor Realty Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTR Statistics */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Build-to-Rent Market Snapshot</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {btrStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-purple-600">{stat.value}</CardTitle>
                    <CardDescription className="font-medium">{stat.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Stabilization Signals Maturity</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              According to Arbor Realty Trust, single-family build-to-rent (BTR) construction starts totaled 84,000 units 
              in the 12 months ending March 2025, representing 8.4% of all single-family housing starts. This share has 
              held steady for five of the past six quarters, indicating stabilization in BTR's market penetration.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The stabilization represents a significant shift from the rapid expansion phase that characterized the BTR 
              sector in previous years. Rather than continuing aggressive growth, the market appears to be finding its 
              sustainable equilibrium as developers balance multiple factors including demand patterns, construction costs, 
              and competition from traditional for-sale housing.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Demographic Drivers Remain Strong</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The fundamental demographic drivers supporting BTR development remain robust. Millennials and Gen Z renters, 
              many of whom have been priced out of for-sale markets by high home prices and elevated mortgage rates, 
              continue to seek quality rental housing options that offer the space and amenities of single-family homes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This demographic shift has created sustained demand for professionally managed single-family rental 
              communities, with average rents reaching $2,201 per month and occupancy rates maintaining strong levels 
              at 94.9%. The slight decrease from previous occupancy levels reflects seasonal norms rather than 
              fundamental demand weakness.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Market Trends</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{trend.trend}</CardTitle>
                    <Badge variant="outline">
                      {trend.impact}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leading BTR Developers</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {keyPlayers.map((player, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{player.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{player.focus}</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-purple-900 mb-1">Strategy</div>
                    <div className="text-sm text-purple-700">{player.strategy}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Market Analysis: Sustainable Growth Ahead</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The stabilization of BTR market share at 8.4% suggests the sector has found its natural equilibrium 
                  within the broader housing market. This level appears sustainable given current demographic trends 
                  and housing affordability challenges.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Developers are increasingly sophisticated in their approach, balancing BTR development with traditional 
                  for-sale housing based on local market conditions. This flexibility allows them to respond to changing 
                  demand patterns while maintaining operational efficiency.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The sector's maturation is also evident in the quality of development and management practices. 
                  Professional property management, amenity packages, and community design have evolved to meet 
                  the expectations of renters who view BTR communities as long-term housing solutions rather than 
                  temporary accommodations.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Looking ahead, BTR development is likely to continue at current levels, with growth driven more 
                  by market expansion into new geographic areas rather than increasing market share in existing markets. 
                  This measured approach suggests a healthy, sustainable sector that can weather economic cycles 
                  while continuing to serve an important housing need.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Analysis</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/institutional-players/amherst-holdings" className="hover:text-purple-600">
                    Amherst Holdings: StudioBuilt Innovation
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Deep dive into Amherst's modular construction approach and BTR strategy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/investment/strategies" className="hover:text-purple-600">
                    Real Estate Investment Strategies
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Learn about different approaches to real estate investment including BTR opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/markets" className="hover:text-purple-600">
                    Local Market Analysis
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Explore BTR development activity in key markets across the United States.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommentSection 
            articleId="build-to-rent-growth-2025"
            articleTitle="Build-to-Rent Starts Remain Robust at 84,000 Units"
          />
        </div>
      </section>
    </div>
  )
}

export default BuildToRentGrowth

