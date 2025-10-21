export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Woap</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-400 mb-6">
            Woap is a revolutionary no-code backend builder that leverages AI to help
            developers and startups create complete REST APIs, database models, and
            deployment configurations through simple conversations.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-400 mb-6">
            We believe that building backends should be as simple as describing what you
            need. Our AI-powered platform makes backend development accessible to
            everyone, from solo developers to large teams.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Woap?</h2>
          <ul className="text-gray-400 space-y-2">
            <li>• Save weeks of development time</li>
            <li>• No need to be an expert in database design</li>
            <li>• Generate production-ready code instantly</li>
            <li>• Deploy with confidence</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
