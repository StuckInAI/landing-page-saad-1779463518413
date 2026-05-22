export default function LogoBar() {
  const companies = [
    'Notion', 'Vercel', 'Linear', 'Figma', 'Stripe', 'Loom', 'Slack', 'GitHub'
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-xl font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
