import { FiHome, FiVideo, FiShield, FiHeart, FiActivity } from 'react-icons/fi';

export const serviceDetails = {
  mobile: {
    slug: 'mobile',
    icon: FiHome,
    tint: 'bg-brand-tintPink',
    tintAccent: 'bg-brand-terracotta',
    heroImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop&fm=webp',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    testimonial: {
      quote: 'testimonial.quote',
      name: 'testimonial.name',
      context: 'testimonial.context',
    },
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  tele: {
    slug: 'tele',
    icon: FiVideo,
    tint: 'bg-brand-tintBlue',
    tintAccent: 'bg-brand-turquoise',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop&fm=webp',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    testimonial: {
      quote: 'testimonial.quote',
      name: 'testimonial.name',
      context: 'testimonial.context',
    },
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  member: {
    slug: 'member',
    icon: FiShield,
    tint: 'bg-brand-tintYellow',
    tintAccent: 'bg-brand-marigold',
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop&fm=webp',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    testimonial: {
      quote: 'testimonial.quote',
      name: 'testimonial.name',
      context: 'testimonial.context',
    },
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  pediatrics: {
    slug: 'pediatrics',
    icon: FiHeart,
    tint: 'bg-brand-creamDark',
    tintAccent: 'bg-brand-sage',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b22b3b?q=80&w=800&auto=format&fit=crop&fm=webp',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    testimonial: {
      quote: 'testimonial.quote',
      name: 'testimonial.name',
      context: 'testimonial.context',
    },
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  chronic: {
    slug: 'chronic',
    icon: FiActivity,
    tint: 'bg-brand-sage/10',
    tintAccent: 'bg-brand-sage',
    heroImage: 'https://images.unsplash.com/photo-1559757175-7cb057fba93c?q=80&w=800&auto=format&fit=crop&fm=webp',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    testimonial: {
      quote: 'testimonial.quote',
      name: 'testimonial.name',
      context: 'testimonial.context',
    },
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
};

export const serviceSlugs = Object.keys(serviceDetails);