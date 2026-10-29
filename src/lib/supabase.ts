import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

/** Null until the Supabase env vars are set, so the site still builds without them. */
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string | null;
  published_at: string;
};

/** Stories shown when Supabase isn't connected yet (from the current site's blog). */
export const fallbackStories: Story[] = [
  { slug: 'christmas-brings-a-lot-of-joy', title: 'Christmas brings a lot of joy', excerpt: 'Our thanks to every friend who supported and prayed for the mothers this year.', category: 'Community', published_at: '2023-12-27' },
  { slug: 'staff-leadership-training', title: 'Staff leadership training', excerpt: 'Equipping our staff to walk alongside young mothers with skill and care.', category: 'Team', published_at: '2021-12-23' },
  { slug: 'help-mothers-discover-their-inner-worth', title: 'Helping mothers discover their inner worth', excerpt: 'Our yearly gathering for young mothers aged 19 and below.', category: 'Annual event', published_at: '2021-06-18' },
];

/** Latest published stories; read at build time. */
export async function getStories(limit = 3): Promise<Story[]> {
  if (!supabase) return fallbackStories.slice(0, limit);
  const { data, error } = await supabase
    .from('stories')
    .select('slug,title,excerpt,category,published_at')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  if (error || !data?.length) return fallbackStories.slice(0, limit);
  return data as Story[];
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
