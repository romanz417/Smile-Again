export type Program = {
  slug: string;
  name: string;
  oldName: string;
  seoTitle: string;
  description: string;
  summary: string;
  cover: string;
  coverAlt: string;
  gallery: { src: string; alt: string }[];
  intro: string;
  body: string[];
  whatWeDo: string[];
  goals?: string[];
  give: string;
};

export const programs: Program[] = [
  {
    slug: 'safe-home',
    name: 'Guadalupe Safe Home',
    oldName: 'Safe Home project',
    seoTitle: 'Guadalupe Safe Home for Teenage Mothers in Masaka, Uganda',
    description:
      'A safe residential home in Masaka, Uganda, for teenage mothers abandoned by partners and family, with daily prenatal and postnatal care, skills training and childcare.',
    summary: 'A place to live, heal and learn for mothers who have been abandoned by their partners and their families.',
    cover: 'safe-drone-2',
    coverAlt: 'Aerial view of the Guadalupe Mission Home in Masaka',
    gallery: [
      { src: 'safe-drone-1', alt: 'The entrance of Guadalupe House' },
      { src: 'safe-1', alt: 'Children playing in the Safe Home garden' },
      { src: 'safe-2', alt: 'Clergy and staff at the Safe Home dedication' },
    ],
    intro:
      'Some teenage mothers are abandoned not only by the men who fathered their children, but by their own families. Alone, pregnant and without income, many face despair, unsafe work or unsafe abortion.',
    body: [
      'The Guadalupe Mission Home gives these young women somewhere safe to stay as a family with their babies. Staff are with them every day, monitoring their health and supporting them through prenatal and postnatal care, so that a crisis does not become the end of their story.',
      'The home is also a training center. Mothers who live in the surrounding communities come for workshops in life skills, business, computers, tailoring, hairdressing and book-making. A children’s center offers a play area and day care, and we hope to open a kindergarten.',
      'We have learned that transformation often comes fastest when we can walk alongside a mother every day. Living at the home gives her the time and support to dream again and to become independent enough to care for herself and her child.',
    ],
    whatWeDo: [
      'Safe shelter for abandoned teenage mothers and their babies',
      'Daily prenatal and postnatal monitoring',
      'Vocational, business and computer training',
      'Day care and play space for the children',
    ],
    goals: ['Construction of the home is complete. We are now raising funds for its daily running costs: food, medical care, school needs, hygiene supplies and childcare.'],
    give: 'Give to Safe Home operations',
  },
  {
    slug: 'back-to-school',
    name: 'Back to School',
    oldName: 'Smiling Back to School',
    seoTitle: 'Sponsor a Teenage Mother’s Education in Uganda',
    description:
      'Our Back to School program helps teenage mothers in Uganda return to formal education or vocational training. Sponsor a young mother’s tuition from $450 a year.',
    summary: 'Helping young mothers return to the classroom or vocational training, and break the cycle of regret.',
    cover: 'school-hero',
    coverAlt: 'Young mothers in school uniform with Smile Again staff',
    gallery: [
      { src: 'proj-school', alt: 'Students holding a Smile Again photo frame' },
      { src: 'sp-brenda', alt: 'Brenda in her school uniform' },
    ],
    intro:
      'Our deepest hope for every mother is that she will dream again for her future. For most young mothers, that begins with going back to school.',
    body: [
      'This program supports young mothers to return to formal education or to vocational training, so that they can build a brighter future for themselves and for their children.',
      'It is also the most personal way to give: friends and partners can sponsor a specific young mother and follow her progress through school.',
    ],
    whatWeDo: [
      'Encouragement and mentoring to overcome the fear of returning to class',
      'Tuition and school requirements through individual sponsorship',
      'Placement in secondary school, nursing or vocational institutes',
      'Ongoing follow-up with each student and her family',
    ],
    give: 'Sponsor a young mother',
  },
  {
    slug: 'livelihoods',
    name: 'Livelihoods',
    oldName: 'Smiling to Improve Livelihood',
    seoTitle: 'Livelihood Support for Teenage Mothers in Uganda',
    description:
      'Food, maternity kits, clean water and solar light for teenage mothers and their babies in rural Masaka, Uganda — meeting basic needs so mothers can rebuild.',
    summary: 'Meeting basic needs — food, clothing, maternity supplies and clean water — so mothers can rebuild.',
    cover: 'live-1',
    coverAlt: 'Mothers and children sharing a meal at a Smile Again gathering',
    gallery: [
      { src: 'live-2', alt: 'Community members and staff at Holy Trinity' },
      { src: 'proj-livelihood', alt: 'A staff member delivering supplies to a young mother' },
      { src: 'live-4', alt: 'A graduate receiving her certificate' },
    ],
    intro:
      'Our surveys found that some mothers cannot afford two meals a day, clothes for their babies, prenatal supplies or access to clean water.',
    body: [
      'Hunger leads to malnutrition in mothers and babies who then cannot pay their medical bills. And when water is far away, young girls must walk long distances to fetch it, which exposes them to greater risk of abuse and pregnancy.',
      'With help from friends and partners, we distribute food, clothing and maternity supplies — mama kits, baby clothes, diapers, cotton and sanitary pads — and everyday essentials in the communities where mothers live.',
    ],
    whatWeDo: [
      'Food and household essentials for mothers in crisis',
      'Maternity kits and baby clothing',
      'Clean water and solar lighting for communities',
      'Support toward safe, decent housing',
    ],
    goals: [
      'Bring clean water to at least three communities every year',
      'Install solar lighting in at least three communities every year',
      'Help at least five young mothers move into a decent home each year',
    ],
    give: 'Give to livelihood support',
  },
  {
    slug: 'health',
    name: 'Maternal & child health',
    oldName: 'Smiling Body',
    seoTitle: 'Maternal and Child Health for Teenage Mothers in Uganda',
    description:
      'Health education, malaria and HIV prevention, nutrition support and health camps for teenage mothers and their babies in Masaka, Uganda.',
    summary: 'Health education, nutrition and medical care for young mothers and their babies.',
    cover: 'body-1',
    coverAlt: 'A young mother and her baby at a health camp',
    gallery: [
      { src: 'body-2', alt: 'Mothers and babies waiting at a health camp' },
      { src: 'proj-7903', alt: 'A health worker examining a mother' },
      { src: 'body-3', alt: 'Community health day participants' },
    ],
    intro:
      'Giving birth at a young age carries serious physical risks for both mother and baby, so young mothers need special care.',
    body: [
      'We run health education, malaria and HIV prevention, and nutrition programs, both at our center and in the communities where mothers live. Mothers learn how to care for themselves and their babies, and receive the medical supplies and services they need.',
      'We partner with individuals and health units to provide food supplements for malnourished babies, medical supplies, and health camps for the wellbeing of mothers and children.',
    ],
    whatWeDo: [
      'Health and nutrition education',
      'Malaria and HIV prevention',
      'Food supplements for malnourished babies',
      'Community health camps with partner clinics',
    ],
    give: 'Give to maternal health',
  },
  {
    slug: 'solidarity-groups',
    name: 'Solidarity groups',
    oldName: 'Solidarity groups',
    seoTitle: 'Peer Support Groups for Teenage Mothers in Uganda',
    description:
      'Fifty community solidarity groups give teenage mothers in Uganda peer support, counseling visits and a sense of belonging — and raise up new leaders.',
    summary: 'Peer groups that give mothers belonging and support, and raise up new leaders.',
    cover: 'sol-1',
    coverAlt: 'Young mothers studying together on mats outdoors',
    gallery: [
      { src: 'sol-2', alt: 'A large solidarity group gathering' },
      { src: 'proj-5967', alt: 'Mothers in a group counseling session' },
    ],
    intro:
      'One of the greatest needs of teenage mothers is social and emotional support. Because mothers live across many villages, we organize solidarity groups by location.',
    body: [
      'The groups give mothers a sense of belonging and a circle of support, even when our staff are not there. Every two weeks we visit for group and one-on-one psychosocial support: listening, and following each mother’s progress.',
      'Within the groups, mothers learn to support one another and to notice others who need help but have not yet come forward. It is here that leaders emerge — and we mentor them to become part of the mission.',
    ],
    whatWeDo: [
      'Fifty groups formed across Masaka communities',
      'Fortnightly group and individual counseling visits',
      'Peer support and outreach to hidden mothers',
      'Leadership mentoring for emerging leaders',
    ],
    give: 'Support a solidarity group',
  },
  {
    slug: 'prevention',
    name: 'Prevention in schools',
    oldName: 'Stay Smiling project',
    seoTitle: 'Teenage Pregnancy Prevention in Ugandan Schools',
    description:
      'Smile Again clubs in schools, community dialogues with local leaders, and research on adolescent wellbeing to prevent teenage pregnancy in Uganda.',
    summary: 'Clubs, community dialogues and research to prevent teenage pregnancy before it happens.',
    cover: 'proj-stay',
    coverAlt: 'Students in orange Smile Again shirts outside their school',
    gallery: [
      { src: 'stay-1', alt: 'A school workshop on adolescent health' },
      { src: 'post-worth', alt: 'Students and mothers at an awareness event' },
    ],
    intro:
      'Caring for young mothers is only half of the work. We also want fewer girls to face early pregnancy at all — with survivors of teenage pregnancy leading the way.',
    body: [
      'We form Smile Again clubs in schools to teach students about the risks of teenage pregnancy, and we hold community dialogues that bring villagers, local leaders and policymakers together.',
      'The program also researches teenage pregnancy and adolescent wellbeing, so that policymakers and partners can make informed decisions.',
    ],
    whatWeDo: [
      'Smile Again clubs in four high schools',
      'Village dialogues with leaders and policymakers',
      'Survivor-led awareness campaigns',
      'Research on adolescent wellbeing',
    ],
    give: 'Give to prevention',
  },
];

export const programBySlug = Object.fromEntries(programs.map((p) => [p.slug, p]));

export const model = [
  {
    name: 'Reach',
    text: 'We find more than 200 mothers each year through home visits, hospital referrals, parish programs, radio announcements and steady community engagement.',
  },
  {
    name: 'Restore',
    text: 'One-on-one counseling for survivors of teenage pregnancy, peer solidarity groups, and on-site training that builds healing, resilience and self-reliance.',
  },
  {
    name: 'Sustain',
    text: 'By two years after childbirth, our goal is for each mother to be self-reliant, with the skills, opportunities and support she needs to stay that way.',
  },
];
