import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, TrendingUp, TrendingDown, Home, DollarSign, Users, Building, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LocalMarkets = () => {
  const featuredMarkets = [
    {
      city: 'Austin',
      state: 'Texas',
      slug: 'austin-tx',
      medianPrice: '$550,000',
      priceChange: 'Down from peak',
      trend: 'cooling',
      description: 'Tech hub with strong job growth but cooling from pandemic highs',
      highlights: ['No state income tax', 'Major tech employers', 'Live music scene', 'Food culture'],
      status: 'Available'
    },
    {
      city: 'Dallas',
      state: 'Texas', 
      slug: 'dallas-tx',
      medianPrice: '$425,000',
      priceChange: 'Up 8% YoY',
      trend: 'growing',
      description: 'Corporate headquarters hub with diverse economy and strong fundamentals',
      highlights: ['Fortune 500 companies', 'No state income tax', 'DFW Airport hub', 'Affordable suburbs'],
      status: 'Available'
    },
    {
      city: 'Miami',
      state: 'Florida',
      slug: 'miami-fl', 
      medianPrice: '$650,000',
      priceChange: 'Up 12% YoY',
      trend: 'hot',
      description: 'International gateway with luxury market and growing tech sector',
      highlights: ['No state income tax', 'International buyers', 'Beach lifestyle', 'Finance hub'],
      status: 'Available'
    }
  ]

  const upcomingMarkets = [
    {
      city: 'Atlanta',
      state: 'Georgia',
      medianPrice: '$375,000',
      description: 'Major business hub with film industry and growing tech sector',
      highlights: ['Delta hub', 'Film industry', 'Affordable housing', 'Growing tech scene'],
      status: 'Coming Soon'
    },
    {
      city: 'Phoenix',
      state: 'Arizona', 
      medianPrice: '$485,000',
      description: 'Desert metropolis with retiree influx and semiconductor manufacturing',
      highlights: ['Year-round sunshine', 'Retiree destination', 'Manufacturing growth', 'No state income tax on retirement'],
      status: 'Coming Soon'
    },
    {
      city: 'Nashville',
      state: 'Tennessee',
      medianPrice: '$425,000', 
      description: 'Music City with healthcare industry and no state income tax',
      highlights: ['Music industry', 'Healthcare hub', 'No state income tax', 'Growing population'],
      status: 'Coming Soon'
    },
    {
      city: 'Tampa',
      state: 'Florida',
      medianPrice: '$395,000',
      description: 'Gulf Coast city with growing tech sector and retiree appeal',
      highlights: ['No state income tax', 'Tech growth', 'Beaches nearby', 'Lower cost than Miami'],
      status: 'Coming Soon'
    },
    {
      city: 'Charlotte',
      state: 'North Carolina',
      medianPrice: '$365,000',
      description: 'Banking center with reasonable costs and business-friendly environment',
      highlights: ['Banking hub', 'Reasonable costs', 'Good schools', 'Growing economy'],
      status: 'Coming Soon'
    },
    {
      city: 'Denver',
      state: 'Colorado',
      medianPrice: '$575,000',
      description: 'Mile-high city with outdoor lifestyle and growing tech industry',
      highlights: ['Outdoor recreation', 'Tech industry', 'Legal cannabis', 'Mountain access'],
      status: 'Coming Soon'
    }
  ]

  const marketCategories = [
    {
      title: 'High-Growth Tech Hubs',
      description: 'Markets driven by technology companies and innovation',
      markets: ['Austin', 'Miami', 'Denver', 'Atlanta'],
      icon: Building
    },
    {
      title: 'No State Income Tax',
      description: 'States with favorable tax structures attracting residents',
      markets: ['Austin', 'Dallas', 'Miami', 'Tampa', 'Nashville'],
      icon: DollarSign
    },
    {
      title: 'Corporate Headquarters',
      description: 'Cities with major Fortune 500 company presence',
      markets: ['Dallas', 'Atlanta', 'Charlotte', 'Phoenix'],
      icon: Users
    },
    {
      title: 'Lifestyle Destinations',
      description: 'Markets attracting residents for quality of life',
      markets: ['Miami', 'Austin', 'Denver', 'Nashville'],
      icon: Star
    }
  ]

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'hot': return 'text-red-600 bg-red-50'
      case 'growing': return 'text-green-600 bg-green-50'
      case 'cooling': return 'text-blue-600 bg-blue-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'hot': return <TrendingUp className="h-4 w-4 text-red-600" />
      case 'growing': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'cooling': return <TrendingDown className="h-4 w-4 text-blue-600" />
      default: return <DollarSign className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              Market Intelligence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Local Real Estate Markets
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              In-depth analysis of key real estate markets across the United States, with insights on pricing, trends, and neighborhoods
            </p>
          </div>
        </div>
      </section>

      {/* Featured Markets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Market Analysis</h2>
            <p className="text-xl text-gray-600">Comprehensive guides to our most requested markets</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredMarkets.map((market, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-xl">{market.city}, {market.state}</CardTitle>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {market.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{market.medianPrice}</div>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm ${getTrendColor(market.trend)}`}>
                      {getTrendIcon(market.trend)}
                      <span className="capitalize">{market.trend}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{market.priceChange}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{market.description}</p>
                  <div className="space-y-2 mb-6">
                    {market.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={`/markets/${market.slug}`}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Market Analysis
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Markets by Category</h2>
            <p className="text-xl text-gray-600">Find markets that match your priorities and lifestyle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.markets.map((market, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{market}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Markets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">Additional markets we're analyzing for comprehensive coverage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMarkets.map((market, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow opacity-90">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <CardTitle className="text-lg text-gray-700">{market.city}, {market.state}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-gray-500">
                      {market.status}
                    </Badge>
                  </div>
                  <div className="text-xl font-bold text-gray-700">{market.medianPrice}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{market.description}</p>
                  <div className="space-y-2">
                    {market.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-gray-400" />
                        <span className="text-sm text-gray-500">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Market?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're constantly expanding our market coverage. Let us know which markets you'd like to see analyzed next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 text-lg">
              Request Market Analysis
            </Button>
            <Link 
              to="/tools"
              className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-lg"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Use Our Calculators
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocalMarkets

