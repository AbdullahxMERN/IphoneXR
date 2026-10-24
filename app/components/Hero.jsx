"use client";

export default function Hero({ onOpenBuy, onOpenSpecs }) {
  return (
    <section id="overview" className="relative pt-12 pb-16 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#bf4800] mb-2">
          iPhone XR
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] mb-4">
          Brilliant. In every way.
        </h1>

        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#6e6e73] leading-relaxed mb-6">
          All-screen Liquid Retina display. Breakthrough camera system with Smart HDR. Exceptional battery life. And six stunning new finishes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <button
            onClick={onOpenBuy}
            className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Buy
          </button>
          <button
            onClick={onOpenSpecs}
            className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] font-medium text-sm transition-colors group cursor-pointer"
          >
            <span>Compare models</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              chevron_right
            </span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#86868b] mb-10">
          From $499 before trade-in
        </p>

        <div className="w-full max-w-lg sm:max-w-2xl mx-auto flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKBlZ2RYMnAKCeTaAtC9mdGNKxwoT37Aeq7Fq-SEkCpBEFvMMYMAoO2QWbhE2D6BP8hQNS37QSVnRuQlZQfUhxv1GGu83L479Pc8tTgxap5NbodsE3wdsLgJ7AqElonPSOgNMbaRaQ-pVqrv1baI5Zi0QwbqAr_G5JPrfz_rZC5bbUKWYOE2szDw4LUthPxZA8-dXts3vHTt7NobWF1AO3cyVVQtyjaIDpWodqPic_snaEmcPb_J9I"
            alt="Apple iPhone XR"
            className="w-full h-auto max-h-[440px] sm:max-h-[540px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
