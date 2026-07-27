import React from 'react';
import SEO from '../components/SEO';
import TeamHero from '../components/TeamHero';
import TeamMember from '../components/TeamMember';
import Button from '../components/Button';

export default function CareTeam() {
  const team = [
    {
      name: "Dr. Elena Santiago",
      role: "Lead Physician & Founder",
      bio: "Dr. Santiago founded Sunny Family Health to return the 'Human Touch' to medicine. With 15 years in family practice, she treats every patient as if they were her own family, from newborns to abuelitos.",
      image: "https://images.unsplash.com/photo-1559839734-2v71f153678f?q=75&w=600&auto=format&fit=crop&fm=webp",
      note: "Expert in Pediatrics",
      delay: 0.1
    },
    {
      name: "Mateo Rivera, NP",
      role: "Family Nurse Practitioner",
      bio: "Mateo specializes in chronic wellness and preventative care. He's known for taking the time to explain the 'why' behind every treatment, making complex medicine feel simple and manageable.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=75&w=600&auto=format&fit=crop&fm=webp",
      note: "Wellness Advocate",
      delay: 0.2
    },
    {
      name: "Sofia Mendez",
      role: "Patient Care Coordinator",
      bio: "The first warm face you see. Sofia ensures our clinic feels like a neighborhood café. She'll help you navigate insurance or just offer a warm cup of coffee while you wait.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=75&w=600&auto=format&fit=crop&fm=webp",
      note: "Se habla español",
      delay: 0.3
    }
  ];

  return (
    <div className="bg-brand-cream">
      <SEO
        title="Our Care Team"
        description="Meet Dr. Elena Santiago and our compassionate, bilingual care team in Jacksonville, FL. Clinically sharp and deeply empathetic providers who treat you like family."
        url="https://www.sunnyfamily.health/#/team"
        keywords="Dr. Elena Santiago, family doctor, Jacksonville, bilingual doctor, nurse practitioner, care team"
      />
      <TeamHero />
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16" role="list" aria-label="Care team members">
          {team.map((member, index) => (
            <div key={index} role="listitem">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-brand-creamDark">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">
            Our <span className="italic text-brand-terracotta">Promise</span> to You
          </h2>
          <div className="space-y-8 text-lg font-sans text-brand-espresso/80 leading-relaxed">
            <p>
              We don't just see patients; we see stories. We see the grandmother who wants
              to stay active for her grandkids, and the new parents who need a reassuring
              voice at 4 PM on a Friday.
            </p>
            <p>
              Our team is trained in cultural competency because we know that language and
              values are just as important as vital signs. When you're here, you're not a
              number. <strong className="text-brand-espresso">You're home.</strong>
            </p>
            <div className="pt-8">
              <Button variant="primary">Join Our Family</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}