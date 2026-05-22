import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Meridian Labs',
    initials: 'SC',
    color: 'from-pink-400 to-rose-500',
    quote:
      'Lumina cut our sprint planning from 3 hours to 20 minutes. The AI suggestions are eerily accurate and the team loves the clean UI.',
    stars: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Engineering Manager',
    company: 'Stackflow',
    initials: 'MJ',
    color: 'from-blue-400 to-indigo-500',
    quote:
      'We replaced four separate tools with Lumina. Our velocity improved 40% in the first quarter and nobody wanted to go back.',
    stars: 5,
  },
  {
    name: 'Priya Nair',
    role: 'CEO',
    company: 'Orbit Systems',
    initials: 'PN',
    color: 'from-emerald-400 to-teal-500',
    quote:
      "The analytics alone are worth it. We finally understand where time is being lost and Lumina's AI helps us fix it automatically.",
    stars: 5,
  },
  {
    name: 'David Park',
    role: 'Lead Designer',
    company: 'Craft Studio',
    initials: 'DP',
    color: 'from-violet-400 to-purple-500',
    quote:
      'As a designer working with devs, the live collaboration features are a game changer. Comments, handoffs, and specs in one place.',
    stars: 5,
  },
  {
    name: 'Lena M\u00fcller',
    role: 'VP Engineering',
    company: 'Datrix',
    initials: 'LM',
    color: 'from-orange-400 to-amber-500',
    quote:
      "Security was our biggest concern. Lumina's SOC 2 certification and granular permissions made it a no-brainer for our enterprise.",
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'CTO',
    company: 'Novu',
    initials: 'JO',
    color: 'from-cyan-400 to-sky-500',
    quote:
      "Integrated with our GitHub and Figma workflow in under 10 minutes. The onboarding is the smoothest I've ever experienced.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Loved by teams
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Don&apos;t take our word for it
          </h2>
          <p className="text-lg text-gray-500">
            Over 50,000 product teams use Lumina to ship faster, together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, company, initials, color, quote, stars }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-sm font-bold`}>
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{name}</div>
                  <div className="text-xs text-gray-500">{role} &middot; {company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
