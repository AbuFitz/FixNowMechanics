import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { Section } from '../components/Layout';
import { Card } from '../components/Card';
import { Button, LinkButton } from '../components/Button';
import { BRAND } from '../constants/brand';
import { getBlogPostBySlug } from '../constants/blogPosts';
import { WarningLightsGuide, MobileMechanicVsGarage, BrakeWarningSigns } from '../content/blogArticles';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-white/70 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </Section>
    );
  }

  // Map slug to component
  const articleComponents = {
    'warning-lights-guide': WarningLightsGuide,
    'mobile-mechanic-vs-garage': MobileMechanicVsGarage,
    'brake-warning-signs': BrakeWarningSigns,
  };
  
  const ArticleContent = articleComponents[slug];

  useEffect(() => {
    document.title = `${post.title} | FixNow Mechanics Blog`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.excerpt);
    }
  }, [post]);

  return (
    <div>
      {/* Back Button */}
      <Section className="pt-8">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>
      </Section>

      {/* Article Header */}
      <Section className="pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="text-sm font-bold px-4 py-2 rounded-full" 
                  style={{ backgroundColor: `${BRAND.colors.primary}20`, color: BRAND.colors.primary }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div>
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Featured Icon/Image */}
          <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-12 flex items-center justify-center">
            <div className="text-9xl">{post.icon}</div>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="pb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              {ArticleContent ? <ArticleContent /> : (
                <p className="text-white/70">Article content coming soon...</p>
              )}
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 lg:py-16">
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-white/10 to-white/5 border-2 max-w-4xl mx-auto" 
              style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need Professional Help?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get expert mobile mechanic service anywhere in Hertfordshire and surrounding areas. 
            Fast response, transparent pricing, professional service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate" className="flex-1 sm:flex-initial">
              <Button variant="primary" className="w-full">
                Get Free Quote
              </Button>
            </Link>
            <LinkButton
              variant="secondary"
              icon={Phone}
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="flex-1 sm:flex-initial"
            >
              Call {BRAND.phoneDisplay}
            </LinkButton>
          </div>
        </Card>
      </Section>

      {/* Back to Blog */}
      <Section className="pb-20">
        <div className="text-center">
          <Link to="/blog">
            <Button variant="ghost">
              ← Back to All Articles
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
