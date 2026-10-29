export const org = {
  name: 'Smile Again Families Foundation',
  short: 'Smile Again Families',
  usEntity: 'Smile Again Families International',
  usEin: '92-2964827',
  usCity: 'Kingwood, Texas',
  founded: 2014,
  registered: 2017,
  phone: '+256 782 500142',
  phoneHref: 'tel:+256782500142',
  email: 'smileagain.families@gmail.com',
  street: 'Kajansembe Drive, Masaka–Kyotera Road',
  city: 'Masaka',
  country: 'Uganda',
  paypal: import.meta.env.PUBLIC_PAYPAL_DONATE_URL ?? 'https://www.paypal.com/donate/?hosted_button_id=MZX6WAF96MQ4U',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/smileagainfamiliesuganda' },
    { label: 'Instagram', href: 'https://www.instagram.com/smileagainfamiliesuganda/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCpYvRLDyRvD0OW8OUqCmjvA' },
  ],
};

/** Figures from the foundation's own "Our Story" page (ten-year totals, 2014–2024). */
export const impact = [
  { value: '798', label: 'young mothers whose lives have been transformed' },
  { value: '1,250', label: 'young people reached through outreach' },
  { value: '107', label: 'mothers trained in vocational skills' },
  { value: '50', label: 'community solidarity groups formed' },
  { value: '8', label: 'Catholic parishes and 4 high schools engaged' },
];

export const ugandaFact = {
  stat: '1 in 4',
  text: 'girls aged 15–19 in Uganda has already begun childbearing. In rural districts like Masaka the rate is higher still.',
  source: 'Uganda Demographic and Health Survey 2022, Uganda Bureau of Statistics',
};

export const nav = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our story', href: '/about' },
      { label: 'Leadership & team', href: '/about/team' },
    ],
  },
  {
    label: 'Our work',
    href: '/our-work',
    children: [
      { label: 'All programs', href: '/our-work' },
      { label: 'Guadalupe Safe Home', href: '/our-work/safe-home' },
      { label: 'Back to School', href: '/our-work/back-to-school' },
      { label: 'Livelihoods', href: '/our-work/livelihoods' },
      { label: 'Maternal & child health', href: '/our-work/health' },
      { label: 'Solidarity groups', href: '/our-work/solidarity-groups' },
      { label: 'Prevention in schools', href: '/our-work/prevention' },
    ],
  },
  { label: 'Stories', href: '/stories' },
  {
    label: 'Get involved',
    href: '/volunteer',
    children: [
      { label: 'Sponsor a young mother', href: '/sponsor' },
      { label: 'Volunteer & mission trips', href: '/volunteer' },
      { label: 'Your Worth Summit', href: '/events' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
];
