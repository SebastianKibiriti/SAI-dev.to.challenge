import { supabase } from '@/lib/supabaseClient';

// This is an async Server Component, a powerful feature of Next.js App Router.
// It allows us to fetch data directly in the component on the server.
export default async function HomePage() {
  
  // Fetch the data from Supabase.
  // This is the most important part!
  const { data: opinions, error } = await supabase
    .from('opinions') // Select the 'opinions' table
    .select(`
      *,
      topics (*),
      ai_personalities (*)
    `) // This special syntax fetches the opinion AND the related topic and personality data!
    .order('created_at', { ascending: false }); // Show the newest opinions first

  if (error) {
    console.error("Error fetching opinions:", error);
    return <p>Error loading opinions. Please check the console.</p>;
  }

  if (!opinions || opinions.length === 0) {
    return <p>No opinions found. The engine might be warming up!</p>;
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">The Opinion Engine</h1>
        <div className="space-y-8">
          {/* Loop over the fetched opinions and display each one */}
          {opinions.map((opinion) => (
            <div key={opinion.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              {/* Display the Topic Headline */}
              <h2 className="text-2xl font-semibold mb-3">
                {opinion.topics?.headline}
              </h2>
              
              {/* Display the AI Personality and their Opinion */}
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-cyan-400 font-bold">{opinion.ai_personalities?.name}:</p>
                <p className="text-gray-300 mt-1">{opinion.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Supabase needs to re-fetch data on every request to be live
export const revalidate = 0;