import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Section } from '../components/Layout';
import { Card } from '../components/Card';
import { BRAND } from '../constants/brand';
import { BLOG_POSTS } from '../constants/blogPosts';

export default function Blog() {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const displayedPosts = selectedCategory === 'All' 
    ? filteredPosts 
    : filteredPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Car Care <span style={{ color: BRAND.colors.primary }}>Advice & Tips</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Expert advice from mobile mechanics. Learn about car maintenance, diagnostics, repairs, and how to save money on vehicle servicing.
            </p>
          </div>
        </Section>
      </div>

      {/* Search & Filter */}
      <Section className="py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-yellow-500/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
              style={selectedCategory === 'All' ? { backgroundColor: BRAND.colors.primary } : {}}
            >
              All Articles
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
                style={selectedCategory === category ? { backgroundColor: BRAND.colors.primary } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="py-8 lg:py-12 pb-20">
        <div className="max-w-6xl mx-auto">
          {displayedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-yellow-500/50 transition-all group">
                    {/* Featured Image */}
                    <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl">{post.icon}</div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" 
                            style={{ backgroundColor: `${BRAND.colors.primary}20`, color: BRAND.colors.primary }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-white/50 text-xs mt-auto">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" 
                           style={{ color: BRAND.colors.primary }}>
                        Read Article
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
