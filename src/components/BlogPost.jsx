import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Section } from './Layout';
import { Card } from './Card';
import { Button } from './Button';
import { BRAND } from '../constants/brand';

export default function BlogPost({ post, content }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${post.title} | FixNow Mechanics Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.excerpt);
    }
  }, [post]);

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
            
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: `${BRAND.colors.primary}20`, color: BRAND.colors.primary }}>
                {post.category.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Content */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              {content}
            </div>
          </Card>

          {/* CTA */}
          <Card className="mt-8 p-8 bg-gradient-to-br from-white/10 to-white/5 border-2"
                style={{ borderColor: `${BRAND.colors.primary}40` }}>
            <h3 className="text-2xl font-bold text-white mb-4">Need Professional Help?</h3>
            <p className="text-white/80 mb-6">
              If you're experiencing any of the issues discussed in this article, our mobile mechanics can help. 
              We come to your location across Hertfordshire, Bedfordshire, Buckinghamshire, and North London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/estimate" className="flex-1">
                <Button variant="primary" className="w-full">
                  Get Free Quote
                </Button>
              </Link>
              <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`} className="flex-1">
                <Button variant="secondary" icon={Phone} className="w-full">
                  Call {BRAND.phoneDisplay}
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
