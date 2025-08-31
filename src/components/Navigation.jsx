import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { 
  Home, 
  BookOpen, 
  ShoppingCart, 
  CreditCard, 
  Wrench, 
  BookMarked, 
  TrendingUp, 
  Building, 
  DollarSign, 
  MapPin,
  ChevronDown,
  Newspaper,
  Users,
  Menu,
  X
} from 'lucide-react'

const Navigation = () => {
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'News & Analysis', href: '/news', icon: Newspaper },
    {
      name: 'Buying & Financing',
      href: '#',
      icon: CreditCard,
      dropdown: [
        { name: 'Basics', href: '/basics' },
        { name: 'The Buying Process', href: '/buying-process' },
        { name: 'Financing 101', href: '/financing' },
        { name: 'Advanced Financing', href: '/advanced-financing' }
      ]
    },
    { name: 'Homeownership Hub', href: '/homeownership', icon: Building },
    { name: 'Investment Center', href: '/investment', icon: DollarSign },
    {
      name: 'Institutional Players',
      href: '#',
      icon: Users,
      dropdown: [
        { name: 'Overview', href: '/institutional-players' },
        { name: 'Amherst Holdings', href: '/institutional-players/amherst-holdings' },
        { name: 'Invitation Homes', href: '/institutional-players/invitation-homes' },
        { name: 'American Homes 4 Rent', href: '/institutional-players/american-homes-4-rent' },
        { name: 'Progress Residential', href: '/institutional-players/progress-residential' },
        { name: 'FirstKey Homes', href: '/institutional-players/firstkey-homes' },
        { name: 'Tricon Residential', href: '/institutional-players/tricon-residential' }
      ]
    },
    {
      name: 'Tools & Calculators',
      href: '#',
      icon: Wrench,
      dropdown: [
        { name: 'All Tools', href: '/tools' },
        { name: 'Mortgage Calculator', href: '/tools/mortgage-calculator' },
        { name: 'Affordability Calculator', href: '/tools/affordability-calculator' },
        { name: 'Property Comparison', href: '/tools/property-comparison' },
        { name: 'Investment Analysis', href: '/tools/investment-analysis' }
      ]
    },
    { name: 'Local Markets', href: '/markets', icon: MapPin },
    { name: 'Mortgage Rates', href: '/mortgage-rates', icon: TrendingUp },
    { name: 'About Us', href: '/about', icon: BookMarked }
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Real Estate Guide by Darshan</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = item.href && location.pathname === item.href
              
              if (item.dropdown) {
                return (
                  <div 
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50">
                        <div className="py-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = item.href && location.pathname === item.href
                
                if (item.dropdown) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === index && (
                        <div className="pl-8 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              onClick={closeMobileMenu}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

