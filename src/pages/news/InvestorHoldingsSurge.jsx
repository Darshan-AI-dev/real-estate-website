import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Building2, DollarSign, Calendar, ExternalLink, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CommentSection from '../../components/CommentSection'

const InvestorHoldingsSurge = () => {
  const keyStats = [
    { label: 'Investor Share', value: '30%', description: 'Record high for single-family purchases', icon: TrendingUp },
    { label: 'Small Investors', value: '25%', description: 'Owners of under 100 homes', icon: Users },
    { label: 'Large Institutional', value: '5%', description: 'Down from previous highs', icon: Building2 },
    { label: 'Target Price Range', value: '$250K', description: 'Typical investor focus area', icon: DollarSign }
  ]

  const marketImpacts = [
    {
      title: 'Builder Incentives Surge',
      description: 'Builders in oversupplied markets like Texas and Florida are offering steep discounts and incentives to attract cash-ready investors.',
      impact: 'Positive for Investors'
    },
    {
      title: 'Institutional Pullback',
      description: 'Major platforms like Invitation Homes and Amherst have slowed their buying pace amid rising acquisition costs and regulatory scrutiny.',
      impact: 'Market Shift'
    },
    {
      title: 'Small Investor Opportunity',
      description: 'Nimble smaller operators are gaining market share as large institutions become more selective.',
      impact: 'Opportunity'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-green-200 border-green-300">
              Market Analysis • July 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Investor Holdings Surge to Record 30%
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Small investors dominate as institutional buyers pull back from single-family market
            </p>
            <div className="flex items-center justify-center space-x-4 text-green-200">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>July 25, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <ExternalLink className="h-4 w-4" />
                <span>Wall Street Journal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Breakdown</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-600">{stat.value}</CardTitle>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Small Investors Lead the Charge</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              According to property analytics firm Cotality, investor purchases of single-family homes hit a record 30% in 2025, 
              representing a significant shift in market dynamics. This surge is driven largely by small investors owning under 
              100 homes, who now represent about 25% of the market—a dramatic increase from previous years.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The composition of investor activity has fundamentally changed. Large institutional buyers, once the dominant 
              force in the single-family rental market, have pulled back to roughly 5% amid rising acquisition costs and 
              increasing regulatory scrutiny. This retreat has created opportunities for smaller, more nimble operators who 
              can move quickly and adapt to local market conditions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Builder Response to Investor Demand</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Builders in oversupplied markets such as Texas and Florida have responded aggressively to attract these 
              cash-ready buyers. They're offering steep discounts and incentives—including significant price cuts on 
              move-in-ready models—to clear inventory and maintain cash flow. These investors typically target homes 
              in the $250,000 range, making them ideal for rental or flip strategies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The shift represents a fundamental change in how the single-family rental market operates. While institutional 
              players like Invitation Homes and Amherst have slowed their buying pace, individual investors and small 
              investment groups are filling the gap, often with more flexible acquisition criteria and faster decision-making processes.
            </p>
          </div>
        </div>
      </section>

      {/* Market Impacts */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Implications</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {marketImpacts.map((impact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{impact.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {impact.impact}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Expert Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This shift toward smaller investors represents a maturation of the single-family rental market. 
                  As institutional players face increased scrutiny and higher acquisition costs, individual investors 
                  are stepping in to fill the gap.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The trend suggests that the SFR market is becoming more democratized, with opportunities spreading 
                  beyond large institutions to individual entrepreneurs and small investment groups. This could lead 
                  to more diverse management approaches and potentially better responsiveness to local market conditions.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  However, the high percentage of investor activity—now at 30%—continues to raise concerns about 
                  housing affordability and availability for owner-occupants, particularly first-time homebuyers 
                  who must compete with cash offers from investors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Coverage</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/institutional-players" className="hover:text-blue-600">
                    Institutional Players Overview
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive analysis of major institutional SFR operators and their strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/investment" className="hover:text-blue-600">
                    Investment Strategies
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Learn about different approaches to real estate investment and analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  <Link to="/markets" className="hover:text-blue-600">
                    Local Market Analysis
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">
                  Detailed insights into key real estate markets across the United States.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommentSection 
            articleId="investor-holdings-surge-2025"
            articleTitle="Investor Holdings Surge to Record 30%"
          />
        </div>
      </section>
    </div>
  )
}

export default InvestorHoldingsSurge

