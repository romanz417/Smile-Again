-- Newsletter subscribers + full story content
create table if not exists public.subscribers (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  email       text not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254)
);
alter table public.subscribers enable row level security;
create policy "Anyone can subscribe" on public.subscribers for insert to anon, authenticated with check (true);
revoke all on public.subscribers from anon, authenticated;
grant insert (email) on public.subscribers to anon, authenticated;

alter table public.stories add column if not exists author text;

insert into public.stories (slug, title, excerpt, body, category, cover_image, author, published, published_at) values
  ('christmas-brings-a-lot-of-joy', 'Christmas brings a lot of joy', 'A Christmas thank-you to every friend who supported and prayed for our mothers this year.', 'Dear friends, Merry Christmas from all of us at Smile Again Families.

Thank you for your support and your prayers this year. Every gift, every prayer and every word of encouragement reached a young mother who needed to know she is not alone.

May the Lord bless you and your families this Christmas and in the year ahead.', 'News', 'post-christmas', 'Smile Again Families', true, '2023-12-27'),
  ('staff-leadership-training', 'Building a firm foundation: staff leadership training', 'As the team grows, a day of leadership training reminds us that everything starts and ends with the mothers we serve.', 'Happy New Year! I still can’t believe it’s already 2021. Remember when it seemed 2020 would never end? Time doesn’t slow down for anyone — and with less than two months left before my visa expires and I return home to the States, my four months in Uganda feel more like four weeks.

I can’t begin to express the joy I have experienced here. Volunteering with Smile Again, I have watched the organization grow in the most beautiful ways, and it is abundantly clear that the Lord’s hands are deeply intertwined with this work.

Because of COVID-19 and the election season, the staff stayed in the office throughout January. It was a good time to orient ourselves as a team: in mid-December, Smile Again Families welcomed two new staff members. As we expand, we want a firm foundation, so Fred and Stella invited a facilitator to guide us through a day of leadership training — professionalism, being a great employer and employee, and building a strong organizational culture.

One idea stayed with us: the difference between “Customer 1” — the organization’s leaders — and “Customer 2” — the people the organization serves and the supporters who make it possible. If our focus ever drifts from Customer 2, the organization will cease to be. Our focus must always be on the teenage mothers we serve and on those who help this mission. Everything must start and end with them.

Before every meeting, we now spend the first thirty minutes or so in prayer, then share anything the Lord has placed on our hearts. One staff member said, “We are called to carry these mothers and to do something extraordinary for them.” The greatest thing we can do for these young women is to bring them into relationship with their Creator. We long to see them back in school and in better homes, with their physical needs met — and in time we believe we will. But to heal fully, we must first carry them to the One who loves them above all else, until they learn to carry themselves to Him.

We cannot thank you enough for your support. Remember the gate we needed around the mission house so that mothers could one day stay there? It is built — which means construction of the mothers’ dormitory can begin. We have set the groundbreaking for February 8th, and we ask you to join us in prayer, through the intercession of Saint Joseph, as we wait on the remaining funding.

“You were wearied with the length of your way, but you did not say, ‘It is hopeless’; you found new life for your strength” (Isaiah 57:10). Even in confusion and darkness, the Lord brings light. Please keep praying with us, and may God bless you abundantly in this new year.', 'From the field', 'post-leadership', 'Maddie Prather, volunteer', true, '2021-12-23'),
  ('help-mothers-discover-their-inner-worth', 'Helping mothers discover their inner worth', 'Sixty young mothers, four days, and a summit that helped them see a future again.', 'Every year, Smile Again Families holds a summit for young mothers aged 19 and under. Its purpose is to help them realize their worth: that whatever has happened in their lives, they can still become what they dreamed of being; that they are loved; and that God has a plan for them — He is not finished with them yet. They meet women who have walked the same road and whose lives are better now, and they discover a family that cares for them.

The summit also gives us the chance to search intensively for mothers. Many are hidden in their grandparents’ homes after being sent away by their parents, who see a pregnancy as a family shame. As Francesca, one of our field staff, put it: “These outreaches are good because they put you in touch with the people, and you see the reality of life.”

This year, sixty teenage mothers came — up from twenty the year before — and we had to hire a bigger venue to fit everyone and their children. We were blessed by three volunteers: sisters Caitlin and Bridget from Boston and Amber from Canada. They shared their own life stories, spent time with the mothers, cared for the children during sessions so the mothers could concentrate, and brought toys, children’s kits and art materials. “Fredie and Stella do an amazing job restoring the faith of these mothers,” Bridget said.

By the end of four days of hard work, many hopes and dreams had been restored — and most of all, the mothers’ smiles and their love for their babies. On the last night they sang and danced, knowing there is a reason to live. Viola, our youngest mother, said: “I had great hatred for my baby Tracy because I was abused. But from today I have developed love for my baby and will take great care of her. I know she will make a difference in the world one day.”

The summit was also attended by the Mayor of Masaka Municipality, Mr. Kayemba Afaayo. “I never realized the great need that has arisen in our community because of teenage pregnancies,” he said. “I promise to be part of this great family and to work with Smile Again Families so that this need is addressed. I invite friends to support this cause so that our people in rural communities can be helped.”

We look forward to working with our mayor and with you, our friends. There are many ways to join us — and together we can change the lives of these mothers and their children.', 'Your Worth Summit', 'story-3', 'Maddie Prather, volunteer', true, '2021-06-18'),
  ('for-unto-us-a-child-is-born', 'For unto us a child is born', 'Soap, a Christmas meal and eleven homemade cakes: delivering Christmas to mothers in the villages.', '“A thrill of hope, the weary world rejoices!” — O Holy Night

On Monday evening we sat down as a team to close the year before our Christmas break, and we couldn’t help giving thanks to the Lord for guiding us through such a challenging yet beautiful year.

For the past few weeks we have been out in the villages delivering Christmas gifts to the mothers, and the joy we encountered was wonderful. One volunteer remarked how fitting this organization’s name is: Smile Again. The Lord invites the weary to rejoice in Him, and I am blessed to be part of an organization that carries that message of hope to those who desperately need it.

Thanks to your prayers and donations, we gave every mother and child a kilogram of soap and a Christmas meal — and Stella and I baked a cake for each village to share. It started as a crazy idea (eleven cakes in two weeks!) but it brought enormous joy. At home, we bake sweets all year; in many of these villages a cake is a rarity. I wish you could have seen the faces of the mothers and their children.

I keep learning that something that seems simple to me can mean the world to someone else. Even when we feel we have little to give, the little we do give shows these young women that they are seen and loved — and that love goes further than any amount of money ever could.

The words of O Holy Night have been in my head for weeks: “Long lay the world in sin and error pining, till He appeared and the soul felt its worth.” Our mission is to help broken teenage mothers discover their inner worth, and Christmas reminds me that our Savior has already come, and our worth lies in Him alone.

We wish you a very merry Christmas. May your souls find rest in the Lord, and may we all rejoice together in the birth of our King.

“Behold, a virgin shall conceive and bear a son, and His name shall be called Emmanuel, which means ‘God with us’” (Matthew 1:23).', 'From the field', 'proj-livelihood', 'Maddie Prather, volunteer', true, '2020-12-22')
on conflict (slug) do update set
  title = excluded.title, excerpt = excluded.excerpt, body = excluded.body, category = excluded.category,
  cover_image = excluded.cover_image, author = excluded.author, published_at = excluded.published_at;
