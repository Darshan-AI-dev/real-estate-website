import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { MapPin, TrendingUp, TrendingDown, Home, DollarSign, Users, Building, Calendar, Star } from 'lucide-react'

const AustinTX = () => {
  const marketStats = [
    {
      metric: 'Median Home Price',
      value: '$550,000',
      change: 'Down from peak of $650,000+',
      trend: 'down',
      description: 'Travis County, still up significantly over 5 years'
    },
    {
      metric: 'Average Days on Market',
      value: '65 days',
      change: 'Up from 15-20 days in 2021',
      trend: 'up',
      description: 'More time for buyers to make decisions'
    },
    {
      metric: 'Property Tax Rate',
      value: '2.5-3%',
      change: 'Among highest in nation',
      trend: 'neutral',
      description: 'Must factor into monthly budget'
    },
    {
      metric: 'Population Growth',
      value: '+2.5% annually',
      change: 'Slowed from pandemic highs',
      trend: 'up',
      description: 'Continued strong job market driving demand'
    }
  ]

  const neighborhoods = [
    {
      name: 'South Congress (SoCo)',
      priceRange: '$600K - $1.2M',
      vibe: 'Trendy, walkable, with bungalows and new condos',
      bestFor: 'Those who want to be in the heart of the action',
      highlights: ['Live music venues', 'Eclectic dining', 'Walkable lifestyle', 'Historic charm'],
      considerations: ['Higher prices', 'Tourist crowds', 'Limited parking']
    },
    {
      name: 'The Domain / North Austin',
      priceRange: '$400K - $800K',
      vibe: 'A hub for tech jobs with modern apartments and master-planned communities',