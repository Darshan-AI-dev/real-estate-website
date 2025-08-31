import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Send, User, Clock } from 'lucide-react'

const CommentSection = ({ articleId, articleTitle }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${articleId}`)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [articleId])

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${articleId}`, JSON.stringify(comments))
    }
  }, [comments, articleId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!newComment.name.trim() || !newComment.message.trim()) {
      alert('Please fill in your name and message.')
      return
    }

    setIsSubmitting(true)

    const comment = {
      id: Date.now(),
      name: newComment.name.trim(),
      email: newComment.email.trim(),
      message: newComment.message.trim(),
      timestamp: new Date().toISOString(),
      articleId: articleId
    }

    // Add comment to the beginning of the array (newest first)
    setComments(prev => [comment, ...prev])

    // Reset form
    setNewComment({
      name: '',
      email: '',
      message: ''
    })

    setIsSubmitting(false)
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="h-6 w-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Join the Discussion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newComment.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newComment.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Comment *
              </label>
              <textarea
                id="message"
                name="message"
                value={newComment.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Share your thoughts on this article..."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                * Required fields. Your email will not be published.
              </p>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No comments yet</p>
                <p className="text-gray-400">Be the first to share your thoughts on this article!</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-sm">
                        {getInitials(comment.name)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {comment.name}
                      </h4>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(comment.timestamp)}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {comment.message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {comments.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Comments are stored locally in your browser and will persist across visits.
          </p>
        </div>
      )}
    </div>
  )
}

export default CommentSection

