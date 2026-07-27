import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import Button from '../components/Button';

export default function Blog() {
  const posts = [
    {
      title: "Sun Safety for Florida Abuelitos",
      category: "Senior Health",
      date: "August 12, 2024",
      excerpt: "The Florida sun is beautiful, but it requires respect. Learn how to keep our seniors hydrated and protected during the peak heat hours.",
      image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.1
    },
    {
      title: "The Power of a Home-Cooked Meal",
      category: "Nutrition",
      date: "August 05, 2024",
      excerpt: "Traditional recipes often hold the key to modern health. We explore how to modernize classic family dishes without losing the soul.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.2
    },
    {
      title: "Navigating Back-to-School Jitters",
      category: "Pediatrics",
      date: "July 28, 2024",
      excerpt: "Heading back to the classroom can be stressful for kids and parents alike. Here's our guide to a smooth emotional transition.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.3
    },
    {
      title: "Mental Wellness: Breaking the Stigma",
      category: "Mindfulness",
      date: "July 15, 2024",
      excerpt: "Talking about mental health isn't a weakness—it's a family strength. How to start the conversation at home.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.4
    },
    {
      title: "5 Herbs for Your Florida Kitchen Garden",
      category: "Wellness",
      date: "July 02, 2024",
      excerpt: "From mint to cilantro, these easy-to-grow herbs can transform your cooking and your health.",
      image: "https://images.unsplash.com/photo-1466632311177-0d85a81005c7?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.5
    },
    {
      title: "Understanding Your Annual Physical",
      category: "Adult Health",
      date: "June 20, 2024",
      excerpt: "What do those numbers actually mean? We break down cholesterol, blood pressure, and more in plain English.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=75&w=600&auto=format&fit=crop&fm=webp",
      delay: 0.6
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <SEO
        title="Health Journal"
        description="Expert medical insights, family wellness tips, and stories from our Jacksonville community. Consejos de salud for the whole family."
        url="https://www.sunnyfamily.health/#/blog"
        keywords="health blog, wellness tips, family health, Jacksonville, pediatric advice, senior health, nutrition"
        type="blog"
      />

      {/* Blog Header */}
      <section className="pt-24 pb-16 px-6 border-b border-brand-espresso/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-sm tracking-wider uppercase text-brand-terracotta font-semibold mb-4 block">
              The Health Journal
            </span>
            <h1 className="text-5xl md:text-7xl mb-6">
              Consejos de <span className="italic font-serif text-brand-sage">Salud</span>
            </h1>
            <p className="text-xl text-brand-espresso/60 font-sans max-w-2xl mx-auto">
              Expert medical insights, family wellness tips, and stories from our
              Jacksonville community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-brand-creamDark rounded-[40px] overflow-hidden shadow-soft border border-brand-espresso/5"
          >
            <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=75&w=800&auto=format&fit=crop&fm=webp"
                alt="Doctor talking to patient about health philosophy"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div className="p-8 md:p-16 space-y-6">
              <span className="bg-brand-terracotta text-brand-cream px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Featured Story
              </span>
              <h2 className="text-4xl md:text-5xl leading-tight">What is "El Toque Humano"?</h2>
              <p className="text-lg text-brand-espresso/70 font-sans leading-relaxed">
                Why we believe the secret to better health isn't just in the prescription,
                but in the relationship between doctor and patient.
              </p>
              <div className="pt-4">
                <Button variant="primary">Read the Philosophy</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl mb-2">Latest <span className="italic text-brand-sage">Updates</span></h2>
              <p className="font-sans text-brand-espresso/60">Practical advice for your family's journey.</p>
            </div>
            <div className="flex gap-4 font-sans text-sm" role="tablist" aria-label="Filter blog posts by category">
              <button role="tab" aria-selected="true" className="pb-1 border-b-2 border-brand-terracotta text-brand-espresso font-semibold">All</button>
              <button role="tab" aria-selected="false" className="pb-1 border-b-2 border-transparent text-brand-espresso/50 hover:text-brand-terracotta transition-colors">Wellness</button>
              <button role="tab" aria-selected="false" className="pb-1 border-b-2 border-transparent text-brand-espresso/50 hover:text-brand-terracotta transition-colors">Pediatrics</button>
              <button role="tab" aria-selected="false" className="pb-1 border-b-2 border-transparent text-brand-espresso/50 hover:text-brand-terracotta transition-colors">Seniors</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Button variant="outline">Load More Stories</Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}