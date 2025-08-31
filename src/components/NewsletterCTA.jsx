import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

const NewsletterCTA = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Stay Updated with Real Estate Insights
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Get the latest market analysis, investment tips, and home buying guides delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Subscribe
          </Button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-3">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </CardContent>
    </Card>
  )
}

export default NewsletterCTA

