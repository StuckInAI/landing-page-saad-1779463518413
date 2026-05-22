import { Layers, Zap, Users, BarChart3, Shield, Globe } from 'lucide-react';
import clsx from 'clsx';

const features = [
  {
    Icon: Layers,
    title: 'Unified workspace',
    description: 'Bring your roadmap, designs, and code reviews into a single pane of glass. No more context switching between tools.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    Icon: Zap,
    title: 'AI-powered automation',
    description: 'Let Lumina auto-assign tasks, generate status updates, and surface blockers before they slow you down.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    Icon: Users,
    title: 'Real-time collaboration',
    description: 'Work together in real time with live cursors, inline comments, and shared editing across your entire team.',
    color: 'bg-green-50 text-green-600',
  },
  {
    Icon: BarChart3,
    title: 'Deep analytics',
    description: 'Track velocity, cycle time, and burn-down charts that actually tell you why your team is fast or slow.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    Icon: Shield,
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II certified, SSO, audit logs, and granular permissions so your IP stays safe.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    Icon: Globe,
    title: '100+ integrations',
    description: 'GitHub, Jira, Figma, Slack, Linear, and more. Lumina slots into your existing stack in minutes.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Lumina?
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-gray-500">
            We've replaced dozens of disconnected tools with one cohesive platform designed for modern product teams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 bg-white"
            >
              <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-5', color)}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
