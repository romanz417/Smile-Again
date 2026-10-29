export const contact = {
  phone: '+256 782 500142',
  phoneHref: 'tel:+256782500142',
  email: 'smileagain.families@gmail.com',
  address: 'Masaka–Kyotera Rd, Kajansembe Drive, Masaka, Uganda',
};

export const paypalDonateUrl =
  import.meta.env.PUBLIC_PAYPAL_DONATE_URL ??
  'https://www.paypal.com/donate/?hosted_button_id=MZX6WAF96MQ4U';

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/smileagainfamiliesuganda' },
  { label: 'Instagram', href: 'https://www.instagram.com/smileagainfamiliesuganda/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCpYvRLDyRvD0OW8OUqCmjvA' },
];

export const stats = [
  { value: '1,250', label: 'young mothers reached' },
  { value: '798', label: 'lives transformed' },
  { value: '107', label: 'trained in vocational skills' },
  { value: '50', label: 'community solidarity groups' },
  { value: '8', label: 'Catholic parishes partnering' },
];

export const projects = [
  { title: 'Smiling to Improve Livelihood', img: '/images/livelihood.webp', alt: 'Young mothers and volunteers cleaning a trading centre', text: "Helping teenage mothers and their babies access life's basic needs while they build an income." },
  { title: 'Smiling Back to School', img: '/images/school.webp', alt: 'Four young women in school uniform', text: 'Helping mothers dream again and return to the classroom, free of the cycle of regret.' },
  { title: 'Smiling Body', img: '/images/body.webp', alt: 'A young mother holding her baby at a health check', text: 'Improving the health of teenage mothers and their babies through care and check-ups.' },
  { title: 'Solidarity Groups', img: '/images/solidarity.webp', alt: 'A group of young mothers reading together on mats', text: 'Community groups that give mothers the social and emotional support they need most.' },
  { title: 'Stay Smiling', img: '/images/stay.webp', alt: 'School children in orange shirts in a classroom', text: 'Preventing teenage pregnancy through outreach in schools and communities.' },
  { title: 'Safe Home', img: '/images/safehome.webp', alt: 'The Guadalupe Mission Home lit up at night', text: 'A home for mothers abandoned by partners and family, with daily ante- and post-natal care.', href: '#safe-home' },
];

export const tiers = [
  { amount: '$45', per: '/month', text: "Supports a girl's return to school" },
  { amount: '$50', per: '/month', text: 'Provides essential care and counselling' },
  { amount: '$100', per: '/month', text: 'Livelihood and skills training for a young mother', featured: true },
  { amount: '$500', per: '/year', text: 'Helps sustain a mother in the Safe Home' },
  { amount: '$1,000+', per: '', text: 'Transforms many lives across programs' },
];

export const designations = [
  "Where it's needed most",
  'Safe Home operations',
  'Smiling Back to School',
  'Livelihood & skills training',
  'Smiling Body (health)',
];
