import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { fallbackStories, type Story } from '../data/stories';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

/** Null until the Supabase env vars are set, so the site still builds without them. */
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;

let cache: Story[] | null = null;

/** All published stories, newest first. Read once per build; falls back to the local copy. */
export async function getStories(): Promise<Story[]> {
  if (cache) return cache;
  let rows: Story[] | null = null;
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('slug,title,excerpt,body,category,cover_image,author,published_at')
        .eq('published', true)
        .order('published_at', { ascending: false });
      if (!error && data?.length) rows = data as Story[];
    } catch {
      rows = null;
    }
  }
  cache = rows ?? [...fallbackStories].sort((a, b) => b.published_at.localeCompare(a.published_at));
  return cache;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
