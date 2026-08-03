import React from 'react';
import SEO from './SEO';
import Reveal from './Reveal';
import Icon from '../common/Icon';
import practice from '../data/practice';

/*
 * Shared shell for Privacy and Terms so the two pages cannot drift apart in
 * structure, contact details, or review date.
 *
 * ⚠️ These pages are a starting point drafted for review. They have NOT been
 *    reviewed by a Florida healthcare attorney. Before launch, Ana should have
 *    counsel confirm the Notice of Privacy Practices and the membership terms —
 *    a DPC agreement in Florida has specific statutory language requirements
 *    (Fla. Stat. § 624.27) that a template cannot safely guess at.
 */
export default function LegalPage({ title, titleAccent, accentClass, description, sections, lastUpdated }) {
  return (
    <div className="bg-brand-cream min-h-screen pt-14 pb-20 md:pt-20 md:pb-24">
      <SEO
        title={`${title} ${titleAccent}`}
        description={description}
        url={`${practice.siteUrl}/${title.toLowerCase().includes('privacy') ? 'privacy' : 'terms'}`}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl mb-3">
            {title} <span className={`italic ${accentClass}`}>{titleAccent}</span>
          </h1>
          <p className="font-sans text-sm text-brand-muted mb-10">{lastUpdated}</p>

          {/* Spanish speakers should never have to guess at a legal page */}
          <div className="flex items-start gap-3 bg-brand-tintBlue border border-brand-linen rounded-2xl p-4 mb-10">
            <span className="text-brand-tealInk shrink-0 mt-0.5">
              <Icon name="Globe" className="w-5 h-5" />
            </span>
            <p className="font-sans text-sm text-brand-espresso leading-relaxed" lang="es">
              ¿Prefiere leer esto en español? Llámenos o escríbanos y le enviamos
              una copia en español.{' '}
              <a href={`mailto:${practice.email}`} className="underline font-semibold text-brand-terracottaInk break-all">
                {practice.email}
              </a>
            </p>
          </div>

          <div className="space-y-8 font-sans text-brand-espresso leading-relaxed">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-2xl font-serif text-brand-espresso mb-3">{s.heading}</h2>
                {s.body.map((para, j) => (
                  <p key={j} className={j > 0 ? 'mt-3 text-pretty' : 'text-pretty'}>{para}</p>
                ))}
              </section>
            ))}

            <section className="border-t border-brand-linen pt-8">
              <h2 className="text-2xl font-serif text-brand-espresso mb-3">Contact</h2>
              <p className="text-pretty">
                Questions about this page? Reach {practice.provider.fullTitle} directly at{' '}
                <a href={`mailto:${practice.email}`} className="underline font-semibold text-brand-terracottaInk break-all">
                  {practice.email}
                </a>{' '}
                or{' '}
                <a href={practice.phoneHref} className="underline font-semibold text-brand-terracottaInk whitespace-nowrap">
                  {practice.phone}
                </a>
                .
              </p>
            </section>

            <div
              className="flex items-start gap-4 bg-brand-tintPink border-2 border-brand-terracotta/40 rounded-2xl p-5"
              role="note"
            >
              <span className="text-brand-terracottaInk shrink-0 mt-0.5">
                <Icon name="AlertTriangle" className="w-6 h-6" />
              </span>
              <p className="font-sans text-sm text-brand-espresso leading-relaxed">
                <strong>In a medical emergency, call 911</strong> or go to the nearest emergency
                department. This website and its messaging tools are not monitored for emergencies.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
