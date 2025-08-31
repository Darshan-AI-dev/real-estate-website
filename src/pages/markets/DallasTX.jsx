import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { MapPin, TrendingUp, TrendingDown, Home, DollarSign, Users, Building, Calendar, Star } from 'lucide-react'

const DallasTX = () => {
  const marketStats = [
    {
      metric: 'Median Home Price',
      value: '$425,000',
      change: 'Up 8% year-over-year',
      trend: 'up',
      description: 'Dallas County, strong appreciation continues'
    },
    {
      metric: 'Average Days on Market',
      value: '45 days',
      change: 'Stable from previous year',
      trend: 'neutral',
      description: 'Balanced market conditions'
    },
    {
      metric: 'Property Tax Rate',
      value: '2.2-2.8%',
      change: 'Varies by municipality',
      trend: 'neutral',
      description: 'Consider location-specific rates'
    },
    {
      metric: 'Population Growth',
      value: '+3.2% annually',
      change: 'Leading major metros',
      trend: 'up',
      description: 'Corporate relocations driving demand'
    }
  ]

  const neighborhoods = [
    {
      name: 'Uptown',
      priceRange: '$500K - $1.5M',
      vibe: 'Urban living with high-rise condos and trendy restaurants',
      bestFor: 'Young professionals wanting city lifestyle',
      highlights: ['Walkable to downtown', 'Vibrant nightlife', 'High-end dining', 'Modern amenities'],
      considerations: ['Higher cost of living', 'Dense urban environment', 'Limited parking']
    },
    {
      name: 'Plano',
      priceRange: '$350K - $700K',
      vibe: 'Family-friendly suburb with excellent schools and corporate headquarters',
      bestFor: 'Families prioritizing education and safety',
      highlights: ['Top-rated schools', 'Corporate job centers', 'Master-planned communities', 'Low crime rates'],
      considerations: ['Suburban lifestyle', 'Car dependency', 'Higher property taxes']
    },
    {
      name: 'Deep Ellum',
      priceRange: '$300K - $600K',
      vibe: 'Artsy district with converted lofts and creative spaces',
      bestFor: 'Artists, creatives, and urban pioneers',
      highlights: ['Arts district', 'Live music venues', 'Unique architecture', 'Growing food scene'],
      considerations: ['Gentrification concerns', 'Limited family amenities', 'Parking challenges']
    },
    {
      name: 'Bishop Arts District',
      priceRange: '$400K - $800K',
      vibe: 'Historic neighborhood with boutique shops and local eateries',
      bestFor: 'Those seeking character and community',
      highlights: ['Historic charm', 'Local businesses', 'Walkable streets', 'Community events'],
      considerations: ['Limited inventory', 'Older home maintenance', 'Gentrification pressure']
    }
  ]

  const marketInsights = [
    {
      title: 'Corporate Headquarters Hub',
      description: 'Dallas-Fort Worth is home to 22 Fortune 500 companies, creating strong job market fundamentals.',
      impact: 'Positive'
    },
    {
      title: 'No State Income Tax',
      description: 'Texas\' tax structure attracts businesses and residents from high-tax states.',
      impact: 'Positive'
    },
    {
      title: 'Infrastructure Investment',
      description: 'Major transportation projects including highway expansions and DART rail extensions.',
      impact: 'Positive'
    },
    {
      title: 'Weather Considerations',
      description: 'Hot summers and occasional severe weather events including tornadoes.',
      impact: 'Neutral'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Local Market Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dallas, Texas Real Estate Market
            </h1>
            <p className="text-xl text-blue-100">
              Corporate headquarters, no state income tax, and strong job growth make Dallas a top destination
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
                  <div className="text-sm text-blue-600 font-medium mt-2">
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
                    <Badge variant={insight.impact === 'Positive' ? 'default' : 'secondary'}>
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
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Dallas Real Estate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Use our tools and resources to make informed decisions in the Dallas market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tools"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Mortgage Calculator
            </Link>
            <Link 
              to="/basics"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Learn the Basics
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DallasTX

