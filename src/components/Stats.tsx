const stats = [
  { value: '10×', label: 'faster shipping', description: 'compared to teams on legacy tools' },
  { value: '98%', label: 'customer satisfaction', description: 'based on 4,200+ reviews' },
  { value: '40hrs', label: 'saved per week', description: 'per team on average' },
  { value: '50k+', label: 'teams worldwide', description: 'across 120 countries' },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-violet-700 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map(({ value, label, description }) => (
            <div key={label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-base font-semibold text-blue-100 mb-1">{label}</div>
              <div className="text-sm text-blue-200">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
