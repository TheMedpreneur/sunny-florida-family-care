import React, { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Icon from '../common/Icon';
import { useLanguage } from '../context/LanguageContext';
import practice from '../data/practice';

const VALUE_ICONS = ['Clock', 'UserCheck', 'Globe', 'MessageCircle'];

export default function CareTeam() {
  const { t } = useLanguage();
  const bio = t('team.bio');
  const values = t('team.values');

  /*
   * Ana's solo portrait downtown, replacing the with-a-patient shot that was
   * doing double duty here and on the homepage hero.
   *
   * This page asks for ana-about first and falls back to the hero photo only
   * if the file genuinely is not there. That is deliberate: the previous
   * version keyed off a commented-out config value, which meant dropping the
   * photo into the repo was not enough on its own — someone also had to
   * remember to uncomment two lines, and nobody did. Now the file landing in
   * public/images/ IS the whole change; no code edit, no redeploy of anything
   * but the asset.
   *
   * Cost of that: one 404 on this page until the file exists. Worth it over a
   * silent no-op. Once the photo is in, delete this state and render it plainly.
   */
  const [photoMissing, setPhotoMissing] = useState(false);
  const showAbout = !photoMissing;

  return (
    <div className="bg-brand-cream">
      <SEO
        title={`${practice.provider.fullTitle} | ${practice.name}`}
        description={t('team.intro')}
        url={`${practice.siteUrl}/#/team`}
        keywords="Ana Adamski FNP-C, nurse practitioner Jacksonville, bilingual nurse practitioner, Spanish speaking provider Jacksonville, enfermera practicante Jacksonville"
      />

      {/* Intro */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal from="left">
              <span className="font-sans text-xs tracking-widest uppercase text-brand-sageInk font-bold mb-4 block">
                {t('team.badge')}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-3 text-balance">
                {t('team.title')}{' '}
                <span className="italic text-brand-terracottaInk">{t('team.titleItalic')}</span>
              </h1>
              {/*
                The standing "Ana Adamski, FNP-C — Family Nurse Practitioner &
                Founder" line came out when her new introduction went in: her
                own first sentence already opens with the full credential, so
                the two stacked into "Ana Adamski, MSN, APRN, FNP-C" twice over,
                with "Family Nurse Practitioner" three times in two lines.
                Her wording wins; the generated line goes.

                Her second paragraph joins it here rather than starting the bio
                band, because one short paragraph left this column nearly empty
                against a full-height photo.
              */}
              <div className="space-y-4 font-sans text-lg text-brand-muted leading-relaxed">
                <p>{t('team.intro')}</p>
                {Array.isArray(bio) && bio.length > 0 && <p>{bio[0]}</p>}
              </div>
            </Reveal>

            <Reveal from="right" delay={0.1} className="relative max-w-md mx-auto md:max-w-none w-full">
              <div className="absolute -inset-3 bg-brand-sage/20 arch-crop -rotate-2 -z-10" aria-hidden="true" />
              {/*
                The new photo is landscape, so the tall 4:5 arch this page used
                would have cropped the skyline straight out of it. 4:3 keeps the
                river and the bridge; the object-position bias keeps Ana off
                dead-centre without pushing her out of frame.
              */}
              <div
                className={`${showAbout ? 'aspect-[4/3]' : 'aspect-[4/5]'} arch-crop overflow-hidden shadow-lift border-8 border-brand-shell`}
              >
                {/*
                  key forces a fresh <picture> when the source set changes —
                  without it the browser keeps its already-resolved candidate
                  and the fallback never paints.
                */}
                <picture key={showAbout ? 'about' : 'fallback'}>
                  <source
                    srcSet={showAbout ? practice.images.anaAboutWebp : practice.images.anaHeroWebp}
                    type="image/webp"
                  />
                  <img
                    src={showAbout ? practice.images.anaAbout : practice.images.anaHero}
                    onError={() => setPhotoMissing(true)}
                    alt={
                      showAbout
                        ? `${practice.provider.fullTitleLong}, Family Nurse Practitioner, on the St. Johns River waterfront in downtown Jacksonville`
                        : `${practice.provider.fullTitle}, Family Nurse Practitioner, with a patient`
                    }
                    className={`w-full h-full object-cover ${showAbout ? 'object-[62%_45%]' : 'object-top'}`}
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-20 bg-brand-creamDark border-y border-brand-linen">
        <div className="max-w-[760px] mx-auto px-6">
          <Reveal>
            {/*
              bio[0] is rendered up in the intro column, so the band picks up
              from the second paragraph.

              Ana's introduction has three one-line paragraphs among six long
              ones — the turn ("Today, Ana takes a different approach.") and the
              two closing lines. Set at body size they disappeared into a wall
              of grey text. Setting the short ones in the serif face at lead
              size gives the piece the rhythm her writing already has, without
              touching a word of it.

              The 90-character test is on the rendered string rather than a
              hardcoded index, so it lands on the same three paragraphs in
              Spanish — where the same lines run 38, 80 and 86 characters
              against 200+ for the long ones.
            */}
            <div className="space-y-6 font-sans text-lg text-brand-espresso leading-relaxed text-pretty">
              {Array.isArray(bio) &&
                bio.slice(1).map((para, i) =>
                  para.length <= 90 ? (
                    <p
                      key={i}
                      className="font-serif text-2xl md:text-3xl text-brand-terracottaInk leading-snug"
                    >
                      {para}
                    </p>
                  ) : (
                    <p key={i}>{para}</p>
                  )
                )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-24" aria-labelledby="expect-heading">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 id="expect-heading" className="text-3xl sm:text-4xl md:text-5xl mb-12 text-center text-balance">
            {t('team.valuesTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(values) && values.map((v, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="bg-brand-shell border border-brand-linen rounded-3xl p-6 shadow-soft h-full"
              >
                <span className="w-11 h-11 rounded-full bg-brand-marigold/25 flex items-center justify-center text-brand-terracottaInk mb-4">
                  <Icon name={VALUE_ICONS[i] || 'Heart'} className="w-5 h-5" />
                </span>
                <h3 className="font-serif text-xl mb-2 text-brand-espresso">{v.title}</h3>
                <p className="font-sans text-brand-muted leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 md:py-20 bg-brand-espresso text-brand-cream">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-marigoldLight">
              {t('team.promiseTitle')}
            </h2>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-brand-cream mb-10 text-pretty">
              {t('team.promise')}
            </p>
            <Button
              variant="sun"
              href={practice.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-lg"
            >
              {t('team.cta')}
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
