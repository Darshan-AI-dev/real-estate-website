import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Users, DollarSign, TrendingUp, MapPin, Calendar, ExternalLink, BarChart3, Star, Target, Zap, Shield, Award, FileText, Download, Clock, ArrowRight, Factory, Home, Wrench, Globe, CheckCircle, AlertTriangle, Lightbulb, PieChart, Briefcase, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NewsletterCTA from '../../components/NewsletterCTA'

const AmherstHoldings = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [showSecuritizations, setShowSecuritizations] = useState(false)
  const [showInnovations, setShowInnovations] = useState(false)

  const keyStats = [
    { label: 'Assets Under Management', value: '$18.6B', subtitle: 'as of late 2024', icon: DollarSign, color: 'blue' },
    { label: 'Homes Acquired', value: '57,000+', subtitle: '≈$10B total investment', icon: Building2, color: 'green' },
    { label: 'Homes Renovated', value: '55,000+', subtitle: 'by late 2023', icon: Wrench, color: 'purple' },
    { label: 'Repairs Investment', value: '$1.8B', subtitle: 'Total invested in improvements', icon: TrendingUp, color: 'orange' },
    { label: 'StudioBuilt Production', value: '350+', subtitle: 'modular homes by fall 2024', icon: Factory, color: 'indigo' },
    { label: 'Geographic Presence', value: '30+', subtitle: 'markets across 19 states', icon: MapPin, color: 'teal' }
  ]

  const executiveSummary = {
    title: "The Housing Solutions Pioneer",
    description: "Amherst Group is a large U.S. real estate investment, development and operating platform focused on single-family rental (SFR) housing. As of late 2024, Amherst manages roughly $18.6 billion of capital across SFR communities, commercial real estate and mortgage-backed securities.",
    keyPoints: [
      "57,000 homes acquired since 1993 (≈$10 billion investment)",
      "$1.8 billion invested in property repairs and renovations",
      "55,000+ homes renovated across portfolio by 2023",
      "Innovative StudioBuilt factory producing 350+ modular homes",
      "First for-sale community 'Firefly' with 145 homes in Lockhart, Texas"
    ]
  }

  const studioBuiltInnovation = {
    overview: "The centerpiece of Amherst's innovation strategy is StudioBuilt, an indoor factory in Cuero, Texas where modular home components are manufactured under controlled conditions.",
    advantages: [
      {
        title: "Speed",
        description: "StudioBuilt homes can be built at roughly half the timeline of traditional stick-built homes, completing in about four months end-to-end.",
        icon: Zap,
        color: "blue"
      },
      {
        title: "Quality",
        description: "Factory environment allows for tighter construction tolerances with 140-point inspection process ensuring consistency and code compliance.",
        icon: CheckCircle,
        color: "green"
      },
      {
        title: "Cost & Efficiency",
        description: "Bulk purchase of materials and repeated production cycles achieve 5-10% cost savings versus traditional methods on large projects.",
        icon: DollarSign,
        color: "purple"
      },
      {
        title: "Design Flexibility",
        description: "Firefly homes come in three- and four-bedroom layouts with ten exterior elevations and multiple interior finish packages.",
        icon: Settings,
        color: "orange"
      }
    ],
    production: "By late 2024, Amherst had produced 350+ modular homes since launching StudioBuilt in early 2023, with plans for manufacturing hubs including a new facility in Florida planned for 2025."
  }

  const businessModel = [
    {
      step: '01',
      title: 'Acquire & Source',
      subtitle: 'Strategic Land Acquisition',
      description: 'Bulk acquisitions of vacant or underutilized lots, distressed portfolios, and small home clusters, especially in secondary markets with strong growth fundamentals.',
      kpi: '57,000 homes acquired since inception',
      icon: Target,
      color: 'blue',
      details: 'Focus on Sun Belt and growth markets, particularly Texas and Florida, with data-driven market selection based on demographic trends and housing shortages.'
    },
    {
      step: '02',
      title: 'Develop & Build',
      subtitle: 'StudioBuilt Innovation',
      description: 'Revolutionary modular construction through indoor factory in Cuero, Texas, producing precision-built homes with 140-point inspection process.',
      kpi: '350+ modular homes produced by fall 2024',
      icon: Factory,
      color: 'green',
      details: 'Factory-built homes meet all local building codes, constructed 50% faster than site-built homes, with plans for additional manufacturing hubs.'
    },
    {
      step: '03',
      title: 'Renovate & Improve',
      subtitle: 'Quality Enhancement',
      description: 'Comprehensive renovation program bringing properties to institutional standards with professional construction management and quality controls.',
      kpi: '55,000+ homes renovated, $1.8B invested',
      icon: Wrench,
      color: 'purple',
      details: 'Standardized renovation processes ensure consistent quality across portfolio, enhancing property values and rental appeal.'
    },
    {
      step: '04',
      title: 'Lease & Manage',
      subtitle: 'Professional Operations',
      description: 'Full-service property management with screening standards, lease compliance enforcement, and high renewal rates targeting workforce tenants.',
      kpi: '90%+ portfolio occupancy maintained',
      icon: Users,
      color: 'orange',
      details: 'Professional property management with strict qualification standards and robust tenant services ensuring stable cash flows.'
    },
    {
      step: '05',
      title: 'Finance & Scale',
      subtitle: 'Capital Markets Excellence',
      description: 'Sophisticated financing through securitizations, joint ventures, and strategic partnerships providing capital for continued growth.',
      kpi: 'Multiple AMSR securitizations completed',
      icon: DollarSign,
      color: 'indigo',
      details: 'Mix of equity and debt financing including mortgage securitizations and partnerships with institutional investors.'
    }
  ]

  const leadership = [
    {
      name: 'Sean Dobson',
      title: 'CEO, Chairman & CIO',
      description: 'Founder and visionary leader since 1993. Deep background in structured finance and mortgage-backed securities, driving the company\'s data-driven, capital markets-focused approach to real estate.',
      tenure: 'Since 1993',
      expertise: 'Structured Finance, Capital Markets'
    },
    {
      name: 'Drew Flahive',
      title: 'President',
      description: 'Oversees Amherst Residential development business including acquisitions, construction, leasing, and capital raising. Led $10+ billion in U.S. single-family housing investments.',
      tenure: 'Since 2015',
      expertise: 'Real Estate Capital Markets, Development'
    },
    {
      name: 'Spencer Lindahl',
      title: 'Vice Chairman & Co-Founder',
      description: 'Co-founder championing StudioBuilt initiative and positioning Amherst as "innovative housing solutions provider" building on vacant urban lots.',
      tenure: 'Co-Founder',
      expertise: 'Innovation, Strategic Development'
    },
    {
      name: 'Jim Hitt',
      title: 'Co-Founder',
      description: 'Co-founder emphasizing responsible growth and community impact, working with senior management on strategic initiatives and market expansion.',
      tenure: 'Co-Founder',
      expertise: 'Operations, Community Relations'
    },
    {
      name: 'David Schwarz',
      title: 'Head of Commercial Real Estate',
      description: 'Leads commercial real estate division and StudioBuilt operations, emphasizing factory model benefits: "allows us to build faster and more precise at the same cost."',
      tenure: 'Senior Executive',
      expertise: 'Commercial Real Estate, Construction'
    },
    {
      name: 'Peter Campbell',
      title: 'General Counsel',
      description: 'Appointed September 2024. Former Americas GC for Lendlease with experience in real estate development and finance. Oversees legal matters, compliance, and regulatory affairs.',
      tenure: 'Since Sep 2024',
      expertise: 'Real Estate Law, Compliance'
    }
  ]

  const geographicFocus = [
    {
      region: 'Texas',
      description: 'Primary focus with headquarters in Austin, development teams in Dallas and Houston. Home to StudioBuilt factory in Cuero.',
      highlights: ['StudioBuilt factory location', 'Firefly community in Lockhart', 'Strong population growth'],
      icon: Star
    },
    {
      region: 'Florida',
      description: 'Large presence in Tampa/St. Pete area with tens of thousands of homes. Recent $500M+ financing for 20+ properties in Pinellas County.',
      highlights: ['Tens of thousands of homes', '$500M+ recent acquisition', 'Public-private partnerships'],
      icon: Building2
    },
    {
      region: 'Southeast',
      description: 'Expanding presence through partnerships with local operators across Southeastern states, targeting high-growth Sun Belt markets.',
      highlights: ['Partnership-driven expansion', 'Sun Belt focus', 'Growth market targeting'],
      icon: TrendingUp
    }
  ]

  const innovationHighlights = [
    {
      title: 'Modular Manufacturing Excellence',
      description: 'StudioBuilt factory produces precision-built homes with 140-point inspection process, achieving 50% faster construction times.',
      metrics: ['350+ homes produced', '50% faster construction', '140-point inspection'],
      icon: Factory
    },
    {
      title: 'Firefly Community Pioneer',
      description: 'First for-sale community featuring 145 StudioBuilt homes in Lockhart, Texas, offering homeownership below regional market median.',
      metrics: ['145 homes planned', 'Below-market pricing', 'Multiple design options'],
      icon: Home
    },
    {
      title: 'Public-Private Partnerships',
      description: 'Collaboration with City of St. Petersburg using HUD voucher programs to transition public housing tenants into newly built Amherst homes.',
      metrics: ['Government partnerships', 'Affordable housing focus', 'Community impact'],
      icon: Briefcase
    }
  ]

  const financialHighlights = [
    {
      category: 'Portfolio Scale',
      metrics: [
        { label: 'Total AUM', value: '$18.6B', change: 'as of late 2024' },
        { label: 'Homes Acquired', value: '57,000+', change: '≈$10B investment' },
        { label: 'Renovation Investment', value: '$1.8B', change: 'total invested' }
      ]
    },
    {
      category: 'Operational Performance',
      metrics: [
        { label: 'Portfolio Occupancy', value: '90%+', change: 'consistently maintained' },
        { label: 'Homes Renovated', value: '55,000+', change: 'by late 2023' },
        { label: 'Renewal Rates', value: 'High', change: 'stable occupancy driver' }
      ]
    },
    {
      category: 'Innovation Metrics',
      metrics: [
        { label: 'StudioBuilt Production', value: '350+', change: 'homes by fall 2024' },
        { label: 'Construction Speed', value: '50%', change: 'faster than traditional' },
        { label: 'Cost Savings', value: '5-10%', change: 'vs traditional methods' }
      ]
    }
  ]

  const strategicInitiatives = [
    {
      title: 'Scale StudioBuilt Production',
      description: 'Expand modular manufacturing capacity with additional facilities, including planned Florida hub for 2025.',
      priority: 'High',
      timeline: '2024-2025',
      icon: Factory
    },
    {
      title: 'Balance Rental-Sale Strategy',
      description: 'Optimize mix of rental and for-sale properties to hedge against interest rate cycles and market conditions.',
      priority: 'High',
      timeline: 'Ongoing',
      icon: PieChart
    },
    {
      title: 'Deepen Community Partnerships',
      description: 'Expand public-private partnerships and government collaborations for affordable housing initiatives.',
      priority: 'Medium',
      timeline: 'Ongoing',
      icon: Briefcase
    },
    {
      title: 'Technology & Data Analytics',
      description: 'Invest in market analytics, tenant technology, and construction automation to maintain competitive edge.',
      priority: 'Medium',
      timeline: '2024-2025',
      icon: Lightbulb
    }
  ]

  const riskFactors = [
    {
      category: 'Market Risks',
      risks: [
        'Interest rate sensitivity affecting homebuying demand',
        'Potential normalization of mortgage rates reducing SFR demand',
        'Regional market oversupply in certain metros'
      ],
      mitigation: 'Balanced rental-sale strategy, geographic diversification, strong capital structure'
    },
    {
      category: 'Regulatory Risks',
      risks: [
        'Land-use approval delays and zoning restrictions',
        'Tenant protection laws and rent control measures',
        'Potential institutional landlord regulations'
      ],
      mitigation: 'Proactive compliance, community engagement, legal expertise with Peter Campbell hire'
    },
    {
      category: 'Operational Risks',
      risks: [
        'Supply chain disruptions affecting modular production',
        'Construction cost inflation and material tariffs',
        'Quality control challenges with rapid scaling'
      ],
      mitigation: 'Vertical integration, supplier diversification, rigorous inspection processes'
    }
  ]

  const tableOfContents = [
    { id: 'overview', label: 'Executive Overview', icon: Star },
    { id: 'business-model', label: 'Business Model', icon: Building2 },
    { id: 'innovation', label: 'StudioBuilt Innovation', icon: Factory },
    { id: 'leadership', label: 'Leadership Team', icon: Users },
    { id: 'geography', label: 'Geographic Focus', icon: MapPin },
    { id: 'financials', label: 'Financial Performance', icon: BarChart3 },
    { id: 'strategy', label: 'Strategic Initiatives', icon: Target },
    { id: 'risks', label: 'Risk Analysis', icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-6 text-indigo-200 border-indigo-300 bg-indigo-800/30 text-lg px-4 py-2">
              🌟 FEATURED: THE HOUSING SOLUTIONS PIONEER
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Amherst Holdings
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Revolutionizing Single-Family Real Estate Through Data Science, Modular Innovation, and Vertical Integration
            </p>
            <div className="text-lg text-indigo-200 mb-10">
              $18.6B AUM • 57,000+ Homes Acquired • StudioBuilt Innovation Leader
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-indigo-900 hover:bg-indigo-50 px-10 py-4 text-xl font-semibold rounded-xl">
                <Download className="h-6 w-6 mr-3" />
                Download Comprehensive Report
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 px-10 py-4 text-xl font-semibold rounded-xl">
                <FileText className="h-6 w-6 mr-3" />
                Executive Summary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-2 rounded-full bg-${stat.color}-100 group-hover:bg-${stat.color}-200 transition-colors`}>
                      <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.subtitle}</div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-4">
            <Badge variant="outline" className="text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              Last updated: December 2024 • Source: Company Reports & Analysis
            </Badge>
          </div>
        </div>
      </section>

      {/* Enhanced Table of Contents */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Comprehensive Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tableOfContents.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                >
                  <IconComponent className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section id="overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Overview</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive analysis of Amherst Holdings' evolution from traditional SFR operator to integrated housing solutions platform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{executiveSummary.title}</CardTitle>
                  <CardDescription className="text-lg">{executiveSummary.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {executiveSummary.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">Top 5</div>
                      <div className="text-sm text-gray-600">Largest SFR operators in U.S.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">Pioneer</div>
                      <div className="text-sm text-gray-600">Modular construction innovation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">Integrated</div>
                      <div className="text-sm text-gray-600">End-to-end housing platform</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <Badge variant="outline" className="text-xs">2024</Badge>
                      <div>350+ StudioBuilt homes produced</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge variant="outline" className="text-xs">2024</Badge>
                      <div>Peter Campbell appointed General Counsel</div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge variant="outline" className="text-xs">2024</Badge>
                      <div>Firefly community launch in Lockhart, TX</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Model */}
      <section id="business-model" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vertically Integrated Business Model</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From acquisition to manufacturing to management - a comprehensive platform approach to single-family real estate
            </p>
          </div>
          
          <div className="space-y-8">
            {businessModel.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className={`border-${step.color}-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="md:flex">
                    <div className={`md:w-1/4 bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 p-8 flex flex-col justify-center items-center`}>
                      <div className={`w-20 h-20 bg-${step.color}-200 rounded-full flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-10 w-10 text-${step.color}-700`} />
                      </div>
                      <div className={`text-3xl font-bold text-${step.color}-700 mb-2`}>{step.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                      <p className={`text-sm text-${step.color}-700 text-center font-medium`}>{step.subtitle}</p>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <p className="text-gray-700 leading-relaxed mb-4 text-lg">{step.description}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{step.details}</p>
                      <div className={`bg-${step.color}-50 p-4 rounded-lg border border-${step.color}-200`}>
                        <div className="text-sm text-gray-600 mb-1">Key Performance Indicator</div>
                        <div className={`text-lg font-bold text-${step.color}-700`}>{step.kpi}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* StudioBuilt Innovation Deep Dive */}
      <section id="innovation" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">StudioBuilt Innovation Platform</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Revolutionary modular construction technology transforming how homes are built, delivered, and scaled
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{studioBuiltInnovation.overview}</p>
              <p className="text-gray-600 leading-relaxed">{studioBuiltInnovation.production}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {studioBuiltInnovation.advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <Card key={index} className={`border-${advantage.color}-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-${advantage.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 text-${advantage.color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {innovationHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <IconComponent className="h-6 w-6 text-indigo-600 mr-3" />
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">{highlight.description}</p>
                    <div className="space-y-2">
                      {highlight.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{metric}</span>
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

      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experienced leadership driving innovation and growth across all aspects of the business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{leader.tenure}</Badge>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-indigo-600">
                    {leader.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">{leader.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Expertise</div>
                    <div className="text-sm font-medium text-gray-900">{leader.expertise}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section id="geography" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Geographic Focus</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Concentrated presence in high-growth Sun Belt markets with strong demographic fundamentals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {geographicFocus.map((region, index) => {
              const IconComponent = region.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                      {region.region}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">{region.description}</p>
                    <div className="space-y-2">
                      {region.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{highlight}</span>
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

      {/* Financial Performance */}
      <section id="financials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Performance & Metrics</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Strong operational performance and financial metrics demonstrating scale and efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {financialHighlights.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className="text-lg font-bold text-gray-900">{metric.value}</span>
                        </div>
                        <div className="text-xs text-gray-500">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section id="strategy" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Initiatives & Future Focus</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Key strategic priorities driving continued growth and market leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategicInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={initiative.priority === 'High' ? 'default' : 'secondary'}>
                        {initiative.priority} Priority
                      </Badge>
                      <span className="text-sm text-gray-500">{initiative.timeline}</span>
                    </div>
                    <CardTitle className="flex items-center text-xl">
                      <IconComponent className="h-6 w-6 text-indigo-600 mr-3" />
                      {initiative.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{initiative.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risk Analysis */}
      <section id="risks" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Risk Analysis & Mitigation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive assessment of key risks and strategic mitigation approaches
            </p>
          </div>

          <div className="space-y-8">
            {riskFactors.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Risks</h4>
                      <ul className="space-y-2">
                        {category.risks.map((risk, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Mitigation Strategy</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{category.mitigation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Report 2024 Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-300">
              📊 IMPACT REPORT 2024
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Every American Family Deserves a Strong Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive review of our 2024 impact across housing, communities, and sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-l-4 border-indigo-500">
              <CardHeader>
                <Home className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">2,000+</CardTitle>
                <CardDescription className="font-semibold text-gray-700">Homes Renovated</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Properties transformed and returned to market</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-green-500">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">$390M+</CardTitle>
                <CardDescription className="font-semibold text-gray-700">Capital Invested</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">In preserving single-family homes</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-purple-500">
              <CardHeader>
                <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">$130M+</CardTitle>
                <CardDescription className="font-semibold text-gray-700">Local Business Investment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Spent with small business vendors and materials</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-orange-500">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">315,000+</CardTitle>
                <CardDescription className="font-semibold text-gray-700">Residents Served</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Cumulative residents served since inception</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 mr-4">
              <a href="/amherst-impact-report-2024.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Full Impact Report (PDF)
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              <ExternalLink className="mr-2 h-5 w-5" />
              View on Amherst.com
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed on Institutional Real Estate</h2>
            <p className="text-xl text-gray-600">Get the latest analysis and insights on Amherst Holdings and other major players delivered to your inbox.</p>
          </div>
          <NewsletterCTA />
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Explore the Future of Real Estate</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-4xl mx-auto">
              Amherst Holdings represents the cutting edge of data-driven real estate investment and modular construction innovation. 
              Discover how other major players are shaping the single-family rental market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/institutional-players"
                className="inline-flex items-center px-10 py-4 bg-white text-indigo-900 font-semibold rounded-xl hover:bg-indigo-50 transition-colors text-lg"
              >
                View All Institutional Players
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
              <Link 
                to="/investment"
                className="inline-flex items-center px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-900 transition-colors text-lg"
              >
                Investment Strategies
                <BarChart3 className="h-6 w-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AmherstHoldings

