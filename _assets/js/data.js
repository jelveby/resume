var DATA = {

  // EDUCATION
  education: [
    {
      title: {
        sv: 'Högskola',
        en: 'College'
      },
      begins: 2002,
      ends: 2007,
      location: 'Eskilstuna/Västerås',
      description: {
        sv: 'Kandidatexamen (120p) inom Informationsdesign. Plus lite datavetenskap.',
        en: 'Bachelor\'s degree in Information Design. Plus some computer science, for good measure.'
      }
    },
    {
      title: {
        sv: 'Gymnasieutbildning',
        en: 'High School'
      },
      begins: 1996,
      ends: 1999,
      location: 'Uppsala',
      description: {
        sv: 'Specialutformat treårigt program med inriktning datavetenskap.',
        en: 'Three year computer science program.'
      }
    },
    {
      title: {
        sv: 'Militärtjänstgöring',
        en: 'Military service'
      },
      begins: 2000,
      ends: 2001,
      location: 'Boden/Enköping',
      description: {
        sv: 'Utbildad till datatekniker för militära system.',
        en: 'Trained as a computer technician for military systems.'
      }
    }
  ],

  // SKILLS
  skills: {
    languages: [
      {
        type: {
          sv: 'Svenska',
          en: 'Swedish'
        },
        level: 4
      },
      {
        type: {
          sv: 'Engelska',
          en: 'English'
        },
        level: 3
      }
    ],
    technical: [
      {
        type: 'HTML',
        level: 4, // Out of 5
        extra: ''
      },
      {
        type: 'CSS',
        level: 3, // Out of 5
        extra: {
          sv: 'Inkl. CSS3, Media Queries, webbläsarkompatibilitet och att jobba med LESS.',
          en: 'Incl. CSS3, Media Queries, cross browser compatibility and working with LESS.'
        }
      },
      {
        type: 'Javascript',
        level: 3, // Out of 5
        extra: {
          sv: 'jQuery, ajax.',
          en: 'jQuery, ajax.'
        }
      },
      {
        type: 'PHP',
        level: 2, // Out of 5
        extra: ''
      },
      {
        type: {
          sv: 'Databaser',
          en: 'Databases'
        },
        level: 1, // Out of 5
        extra: {
          sv: 'Egentligen bara grundläggande erfarenhet av MySQL och SQL rent generellt.',
          en: 'Really only basic MySQL expericence and SQL in general.'
        }
      },
      {
        type: 'Adobe Photoshop',
        level: 3,
        extra: ''
      },
      {
        type: 'Adobe Illustrator',
        level: 2,
        extra: ''
      },
      {
        type: 'Flash',
        level: 1,
        extra: ''
      }
    ]
  },

  // WORK EXPERIENCE
  work: [
    {
      employer: {
        sv: 'Utlandsstyrkan',
        en: 'Military'
      },
      position: {
        sv: 'Datatekniker',
        en: 'Computer technician'
      },
      begins: 2001,
      ends: 2002,
      location: 'Kosovo',
      description: {
        sv: 'Arbetade som tekniker och support för hela den svenska bataljonen i Kosovo.',
        en: 'Worked as a technician and support for the swedish batallion in Kosovo.'
      },
      highlights: [
        {
          title: 'Uppgraderade hela utlandsstyrkans datorsystem.',
          details: ''
        },
        {
          title: 'Stod för daglig drift och underhåll av datorsystemet.',
          details: ''
        },
        {
          title: 'Skötte support och felsökning.',
          details: ''
        }
      ]
    },
    {
      employer: '"Kåranen"',
      position: {
        sv: 'Skribent/Formgivare',
        en: 'Writer/Designer'
      },
      begins: 2006,
      ends: 2007,
      location: 'Eskilstuna',
      description: {
        sv: 'Kombinerade skribent och grafisk formgivare för högskolans kårtidning.',
        en: 'Combined working as writer and graphic designer for the college school paper, "Kåranen".'
      },
      highlights: [
        {
          title: 'Tillsammans med två medarbetare formgivit tidningen.',
          details: ''
        },
        {
          title: 'Skrivit artiklar och krönikor.',
          details: ''
        }
      ]
    },
    {
      employer: {
        sv: 'Frilans',
        en: 'Freelance'
      },
      position: {
        sv: 'Skribent/Webdesign',
        en: 'Writing/Web Design'
      },
      begins: 2000,
      ends: 2009,
      location: 'Eskilstuna',
      description: {
        // sv: 'Kombinerade skribent och grafisk formgivare för högskolans kårtidning.',
        // en: 'Combined working as writer and graphic designer for the college school paper, "Kåranen".'
      },
      highlights: [
        {
          title: 'Tillsammans med två medarbetare formgivit tidningen.',
          details: ''
        },
        {
          title: 'Skrivit artiklar och krönikor.',
          details: ''
        }
      ]
    },
    {
      employer: 'SprayPassagen',
      position: {
        sv: 'Frontendutvecklare',
        en: 'Frontend Developer'
      },
      begins: 2007,
      ends: {
        sv: 'nuvarande',
        en: 'current'
      },
      location: 'Stockholm',
      description: {
        // sv: 'Kombinerade skribent och grafisk formgivare för högskolans kårtidning.',
        // en: 'Combined working as writer and graphic designer for the college school paper, "Kåranen".'
      },
      highlights: [
        {
          title: 'Tillsammans med två medarbetare formgivit tidningen.',
          details: ''
        },
        {
          title: 'Skrivit artiklar och krönikor.',
          details: ''
        }
      ]
    }

  ]
};

var PAGE = {
  headlines: {
    subheader: {
      sv: 'Det naturliga valet',
      en: 'The obvious choice'
    },
    skills: {
      sv: 'Kunskaper',
      en: 'Skills'
    },
    'skills/technical': {
      sv: 'Tekniska',
      en: 'Technical'
    },
    'skills/languages': {
      sv: 'Språk',
      en: 'Languages'
    },
    education: {
      sv: 'Utbildning',
      en: 'Education'
    },
    work: {
      sv: 'Arbetslivserfarenhet',
      en: 'Work experience'
    }
  }
};