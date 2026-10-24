"use client";

export default function Footer({ onOpenSpecs, onOpenBuy }) {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5 text-[#86868b] text-xs">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center border-b border-black/5">
        <h3 className="text-2xl sm:text-4xl font-bold text-[#1d1d1f] mb-3">
          Upgrade to iPhone XR.
        </h3>
        <p className="max-w-md mx-auto text-sm text-[#86868b] mb-8 leading-relaxed">
          Get free express delivery and instant trade-in value on your current device.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
          <button
            onClick={onOpenBuy}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-xs sm:text-sm active:scale-95 shadow-md transition-all cursor-pointer"
          >
            Order iPhone XR
          </button>
          <button
            onClick={onOpenSpecs}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-[#1d1d1f] border border-black/10 font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px] text-[#0071e3]">
              compare_arrows
            </span>
            <span>Compare Models</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <div className="space-y-2 text-[11px] leading-relaxed text-[#86868b]/90 border-b border-black/5 pb-6">
          <p>
            1. Trade-in values vary based on the condition, year, and configuration of your trade-in device. Not all devices are eligible for credit. More details are available from Apple or Apple Authorized Resellers.
          </p>
          <p>
            2. iPhone XR is splash, water, and dust resistant and was tested under controlled laboratory conditions with a rating of IP67 under IEC standard 60529 (maximum depth of 1 meter up to 30 minutes).
          </p>
          <p>
            3. Battery life claims depend on network configuration and many other factors; actual results will vary.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-[#1d1d1f]">
          <div>
            <h4 className="font-semibold mb-3 text-[11px] uppercase tracking-wider text-[#86868b]">
              Shop and Learn
            </h4>
            <ul className="space-y-2 text-[#515154]">
              <li><a href="#" className="hover:text-[#0071e3]">iPhone XR</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">iPhone XS</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Watch</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">AirPods</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-[11px] uppercase tracking-wider text-[#86868b]">
              Apple Wallet
            </h4>
            <ul className="space-y-2 text-[#515154]">
              <li><a href="#" className="hover:text-[#0071e3]">Apple Card</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Pay</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Cash</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-[11px] uppercase tracking-wider text-[#86868b]">
              Entertainment
            </h4>
            <ul className="space-y-2 text-[#515154]">
              <li><a href="#" className="hover:text-[#0071e3]">Apple TV+</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Music</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Arcade</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Podcasts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-[11px] uppercase tracking-wider text-[#86868b]">
              About Apple
            </h4>
            <ul className="space-y-2 text-[#515154]">
              <li><a href="#" className="hover:text-[#0071e3]">Newsroom</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Apple Leadership</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Investors</a></li>
              <li><a href="#" className="hover:text-[#0071e3]">Ethics &amp; Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-[#1d1d1f]">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
