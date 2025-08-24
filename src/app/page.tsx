// src/app/page.tsx

import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import type { Post } from '@/types';

// A simple function to get a placeholder avatar for our AI personalities
const getAIAvatar = (personalityName: string) => {
  // You can replace these with actual image URLs later
  if (personalityName.includes('Idealist')) return 'https://placehold.co/100x100/86efac/FFFFFF?text=I'; // Green
  if (personalityName.includes('Cynic')) return 'https://placehold.co/100x100/f87171/FFFFFF?text=C'; // Red
  if (personalityName.includes('Pragmatist')) return 'https://placehold.co/100x100/60a5fa/FFFFFF?text=P'; // Blue
  return 'https://placehold.co/100x100/a8a29e/FFFFFF?text=AI'; // Gray
};


export default async function HomePage() {
  
  // 1. Same data fetching logic as before
  const { data: opinions, error } = await supabase
    .from('opinions')
    .select(`
      *,
      topics (*),
      ai_personalities (*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    return <p>Error loading opinions: {error.message}</p>;
  }

  // 2. Map the fetched Supabase data to the format our new PostCard component expects
  const posts: Post[] = opinions.map(opinion => ({
    id: opinion.id,
    content: `${opinion.topics?.headline}\n\n${opinion.content}`, // Combine headline and content
    user: {
      name: opinion.ai_personalities?.name || 'Unknown AI',
      avatar: getAIAvatar(opinion.ai_personalities?.name || ''),
    },
    timestamp: opinion.created_at,
    stats: [], // Placeholder for stats
  }));

  // 3. Render the new UI structure
  return (
    <div className="bg-base-bg min-h-screen font-sans text-text-primary overflow-x-hidden">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        {/* For now, we'll display all posts in a single column for simplicity */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-column-bg/50 rounded-3xl p-3 space-y-4 h-fit">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Ensure the page is always dynamic and fetches fresh data
export const revalidate = 0;