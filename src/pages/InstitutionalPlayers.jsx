import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Building, TrendingUp, Users, DollarSign, ChevronDown, ExternalLink, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'
import NewsletterCTA from '../components/NewsletterCTA'

const InstitutionalPlayers = () => {
  const [selectedCompany, setSelectedCompany] = useState('all')

  const companies = [
    {
      id: 'amherst-holdings',
      name: 'Amherst Holdings',
      ticker: 'Private',
      type: 'Private',
      portfolio: '~44,000+ homes',
      founded: '1993',
      headquarters: 'Austin, TX',
      description: '🌟 FEATURED: Data-driven investment platform with sophisticated analytics, off-site construction innovation, and $11B+ AUM serving 92,000+ residents',
      keyFeature: 'Data & Analytics Pioneer',
      link: '/institutional-players/amherst-holdings',
      color: 'indigo',
      featured: true
    },
    {
      id: 'invitation-homes',
      name: 'Invitation Homes',
      ticker: 'NYSE: INVH',
      type: 'Public REIT',
      portfolio: '~85,000 homes',
      founded: '2012',
      headquarters: 'Dallas, TX',
      description: 'The nation\'s largest single-family home landlord and market bellwether',
      keyFeature: 'Market Leadership & Scale',
      link: '/institutional-players/invitation-homes',
      color: 'blue'
    },
    {
      id: 'american-homes-4-rent',
      name: 'American Homes 4 Rent',
      ticker: 'NYSE: AMH',
      type: 'Public REIT',
      portfolio: '~60,000 homes',
      founded: '2012',
      headquarters: 'Calabasas, CA',
      description: 'Distinguished by developing entire communities specifically for rental operations',
      keyFeature: 'Build-to-Rent Pioneer',
      link: '/institutional-players/american-homes-4-rent',
      color: 'green'
    },
    {
      id: 'progress-residential',
      name: 'Progress Residential',
      ticker: 'Private (Pretium)',
      type: 'Private',
      portfolio: '~85,000+ homes',
      founded: '2012',
      headquarters: 'Scottsdale, AZ',
      description: 'Private powerhouse with technology-fueled acquisition and management platform',
      keyFeature: 'Tech-Enabled Scale',
      link: '/institutional-players/progress-residential',
      color: 'purple'
    },
    {
      id: 'firstkey-homes',
      name: 'FirstKey Homes',
      ticker: 'Private (Cerberus)',
      type: 'Private',
      portfolio: '~50,000 homes',
      founded: '2015',
      headquarters: 'Marietta, GA',
      description: 'Resident-focused operator backed by Cerberus Capital Management',
      keyFeature: 'Resident Experience Focus',
      link: '/institutional-players/firstkey-homes',
      color: 'orange'
    },
    {
      id: 'tricon-residential',
      name: 'Tricon Residential',
      ticker: 'NYSE: TCN (Acquired by Blackstone)',
      type: 'Private (Post-Acquisition)',
      portfolio: '~38,000 homes',
      founded: '1988',
      headquarters: 'Toronto, Canada',
      description: 'Cross-border strategist with joint venture expertise and resident-focused programs, recently acquired by Blackstone',
      keyFeature: 'Cross-Border & JV Strategy',
      link: '/institutional-players/tricon-residential',
      color: 'teal'
    }
  ]

  const filteredCompanies = selectedCompany === 'all' 
    ? companies 
    : companies.filter(company => company.id === selectedCompany)

  const marketStats = [
    { metric: 'Total SFR Market Size', value: '~20M homes', icon: Building },
    { metric: 'Institutional Ownership', value: '~3-5%', icon: TrendingUp },
    { metric: 'Market Value', value: '$4+ Trillion', icon: DollarSign },
    { metric: 'Major Players', value: '5 Dominant', icon: Users }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Institutional Players
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into the major institutional investors and operators shaping the single-family rental market
          </p>
        </div>

        {/* Market Overview */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardHeader>
              <CardTitle className="text-2xl">Market Overview</CardTitle>
              <CardDescription>
                Understanding the scale and impact of institutional players in single-family rentals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.metric}</div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Filter Dropdown */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">Company Profiles</h2>
            <div className="relative">
              <select 
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Companies</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Company Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className={`${company.featured ? 'border-indigo-300 ring-2 ring-indigo-100 shadow-lg' : `border-${company.color}-200`} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${company.featured ? 'bg-indigo-200 text-indigo-900' : `bg-${company.color}-100 text-${company.color}-800`}`}>
                      {company.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{company.ticker}</span>
                  </div>
                  <CardTitle className={`text-xl ${company.featured ? 'text-indigo-900' : ''}`}>{company.name}</CardTitle>
                  <CardDescription className={`${company.featured ? 'text-indigo-700' : `text-${company.color}-600`} font-medium`}>
                    {company.keyFeature}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{company.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="h-4 w-4 mr-2" />
                      {company.portfolio}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Founded {company.founded}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {company.headquarters}
                    </div>
                  </div>

                  <Link 
                    to={company.link}
                    className={`inline-flex items-center px-4 py-2 ${company.featured ? 'bg-indigo-600 hover:bg-indigo-700' : `bg-${company.color}-600 hover:bg-${company.color}-700`} text-white rounded-lg transition-colors w-full justify-center`}
                  >
                    View Full Profile
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Market Impact Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Impact Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Industry Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Professional property management and maintenance standards</li>
                  <li>• Capital investment in upgrading and maintaining housing stock</li>
                  <li>• Providing rental options for families who prefer flexibility</li>
                  <li>• Technology-driven resident experience improvements</li>
                  <li>• Stabilizing neighborhoods through consistent property upkeep</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-800">Market Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Potential impact on homeownership accessibility</li>
                  <li>• Competition with first-time homebuyers for inventory</li>
                  <li>• Concentration of rental ownership in fewer hands</li>
                  <li>• Concerns about rent pricing and eviction practices</li>
                  <li>• Long-term effects on community dynamics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Industry Trends</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Build-to-Rent Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Increasing focus on developing new communities specifically for rental operations, 
                  led by companies like American Homes 4 Rent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Advanced data analytics, AI-driven property management, and enhanced resident 
                  experience platforms across all major operators.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ESG Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Growing emphasis on environmental, social, and governance initiatives, 
                  including energy efficiency and community impact programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
              <p className="text-gray-600">The institutional real estate landscape is constantly evolving. Get the latest analysis and insights delivered to your inbox.</p>
            </div>
            <NewsletterCTA />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
          <p className="text-gray-700 mb-6">
            The institutional single-family rental market continues to evolve rapidly. 
            Understanding these major players is crucial for anyone involved in real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/news"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Latest Market News
            </Link>
            <Link 
              to="/investment"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Investment Strategies
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InstitutionalPlayers

