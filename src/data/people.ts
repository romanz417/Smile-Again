export const founders = [
  {
    name: 'Stella Ritah Nabukera',
    role: 'Co-founder & Executive Director',
    photo: 'team-stella',
    bio: [
      'Stella is a trained pastoral worker and a mother of five. She holds a master’s degree in Development Studies and is pursuing a master’s in John Paul II Studies at the University of St. Thomas in Houston, Texas.',
      'She is passionate about community development and about helping people discover their true identity and potential. Through counseling and life-skills training she seeks out those who have given up, offering hope and encouragement — and she longs to see every mother become self-sustaining through her own business.',
    ],
  },
  {
    name: 'Fred Mugaga Ssentamu',
    role: 'Co-founder & Programs Director',
    photo: 'team-fred',
    bio: [
      'Fred grew up in a humble family with seven siblings. He is an electrical engineer, a husband, and a father of five, and he describes his strongest gifts as faith, creative communication and craftsmanship.',
      'Deeply committed to strengthening young marriages and families, Fred served the Church as a missionary with the Youth Office of the Diocese of Masaka. Today he works in the field every day with teenage mothers and their families.',
    ],
  },
];

export const board = [
  { name: 'Dr. Faith Nakiyimba', role: 'Board Chair', photo: 'team-faith' },
  { name: 'Mrs. Joseline Wegosasa', role: 'Director of Gender and Human Rights', photo: 'team-joseline' },
  { name: 'Mr. Alex Okello', role: 'Director of Finance', photo: 'team-alex' },
  { name: 'Fr. Henry Ssebwana', role: 'Legal Advisor', photo: 'team-0630' },
  { name: 'Fr. Joseph Bukyanayandi', role: 'Spiritual Director', photo: 'team-fr' },
  { name: 'Mr. Fred Mugaga', role: 'Director of Organizational Development', photo: 'team-fred' },
  { name: 'Mrs. Stella Ritah Nabukera', role: 'Board Secretary', photo: 'team-stella' },
];

export const staff = [
  { name: 'Stella Ritah Nabukera', role: 'Executive Director', photo: 'team-stella' },
  { name: 'Fred Mugaga Ssentamu', role: 'Programs Director', photo: 'team-fred' },
  { name: 'Mutebi Matia', role: 'Monitoring, Evaluation & Procurement Officer', photo: 'team-mutebi' },
  { name: 'Lilian Mpamulungi', role: 'Skills Training Coordinator', photo: 'team-lilian' },
];

export type Student = {
  name: string;
  photo: string;
  level: 'Secondary school' | 'Nursing school' | 'Further studies';
  need: string;
  needPerYear: string;
  story: string;
};

export const students: Student[] = [
  {
    name: 'Brenda',
    photo: 'sp-brenda',
    level: 'Secondary school',
    need: '$150 tuition and $50 school requirements per term',
    needPerYear: '$600 a year',
    story:
      'Brenda became pregnant at 14, before finishing primary school, and stayed home for three years. She was afraid — of sitting in class again, of being “too old,” of not fitting in. After watching other mothers in our program progress year after year, she found the courage to try. In 2026 she went back to school.',
  },
  {
    name: 'Lydia',
    photo: 'sp-lydia',
    level: 'Secondary school',
    need: '$150 tuition and $50 school requirements per term',
    needPerYear: '$600 a year',
    story:
      'Lydia is a hardworking member of the Birinzi Solidarity Group, determined to build a better future for herself and her child. She grew up with her grandmother, who could no longer afford her school fees, and she left before finishing primary school. In 2026 she made the brave decision to return.',
  },
  {
    name: 'Maria',
    photo: 'sp-maria',
    level: 'Secondary school',
    need: '$150 tuition and $50 school requirements per term',
    needPerYear: '$600 a year',
    story:
      'After her Primary Leaving Examinations, Maria stepped aside so her younger siblings could stay in school. Soon after, she became pregnant, and the baby’s father has not taken responsibility. With our encouragement she has returned to school to build a better future for herself and her baby.',
  },
  {
    name: 'Mourine',
    photo: 'sp-mourine',
    level: 'Nursing school',
    need: '$550 tuition and $50 school requirements per semester',
    needPerYear: '$1,200 a year',
    story:
      'Mourine became pregnant at 16, in her second year of secondary school. When she refused to end the pregnancy, the father abandoned her. She took small jobs to support her child and still completed secondary school. This year she joined a nursing institute — her lifelong dream is to serve her community as a nurse.',
  },
  {
    name: 'Florence',
    photo: 'sp-florence',
    level: 'Nursing school',
    need: '$550 tuition and $50 school requirements per semester',
    needPerYear: '$1,200 a year',
    story:
      'Florence finished secondary school, but her parents could not afford the next level, and during that difficult time she became pregnant. Through Smile Again she has come to believe in second chances. She dreams of becoming a theater nurse, building a stable future for her child and serving others.',
  },
  {
    name: 'Sylvia',
    photo: 'sp-sylvia',
    level: 'Further studies',
    need: 'Support toward further studies and childcare',
    needPerYear: 'Contact us for details',
    story:
      '“Thanks to Smile Again Families Foundation, I regained hope. Today I run my own fashion business, making clothes for women and children, and I support other teenage mothers. I am determined to achieve more — I wish to continue my studies, but it is hard while caring for my children.”',
  },
];

export const timeline = [
  {
    year: '2014',
    title: 'A calling becomes a mission',
    text: 'Fred and Stella begin offering spiritual, financial and emotional support to families in their community — and discover how many of those families include teenage mothers.',
  },
  {
    year: '2017',
    title: 'Registered in Masaka',
    text: 'Smile Again Families is officially registered and certified to operate in Masaka. Our first Your Worth Summit welcomes 36 teenage mothers to our unfinished home, followed by solidarity group meetings in their villages.',
  },
  {
    year: '2024',
    title: 'Ten years, and a home',
    text: 'We celebrate our tenth anniversary and open the Guadalupe Safe Home. By now we have reached 1,250 young people.',
  },
];
