import { ClipboardList, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    Icon: ClipboardList,
    title: 'Plan your sprint',
    description:
      'Import your backlog, auto-prioritize with AI, and assign work in seconds. Lumina turns messy ideas into an actionable sprint plan.',
    color: 'from-blue-500 to-blue-600',
    light: 'bg-blue-50',
  },
  {
    number: '02',
    Icon: Rocket,
    title: 'Build & collaborate',
    description:
      'Design, code, and review side-by-side. Real-time updates, instant notifications, and zero email threads cluttering your inbox.',
    color: 'from-violet-500 to-violet-600',
    light: 'bg-violet-50',
  },
  {
    number: '03',
    Icon: TrendingUp,
    title: 'Ship & improve',
    description:
      'One-click release notes, automated changelogs, and retro insights powered by AI — so every sprint makes you faster than the last.',
    color: 'from-green-500 to-green-600',
    light: 'bg-green-50',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            From idea to shipped in 3 steps
          </h2>
          <p className="text-lg text-gray-500">
            Lumina's intuitive flow removes the friction between ideation and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map(({ number, Icon, title, description, color, light }) => (
            <div key={number} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Number */}
              <div className="absolute -top-5 left-8">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                  <span className="text-xs font-bold text-white">{number}</span>
                </div>
              </div>
              <div className={`w-14 h-14 ${light} rounded-2xl flex items-center justify-center mb-5 mt-4`}>
                <Icon className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
