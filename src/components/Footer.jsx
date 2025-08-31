import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Learning Center',
      links: [
        { name: 'The Basics', path: '/basics' },
        { name: 'Buying Process', path: '/buying-process' },
        { name: 'Financing 101', path: '/financing' },
        { name: 'Advanced Financing', path: '/advanced-financing' },
        { name: 'Glossary', path: '/glossary' }
      ]
    },
    {
      title: 'Tools & Resources',
      links: [
        { name: 'Mortgage Calculator', path: '/tools/mortgage-calculator' },
        { name: 'Affordability Calculator', path: '/tools/affordability-calculator' },
        { name: 'Property Comparison', path: '/tools/property-comparison' },
        { name: 'Investment Analysis', path: '/tools/investment-analysis' },
        { name: 'Current Mortgage Rates', path: '/mortgage-rates' }
      ]
    },
    {
      title: 'Market Intelligence',
      links: [
        { name: 'News & Analysis', path: '/news' },
        { name: 'Market Updates', path: '/news/market-update-july-2025' },
        { name: 'Investment Center', path: '/investment' },
        { name: 'Institutional Players', path: '/institutional-players' },
        { name: 'Local Markets', path: '/markets' }
      ]
    },
    {
      title: 'Homeownership',
      links: [
        { name: 'Homeownership Hub', path: '/homeownership' },
        { name: 'Renovation ROI', path: '/homeownership/renovation-roi' },
        { name: 'Seasonal Maintenance', path: '/homeownership/seasonal-maintenance' },
        { name: 'About Us', path: '/about' }
      ]
    },
    {
      title: 'Investment',
      links: [
        { name: 'Investment Strategies', path: '/investment/strategies' },
        { name: 'Property Analysis', path: '/investment/property-analysis' },
        { name: 'Cap Rate Guide', path: '/investment/cap-rate-guide' },
        { name: 'Glossary', path: '/glossary' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-bold text-white mb-4 block">
              Real Estate Guide
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your complete authority on US single-family real estate, from first-time buying to advanced investing.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>aidarshan0@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Real Estate Guide. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Handcrafted with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="text-white font-medium">Darshan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

