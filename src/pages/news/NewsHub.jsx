import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, TrendingUp, Home, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterCTA from '../../components/NewsletterCTA'

const NewsHub = () => {
  const featuredArticles = [
    {
      title: 'The 6% Mortgage Rate That Could Change Everything',
      description: 'Experts believe a modest decline to 6% could inject much-needed momentum into home sales and help revive the broader U.S. housing market.',
      link: '/news/mortgage-rate-magic',
      category: 'Mortgage Market',
      date: 'July 2025',
      featured: true,
      icon: TrendingUp
    },
    {
      title: 'Brookfield\'s New Real Estate Head Sees Return of Mega Deals',
      description: 'New leadership at Brookfield Asset Management signals confidence in commercial real estate recovery and large-scale transaction opportunities.',
      link: '/news/brookfield-mega-deals',
      category: 'Commercial Real Estate',
      date: 'July 2025',
      featured: true,
      icon: Home
    },
    {
      title: 'America\'s Next Big Land Grab',
      description: 'Homebuilders are staking out huge swaths of land through innovative "land banking" strategies, betting on future housing demand.',
      link: '/news/land-banking-strategy',
      category: 'Industry Analysis',
      date: 'July 2025',
      featured: true,
      icon: Users
    },
    {
      title: 'Housing Starts Decline Signals Strategy Shift',
      description: 'Single-family construction weakened in June, but analysts see potential positive signs for builder margins as industry prioritizes profitability.',
      link: '/news/housing-starts-decline',
      category: 'Market Analysis',
      date: 'July 2025',
      featured: true,
      icon: TrendingUp
    },
    {
      title: 'Institutional Landlords See New Competition from Accidental Source',
      description: 'Unexpected competitors emerge in the single-family rental market, challenging traditional institutional players with innovative approaches.',
      link: '/news/accidental-landlords',
      category: 'Industry Analysis',
      date: 'July 2025',
      featured: true,
      icon: Users
    },
    {
      title: 'Making Tiny Homes Easier to Finance',
      description: 'Bipartisan congressional bill aims to create government-backed loan program for accessory dwelling units to tackle housing shortage.',
      link: '/news/tiny-homes-financing',
      category: 'Housing Policy',
      date: 'July 2025',
      featured: true,
      icon: Home
    },
    {
      title: 'Investor Holdings Surge to Record 30%',
      description: 'Small investors dominate as institutional buyers pull back from single-family market amid rising costs and regulatory scrutiny.',
      link: '/news/investor-holdings-surge',
      category: 'Market Analysis',
      date: 'July 2025',
      featured: false,
      icon: TrendingUp
    },
    {
      title: '30-Year Fixed Mortgage Rate Holds at 6.74%',
      description: 'Rates remain near two-decade highs as Fed policy uncertainty and inflation concerns continue to constrain affordability.',
      link: '/news/mortgage-rates-hold',
      category: 'Mortgage Market',
      date: 'July 2025',
      featured: false,
      icon: Home
    },
    {
      title: 'Build-to-Rent Starts Remain Robust at 84,000 Units',
      description: 'BTR sector stabilizes at 8.4% of single-family starts, indicating sustainable market equilibrium rather than rapid expansion.',
      link: '/news/build-to-rent-growth',
      category: 'Industry Analysis',
      date: 'March 2025',
      featured: false,
      icon: Users
    },
    {
      title: 'US Housing Market Finds a New Normal in Summer 2025',
      description: 'Prices stabilize as inventory rises modestly. Our comprehensive analysis of current market conditions and what they mean for buyers and sellers.',
      link: '/news/market-update-july-2025',
      category: 'Market Analysis',
      date: 'July 2025',
      featured: false,
      icon: TrendingUp
    },
    {
      title: 'The Rise of "Home Office Plus" - How Remote Work is Reshaping Home Preferences',
      description: 'Beyond the basic home office, buyers are seeking dedicated spaces for video calls, storage, and work-life separation.',
      link: '/news/home-office-plus-trend',
      category: 'Trends',
      date: 'July 2025',
      featured: false,
      icon: Home
    }
  ]

  const upcomingTopics = [
    'Interest Rate Predictions for Q4 2025',
    'The Impact of AI on Real Estate Valuations',
    'Climate Change and Property Values',
    'Generation Z Home Buying Preferences',
    'The Future of Suburban vs Urban Living'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
              News & Analysis
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Estate Market Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of market trends with expert analysis, data-driven insights, and actionable intelligence for today's real estate landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Analysis</h2>
            <p className="text-gray-600">Our latest deep-dive into market conditions</p>
          </div>
          
          {featuredArticles.filter(article => article.featured).map((article, index) => {
            const Icon = article.icon
            return (
              <Card key={index} className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">{article.title}</CardTitle>
                      <CardDescription className="text-lg">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={article.link}>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Read Full Analysis
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                    <Icon className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Articles</h2>
            <p className="text-gray-600">Latest insights and market updates</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.filter(article => !article.featured).map((article, index) => {
              const Icon = article.icon
              return (
                <Link key={index} to={article.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
              <div className="space-y-4">
                {upcomingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                    <div className="bg-blue-100 p-1 rounded">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <NewsletterCTA variant="default" showLeadMagnet={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA variant="footer" />
    </div>
  )
}

export default NewsHub

