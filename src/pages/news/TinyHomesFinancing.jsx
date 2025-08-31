import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Home, Users, Building, MapPin, DollarSign, CheckCircle, BarChart3, Calendar, ExternalLink, ArrowRight, Building2, Target, Zap, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'
import NewsletterCTA from '../../components/NewsletterCTA'

const TinyHomesFinancing = () => {
  const keyMetrics = [
    { label: 'Existing ADUs', value: '1.4M+', subtitle: 'Single-family homes with ADUs (2020)', icon: Home, color: 'blue' },
    { label: 'Housing Shortage', value: '4M', subtitle: 'Homes short nationwide', icon: Building, color: 'red' },
    { label: 'Cost Burdened', value: '33%', subtitle: 'Households spending >30% on housing', icon: DollarSign, color: 'orange' },
    { label: 'California ADUs', value: '23K', subtitle: 'New ADUs built in 2023', icon: TrendingUp, color: 'green' }
  ]

  const statePrograms = [
    { state: 'California', aduBuilt2023: '23,000', growthSince2018: '7x', status: 'Leading' },
    { state: 'Colorado', aduBuilt2023: 'N/A', growthSince2018: 'N/A', status: 'Mandated' },
    { state: 'Oregon', aduBuilt2023: 'N/A', growthSince2018: 'N/A', status: 'Mandated' },
    { state: 'Arizona', aduBuilt2023: 'N/A', growthSince2018: 'N/A', status: 'Mandated' },
    { state: 'Hawaii', aduBuilt2023: 'N/A', growthSince2018: 'N/A', status: 'Mandated' }
  ]

  const billFeatures = [
    {
      feature: 'FHA Backing',
      description: 'Government backing for second mortgages to finance ADU construction',
      impact: 'Reduces lender risk',
      icon: CheckCircle
    },
    {
      feature: 'GSE Purchase',
      description: 'Fannie Mae and Freddie Mac can purchase and securitize ADU loans',
      impact: 'Improves liquidity',
      icon: Building2
    },
    {
      feature: 'Bipartisan Support',
      description: '16+ Democratic and Republican House members endorsing',
      impact: 'Political viability',
      icon: Users
    },
    {
      feature: 'Industry Backing',
      description: 'National Association of Home Builders and other groups support',
      impact: 'Industry alignment',
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-blue-200 border-blue-300">
              🏠 HOUSING INNOVATION
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making <span className="text-blue-300">Tiny Homes</span> Easier to Finance
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Bipartisan congressional bill aims to create government-backed loan program for accessory dwelling units to tackle housing shortage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Original WSJ Article
              </Button>
              <Link to="/tools/affordability-calculator">
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-300 hover:bg-blue-800">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Affordability Calculator
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Housing Crisis by the Numbers</h2>
            <p className="text-lg text-gray-600">Key statistics driving the need for ADU financing solutions</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bipartisan Solution to Housing Crisis</h2>
            
            <p className="text-gray-700 mb-6">
              Representatives Sam Liccardo (D-CA) and Andrew Garbarino (R-NY) have unveiled bipartisan legislation to create a government-backed loan program for homeowners to finance the construction of accessory dwelling units (ADUs) on their properties. The bill represents a rare congressional effort to address the nation's severe housing shortage through innovative financing mechanisms.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Congressional Action</h3>
                  <p className="text-blue-800">
                    "This is a really pressing issue for Americans, but it has not become nearly pressing enough for Congress." - Rep. Sam Liccardo (D-CA)
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">What Are ADUs?</h3>
            <p className="text-gray-700 mb-6">
              Accessory dwelling units are small, studio-style housing units, usually between 600 and 1,200 square feet, that can supplement an existing home in the backyard, garage, or basement. At least 1.4 million single-family homes in the U.S. had such units as of 2020, with popularity rising as homeowners seek ways to lower housing costs by building and renting out these units.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">The Financing Gap</h3>
            <p className="text-gray-700 mb-6">
              As ADU popularity grows, so do the financing gaps. Not all homeowners who want a tiny home add-on can afford to build one. Because ADUs are still a nascent, less traditional construction product, lending options are few and far between. This means more ADUs skew luxury, built by homeowners who can pay all cash or easily secure a home-equity loan.
            </p>
          </div>
        </div>
      </section>

      {/* Bill Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proposed Legislation Features</h2>
            <p className="text-lg text-gray-600">Key components of the bipartisan ADU financing bill</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {billFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                    <Badge variant="outline" className="text-xs">
                      {feature.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">State ADU Programs</h2>
            <p className="text-lg text-gray-600">States leading the way in ADU development and regulation</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">State</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ADUs Built (2023)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Growth Since 2018</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Program Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {statePrograms.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{program.state}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{program.aduBuilt2023}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{program.growthSince2018}</td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={program.status === 'Leading' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {program.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* California Success Story */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">California's ADU Boom</h2>
            <p className="text-lg text-gray-600">How policy reform drove dramatic growth in accessory dwelling units</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">Dramatic Growth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">2018 ADUs Built:</span>
                  <span className="text-sm font-semibold">~3,300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">2023 ADUs Built:</span>
                  <span className="text-sm font-semibold text-green-600">23,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Growth Multiple:</span>
                  <span className="text-sm font-semibold text-green-600">7x Increase</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Policy Reforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Streamlined permitting processes</p>
                <p className="text-sm text-gray-700">• Reduced parking requirements</p>
                <p className="text-sm text-gray-700">• Eliminated owner-occupancy requirements</p>
                <p className="text-sm text-gray-700">• Standardized approval timelines</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Perspective */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Insights</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sean Roberts</h3>
                  <p className="text-sm text-gray-600 mb-3">CEO, Villa Homes (California)</p>
                  <p className="text-gray-700">
                    "Financing is by far the No. 1 blocker for more ADUs. Over the years, many of our company's potential projects haven't even moved forward to the contract stage because clients can't get a loan that works for them."
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scott Wild</h3>
                  <p className="text-sm text-gray-600 mb-3">Consulting Principal, John Burns Research and Consulting</p>
                  <p className="text-gray-700">
                    "If residents have an understandable and reliable means of financing ADUs, it puts the spotlight on localities as the thing holding them back. This could indirectly pressure local governments to reform zoning laws and building codes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Impact */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Potential Market Impact</h2>
            <p className="text-lg text-gray-600">How improved ADU financing could transform housing supply</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-900">Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Increased housing supply without new land</p>
                <p className="text-sm text-gray-700">• Homeowner income generation opportunities</p>
                <p className="text-sm text-gray-700">• Faster development than multifamily projects</p>
                <p className="text-sm text-gray-700">• Multigenerational housing solutions</p>
                <p className="text-sm text-gray-700">• Reduced infrastructure burden</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <Building className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-orange-900">Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700">• Local zoning restrictions remain</p>
                <p className="text-sm text-gray-700">• NIMBY opposition in neighborhoods</p>
                <p className="text-sm text-gray-700">• Appraisal standardization needed</p>
                <p className="text-sm text-gray-700">• Construction cost considerations</p>
                <p className="text-sm text-gray-700">• Utility and infrastructure capacity</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Housing Finance Tools</h2>
            <p className="text-lg text-gray-600">Calculate affordability and financing options for your housing needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tools/affordability-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Affordability Calculator</CardTitle>
                  <CardDescription>Calculate what you can afford to build</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/mortgage-calculator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Mortgage Calculator</CardTitle>
                  <CardDescription>Calculate monthly payments and costs</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools/investment-analysis">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>Analyze ADU rental potential</CardDescription>
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
                July 18, 2025
              </span>
              <span className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                Wall Street Journal
              </span>
              <Badge variant="outline">Housing Policy</Badge>
              <Badge variant="outline">ADU Financing</Badge>
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
      <CommentSection articleId="tiny-homes-financing" />

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA />
        </div>
      </section>
    </div>
  )
}

export default TinyHomesFinancing

