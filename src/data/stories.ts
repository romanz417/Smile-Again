export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string | null;
  cover_image: string | null;
  author: string | null;
  published_at: string;
};

/**
 * The foundation's published posts, lightly edited. Supabase is the live source;
 * this copy is used when Supabase isn't reachable at build time.
 */
export const fallbackStories: Story[] = [
  {
    slug: 'christmas-brings-a-lot-of-joy',
    title: 'Christmas brings a lot of joy',
    excerpt: 'A Christmas thank-you to every friend who supported and prayed for our mothers this year.',
    category: 'News',
    cover_image: 'post-christmas',
    author: 'Smile Again Families',
    published_at: '2023-12-27',
    body: `Dear friends, Merry Christmas from all of us at Smile Again Families.

Thank you for your support and your prayers this year. Every gift, every prayer and every word of encouragement reached a young mother who needed to know she is not alone.

May the Lord bless you and your families this Christmas and in the year ahead.`,
  },
  {
    slug: 'staff-leadership-training',
    title: 'Building a firm foundation: staff leadership training',
    excerpt: 'As the team grows, a day of leadership training reminds us that everything starts and ends with the mothers we serve.',
    category: 'From the field',
    cover_image: 'post-leadership',
    author: 'A Smile Again volunteer',
    published_at: '2021-12-23',
    body: `Happy New Year! I still can’t believe it’s already 2021. Remember when it seemed 2020 would never end? Time doesn’t slow down for anyone — and with less than two months left before my visa expires and I return home to the States, my four months in Uganda feel more like four weeks.

I can’t begin to express the joy I have experienced here. Volunteering with Smile Again, I have watched the organization grow in the most beautiful ways, and it is abundantly clear that the Lord’s hands are deeply intertwined with this work.

Because of COVID-19 and the election season, the staff stayed in the office throughout January. It was a good time to orient ourselves as a team: in mid-December, Smile Again Families welcomed two new staff members. As we expand, we want a firm foundation, so Fred and Stella invited a facilitator to guide us through a day of leadership training — professionalism, being a great employer and employee, and building a strong organizational culture.

One idea stayed with us: the difference between “Customer 1” — the organization’s leaders — and “Customer 2” — the people the organization serves and the supporters who make it possible. If our focus ever drifts from Customer 2, the organization will cease to be. Our focus must always be on the teenage mothers we serve and on those who help this mission. Everything must start and end with them.

Before every meeting, we now spend the first thirty minutes or so in prayer, then share anything the Lord has placed on our hearts. One staff member said, “We are called to carry these mothers and to do something extraordinary for them.” The greatest thing we can do for these young women is to bring them into relationship with their Creator. We long to see them back in school and in better homes, with their physical needs met — and in time we believe we will. But to heal fully, we must first carry them to the One who loves them above all else, until they learn to carry themselves to Him.

We cannot thank you enough for your support. Remember the gate we needed around the mission house so that mothers could one day stay there? It is built — which means construction of the mothers’ dormitory can begin. We have set the groundbreaking for February 8th, and we ask you to join us in prayer, through the intercession of Saint Joseph, as we wait on the remaining funding.

“You were wearied with the length of your way, but you did not say, ‘It is hopeless’; you found new life for your strength” (Isaiah 57:10). Even in confusion and darkness, the Lord brings light. Please keep praying with us, and may God bless you abundantly in this new year.`,
  },
  {
    slug: 'help-mothers-discover-their-inner-worth',
    title: 'Helping mothers discover their inner worth',
    excerpt: 'Sixty young mothers, four days, and a summit that helped them see a future again.',
    category: 'Your Worth Summit',
    cover_image: 'story-3',
    author: 'Smile Again Families',
    published_at: '2021-06-18',
    body: `Every year, Smile Again Families holds a summit for young mothers aged 19 and under. Its purpose is to help them realize their worth: that whatever has happened in their lives, they can still become what they dreamed of being; that they are loved; and that God has a plan for them — He is not finished with them yet. They meet women who have walked the same road and whose lives are better now, and they discover a family that cares for them.

The summit also gives us the chance to search intensively for mothers. Many are hidden in their grandparents’ homes after being sent away by their parents, who see a pregnancy as a family shame. As Francesca, one of our field staff, put it: “These outreaches are good because they put you in touch with the people, and you see the reality of life.”

This year, sixty teenage mothers came — up from twenty the year before — and we had to hire a bigger venue to fit everyone and their children. We were blessed by three volunteers: sisters Caitlin and Bridget from Boston and Amber from Canada. They shared their own life stories, spent time with the mothers, cared for the children during sessions so the mothers could concentrate, and brought toys, children’s kits and art materials. “Fredie and Stella do an amazing job restoring the faith of these mothers,” Bridget said.

By the end of four days of hard work, many hopes and dreams had been restored — and most of all, the mothers’ smiles and their love for their babies. On the last night they sang and danced, knowing there is a reason to live. Viola, our youngest mother, said: “I had great hatred for my baby Tracy because I was abused. But from today I have developed love for my baby and will take great care of her. I know she will make a difference in the world one day.”

The summit was also attended by the Mayor of Masaka Municipality, Mr. Kayemba Afaayo. “I never realized the great need that has arisen in our community because of teenage pregnancies,” he said. “I promise to be part of this great family and to work with Smile Again Families so that this need is addressed. I invite friends to support this cause so that our people in rural communities can be helped.”

We look forward to working with our mayor and with you, our friends. There are many ways to join us — and together we can change the lives of these mothers and their children.`,
  },
  {
    slug: 'for-unto-us-a-child-is-born',
    title: 'For unto us a child is born',
    excerpt: 'Soap, a Christmas meal and eleven homemade cakes: delivering Christmas to mothers in the villages.',
    category: 'From the field',
    cover_image: 'proj-livelihood',
    author: 'A Smile Again volunteer',
    published_at: '2020-12-22',
    body: `“A thrill of hope, the weary world rejoices!” — O Holy Night

On Monday evening we sat down as a team to close the year before our Christmas break, and we couldn’t help giving thanks to the Lord for guiding us through such a challenging yet beautiful year.

For the past few weeks we have been out in the villages delivering Christmas gifts to the mothers, and the joy we encountered was wonderful. One volunteer remarked how fitting this organization’s name is: Smile Again. The Lord invites the weary to rejoice in Him, and I am blessed to be part of an organization that carries that message of hope to those who desperately need it.

Thanks to your prayers and donations, we gave every mother and child a kilogram of soap and a Christmas meal — and Stella and I baked a cake for each village to share. It started as a crazy idea (eleven cakes in two weeks!) but it brought enormous joy. At home, we bake sweets all year; in many of these villages a cake is a rarity. I wish you could have seen the faces of the mothers and their children.

I keep learning that something that seems simple to me can mean the world to someone else. Even when we feel we have little to give, the little we do give shows these young women that they are seen and loved — and that love goes further than any amount of money ever could.

The words of O Holy Night have been in my head for weeks: “Long lay the world in sin and error pining, till He appeared and the soul felt its worth.” Our mission is to help broken teenage mothers discover their inner worth, and Christmas reminds me that our Savior has already come, and our worth lies in Him alone.

We wish you a very merry Christmas. May your souls find rest in the Lord, and may we all rejoice together in the birth of our King.

“Behold, a virgin shall conceive and bear a son, and His name shall be called Emmanuel, which means ‘God with us’” (Matthew 1:23).`,
  },
  {
    slug: 'preparing-for-christmas',
    title: 'Preparing for Christmas',
    excerpt: 'A $9 Christmas package for each of 150 mothers: rice, sugar, porridge, soap and a little joy.',
    category: 'From the field',
    cover_image: 'post-xmas-prep-1',
    author: 'A Smile Again volunteer',
    published_at: '2020-12-17',
    body: `Is it really almost December already?

During the lockdown back home I felt this year would never end, yet here in Uganda time is flying. Friends and family at home already have their trees and decorations up. My surroundings are a little different this year: instead of snow and cornfields, I look out at sunshine and banana trees. I can’t wait to experience my first Christmas in Uganda!

Smile Again Families always tries to do something special for the mothers at Christmas. Because of the virus, there won’t be a big party at the mission house this year, but we are still bringing some Christmas spirit to the mothers in their villages. Each mother and child will receive a package with 2 kg of rice and sugar, 1 kg of porridge, some small cakes, soap and a reusable sanitary pad, wrapped as an individual gift so that every family feels loved and appreciated.

Each package costs about 33,300 Ugandan shillings, or $9. With about 150 mothers in our programs, our goal is $1,350.

You are also welcome to send a Christmas note or prayer to smileagain.families@gmail.com. I will copy each one onto paper and make sure a mother receives your kind words. We hope to deliver the gifts in the first weeks of December, so the mothers can cook a Christmas meal.

Thank you all for your kindness and generosity. I wish you could see the mothers’ smiles as they receive your gifts; I will try to capture the moment in photos. Webale nnyo — thank you very much, in Luganda!`,
  },
  {
    slug: 'the-spark',
    title: 'The spark',
    excerpt: 'Wrapping up the Your Worth Summit in one last village, and watching a young mother write down her dreams.',
    category: 'Your Worth Summit',
    cover_image: 'post-spark-1',
    author: 'A Smile Again volunteer',
    published_at: '2020-10-05',
    body: `About a week and a half ago we wrapped up this year’s Your Worth Summit in one last village, with a newer group of about 19 mothers, many of whom we were meeting for the first time. It was beautiful to watch a new community form. Meeting so many new mothers also reminded me how many more there are still to reach. The harvest is abundant, sometimes overwhelmingly so. Thankfully, it is held in hands much greater than ours.

The theme of daughterhood keeps coming up in my thoughts and prayer. The Father keeps reminding me that every woman we meet is His beloved, chosen and created for a greater purpose. He does not forget or overlook a single one, and with His grace, neither must we.

That greater purpose stood out as each woman shared her dreams with us. Some want to be tailors, others hairdressers, farmers, teachers, doctors — the list goes on. I wish you could have seen how excited and hopeful they were. Many are younger than my 22 years; they have so much time to pursue their dreams, and many just need help getting started. Lofty? Maybe. Possible? Check Mark 10:27.

On Monday, Fred, Stella and I sat down to thank God for His providence during the summit and to plan our next meetings with the mothers. Thank you for your support, whether through prayer or donation — you helped make this summit possible. The Lord is never outdone in generosity.

Over the coming weeks we plan to visit each village again to stress the importance of planning instead of sitting idle, and to keep finding creative ways to show the mothers their true worth. We would love to offer one-on-one counseling, but that is hard for three people to manage. Please pray with us as we look for ways to hire staff and grow, so we can meet the rising need.

One image has stayed with me since we left that last village. After we asked the mothers to write down their dreams, we broke for lunch. As I walked out, I saw one mother sitting alone, still writing, so focused that she didn’t notice me pass. Something in her had sparked. It isn’t always about big moments of conversion with tears streaming down someone’s face. Sometimes it’s the small moment when an idea finally clicks and someone lets the Holy Spirit in a little more. Every fire begins with a spark, and in my month and a half here, I have already witnessed many.

“I have come to set the earth on fire, and how I wish it were already blazing!” (Luke 12:49).`,
  },
  {
    slug: 'see-you-later-uganda',
    title: 'See you later, Uganda!',
    excerpt: 'Four days before flying home, a volunteer reflects on six months with the mothers — and the dormitory taking shape.',
    category: 'From the field',
    cover_image: 'post-seeyou-2',
    author: 'A Smile Again volunteer',
    published_at: '2020-09-09',
    body: `As I write this, I have exactly four days left in Uganda before I head to the airport in Entebbe. I’d be lying if I said that doesn’t bring tears to my eyes. Yesterday was my last group outreach, and the coming days will be full of packing and goodbyes — or rather, “see you laters.”

So much has happened since my last post. Construction of the dormitory has officially begun and is going smoothly. We also had a visitor: our fundraising coordinator in the United States, Emily Rusch, came for three weeks to meet the mothers and see the construction. We have spent these past two weeks visiting every group we serve.

How can I put six months into words? The deep faith, trust and overwhelming joy I have seen are hard to explain even to family and friends. Fred and Stella have given their lives to Christ in a radical way. They gave up so much to start Smile Again Families, and the Lord is blessing the work of their hands. Their sacrifice and trust are what make this organization unique, and it has been an honor to serve alongside them.

As I said goodbye to the mothers, I was struck by their desire to love and to give despite everything that has happened to them. My heart has broken over their stories, but I have also seen their resilience, and it gives me so much hope. Something beautiful happens when women who share similar wounds come together: they realize they are not alone, and as they share their stories, they begin to heal. As they find freedom from the past, their eyes open to what life can still offer. Even when we bring nothing physical, we are sharing dreams, building healthy relationships, sharing Christ and bringing hope. The Catechism calls hope a weapon that “protects us in the struggle of salvation” and “affords us joy even under trial” (CCC 1820).

Watching the dormitory’s foundation rise has brought me so much joy; this is just the beginning of an organization that will change many lives. The work that began humbly in 2017 is bearing fruit. Last week, Fred, Stella, Emily and I talked about long-term goals — setting money aside and dreaming about what Fred and Stella would provide for these mothers if the sky were the limit. For now, we lay those hopes at the Lord’s feet.

I feel unprepared to leave this beautiful country and this family, but the Lord calls us to move. I think of Peter wanting to build tents at the Transfiguration; had the disciples stayed on the mountain, they could never have told others what they saw. I hope to share at home the many ways I have seen the heart of Jesus beating right in front of me.

Many of the mothers brought small gifts to say thank you as I said goodbye. Leaving will be so hard, but I promised them they would see me again. Smile Again Families, thank you for being the hands and feet of Jesus in this world, and for letting me share in your mission. Please keep supporting this beautiful organization — you are making a real difference.

“What no eye has seen, nor ear heard, nor the heart of man conceived, what God has prepared for those who love Him” (1 Corinthians 2:9).`,
  },
  {
    slug: 'discipling-teenage-mothers-for-mission',
    title: 'Discipling teenage mothers for mission',
    excerpt: 'Our first leadership training for 15 young mothers who will reach others in their communities.',
    category: 'Solidarity groups',
    cover_image: 'post-discipling',
    author: 'Smile Again Families',
    published_at: '2020-01-05',
    body: `We have a saying: leaders are made, not born. Often we need someone to believe in us and speak into our lives before we rise up and change them for good.

At Smile Again, we believe there are leaders among the mothers whose calling has been trodden down, hidden and shattered. From January 27 to 31, 2020, we held our first leadership training for 15 teenage mothers who have benefited from our programs.

With teenage pregnancy rising in the communities, these mothers can help other teenagers avoid what they went through, and encourage struggling mothers to get back on their feet. We call this intentional multiplication discipleship.

One lesson was about being proactive rather than reactive — growing our circle of influence instead of our circle of concern. Rashida, one of the mothers, said: “Many times I have sat at home and cried over my pain and my children’s needs, like food, health and school fees. Today I have realized I can do something to improve my life. As I step out of this training, I feel stronger to change my situation.”

Her words amazed the facilitators and showed us how much we need to challenge the mothers to grow from dependence to independence, and then to interdependence. These young women will now lead in their own communities: their challenge is to live what they have learned, look out for other teenage mothers, and pass it on.`,
  },
  {
    slug: 'realizing-the-vision-of-my-life',
    title: 'Realizing the vision of my life',
    excerpt: 'After the 2019 summit, mothers drew their dreams. Months later, poultry farms and a hair salon were already growing.',
    category: 'Livelihoods',
    cover_image: 'post-vision',
    author: 'Smile Again Families',
    published_at: '2019-12-12',
    body: `At our Your Worth Summit in July 2019, we challenged the mothers to draw their dreams and to think big about where they want to be in three years. It has had a deep impact on their lives.

Cecilia, from Bwanda, said: “In the next year, I want to buy my own plot of land and build a house. I am tired of renting and squeezing my children into this small house.” She has started poultry farming with 10 hens in front of her rented home.

Joan started a hair salon. “The summit helped me realize that I was skilled but sitting on my training,” she said. “Since the summit I have been braiding hair, and I can earn at least 50,000 Ugandan shillings a day. I want to grow my business into a model salon in my town.”

Many mothers told us this has been a wonderful year, because it woke up dreams they had lost. We look forward to a fruitful year ahead as they work harder than they ever imagined to better their lives.`,
  },
  {
    slug: 'the-harvest-is-abundant',
    title: 'The harvest is abundant',
    excerpt: 'Expecting 30 mothers in one village, we met more than 60. A volunteer on the scale of the need.',
    category: 'Your Worth Summit',
    cover_image: 'post-harvest',
    author: 'Aleesha Roessler, volunteer',
    published_at: '2019-10-22',
    body: `Hello! My name is Aleesha Roessler, and I am volunteering with Smile Again Families Uganda, living with Fred, Stella and their wonderful, joy-filled children for about six months. I am a recent graduate of the University of Illinois. I first met Smile Again three years ago on a mission trip with FOCUS (the Fellowship of Catholic University Students) and knew I had to come back long-term — so here I am!

“He must increase; I must decrease” (John 3:30). These words have long been my motto, but they have never felt truer than in these past two weeks. Smile Again’s mission is to support abused and troubled teenage mothers and help them discover their inner worth by restoring them emotionally, spiritually and economically. When I first met Fred and Stella, I thought it was a beautiful organization. I could never have guessed how great the need for this ministry is.

We are preparing for the annual Your Worth Summit: a day of talks on self-worth and potential, small groups, and training in a skill the mothers can use to earn an income. Because of the virus, we are taking the summit to the villages instead. Last Tuesday we traveled to a village about two hours from Masaka, expecting about 30 teenage mothers. More than 60 came — 60 mothers under 23, from one village. Let that sink in.

With schools closed because of the virus, many young people have been left idle, and teenage pregnancy in Uganda has spiked. We met many soon-to-be mothers and heard many stories. So many young women felt there was nothing else in life for them; in a village caught in this cycle, having a child so young can seem almost normal. If the cycle is to be broken, people must be sent in to help break it.

“The harvest is abundant, but the laborers are few” (Luke 10:2). How can a handful of people meet more than a hundred mothers one-on-one each month, take in new mothers, and meet their needs when funding is very low and there is no government support? It all seems overwhelming until the Lord reminds me that we are simply His vessels. Fred and Stella often say, “We do as much as we can, and we trust God to do the rest.”

I invite each of you to join us in prayer and in this mission. Join us as laborers in this harvest. You are needed, and your prayers never go unheard.`,
  },
  {
    slug: 'support-a-teenage-mother',
    title: 'Support a teenage mother',
    excerpt: 'Many young mothers we serve face abandonment, poverty and, too often, obstetric fistula. Meet Agnes.',
    category: 'Maternal & child health',
    cover_image: 'post-support',
    author: 'Smile Again Families',
    published_at: '2019-09-19',
    body: `In the past five years, Smile Again has served more than 300 vulnerable teenage mothers between the ages of 14 and 20. Many have been sent away by their parents, have dropped out of school, been abandoned by friends and isolated by society. Some live on the streets or in slums, which has pushed many into prostitution.

Giving birth so young has also left some of our mothers with obstetric fistula, a childbirth injury that causes constant, uncontrolled leaking. Because of it, these mothers are often neglected, rejected and isolated, and they need special care.

Agnes, 20, represents many of our mothers. When we met her, she was expecting another baby, had been abandoned and was living alone. Smile Again has supported her, and her challenge now is to become self-sustaining. Support toward medical care and self-care for mothers like Agnes is always welcome.`,
  },
  {
    slug: 'economic-empowerment',
    title: 'Economic empowerment',
    excerpt: 'Skills and income so young mothers can feed their children, improve nutrition and reach better health care.',
    category: 'Livelihoods',
    cover_image: 'live-4',
    author: 'Smile Again Families',
    published_at: '2019-08-08',
    body: `Smile Again Families Uganda builds and strengthens families through awareness, formation and skills development for young people.

We run several economic empowerment programs for teenage mothers, designed to build self-reliance and sustainability so they can care for their children, improve their nutrition and reach better health care.`,
  },
  {
    slug: 'the-new-journey-to-hope',
    title: 'The new journey to hope',
    excerpt: 'Our 2019 Your Worth Summit welcomed 55 teenage mothers — up from 20 the year before.',
    category: 'Your Worth Summit',
    cover_image: 'post-worth',
    author: 'Smile Again Families',
    published_at: '2019-07-29',
    body: `Smile Again Families Uganda was started to address teenage pregnancy: to reduce the number of girls who drop out of school, and to protect them from the risks that come with teenage pregnancy and early marriage.

From July 24 to 26, 2019, we hosted our annual Your Worth Summit, under the theme “Come to me, and I will give you rest” (Matthew 11:28). We registered 55 teenage mothers, up from 20 the year before — a clear sign of the growing need. The summit helps young mothers discover their inner worth and beauty, and we hope they find that beauty in Christ.

Listening to their stories, we learned that 80% of these girls had been raped or used by so-called friends, and most were then abandoned. The summit begins the healing of those wounds, so that each girl knows she is still beautiful, loved, cherished, honored and worthy. It also reawakens dreams they had long given up, and as an organization we help them pursue those dreams.

We were blessed by the presence of sisters Caitlin and Bridget from Boston and Amber, a missionary with Catholic Christian Outreach in Canada, who shared their lives and stories with the mothers and their babies.

Our youngest mother, Viola, said: “I have learned about self-control to keep sexually pure, to work hard so that I am not dependent, and to trust in the Lord.” Viola dreams of becoming a fashion designer.

The Mayor of Masaka Municipality, Mr. Kayemba Afaayo, also attended. “I have been reawakened to the need in our community; I didn’t imagine it was this big,” he said. “I ask you young mothers to stay and work with this family you have found, so that you become better people. I also promise to be part of this family.”`,
  },
];
