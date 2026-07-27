/*
 * TRANSLATIONS — English / Spanish
 * ================================
 * Ana asked that the service menu itself be translated, not just the page
 * chrome: "are we able to translate the services as well? ... I think that
 * would be great boost for my Hispanic population." (7/19)
 *
 * She supplied her own Spanish for the private-services menu. Every string
 * under `single.items`, plus single.title / titleItalic / subtitle, is her
 * wording copied verbatim from that email. Do not rewrite it — if it needs
 * to change, it should change with her.
 *
 * The Spanish for the telemedicine and rapid-test menu (single.tests,
 * single.visits, single.conditions, single.included) is ours and should be
 * confirmed with Ana before launch.
 *
 * Prices never appear in this file. They live in src/data/ so the English
 * and Spanish copy can never disagree about a dollar figure.
 *
 * EN and ES are key-for-key identical; scripts/check-translations.mjs fails
 * the build if they ever drift apart.
 */

export const translations = {
  "en": {
    "nav": {
      "story": "Our Story",
      "team": "Meet Ana",
      "services": "Services & Pricing",
      "book": "Book Online",
      "faq": "FAQ",
      "terms": "Terms of Service",
      "privacy": "Privacy & HIPAA",
      "openMenu": "Open menu",
      "closeMenu": "Close menu",
      "home": "Home"
    },
    "hero": {
      "location": "Personalized Primary Care • Atención Primaria Personalizada",
      "title": "Care that feels like",
      "titleItalic": "family",
      "subtitle": "Unhurried visits with a bilingual nurse practitioner who knows your name — and your story.",
      "cta": "Book Online",
      "ctaSubtext": "Pick a time, and you get confirmation right away.",
      "questions": "Questions? Call or text.",
      "callUs": "Call us",
      "emailUs": "Email us",
      "doctorNote": "I'm here for you."
    },
    "values": {
      "sameday": "Same-day appointments",
      "noInsurance": "No insurance hassles",
      "longer": "Longer, unhurried visits",
      "pricing": "Transparent pricing",
      "personal": "The same provider every time",
      "spanish": "Se habla español"
    },
    "whoWeHelp": {
      "title": "Care for the whole family",
      "kids": {
        "title": "Kids & Teens",
        "desc": "Gentle care for your little ones, ages 3 and up by video."
      },
      "adults": {
        "title": "Adults",
        "desc": "Preventive care and chronic condition management."
      },
      "seniors": {
        "title": "Seniors",
        "desc": "Patient, respectful care for abuelitos."
      },
      "spanish": {
        "title": "Bilingual",
        "desc": "Full care in Spanish and English — no interpreter needed."
      }
    },
    "philosophy": {
      "title": "Healthcare designed",
      "titleItalic": "around you.",
      "p1": "At Sunny Florida Family Care, we believe quality healthcare starts with time, trust, and a personalized approach.",
      "p2": "Our private-pay services are designed to provide convenient, compassionate care with a focus on prevention, wellness, and your individual health goals. You see the same provider every time, so you never have to rebuild your history from scratch — and you are heard in the language you think in.",
      "trustTitle": "What makes this different:",
      "bullets": [
        "A provider who listens without watching the clock",
        "Longer visits — time to say everything you came to say",
        "Direct access to Ana by phone or secure message",
        "Same-day or next-day care when you are sick",
        "Fluent Spanish and English, every visit"
      ],
      "quote": "My goal is to know your story, not just your symptoms."
    },
    "pricing": {
      "badge": "Private pay • Transparent",
      "title": "No insurance hassles.",
      "titleItalic": "Just care.",
      "subtitle": "Membership means no co-pays, no surprise bills, and more time spent on your health. Simple monthly pricing.",
      "enrollment": "No long-term contracts. Cancel anytime with 30 days' notice. Membership is not health insurance and does not replace it.",
      "enrollmentFee": "+ $99 one-time enrollment",
      "mostPopular": "Most chosen",
      "ages": "Ages",
      "perMonth": "/month",
      "dueToday": "Due today:",
      "plans": {
        "kids": "Child & Teen",
        "adults": "Adult",
        "seniors": "Senior",
        "enroll": "Enroll Now"
      },
      "aLaCarte": {
        "title": "Not ready for a membership?",
        "desc": "Every service is available as a one-time visit, with the price shown before you book. Rapid tests start at $25 and telemedicine visits at $55.",
        "cta": "See single-visit pricing"
      }
    },
    "single": {
      "badge": "Single visits • No membership required",
      "title": "Your health. Your time.",
      "titleItalic": "Your care.",
      "subtitle": "Quality healthcare starts with time, trust, and a personalized approach. Every price below is what you pay — nothing added afterward.",
      "groups": {
        "primaryCare": "Primary Care Visits",
        "preventive": "Preventive & Wellness Services",
        "support": "Personalized Health Support",
        "additional": "Additional Services"
      },
      "items": {
        "newPatient": {
          "name": "New Patient Wellness Consultation",
          "desc": "A comprehensive visit to review your health history, concerns, goals, and medications, and create a personalized care plan."
        },
        "followUp": {
          "name": "Follow-Up Consultation",
          "desc": "Ongoing support to review progress, discuss concerns, and adjust your healthcare plan."
        },
        "sameDay": {
          "name": "Same-Day Acute Visit",
          "desc": "Evaluation and treatment for common health concerns such as infections, allergies, respiratory symptoms, and other non-emergency conditions."
        },
        "annual": {
          "name": "Annual Wellness Examination",
          "desc": "A complete health assessment focused on prevention, risk factors, lifestyle goals, and maintaining long-term wellness."
        },
        "labReview": {
          "name": "Lab Review & Personalized Health Plan",
          "desc": "A detailed review of your results with recommendations tailored to your health goals."
        },
        "medReview": {
          "name": "Medication Review",
          "desc": "A review of your current medications to improve safety, understanding, and effectiveness."
        },
        "chronic": {
          "name": "Chronic Care Management Consultation",
          "desc": "Personalized support for high blood pressure, diabetes, high cholesterol, weight management, and lifestyle changes."
        },
        "lifestyle": {
          "name": "Lifestyle & Wellness Consultation",
          "desc": "Guidance focused on nutrition, exercise, healthy habits, and sustainable lifestyle improvements."
        },
        "forms": {
          "name": "Medical Forms & Documentation",
          "desc": "School, work, and travel forms completed and returned promptly."
        },
        "coordination": {
          "name": "Care Coordination & Specialist Referrals",
          "desc": "Support navigating your healthcare journey and connecting with additional resources when needed."
        }
      },
      "fromPrice": "Starting at",
      "onRequest": "Included with care",
      "testsTitle": "Rapid Tests — Mobile Visits",
      "tests": {
        "covid": "Rapid COVID-19 Test",
        "flu": "Rapid Influenza A & B Test",
        "strep": "Rapid Strep Test",
        "covidFlu": "COVID-19 + Flu Combo Test",
        "combo": "COVID-19 + Flu + Strep Bundle"
      },
      "visitsTitle": "Telemedicine Visits — Adults & Children",
      "visits": {
        "newPatient": "New Patient Telemedicine Visit",
        "established": "Established Patient Visit",
        "sameDaySick": "Same-Day Sick Visit",
        "followUp": "Follow-Up Visit",
        "refill": "Medication Refill Visit (non-controlled)",
        "afterHours": "After-Hours Visit"
      },
      "conditionsTitle": "Conditions We Commonly Treat",
      "conditions": {
        "cold": "Cold, cough, and congestion",
        "throat": "Sore throat / strep evaluation",
        "flu": "Flu symptoms",
        "covid": "COVID-19 symptoms",
        "sinus": "Sinus infections",
        "ear": "Ear pain (when appropriate for telemedicine)",
        "pinkEye": "Pink eye (conjunctivitis)",
        "allergies": "Seasonal allergies",
        "uti": "Urinary tract infections (uncomplicated)",
        "stomach": "Nausea, vomiting, and diarrhea",
        "rash": "Mild rashes and skin conditions",
        "bites": "Insect bites",
        "refills": "Medication refill requests (non-controlled)"
      },
      "includedTitle": "What's Included in Every Visit",
      "included": {
        "evaluation": "Evaluation by a Family Nurse Practitioner",
        "plan": "Diagnosis and a personalized treatment plan",
        "prescriptions": "Electronic prescriptions when appropriate",
        "note": "School or work excuse note when medically appropriate",
        "referrals": "Referrals or imaging and lab orders if needed"
      },
      "ageNoticeTitle": "Telemedicine is for ages 3 and older",
      "ageNotice": "Children under age 3, or anyone with symptoms such as difficulty breathing, dehydration, or significant lethargy, need an in-person evaluation or emergency care rather than a telemedicine visit. If you are unsure, call and we will help you decide."
    },
    "services": {
      "title": "Our",
      "titleItalic": "Services",
      "learnMore": "Learn more",
      "subtitle": "Care that comes to you, meets you on video, or wraps the whole family in one membership.",
      "cta": "Join the Family",
      "backToServices": "All services",
      "detail": {
        "badge": "Our Service",
        "ctaTitle": "Ready to get started?",
        "ctaTitleItalic": "Today.",
        "ctaSubtitle": "Book your first visit and see what unhurried care actually feels like.",
        "ctaSecondary": "Call us",
        "whatsIncluded": "What's included",
        "howItWorks": "How it works",
        "commonQuestions": "Common questions"
      },
      "mobile": {
        "title": "Mobile Visits",
        "titleItalic": "at your door",
        "desc": "Healthcare that comes to you.",
        "detail": "No traffic, no waiting room. Ana brings the visit to your living room — including rapid strep, flu, and COVID testing.",
        "features": [
          {
            "title": "Care at home",
            "desc": "Be seen where you are most comfortable, without arranging transport or time off."
          },
          {
            "title": "Rapid testing on site",
            "desc": "Strep, flu, and COVID results during the visit, so treatment starts the same day."
          },
          {
            "title": "Family included",
            "desc": "Loved ones can be part of the visit naturally, with no travel and no waiting room."
          },
          {
            "title": "Scheduling that fits",
            "desc": "Appointment times chosen around your work and your family, not around a clinic's queue."
          }
        ],
        "steps": [
          {
            "title": "Book your visit",
            "desc": "Pick a time online, or call and Ana will find one with you."
          },
          {
            "title": "We confirm and prepare",
            "desc": "Your history is reviewed ahead of time and the visit kit is packed for what you need."
          },
          {
            "title": "Ana arrives",
            "desc": "She comes to your door with everything required for a full visit, including rapid tests."
          },
          {
            "title": "Plan and follow-up",
            "desc": "You get a written summary, any prescriptions, and a direct line for questions afterward."
          }
        ],
        "faq": [
          {
            "q": "What areas do you serve?",
            "a": "Duval County and select areas of St. Johns County. If you are not sure whether you are in the service area, call and we will tell you straight away."
          },
          {
            "q": "How much does a mobile visit cost?",
            "a": "Mobile visits are included in your monthly membership at no extra charge. Without a membership, single-visit pricing is listed on this page and rapid tests are billed separately."
          },
          {
            "q": "What if I need lab work?",
            "a": "Basic labs can be drawn during your home visit. For specialized imaging or advanced labs, Ana coordinates with trusted local facilities and helps you schedule."
          }
        ]
      },
      "tele": {
        "title": "Telehealth",
        "titleItalic": "anywhere",
        "desc": "Care from wherever you are.",
        "detail": "Secure video visits for ages 3 and up, usually available the same day. No app to download.",
        "features": [
          {
            "title": "Same-day access",
            "desc": "Most telehealth visits can be booked the same day — the point is care before it gets worse."
          },
          {
            "title": "Private and secure",
            "desc": "An encrypted platform that keeps your health information between you and Ana."
          },
          {
            "title": "No app required",
            "desc": "The visit opens in your browser from a link sent to your phone or email."
          },
          {
            "title": "In your language",
            "desc": "The entire visit happens in Spanish or English — whichever you think in."
          }
        ],
        "steps": [
          {
            "title": "Request a visit",
            "desc": "Book online or call. Same-day appointments are usually available."
          },
          {
            "title": "Get your link",
            "desc": "A secure, single-use video link arrives by text or email a few minutes beforehand."
          },
          {
            "title": "Talk face to face",
            "desc": "Tap the link to join. It works right in your browser, on a phone, tablet, or computer."
          },
          {
            "title": "Get your plan",
            "desc": "Your summary, any prescriptions, and follow-up instructions arrive by secure message."
          }
        ],
        "faq": [
          {
            "q": "Do I need to download an app?",
            "a": "No. The visit opens directly in your web browser — just tap the link we send you."
          },
          {
            "q": "Can children be seen by video?",
            "a": "Yes, from age 3 and up. Children under 3, or anyone with difficulty breathing, dehydration, or significant lethargy, need to be seen in person."
          },
          {
            "q": "Can prescriptions be sent over telehealth?",
            "a": "Yes, for most conditions. Prescriptions go straight to your preferred pharmacy. Controlled substances require an in-person visit."
          }
        ]
      },
      "member": {
        "title": "Memberships",
        "titleItalic": "made simple",
        "desc": "Direct access, one monthly price.",
        "detail": "A private-pay model that gives you direct access to Ana without insurance in the middle.",
        "features": [
          {
            "title": "No surprise bills",
            "desc": "One flat monthly fee. You know what you pay before you book anything."
          },
          {
            "title": "Direct access",
            "desc": "Reach Ana by phone or secure message — no phone tree, no scheduling department."
          },
          {
            "title": "Unhurried visits",
            "desc": "Appointments are built long enough to cover what you actually came in for."
          },
          {
            "title": "Family pricing",
            "desc": "Add family members at their own tier so the whole household is covered."
          }
        ],
        "steps": [
          {
            "title": "Choose your plan",
            "desc": "Child and teen, adult, or senior. Every tier includes the same core access."
          },
          {
            "title": "Complete enrollment",
            "desc": "A short health history form and the one-time $99 enrollment fee. About ten minutes."
          },
          {
            "title": "Meet Ana",
            "desc": "Your welcome visit is a longer appointment built around your history and your goals."
          },
          {
            "title": "Use it",
            "desc": "From day one you can call, message, or book a visit whenever you need care."
          }
        ],
        "faq": [
          {
            "q": "Is this health insurance?",
            "a": "No. This is a private-pay membership, not insurance, and it does not replace it. Many members pair a membership with a high-deductible plan that covers hospitals and emergencies."
          },
          {
            "q": "Can I cancel anytime?",
            "a": "Yes. There are no long-term contracts — cancel with 30 days' notice, for any reason."
          },
          {
            "q": "What does the $99 enrollment fee cover?",
            "a": "It is a one-time administrative fee charged with your first month. It covers setting up your chart, your intake paperwork, and your welcome visit scheduling."
          }
        ]
      },
      "pediatrics": {
        "title": "Pediatric",
        "titleItalic": "care",
        "desc": "Gentle care for your little ones.",
        "detail": "Sick visits, school and sports forms, and straight answers for parents — by video from age 3, or at home.",
        "features": [
          {
            "title": "Sick visits",
            "desc": "Fevers, sore throats, ear pain, and rashes evaluated quickly, often the same day."
          },
          {
            "title": "School and sports forms",
            "desc": "Physicals and paperwork completed and returned without a second appointment."
          },
          {
            "title": "Parents heard",
            "desc": "Time to ask every question, and answers in plain language rather than jargon."
          },
          {
            "title": "Care in Spanish",
            "desc": "Families are never asked to translate for each other during a medical visit."
          }
        ],
        "steps": [
          {
            "title": "Reach out",
            "desc": "Book online or call. Same-day sick visits are usually available."
          },
          {
            "title": "Tell us what's happening",
            "desc": "A short intake before the visit means the time is spent on your child, not on forms."
          },
          {
            "title": "The visit",
            "desc": "By video from age 3 and up, or at home when your child needs to be seen in person."
          },
          {
            "title": "Plan in writing",
            "desc": "You leave with a clear plan, any prescriptions, and a number to call if things change."
          }
        ],
        "faq": [
          {
            "q": "What ages do you see?",
            "a": "Children from age 3 by telemedicine, and all ages for mobile visits. Care continues into the adult membership when your child turns 18."
          },
          {
            "q": "What about emergencies?",
            "a": "For anything life-threatening, call 911. For urgent concerns, members can call or message directly and Ana will arrange same-day care."
          },
          {
            "q": "When does my child need to be seen in person?",
            "a": "Any child under 3, and any child with difficulty breathing, dehydration, or significant lethargy, needs an in-person evaluation rather than video."
          }
        ]
      },
      "chronic": {
        "title": "Chronic",
        "titleItalic": "care management",
        "desc": "Managing your health, together.",
        "detail": "Ongoing support for blood pressure, diabetes, cholesterol, and weight — built around your life, not a protocol.",
        "features": [
          {
            "title": "A plan built for you",
            "desc": "Your goals and your routine shape the plan, rather than a generic checklist."
          },
          {
            "title": "Regular check-ins",
            "desc": "Scheduled touchpoints by message, phone, or video to track progress between visits."
          },
          {
            "title": "Lifestyle support",
            "desc": "Nutrition, movement, and stress woven into the plan instead of treated as an afterthought."
          },
          {
            "title": "Coordination",
            "desc": "Ana works with your specialists, labs, and pharmacy so everyone is looking at the same picture."
          }
        ],
        "steps": [
          {
            "title": "Full assessment",
            "desc": "A long first visit covering your history, medications, routine, and what you want to change."
          },
          {
            "title": "Your care plan",
            "desc": "Medication management, lifestyle changes, and a monitoring schedule you agree to."
          },
          {
            "title": "Stay in touch",
            "desc": "Regular check-ins keep the plan honest and let it change when your results do."
          },
          {
            "title": "Track the wins",
            "desc": "Progress is measured and reviewed with you, and goals move as you do."
          }
        ],
        "faq": [
          {
            "q": "Which conditions do you manage?",
            "a": "Most commonly high blood pressure, type 2 diabetes, high cholesterol, thyroid conditions, and weight management. If your condition is not listed, ask — it likely can be managed here."
          },
          {
            "q": "Will this replace my specialist?",
            "a": "No. This complements specialist care. Ana handles day-to-day management and coordination while your specialist provides procedures and advanced care."
          },
          {
            "q": "How often will I be seen?",
            "a": "It depends on the condition. Most people start with monthly visits and move to quarterly once things are stable, staying in touch by message in between."
          }
        ]
      }
    },
    "team": {
      "badge": "Your provider",
      "title": "Meet",
      "titleItalic": "Ana",
      "role": "Family Nurse Practitioner & Founder",
      "intro": "Sunny Florida Family Care is a solo practice, and that is the point. You will not be handed between providers or asked to explain your history again to someone new.",
      "bio": [
        "Ana Adamski is a board-certified Family Nurse Practitioner serving families across Jacksonville. She started this practice after years of watching good visits get cut short — twenty patients on the schedule, and a person in front of her who had waited weeks to be heard.",
        "She sees whole families: children from age 3 by video, adults managing chronic conditions, and the abuelitos who deserve to be spoken to directly rather than through a relative. Every visit happens in Spanish or English, whichever you think in.",
        "She is also the provider who calls on a random weekend to check whether you or your child is doing better. Sometimes what a patient needs is not another appointment — it is reassurance, in their own language, from someone who already knows the story."
      ],
      "valuesTitle": "What you can expect",
      "values": [
        {
          "title": "Time",
          "desc": "Visits long enough to cover what you actually came in for, not just the first thing you mentioned."
        },
        {
          "title": "Continuity",
          "desc": "The same provider every visit, so trust is built once rather than rebuilt every time."
        },
        {
          "title": "Your language",
          "desc": "Fluent Spanish and English. No interpreter, no family member translating a diagnosis."
        },
        {
          "title": "Access",
          "desc": "A direct line by phone or secure message when you need clarity, not just when you need an appointment."
        }
      ],
      "promiseTitle": "The promise",
      "promise": "You are not a slot on a schedule. You are someone with a history, a family, and a reason you finally made the call. Your health. Your time. Your care.",
      "cta": "Book with Ana"
    },
    "finalCta": {
      "title": "Experience healthcare that listens,",
      "titleItalic": "understands, and puts your goals first.",
      "contact": "Questions? Call or text"
    },
    "faq": {
      "title": "Frequently Asked",
      "titleItalic": "Questions",
      "items": [
        {
          "q": "Do you take insurance?",
          "a": "No. Sunny Florida Family Care is private pay, which is what makes longer visits and direct access possible. You pay a clear price you see before you book. Many members keep a high-deductible plan for hospitals and emergencies."
        },
        {
          "q": "Is a membership required?",
          "a": "No. Every service is available as a single visit at the prices listed on the Services page. A membership simply makes ongoing care cheaper and gives you direct access to Ana."
        },
        {
          "q": "Do I have to speak English?",
          "a": "No. Ana is fluent in Spanish and English, and the entire visit — including your written plan — can happen in Spanish. Atención completa en español."
        },
        {
          "q": "How quickly can I be seen?",
          "a": "Same-day or next-day in most cases. Telemedicine visits are usually available the same day; mobile visits are scheduled around your availability."
        },
        {
          "q": "Can children be seen?",
          "a": "Yes. Telemedicine visits are for ages 3 and up. Children under 3, or any child with difficulty breathing, dehydration, or significant lethargy, need an in-person evaluation."
        },
        {
          "q": "How do I pay, and when?",
          "a": "Payment is by card and is collected when you book — a payment is required to reserve your appointment, so your time is held the moment you finish. Memberships are billed monthly to the card on file and can be cancelled with 30 days' notice."
        },
        {
          "q": "What if I need a specialist or the hospital?",
          "a": "Ana coordinates referrals and shares your records with the specialist. For emergencies, always call 911 or go to the nearest emergency department."
        }
      ]
    },
    "footer": {
      "desc": "Convenient, compassionate private-pay care for families across Jacksonville — focused on prevention, wellness, and your individual health goals.",
      "visit": "Get in touch",
      "hours": "Hours",
      "monFri": "Mon – Fri",
      "sat": "Saturday",
      "walkins": "Same-day appointments available",
      "legal": "Information",
      "designed": "Care by Nurse Practitioners",
      "rights": "All rights reserved.",
      "disclaimer": "Sunny Florida Family Care is a private-pay practice and is not health insurance. The information on this site is general and is not medical advice, and using this site does not create a provider-patient relationship. For a medical emergency, call 911."
    },
    "loading": "Loading",
    "notFound": {
      "title": "Page not found",
      "desc": "That page has moved or never existed.",
      "cta": "Back to home"
    }
  },
  "es": {
    "nav": {
      "story": "Nuestra Historia",
      "team": "Conoce a Ana",
      "services": "Servicios y Precios",
      "book": "Reservar en línea",
      "faq": "Preguntas Frecuentes",
      "terms": "Términos de Servicio",
      "privacy": "Privacidad y HIPAA",
      "openMenu": "Abrir menú",
      "closeMenu": "Cerrar menú",
      "home": "Inicio"
    },
    "hero": {
      "location": "Atención Primaria Personalizada • Personalized Primary Care",
      "title": "Atención que se siente como",
      "titleItalic": "familia",
      "subtitle": "Consultas sin prisa con una enfermera practicante bilingüe que conoce su nombre — y su historia.",
      "cta": "Reservar en línea",
      "ctaSubtext": "Elija un horario y recibe confirmación de inmediato.",
      "questions": "¿Preguntas? Llame o envíe un mensaje.",
      "callUs": "Llámenos",
      "emailUs": "Escríbanos",
      "doctorNote": "Estoy aquí para usted."
    },
    "values": {
      "sameday": "Citas el mismo día",
      "noInsurance": "Sin trámites de seguro",
      "longer": "Consultas más largas y sin prisa",
      "pricing": "Precios claros",
      "personal": "La misma proveedora siempre",
      "spanish": "Se habla español"
    },
    "whoWeHelp": {
      "title": "Atención para toda la familia",
      "kids": {
        "title": "Niños y Adolescentes",
        "desc": "Cuidado amable para los más pequeños, desde los 3 años por video."
      },
      "adults": {
        "title": "Adultos",
        "desc": "Cuidado preventivo y manejo de enfermedades crónicas."
      },
      "seniors": {
        "title": "Adultos Mayores",
        "desc": "Atención paciente y respetuosa para los abuelitos."
      },
      "spanish": {
        "title": "Bilingüe",
        "desc": "Atención completa en español e inglés — sin necesidad de intérprete."
      }
    },
    "philosophy": {
      "title": "Atención médica diseñada",
      "titleItalic": "para usted.",
      "p1": "En Sunny Florida Family Care, creemos que una buena atención médica comienza con tiempo, confianza y una relación personalizada con cada paciente.",
      "p2": "Nuestros servicios privados están diseñados para ofrecer una atención conveniente, compasiva y enfocada en la prevención, bienestar y sus metas individuales de salud. Usted ve a la misma proveedora siempre, así que nunca tiene que volver a contar su historia desde cero — y será escuchado en el idioma en el que piensa.",
      "trustTitle": "Lo que hace la diferencia:",
      "bullets": [
        "Una proveedora que escucha sin mirar el reloj",
        "Consultas más largas — tiempo para decir todo lo que venía a decir",
        "Acceso directo a Ana por teléfono o mensaje seguro",
        "Atención el mismo día o al día siguiente cuando está enfermo",
        "Español e inglés con fluidez, en cada consulta"
      ],
      "quote": "Mi meta es conocer su historia, no solo sus síntomas."
    },
    "pricing": {
      "badge": "Pago privado • Precios claros",
      "title": "Sin trámites de seguro.",
      "titleItalic": "Solo cuidado.",
      "subtitle": "La membresía significa sin copagos, sin facturas sorpresa y más tiempo dedicado a su salud. Precio mensual sencillo.",
      "enrollment": "Sin contratos a largo plazo. Cancele cuando quiera con 30 días de aviso. La membresía no es un seguro médico y no lo reemplaza.",
      "enrollmentFee": "+ $99 de inscripción, una sola vez",
      "mostPopular": "La más elegida",
      "ages": "Edades",
      "perMonth": "/mes",
      "dueToday": "A pagar hoy:",
      "plans": {
        "kids": "Niños y Adolescentes",
        "adults": "Adultos",
        "seniors": "Adultos Mayores",
        "enroll": "Inscribirse"
      },
      "aLaCarte": {
        "title": "¿Aún no quiere una membresía?",
        "desc": "Todos los servicios están disponibles como consulta única, con el precio visible antes de reservar. Las pruebas rápidas comienzan en $25 y las consultas de telemedicina en $55.",
        "cta": "Ver precios por consulta"
      }
    },
    "single": {
      "badge": "Consultas únicas • Sin membresía",
      "title": "Su Salud. Su Tiempo.",
      "titleItalic": "Su Cuidado.",
      "subtitle": "Una buena atención médica comienza con tiempo, confianza y una relación personalizada con cada paciente. El precio que ve es el que paga — nada se agrega después.",
      "groups": {
        "primaryCare": "Consultas Médicas",
        "preventive": "Prevención y Bienestar",
        "support": "Apoyo Personalizado de Salud",
        "additional": "Servicios Adicionales"
      },
      "items": {
        "newPatient": {
          "name": "Consulta Inicial de Bienestar",
          "desc": "Evaluación completa para conocer su historial médico, preocupaciones, medicamentos y crear un plan de salud personalizado."
        },
        "followUp": {
          "name": "Consulta de Seguimiento",
          "desc": "Continuidad de cuidado para revisar su progreso, responder preguntas y ajustar su plan de tratamiento."
        },
        "sameDay": {
          "name": "Consulta el Mismo Día",
          "desc": "Evaluación y tratamiento de problemas comunes como infecciones, alergias, síntomas respiratorios y otras condiciones no urgentes."
        },
        "annual": {
          "name": "Examen Anual de Salud",
          "desc": "Evaluación integral enfocada en prevención, factores de riesgo, hábitos saludables y bienestar a largo plazo."
        },
        "labReview": {
          "name": "Revisión de Laboratorios y Plan Personalizado",
          "desc": "Explicación detallada de sus resultados con recomendaciones adaptadas a sus necesidades."
        },
        "medReview": {
          "name": "Revisión de Medicamentos",
          "desc": "Evaluación de sus medicamentos actuales para promover seguridad y mejores resultados."
        },
        "chronic": {
          "name": "Consulta para Manejo de Enfermedades Crónicas",
          "desc": "Apoyo personalizado para presión alta, diabetes, colesterol alto, control de peso y cambios en el estilo de vida."
        },
        "lifestyle": {
          "name": "Consulta de Bienestar y Estilo de Vida",
          "desc": "Orientación sobre nutrición, ejercicio y hábitos saludables."
        },
        "forms": {
          "name": "Formularios y Documentación Médica",
          "desc": "Formularios escolares, de trabajo y de viaje completados y devueltos con prontitud."
        },
        "coordination": {
          "name": "Coordinación de Cuidado Médico y Referidos",
          "desc": "Apoyo para facilitar su experiencia médica y conectar con especialistas cuando sea necesario."
        }
      },
      "fromPrice": "Desde",
      "onRequest": "Incluido en su cuidado",
      "testsTitle": "Pruebas Rápidas — Visitas a Domicilio",
      "tests": {
        "covid": "Prueba Rápida de COVID-19",
        "flu": "Prueba Rápida de Influenza A y B",
        "strep": "Prueba Rápida de Estreptococo",
        "covidFlu": "Prueba Combinada COVID-19 + Influenza",
        "combo": "Paquete COVID-19 + Influenza + Estreptococo"
      },
      "visitsTitle": "Consultas de Telemedicina — Adultos y Niños",
      "visits": {
        "newPatient": "Consulta de Telemedicina para Paciente Nuevo",
        "established": "Consulta para Paciente Establecido",
        "sameDaySick": "Consulta por Enfermedad el Mismo Día",
        "followUp": "Consulta de Seguimiento",
        "refill": "Consulta para Resurtir Medicamentos (no controlados)",
        "afterHours": "Consulta Fuera de Horario"
      },
      "conditionsTitle": "Condiciones que Tratamos Comúnmente",
      "conditions": {
        "cold": "Resfriado, tos y congestión",
        "throat": "Dolor de garganta / evaluación de estreptococo",
        "flu": "Síntomas de influenza",
        "covid": "Síntomas de COVID-19",
        "sinus": "Infecciones de los senos nasales",
        "ear": "Dolor de oído (cuando es apropiado por telemedicina)",
        "pinkEye": "Conjuntivitis",
        "allergies": "Alergias estacionales",
        "uti": "Infecciones urinarias (no complicadas)",
        "stomach": "Náuseas, vómito y diarrea",
        "rash": "Erupciones y problemas leves de la piel",
        "bites": "Picaduras de insectos",
        "refills": "Solicitudes para resurtir medicamentos (no controlados)"
      },
      "includedTitle": "Qué Incluye Cada Consulta",
      "included": {
        "evaluation": "Evaluación por una Enfermera Practicante Familiar",
        "plan": "Diagnóstico y plan de tratamiento personalizado",
        "prescriptions": "Recetas electrónicas cuando sea apropiado",
        "note": "Justificante escolar o laboral cuando sea médicamente apropiado",
        "referrals": "Referidos u órdenes de laboratorio e imágenes si son necesarios"
      },
      "ageNoticeTitle": "La telemedicina es para mayores de 3 años",
      "ageNotice": "Los niños menores de 3 años, o cualquier persona con síntomas como dificultad para respirar, deshidratación o mucha somnolencia, necesitan una evaluación en persona o atención de emergencia en lugar de una consulta por telemedicina. Si no está seguro, llame y le ayudamos a decidir."
    },
    "services": {
      "title": "Nuestros",
      "titleItalic": "Servicios",
      "learnMore": "Más información",
      "subtitle": "Atención que llega a su casa, que lo atiende por video, o que cubre a toda la familia con una sola membresía.",
      "cta": "Únase a la Familia",
      "backToServices": "Todos los servicios",
      "detail": {
        "badge": "Nuestro Servicio",
        "ctaTitle": "¿Listo para comenzar?",
        "ctaTitleItalic": "Hoy.",
        "ctaSubtitle": "Reserve su primera consulta y sienta lo que es una atención sin prisa.",
        "ctaSecondary": "Llámenos",
        "whatsIncluded": "Qué incluye",
        "howItWorks": "Cómo funciona",
        "commonQuestions": "Preguntas comunes"
      },
      "mobile": {
        "title": "Visitas a Domicilio",
        "titleItalic": "en su puerta",
        "desc": "Atención médica que llega a usted.",
        "detail": "Sin tráfico ni sala de espera. Ana lleva la consulta a su sala — incluyendo pruebas rápidas de estreptococo, influenza y COVID.",
        "features": [
          {
            "title": "Atención en casa",
            "desc": "Sea atendido donde se siente más cómodo, sin arreglar transporte ni pedir permiso en el trabajo."
          },
          {
            "title": "Pruebas rápidas en el momento",
            "desc": "Resultados de estreptococo, influenza y COVID durante la consulta, para empezar el tratamiento el mismo día."
          },
          {
            "title": "La familia incluida",
            "desc": "Sus seres queridos pueden participar de forma natural, sin viajes ni sala de espera."
          },
          {
            "title": "Horarios que se ajustan",
            "desc": "Citas elegidas alrededor de su trabajo y su familia, no de la fila de una clínica."
          }
        ],
        "steps": [
          {
            "title": "Reserve su consulta",
            "desc": "Elija un horario en línea, o llame y Ana lo encuentra con usted."
          },
          {
            "title": "Confirmamos y preparamos",
            "desc": "Su historial se revisa con anticipación y el equipo se prepara según lo que necesita."
          },
          {
            "title": "Ana llega",
            "desc": "Llega a su puerta con todo lo necesario para una consulta completa, incluyendo pruebas rápidas."
          },
          {
            "title": "Plan y seguimiento",
            "desc": "Recibe un resumen por escrito, sus recetas, y una línea directa para preguntas después."
          }
        ],
        "faq": [
          {
            "q": "¿Qué áreas atienden?",
            "a": "El condado de Duval y áreas selectas del condado de St. Johns. Si no está seguro de si está en el área de servicio, llame y se lo decimos de inmediato."
          },
          {
            "q": "¿Cuánto cuesta una visita a domicilio?",
            "a": "Las visitas a domicilio están incluidas en su membresía mensual sin costo adicional. Sin membresía, los precios por consulta están en esta página y las pruebas rápidas se cobran por separado."
          },
          {
            "q": "¿Y si necesito análisis de laboratorio?",
            "a": "Los análisis básicos se pueden tomar durante la visita a domicilio. Para imágenes o laboratorios especializados, Ana coordina con centros locales de confianza y le ayuda a programarlos."
          }
        ]
      },
      "tele": {
        "title": "Telemedicina",
        "titleItalic": "donde esté",
        "desc": "Atención desde donde usted esté.",
        "detail": "Consultas por video seguras para mayores de 3 años, casi siempre disponibles el mismo día. Sin aplicaciones que descargar.",
        "features": [
          {
            "title": "Acceso el mismo día",
            "desc": "La mayoría de las consultas por video se pueden reservar el mismo día — la idea es atenderlo antes de que empeore."
          },
          {
            "title": "Privado y seguro",
            "desc": "Una plataforma cifrada que mantiene su información entre usted y Ana."
          },
          {
            "title": "Sin aplicaciones",
            "desc": "La consulta se abre en su navegador con un enlace enviado a su teléfono o correo."
          },
          {
            "title": "En su idioma",
            "desc": "Toda la consulta ocurre en español o inglés — el idioma en el que usted piensa."
          }
        ],
        "steps": [
          {
            "title": "Solicite una consulta",
            "desc": "Reserve en línea o llame. Casi siempre hay citas el mismo día."
          },
          {
            "title": "Reciba su enlace",
            "desc": "Un enlace de video seguro y de un solo uso llega por mensaje o correo unos minutos antes."
          },
          {
            "title": "Hablen cara a cara",
            "desc": "Toque el enlace para entrar. Funciona en su navegador, en teléfono, tableta o computadora."
          },
          {
            "title": "Reciba su plan",
            "desc": "Su resumen, sus recetas y las instrucciones de seguimiento llegan por mensaje seguro."
          }
        ],
        "faq": [
          {
            "q": "¿Necesito descargar una aplicación?",
            "a": "No. La consulta se abre directamente en su navegador — solo toque el enlace que le enviamos."
          },
          {
            "q": "¿Pueden atender a niños por video?",
            "a": "Sí, desde los 3 años. Los menores de 3 años, o cualquier niño con dificultad para respirar, deshidratación o mucha somnolencia, deben ser vistos en persona."
          },
          {
            "q": "¿Pueden enviar recetas por telemedicina?",
            "a": "Sí, para la mayoría de las condiciones. Las recetas van directamente a su farmacia preferida. Los medicamentos controlados requieren una consulta en persona."
          }
        ]
      },
      "member": {
        "title": "Membresías",
        "titleItalic": "sencillas",
        "desc": "Acceso directo, un precio mensual.",
        "detail": "Un modelo de pago privado que le da acceso directo a Ana sin un seguro de por medio.",
        "features": [
          {
            "title": "Sin facturas sorpresa",
            "desc": "Una sola cuota mensual. Usted sabe cuánto paga antes de reservar."
          },
          {
            "title": "Acceso directo",
            "desc": "Comuníquese con Ana por teléfono o mensaje seguro — sin menús telefónicos ni departamentos."
          },
          {
            "title": "Consultas sin prisa",
            "desc": "Las citas se programan con tiempo suficiente para lo que realmente vino a tratar."
          },
          {
            "title": "Precios familiares",
            "desc": "Agregue a su familia en su propio nivel para que toda la casa esté cubierta."
          }
        ],
        "steps": [
          {
            "title": "Elija su plan",
            "desc": "Niños y adolescentes, adultos, o adultos mayores. Todos los niveles incluyen el mismo acceso."
          },
          {
            "title": "Complete la inscripción",
            "desc": "Un formulario breve de historial médico y la cuota única de $99. Unos diez minutos."
          },
          {
            "title": "Conozca a Ana",
            "desc": "Su consulta de bienvenida es más larga y se centra en su historial y sus metas."
          },
          {
            "title": "Úsela",
            "desc": "Desde el primer día puede llamar, escribir o reservar una consulta cuando necesite atención."
          }
        ],
        "faq": [
          {
            "q": "¿Esto es un seguro médico?",
            "a": "No. Es una membresía de pago privado, no un seguro, y no lo reemplaza. Muchos miembros combinan la membresía con un plan de deducible alto que cubre hospitales y emergencias."
          },
          {
            "q": "¿Puedo cancelar cuando quiera?",
            "a": "Sí. No hay contratos a largo plazo — cancele con 30 días de aviso, por cualquier motivo."
          },
          {
            "q": "¿Qué cubre la cuota de $99?",
            "a": "Es una cuota administrativa única que se cobra con su primer mes. Cubre la apertura de su expediente, su papeleo de admisión y la programación de su consulta de bienvenida."
          }
        ]
      },
      "pediatrics": {
        "title": "Atención",
        "titleItalic": "pediátrica",
        "desc": "Cuidado amable para los más pequeños.",
        "detail": "Consultas por enfermedad, formularios escolares y deportivos, y respuestas claras para los padres — por video desde los 3 años, o en casa.",
        "features": [
          {
            "title": "Consultas por enfermedad",
            "desc": "Fiebre, dolor de garganta, dolor de oído y erupciones evaluados rápido, casi siempre el mismo día."
          },
          {
            "title": "Formularios escolares y deportivos",
            "desc": "Exámenes y papeleo completados y devueltos sin una segunda cita."
          },
          {
            "title": "Padres escuchados",
            "desc": "Tiempo para hacer todas las preguntas, y respuestas en lenguaje claro y sin tecnicismos."
          },
          {
            "title": "Atención en español",
            "desc": "Nunca se le pide a la familia que traduzca durante una consulta médica."
          }
        ],
        "steps": [
          {
            "title": "Comuníquese",
            "desc": "Reserve en línea o llame. Casi siempre hay consultas por enfermedad el mismo día."
          },
          {
            "title": "Cuéntenos qué pasa",
            "desc": "Un formulario breve antes de la consulta hace que el tiempo se dedique a su hijo, no al papeleo."
          },
          {
            "title": "La consulta",
            "desc": "Por video desde los 3 años, o en casa cuando su hijo necesita ser visto en persona."
          },
          {
            "title": "Plan por escrito",
            "desc": "Se va con un plan claro, sus recetas, y un número al cual llamar si algo cambia."
          }
        ],
        "faq": [
          {
            "q": "¿Qué edades atienden?",
            "a": "Niños desde los 3 años por telemedicina, y todas las edades para visitas a domicilio. La atención continúa en la membresía de adultos cuando su hijo cumple 18."
          },
          {
            "q": "¿Y las emergencias?",
            "a": "Para cualquier situación que ponga la vida en riesgo, llame al 911. Para casos urgentes, los miembros pueden llamar o escribir directamente y Ana coordina atención el mismo día."
          },
          {
            "q": "¿Cuándo necesita mi hijo ser visto en persona?",
            "a": "Cualquier niño menor de 3 años, y cualquier niño con dificultad para respirar, deshidratación o mucha somnolencia, necesita una evaluación en persona en lugar de video."
          }
        ]
      },
      "chronic": {
        "title": "Manejo de",
        "titleItalic": "enfermedades crónicas",
        "desc": "Manejando su salud, juntos.",
        "detail": "Apoyo continuo para la presión, la diabetes, el colesterol y el peso — hecho a la medida de su vida, no de un protocolo.",
        "features": [
          {
            "title": "Un plan hecho para usted",
            "desc": "Sus metas y su rutina forman el plan, en lugar de una lista genérica."
          },
          {
            "title": "Seguimiento regular",
            "desc": "Contactos programados por mensaje, teléfono o video para ver su progreso entre consultas."
          },
          {
            "title": "Apoyo en el estilo de vida",
            "desc": "Nutrición, movimiento y manejo del estrés integrados al plan, no tratados como algo aparte."
          },
          {
            "title": "Coordinación",
            "desc": "Ana trabaja con sus especialistas, laboratorios y farmacia para que todos vean el mismo panorama."
          }
        ],
        "steps": [
          {
            "title": "Evaluación completa",
            "desc": "Una primera consulta larga que cubre su historial, medicamentos, rutina y lo que quiere cambiar."
          },
          {
            "title": "Su plan de cuidado",
            "desc": "Manejo de medicamentos, cambios en el estilo de vida y un calendario de seguimiento que usted acepta."
          },
          {
            "title": "Mantengámonos en contacto",
            "desc": "El seguimiento regular mantiene el plan honesto y lo ajusta cuando sus resultados cambian."
          },
          {
            "title": "Celebre los avances",
            "desc": "El progreso se mide y se revisa con usted, y las metas avanzan conforme usted avanza."
          }
        ],
        "faq": [
          {
            "q": "¿Qué condiciones manejan?",
            "a": "Con más frecuencia presión alta, diabetes tipo 2, colesterol alto, condiciones de tiroides y control de peso. Si su condición no está en la lista, pregunte — probablemente se puede manejar aquí."
          },
          {
            "q": "¿Esto reemplaza a mi especialista?",
            "a": "No. Complementa la atención del especialista. Ana maneja el día a día y la coordinación, mientras su especialista realiza procedimientos y atención avanzada."
          },
          {
            "q": "¿Con qué frecuencia me atenderán?",
            "a": "Depende de la condición. La mayoría comienza con consultas mensuales y pasa a trimestrales cuando todo está estable, manteniéndose en contacto por mensaje mientras tanto."
          }
        ]
      }
    },
    "team": {
      "badge": "Su proveedora",
      "title": "Conozca a",
      "titleItalic": "Ana",
      "role": "Enfermera Practicante Familiar y Fundadora",
      "intro": "Sunny Florida Family Care es una práctica de una sola proveedora, y esa es la idea. No lo pasarán de un proveedor a otro ni le pedirán que explique su historial otra vez a alguien nuevo.",
      "bio": [
        "Ana Adamski es Enfermera Practicante Familiar certificada y atiende a familias en todo Jacksonville. Comenzó esta práctica después de años de ver buenas consultas cortadas a la mitad — veinte pacientes en la agenda, y frente a ella una persona que había esperado semanas para ser escuchada.",
        "Atiende a familias completas: niños desde los 3 años por video, adultos manejando condiciones crónicas, y los abuelitos que merecen que se les hable directamente y no a través de un familiar. Cada consulta ocurre en español o inglés, el idioma en el que usted piensa.",
        "También es la proveedora que llama un fin de semana cualquiera para ver si usted o su hijo están mejor. A veces lo que un paciente necesita no es otra cita — es tranquilidad, en su propio idioma, de alguien que ya conoce la historia."
      ],
      "valuesTitle": "Lo que puede esperar",
      "values": [
        {
          "title": "Tiempo",
          "desc": "Consultas lo suficientemente largas para cubrir lo que realmente vino a tratar, no solo lo primero que mencionó."
        },
        {
          "title": "Continuidad",
          "desc": "La misma proveedora en cada consulta, para construir confianza una vez y no reconstruirla cada vez."
        },
        {
          "title": "Su idioma",
          "desc": "Español e inglés con fluidez. Sin intérprete, sin un familiar traduciendo un diagnóstico."
        },
        {
          "title": "Acceso",
          "desc": "Una línea directa por teléfono o mensaje seguro cuando necesita claridad, no solo cuando necesita una cita."
        }
      ],
      "promiseTitle": "La promesa",
      "promise": "Usted no es un espacio en una agenda. Es alguien con una historia, una familia y una razón por la que finalmente hizo la llamada. Su salud. Su tiempo. Su cuidado.",
      "cta": "Reservar con Ana"
    },
    "finalCta": {
      "title": "Una atención médica más cercana,",
      "titleItalic": "personalizada y enfocada en usted.",
      "contact": "¿Preguntas? Llame o escriba al"
    },
    "faq": {
      "title": "Preguntas",
      "titleItalic": "Frecuentes",
      "items": [
        {
          "q": "¿Aceptan seguro médico?",
          "a": "No. Sunny Florida Family Care es de pago privado, y eso es lo que hace posibles las consultas largas y el acceso directo. Usted paga un precio claro que ve antes de reservar. Muchos miembros mantienen un plan de deducible alto para hospitales y emergencias."
        },
        {
          "q": "¿Se requiere una membresía?",
          "a": "No. Todos los servicios están disponibles como consulta única a los precios que aparecen en la página de Servicios. La membresía simplemente hace más económica la atención continua y le da acceso directo a Ana."
        },
        {
          "q": "¿Tengo que hablar inglés?",
          "a": "No. Ana habla español e inglés con fluidez, y toda la consulta — incluyendo su plan por escrito — puede ser en español. Atención completa en español."
        },
        {
          "q": "¿Qué tan rápido me pueden atender?",
          "a": "El mismo día o al día siguiente en la mayoría de los casos. Las consultas de telemedicina suelen estar disponibles el mismo día; las visitas a domicilio se programan según su disponibilidad."
        },
        {
          "q": "¿Atienden niños?",
          "a": "Sí. Las consultas de telemedicina son para mayores de 3 años. Los menores de 3 años, o cualquier niño con dificultad para respirar, deshidratación o mucha somnolencia, necesitan una evaluación en persona."
        },
        {
          "q": "¿Cómo y cuándo se paga?",
          "a": "El pago es con tarjeta y se cobra al reservar — se requiere un pago para reservar su cita, así que su horario queda apartado en cuanto termina. Las membresías se cobran mensualmente a la tarjeta registrada y se pueden cancelar con 30 días de aviso."
        },
        {
          "q": "¿Y si necesito un especialista o el hospital?",
          "a": "Ana coordina los referidos y comparte su expediente con el especialista. Para emergencias, siempre llame al 911 o vaya a la sala de emergencias más cercana."
        }
      ]
    },
    "footer": {
      "desc": "Atención privada conveniente y compasiva para familias en todo Jacksonville — enfocada en la prevención, el bienestar y sus metas individuales de salud.",
      "visit": "Contáctenos",
      "hours": "Horario",
      "monFri": "Lun – Vie",
      "sat": "Sábado",
      "walkins": "Citas disponibles el mismo día",
      "legal": "Información",
      "designed": "Care by Nurse Practitioners",
      "rights": "Todos los derechos reservados.",
      "disclaimer": "Sunny Florida Family Care es una práctica de pago privado y no es un seguro médico. La información en este sitio es general y no constituye consejo médico, y usar este sitio no crea una relación proveedor-paciente. En caso de emergencia médica, llame al 911."
    },
    "loading": "Cargando",
    "notFound": {
      "title": "Página no encontrada",
      "desc": "Esa página se movió o nunca existió.",
      "cta": "Volver al inicio"
    }
  }
};

export default translations;
