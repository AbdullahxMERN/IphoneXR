"use client";

export default function FeaturesBento({ onOpenSpecs }) {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-2 block">
            Innovation Inside
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-3">
            Everything you love. Elevated.
          </h2>
          <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
            Thoughtfully engineered hardware and software that deliver incredible performance, beautiful portraits, and industry-leading security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="rounded-3xl p-8 bg-[#f5f5f7] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">aspect_ratio</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#1d1d1f] shadow-sm">
                  6.1-inch
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Liquid Retina Display
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                The most advanced LCD in the industry. An innovative backlight design allows the screen to stretch cleanly into the rounded corners with true-to-life color precision.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#0071e3]">
              <span>True Tone &amp; Wide Color (P3)</span>
              <span className="material-symbols-outlined text-[18px] text-[#86868b]">flare</span>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-[#f5f5f7] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">lock_open</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#1d1d1f] shadow-sm">
                  Secure Enclave
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Advanced Face ID
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Security made simple. Your face is your password. You can unlock your iPhone, log in to banking apps, and pay securely with Apple Pay at a single glance.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#0071e3]">
              <span>Faster Neural Processing</span>
              <span className="material-symbols-outlined text-[18px] text-[#86868b]">verified_user</span>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-[#f5f5f7] flex flex-col justify-between hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071e3] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">photo_camera</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#1d1d1f] shadow-sm">
                  ƒ/1.8 Aperture
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                12MP Breakthrough Camera
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                A whole new era of photography. An innovative sensor works with the ISP and Neural Engine to deliver Smart HDR, stunning Portrait mode, and adjustable Depth Control.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-medium text-[#0071e3]">
              <span>4K Video Recording up to 60 fps</span>
              <span className="material-symbols-outlined text-[18px] text-[#86868b]">videocam</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            onClick={onOpenSpecs}
            className="p-8 rounded-3xl bg-[#f5f5f7] text-center flex flex-col items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer group"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-1">A12</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
                Bionic Chip
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Next-generation Neural Engine powering real-time AR experiences and computational photography.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] mt-6">
              <span>Specs comparison</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                north_east
              </span>
            </span>
          </div>

          <div
            onClick={onOpenSpecs}
            className="p-8 rounded-3xl bg-[#f5f5f7] text-center flex flex-col items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer group"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-1">IP67</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
                Water Resistant
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Depth of 1 meter for up to 30 minutes in water, plus defense against accidental everyday liquid spills.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] mt-6">
              <span>Full details</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                north_east
              </span>
            </span>
          </div>

          <div
            onClick={onOpenSpecs}
            className="p-8 rounded-3xl bg-[#f5f5f7] text-center flex flex-col items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer group"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-1">+1.5h</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-3">
                Extended Battery
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                Lasts up to an hour and a half longer than iPhone 8 Plus, complete with Qi wireless charging convenience.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] mt-6">
              <span>Battery specs</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                north_east
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
