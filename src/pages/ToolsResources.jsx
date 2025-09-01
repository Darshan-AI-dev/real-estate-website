import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Home, TrendingUp, DollarSign, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const ToolsResources = () => {
  const calculators = [
    {
      title: 'Mortgage Calculator',
      description: 'Calculate monthly payments, total interest, and amortization schedules',
      icon: Calculator,
      link: '/tools/mortgage-calculator',
      color: 'blue'
    },
    {
      title: 'Affordability Calculator',
      description: 'Determine how much house you can afford based on your income',
      icon: Home,
      link: '/tools/affordability-calculator',
      color: 'green'
    },
    {
      title: 'Property Comparison',
      description: 'Compare multiple properties side by side with key metrics',
      icon: TrendingUp,
      link: '/tools/property-comparison',
      color: 'purple'
    },
    {
      title: 'Investment Analysis',
      description: 'Analyze rental property returns, cash flow, and ROI',
      icon: DollarSign,
      link: '/tools/investment-analysis',
      color: 'orange'
    }
  ]

  const resources = [
    {
      title: 'First-Time Buyer Checklist',
      description: 'Complete step-by-step checklist for first-time home buyers',
      type: 'PDF Download',
      size: '2.1 MB'
    },
    {
      title: 'Home Inspection Checklist',
      description: 'Comprehensive checklist for evaluating property condition',
      type: 'PDF Download',
      size: '1.8 MB'
    },
    {
      title: 'Mortgage Pre-Approval Guide',
      description: 'Everything you need to know about getting pre-approved',
      type: 'PDF Download',
      size: '1.5 MB'
    },
    {
      title: 'Real Estate Investment Spreadsheet',
      description: 'Excel template for analyzing rental property investments',
      type: 'Excel Download',
      size: '0.8 MB'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tools & Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional calculators and downloadable resources to help you make informed real estate decisions
            </p>
          </div>
        </div>
      </div>

      {/* Calculators Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interactive Calculators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our professional-grade calculators to analyze mortgages, affordability, and investment opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {calculators.map((calc, index) => {
            const Icon = calc.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 w-12 h-12 bg-${calc.color}-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 text-${calc.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{calc.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {calc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={calc.link}>
                    <Button className="w-full">
                      Use Calculator
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Resources Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Downloadable Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free guides, checklists, and templates to support your real estate journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="secondary">{resource.type}</Badge>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our tools are designed to give you the information you need, but every situation is unique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact an Expert
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Browse All Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ToolsResources

