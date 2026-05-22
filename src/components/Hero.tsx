import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const highlights = ['No credit card required', 'Free 14-day trial', 'Cancel anytime'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Now with AI-powered insights — just launched
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fade-in-up delay-100">
            Ship products{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 animate-gradient">
              10× faster
            </span>
            <br />
            with your team
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Lumina brings planning, design, and development into one seamless workflow — so your team can focus on what matters most.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-300">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105"
            >
              Start for free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-200 transition-all hover:scale-105"
            >
              <Play className="w-5 h-5 text-blue-600" />
              See how it works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 animate-fade-in-up delay-400">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Hero image / dashboard mockup */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up delay-500">
          <div className="relative rounded-2xl shadow-2xl shadow-gray-300/50 border border-gray-200 overflow-hidden animate-float">
            {/* Browser bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400">app.lumina.io/dashboard</div>
            </div>
            {/* Dashboard mockup */}
            <div className="bg-gray-50 p-6 grid grid-cols-12 gap-4 min-h-[320px]">
              {/* Sidebar */}
              <div className="col-span-2 bg-white rounded-xl p-3 flex flex-col gap-3 shadow-sm">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={clsx('h-3 rounded-full', i === 0 ? 'bg-blue-500 w-full' : 'bg-gray-200', i === 1 ? 'w-3/4' : i === 2 ? 'w-5/6' : 'w-2/3')} />
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-7 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="h-4 bg-gray-800 rounded w-1/3 mb-3" />
                  <div className="grid grid-cols-3 gap-3">
                    {['bg-blue-100 text-blue-600', 'bg-green-100 text-green-600', 'bg-violet-100 text-violet-600'].map((cls, i) => (
                      <div key={i} className={`rounded-lg p-3 ${cls.split(' ')[0]}`}>
                        <div className="h-6 w-6 rounded bg-current opacity-30 mb-2" />
                        <div className="h-2 bg-current opacity-20 rounded w-2/3" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex-1">
                  <div className="h-3 bg-gray-200 rounded w-1/4 mb-4" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-blue-100" />
                        <div className="h-2 bg-gray-200 rounded flex-1" />
                        <div className="h-2 bg-gray-100 rounded w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right panel */}
              <div className="col-span-3 flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-3" />
                  <div className="h-20 bg-gradient-to-br from-blue-50 to-violet-50 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-400" />
                  </div>
                </div>
                <div className="bg-blue-600 rounded-xl p-4 shadow-sm text-white">
                  <div className="h-3 bg-blue-400 rounded w-3/4 mb-2" />
                  <div className="h-6 bg-white/20 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import clsx from 'clsx';
