/*
 * Icons are stored as plain strings and resolved by <Icon name="..." />.
 * They used to be imported React components, which meant this data module
 * dragged the whole icon library into every route that touched it.
 */
export const serviceDetails = {
  mobile: {
    slug: 'mobile',
    icon: 'Home',
    tint: 'bg-brand-tintPink',
    tintAccent: 'bg-brand-terracotta',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  tele: {
    slug: 'tele',
    icon: 'Video',
    tint: 'bg-brand-tintBlue',
    tintAccent: 'bg-brand-turquoise',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  member: {
    slug: 'member',
    icon: 'Shield',
    tint: 'bg-brand-tintYellow',
    tintAccent: 'bg-brand-marigold',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  pediatrics: {
    slug: 'pediatrics',
    icon: 'Heart',
    tint: 'bg-brand-creamDark',
    tintAccent: 'bg-brand-sage',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
  chronic: {
    slug: 'chronic',
    icon: 'Activity',
    tint: 'bg-brand-tintGreen',
    tintAccent: 'bg-brand-sage',
    features: ['hero.features.0', 'hero.features.1', 'hero.features.2', 'hero.features.3'],
    steps: ['steps.0', 'steps.1', 'steps.2', 'steps.3'],
    faqItems: ['faq.0', 'faq.1', 'faq.2'],
  },
};

export const serviceSlugs = Object.keys(serviceDetails);
