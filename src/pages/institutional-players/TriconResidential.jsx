import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Users, DollarSign, TrendingUp, MapPin, Calendar, ExternalLink, BarChart3, Globe, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterCTA from '../../components/NewsletterCTA'

const TriconResidential = () => {
  const companyVitals = [
    { label: 'Company Name', value: 'Tricon Residential Inc.' },
    { label: 'Stock Ticker', value: 'NYSE: TCN & TSX: TCN' },
    { label: 'Headquarters', value: 'Toronto, Ontario, Canada' },
    { label: 'Founded', value: '1988 (as Tricon Capital Group)' },
    { label: 'Portfolio', value: '37,716 single-family rental homes' },
    { label: 'Total Managed Assets', value: 'Approximately $12.5 billion' },
    { label: 'Key Development', value: 'Acquired by Blackstone in 2024 ($3.5B)' }
  ]

  const businessModel = [
    {
      stage: 'Joint Venture Scaling',
      subtitle: 'Partnership-Driven Growth',
      description: 'Instead of relying solely on its own balance sheet, Tricon scales rapidly by partnering with major institutional investors like the Canada Pension Plan Investment Board (CPPIB) and U.S. state retirement systems. These JVs, such as the $2+ billion SFR JV-1, allow Tricon to acquire thousands of homes while deploying less of its own capital, earning fees for managing the assets.',
      icon: Handshake
    },
    {
      stage: 'Dual-Country Focus',
      subtitle: 'Cross-Border Strategy',
      description: 'While its primary business is U.S. single-family rentals, Tricon maintains a significant Canadian portfolio of multi-family (apartment) buildings, primarily in Toronto. This diversifies its geographic and asset class exposure.',
      icon: Globe
    },
    {
      stage: 'Technology-Enabled Operations',
      subtitle: 'Tech-Forward Management',
      description: 'Tricon leverages technology for efficiency. A Revenue Management Platform (RMP) is used for dynamic rent pricing. Residents use a mobile app for payments and maintenance requests, and the company has installed over 72,000 ENERGY STAR appliances and smart home features.',
      icon: TrendingUp
    },
    {
      stage: 'Blackstone Acquisition',
      subtitle: 'Private Equity Partnership',
      description: 'In January 2024, Blackstone Real Estate Partners announced it would acquire Tricon Residential for $3.5 billion, providing access to vast private capital and enabling acceleration of growth without public market pressures.',
      icon: DollarSign
    }
  ]

  const financialMetrics = [
    { metric: 'SFR Rental Income (2023)', value: '$795.3 million' },
    { metric: 'Management & Performance Fees', value: '$54.5 million' },
    { metric: 'Portfolio Occupancy (Q4 2023)', value: '97.1%' },
    { metric: 'Blended Rent Growth', value: '6.0%' },
    { metric: 'Annualized Turnover Rate', value: '16.8%' },
    { metric: 'Total Debt Outstanding', value: '$5.86 billion' }
  ]

  const vantagePrograms = [
    {
      name: 'Down Payment Assistance',
      description: 'Up to $5,000 to help qualified residents buy their first home'
    },
    {
      name: 'Financial Literacy',
      description: 'Access to coaching and resources to improve credit scores and financial health'
    },
    {
      name: 'Emergency Assistance',
      description: 'A fund to help residents facing unexpected hardship'
    }
  ]

  const esgGoals = [
    {
      category: 'Environmental Goals',
      description: 'Tricon has set a target for 50% reduction in GHG emissions by 2030 and aims for net-zero by 2050, aligning with the Paris Agreement.'
    },
    {
      category: 'Corporate Culture',
      description: 'The company has achieved 100% pay equity based on a third-party audit and delivered 38,000 hours of corporate training in 2023.'
    },
    {
      category: 'Smart Home Features',
      description: 'Installed over 72,000 ENERGY STAR appliances and smart home features to enhance home quality and efficiency.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 text-teal-600 border-teal-600">
              Institutional Players
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Cross-Border Strategist: An In-Depth Profile of Tricon Residential
            </h1>
            <p className="text-xl text-gray-600">
              A unique cross-border force in North American rental housing with deep Canadian roots and massive U.S. operations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With deep roots in Canada and a massive operational footprint in the U.S. Sun Belt, Tricon Residential (NYSE: TCN, TSX: TCN) represents a unique cross-border force in North American rental housing. Founded long before the modern single-family rental (SFR) boom, Tricon evolved from a developer finance firm into a sophisticated, publicly traded institution managing nearly 38,000 homes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This profile explores Tricon's distinct history, its reliance on strategic joint ventures, its resident-focused programs, and its recent landmark acquisition by private equity titan Blackstone, a move set to reshape its future.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Company Overview & Vitals</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyVitals.map((vital, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-sm text-gray-600 mb-1">{vital.label}</div>
                  <div className="text-lg font-semibold text-gray-900">{vital.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-teal-50 border-teal-200">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Development</h3>
              <p className="text-gray-700">
                In early 2024, Blackstone agreed to acquire Tricon in a $3.5 billion all-cash transaction, with plans to take the company private upon approval. This provides Tricon with access to Blackstone's vast private capital, enabling it to accelerate growth without the pressures of the public market.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Tricon Business Model: A Partnership-Driven Approach</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tricon's strategy differs from its peers, emphasizing large-scale joint ventures (JVs) and a dual-country focus. This approach allows for rapid scaling while managing capital efficiency.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {businessModel.map((stage, index) => {
              const Icon = stage.icon
              return (
                <Card key={index} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-teal-50 to-cyan-100 p-6 flex flex-col justify-center items-center">
                      <Icon className="h-12 w-12 text-teal-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 text-center">{stage.stage}</h3>
                      <p className="text-sm text-teal-600 text-center">{stage.subtitle}</p>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Financials & Operations: A Look at the Numbers</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a public company, Tricon's financial reports provide a clear view into its operational scale and performance metrics.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-sm text-gray-600 mb-1">{metric.metric}</div>
                  <div className="text-xl font-bold text-teal-600">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG & Resident Programs */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">ESG & Resident-Focused Initiatives</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tricon places a strong public emphasis on its ESG (Environmental, Social, and Governance) platform and resident well-being through innovative programs.
              </p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Tricon Vantage Program</h3>
            <p className="text-gray-700 mb-6">This is their flagship social impact initiative, offering residents unique benefits:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {vantagePrograms.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {esgGoals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{goal.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation & Controversies */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Reputation & Controversies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">Positive Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• A+ rating from the Better Business Bureau</li>
                  <li>• Strong resident retention with 16.8% annualized turnover rate</li>
                  <li>• Innovative resident assistance programs through Tricon Vantage</li>
                  <li>• 100% pay equity achievement based on third-party audit</li>
                  <li>• Significant investment in energy efficiency and smart home features</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-800">Challenges & Scrutiny</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li>• Class-action lawsuit (Williams v. Tricon) alleging discriminatory screening policies</li>
                  <li>• Online reviews citing maintenance delays and billing disputes</li>
                  <li>• $540,000 spent on federal lobbying in 2024 for housing policy influence</li>
                  <li>• General concerns about institutional ownership impact on housing affordability</li>
                  <li>• Transition challenges following Blackstone acquisition</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-600">The institutional real estate landscape is constantly evolving. Get the latest analysis and insights delivered to your inbox.</p>
          </div>
          <NewsletterCTA />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More Institutional Players</h2>
            <p className="text-gray-700 mb-6">
              Tricon Residential represents just one approach to the single-family rental market. 
              Discover how other major players are shaping the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/institutional-players"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                View All Players
              </Link>
              <Link 
                to="/investment"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Investment Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TriconResidential

