import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Home, Calculator, BookOpen, Users, TrendingUp, Shield, Newspaper, Wrench, MapPin, DollarSign, Star, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterCTA from '../components/NewsletterCTA'

const HomePage = () => {
  const coreFeatures = [
    {
      icon: BookOpen,
      title: 'Learn the Basics',
      description: 'Understanding single-family homes and key players in real estate',
      link: '/basics',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Master the Process',
      description: 'Step-by-step guide through the entire home buying journey',
      link: '/buying-process',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Financing 101',
      description: 'Everything about mortgages, loans, and financial preparation',
      link: '/financing',
      color: 'purple'
    },
    {
      icon: Calculator,
      title: 'Tools & Resources',
      description: 'Interactive calculators and downloadable checklists',
      link: '/tools',
      color: 'orange'
    }
  ]

  const newSections = [
    {
      icon: Newspaper,
      title: 'News & Analysis',
      description: 'Latest market trends and expert insights',
      link: '/news/market-update-july-2025',
      color: 'red',
      badge: 'New'
    },
    {
      icon: Wrench,
      title: 'Homeownership Hub',
      description: 'Maintenance guides and renovation ROI analysis',
      link: '/homeownership/seasonal-maintenance',
      color: 'indigo',
      badge: 'New'
    },
    {
      icon: DollarSign,
      title: 'Investment Center',
      description: 'BRRRR strategy and property analysis tools',
      link: '/investment/strategies',
      color: 'emerald',
      badge: 'New'
    },
    {
      icon: MapPin,
      title: 'Local Markets',
      description: 'City-specific buying guides and market data',
      link: '/markets/austin-tx',
      color: 'violet',
      badge: 'New'
    }
  ]

  const highlights = [
    {
      title: 'Interactive Calculators',
      description: 'Mortgage, affordability, renovation ROI, and refinance calculators',
      icon: Calculator
    },
    {
      title: 'Market Analysis',
      description: 'Current trends, local market guides, and investment insights',
      icon: TrendingUp
    },
    {
      title: 'Expert Content',
      description: 'Comprehensive guides from basics to advanced investment strategies',
      icon: Star
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
              Your Complete Real Estate Authority
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Single-Family <span className="text-blue-600">Real Estate</span> with CA CFA Darshan Parekh
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From first-time buyer to seasoned investor, get the knowledge, tools, and market insights you need to make confident real estate decisions in today's dynamic market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/basics">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tools">
                <Button size="lg" variant="outline">
                  Try Our Calculators
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Website Showcase Video */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-300">
              Website Tour
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Complete Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a guided tour through all the features and tools available on our comprehensive real estate educational platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <video 
                controls 
                className="w-full h-auto"
                preload="metadata"
                style={{ maxHeight: '500px' }}
              >
                <source src="/website-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Educational Content</h3>
                <p className="text-sm text-gray-600">Comprehensive guides from basics to advanced topics</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Calculator className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Interactive Tools</h3>
                <p className="text-sm text-gray-600">Mortgage calculators and analysis tools</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Market Insights</h3>
                <p className="text-sm text-gray-600">Latest trends and professional analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Learning Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Real Estate Journey
            </h2>
            <p className="text-lg text-gray-600">
              Master the fundamentals with our comprehensive learning modules
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} to={feature.link}>
                  <Card className={`h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-${feature.color}-500`}>
                    <CardHeader>
                      <Icon className={`h-8 w-8 text-${feature.color}-600 mb-2`} />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* New Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600">
              Recently Added
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Resources & Market Insights
            </h2>
            <p className="text-lg text-gray-600">
              Dive deeper with specialized content for homeowners and investors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link key={index} to={section.link}>
                  <Card className={`h-full hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-${section.color}-500 relative`}>
                    {section.badge && (
                      <Badge className="absolute -top-2 -right-2 bg-green-500 text-white">
                        {section.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <Icon className={`h-8 w-8 text-${section.color}-600 mb-2`} />
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {section.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed in real estate, all in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
                Featured Analysis
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                July 2025 Market Update
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get the latest insights on housing market trends, interest rate impacts, and what it means for buyers and sellers in today's market.
              </p>
              <Link to="/news/market-update-july-2025">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-orange-600" />
                    <span>Try Our Tools</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Mortgage Calculator</span>
                      <Link to="/tools">
                        <Button variant="outline" size="sm">Try Now</Button>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Affordability Calculator</span>
                      <Link to="/tools">
                        <Button variant="outline" size="sm">Try Now</Button>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Investment Analysis</span>
                      <Link to="/investment/property-analysis">
                        <Button variant="outline" size="sm">Try Now</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA variant="default" showLeadMagnet={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Real Estate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful buyers, sellers, and investors who trust our comprehensive guides and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/basics">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/glossary">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Browse Glossary
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

