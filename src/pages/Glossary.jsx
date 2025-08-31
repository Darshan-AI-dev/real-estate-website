import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, BookMarked } from 'lucide-react'

const Glossary = ({ glossaryTerms }) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Convert glossary object to array and sort alphabetically
  const glossaryArray = Object.entries(glossaryTerms).map(([term, definition]) => ({
    term,
    definition
  })).sort((a, b) => a.term.localeCompare(b.term))
  
  // Filter terms based on search
  const filteredTerms = glossaryArray.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(item)
    return acc
  }, {})
  
  const letters = Object.keys(groupedTerms).sort()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Estate Glossary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive A-Z list of important real estate terms and definitions
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="text-gray-600">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
          </Badge>
        </div>

        {/* Letter navigation */}
        {!searchTerm && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Terms */}
        <div className="space-y-8">
          {letters.map(letter => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <BookMarked className="h-6 w-6 text-blue-600 mr-2" />
                {letter}
              </h2>
              
              <div className="grid gap-4">
                {groupedTerms[letter].map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-blue-900">
                        {item.term}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {item.definition}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* No results */}
        {filteredTerms.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <BookMarked className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No terms found</h3>
            <p className="text-gray-600">
              Try searching with different keywords or browse all terms by clearing the search.
            </p>
          </div>
        )}

        {/* Back to top */}
        {letters.length > 3 && (
          <div className="text-center mt-12">
            <a
              href="#top"
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back to Top
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Glossary

