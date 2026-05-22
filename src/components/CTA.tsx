import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl px-8 py-16 lg:px-16 lg:py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ready to ship faster?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
              Join 50,000+ teams who've transformed how they build products. Start your free 14-day trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
              >
                Book a demo
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              No credit card required · Setup in under 5 minutes · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
