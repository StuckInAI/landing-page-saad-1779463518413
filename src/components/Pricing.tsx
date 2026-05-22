import { Check } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Perfect for small teams and solo makers getting started.',
    features: [
      'Up to 5 members',
      '5 active projects',
      'Basic analytics',
      '2 GB storage',
      'Community support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    annualPrice: 19,
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Up to 25 members',
      'Unlimited projects',
      'Advanced analytics',
      '50 GB storage',
      'AI automation (50 runs/mo)',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    annualPrice: 79,
    description: 'For large orgs that need security, compliance, and scale.',
    features: [
      'Unlimited members',
      'Unlimited projects',
      'Custom analytics & reports',
      'Unlimited storage',
      'Unlimited AI automation',
      'SSO & SAML',
      'SOC 2 compliance',
      'Dedicated success manager',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Start free, scale as you grow. No hidden fees, ever.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-xl p-1 gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                !annual ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2',
                annual ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Annual
              <span className="bg-green-100 text-green-700 text-xs font-bold px-1.5 py-0.5 rounded-full">-35%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, monthlyPrice, annualPrice, description, features, cta, highlighted }) => {
            const price = annual ? annualPrice : monthlyPrice;
            return (
              <div
                key={name}
                className={clsx(
                  'rounded-2xl p-8 border transition-all',
                  highlighted
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 shadow-2xl shadow-blue-200 scale-105'
                    : 'bg-white border-gray-200 hover:shadow-lg'
                )}
              >
                {highlighted && (
                  <div className="inline-block bg-blue-500/30 text-blue-100 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most popular
                  </div>
                )}
                <h3 className={clsx('text-xl font-bold mb-1', highlighted ? 'text-white' : 'text-gray-900')}>{name}</h3>
                <p className={clsx('text-sm mb-6', highlighted ? 'text-blue-200' : 'text-gray-500')}>{description}</p>

                <div className="mb-6">
                  <span className={clsx('text-5xl font-extrabold', highlighted ? 'text-white' : 'text-gray-900')}>
                    {price === 0 ? 'Free' : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className={clsx('text-sm ml-1', highlighted ? 'text-blue-200' : 'text-gray-400')}>/mo per seat</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={clsx('w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5', highlighted ? 'bg-blue-500/30' : 'bg-blue-50')}>
                        <Check className={clsx('w-3 h-3', highlighted ? 'text-blue-100' : 'text-blue-600')} />
                      </div>
                      <span className={clsx('text-sm', highlighted ? 'text-blue-100' : 'text-gray-600')}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={clsx(
                    'block text-center font-semibold py-3 px-6 rounded-xl transition-all text-sm',
                    highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  )}
                >
                  {cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
