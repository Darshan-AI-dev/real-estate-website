import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { MapPin, TrendingUp, TrendingDown, Home, DollarSign, Users, Building, Calendar, Star, Waves } from 'lucide-react'

const MiamiFL = () => {
  const marketStats = [
    {
      metric: 'Median Home Price',
      value: '$650,000',
      change: 'Up 12% year-over-year',
      trend: 'up',
      description: 'Miami-Dade County, luxury market driving averages'
    },
    {
      metric: 'Average Days on Market',
      value: '55 days',
      change: 'Increased from 35 days',
      trend: 'up',
      description: 'More inventory, balanced conditions'
    },
    {
      metric: 'Property Tax Rate',
      value: '1.0-1.3%',
      change: 'Lower than national average',
      trend: 'neutral',
      description: 'No state income tax benefit'
    },
    {
      metric: 'Population Growth',
      value: '+1.8% annually',
      change: 'International migration strong',
      trend: 'up',
      description: 'Finance and tech sectors expanding'
    }
  ]

  const neighborhoods = [
    {
      name: 'South Beach',
      priceRange: '$800K - $3M+',
      vibe: 'Iconic beachfront living with Art Deco architecture and nightlife',
      bestFor: 'Luxury buyers seeking prestige and lifestyle',
      highlights: ['World-famous beaches', 'Art Deco historic district', 'High-end dining', 'Vibrant nightlife'],
      considerations: ['Very expensive', 'Tourist crowds', 'Hurricane risk', 'Parking challenges']
    },
    {
      name: 'Coral Gables',
      priceRange: '$600K - $2M',
      vibe: 'Mediterranean-style planned community with tree-lined streets',
      bestFor: 'Families wanting elegance and top schools',
      highlights: ['Beautiful architecture', 'Excellent schools', 'Safe neighborhoods', 'Cultural amenities'],
      considerations: ['High property values', 'Strict zoning rules', 'Limited nightlife', 'Hurricane exposure']
    },
    {
      name: 'Wynwood',
      priceRange: '$400K - $800K',
      vibe: 'Arts district with colorful murals and trendy galleries',
      bestFor: 'Young professionals and artists',
      highlights: ['Street art scene', 'Hip restaurants', 'Growing tech hub', 'Urban lifestyle'],
      considerations: ['Gentrification rapid', 'Limited parking', 'Safety concerns at night', 'Noise levels']
    },
    {
      name: 'Aventura',
      priceRange: '$500K - $1.5M',
      vibe: 'Modern high-rise living with shopping and dining',
      bestFor: 'Professionals wanting luxury amenities',
      highlights: ['Luxury condos', 'Shopping centers', 'Golf courses', 'Marina access'],
      considerations: ['High HOA fees', 'Dense development', 'Traffic congestion', 'Hurricane risk']
    }
  ]

  const marketInsights = [
    {
      title: 'International Investment Hub',
      description: 'Strong demand from Latin American and European buyers seeking U.S. real estate.',
      impact: 'Positive'
    },
    {
      title: 'No State Income Tax',
      description: 'Florida\'s tax advantages attract high earners from other states.',
      impact: 'Positive'
    },
    {
      title: 'Climate Risk',
      description: 'Hurricane exposure and sea level rise concerns affect insurance and values.',
      impact: 'Negative'
    },
    {
      title: 'Tech Sector Growth',
      description: 'Emerging as a tech hub with major companies establishing offices.',
      impact: 'Positive'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-cyan-200 border-cyan-300">
              Local Market Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Miami, Florida Real Estate Market
            </h1>
            <p className="text-xl text-cyan-100">
              International gateway city with luxury lifestyle, no state income tax, and growing tech sector
            </p>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{stat.metric}</CardTitle>
                    {stat.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-600" />}
                    {stat.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-600" />}
                    {stat.trend === 'neutral' && <DollarSign className="h-5 w-5 text-gray-600" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.change}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Neighborhoods</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{neighborhood.name}</CardTitle>
                    <Badge variant="outline">{neighborhood.priceRange}</Badge>
                  </div>
                  <CardDescription className="text-base">{neighborhood.vibe}</CardDescription>
                  <div className="text-sm text-cyan-600 font-medium mt-2">
                    Best for: {neighborhood.bestFor}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Highlights</h4>
                      <ul className="text-sm space-y-1">
                        {neighborhood.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Considerations</h4>
                      <ul className="text-sm space-y-1">
                        {neighborhood.considerations.map((consideration, idx) => (
                          <li key={idx} className="flex items-center">
                            <Calendar className="h-3 w-3 text-orange-600 mr-2 flex-shrink-0" />
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                    <Badge variant={insight.impact === 'Positive' ? 'default' : insight.impact === 'Negative' ? 'destructive' : 'secondary'}>
                      {insight.impact}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Miami Real Estate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Use our tools and resources to navigate the Miami luxury market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tools"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Affordability Calculator
            </Link>
            <Link 
              to="/financing"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Waves className="h-5 w-5 mr-2" />
              Financing Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MiamiFL

