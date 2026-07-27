import React from 'react';
import Icon from '../common/Icon';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const BENEFITS = [
  { icon: 'Clock', key: 'values.sameday' },
  { icon: 'ShieldOff', key: 'values.noInsurance' },
  { icon: 'Heart', key: 'values.longer' },
  { icon: 'DollarSign', key: 'values.pricing' },
  { icon: 'UserCheck', key: 'values.personal' },
  { icon: 'MessageCircle', key: 'values.spanish' },
];

export default function ValueBar() {
  const { t } = useLanguage();

  return (
    <div className="relative py-8 bg-brand-creamDark border-y border-brand-linen">
      <div className="max-w-[1200px] mx-auto px-6">
        {/*
          Two columns on phones rather than a wrapping flex row — the Spanish
          strings ("Citas el mismo día", "Proveedora que habla español") are
          much longer than the English and used to collide at 390px.
        */}
        <ul
          className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-start gap-x-5 gap-y-5 md:gap-x-8"
          role="list"
        >
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.key} delay={i * 0.06} className="flex items-start gap-2.5 text-brand-espresso">
              <span className="text-brand-terracottaInk shrink-0 mt-0.5">
                <Icon name={b.icon} className="w-5 h-5" />
              </span>
              <span className="font-sans font-medium text-sm leading-snug md:max-w-[150px]">
                {t(b.key)}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
