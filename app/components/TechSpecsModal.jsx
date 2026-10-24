"use client";

import { useState } from "react";

export default function TechSpecsModal({ isOpen, onClose, onOpenBuy }) {
  const [targetModel, setTargetModel] = useState("xs");

  if (!isOpen) return null;

  const comparisonData = {
    xs: {
      name: "iPhone XS",
      subtitle: "Super Retina OLED",
      price: "From $999",
      display: {
        size: "5.8-inch",
        title: "Super Retina HD",
        desc: "All-screen OLED display. 2436×1125 resolution at 458 ppi. HDR10, Dolby Vision, 3D Touch.",
      },
      chip: {
        title: "A12 Bionic Chip",
        desc: "Next-generation 8-core Neural Engine. 5 trillion operations per second.",
      },
      camera: {
        title: "Dual 12MP System",
        desc: "Wide (ƒ/1.8) and Telephoto (ƒ/2.4) lenses with 2x optical zoom and dual OIS.",
      },
      frontCamera: {
        title: "7MP TrueDepth",
        desc: "Portrait mode, Depth Control, Portrait Lighting, and Animoji / Memoji.",
      },
      battery: {
        title: "Up to 20 hrs talk time",
        desc: "Up to 12 hrs internet use. Qi wireless charging and fast charge capable.",
      },
      water: {
        title: "Rated IP68",
        desc: "Maximum depth of 2 meters up to 30 minutes in water.",
      },
      biometrics: {
        title: "Face ID",
        desc: "Enabled by TrueDepth camera for facial recognition.",
      },
      materials: {
        title: "Surgical-Grade Stainless Steel",
        desc: "Precision-machined stainless steel band with durable glass back.",
      },
    },
    iphone8: {
      name: "iPhone 8",
      subtitle: "Retina HD Display",
      price: "From $399",
      display: {
        size: "4.7-inch",
        title: "Retina HD Display",
        desc: "Widescreen LCD with IPS. 1334×750 resolution at 326 ppi. 3D Touch.",
      },
      chip: {
        title: "A11 Bionic Chip",
        desc: "Previous generation Neural Engine with dual performance cores.",
      },
      camera: {
        title: "Single 12MP Camera",
        desc: "Wide (ƒ/1.8) lens with optical image stabilization and digital zoom up to 5x.",
      },
      frontCamera: {
        title: "7MP FaceTime HD",
        desc: "1080p HD video recording with Retina Flash. Standard selfie mode.",
      },
      battery: {
        title: "Up to 14 hrs talk time",
        desc: "Up to 12 hrs internet use. Qi wireless charging capable.",
      },
      water: {
        title: "Rated IP67",
        desc: "Maximum depth of 1 meter up to 30 minutes in water.",
      },
      biometrics: {
        title: "Touch ID",
        desc: "Second-generation fingerprint sensor built into the Home button.",
      },
      materials: {
        title: "Aerospace-Grade Aluminum",
        desc: "Anodized aluminum frame with color-matched glass back.",
      },
    },
  };

  const target = comparisonData[targetModel];

  const specsList = [
    {
      category: "Display",
      icon: "aspect_ratio",
      xr: {
        badge: "6.1-inch",
        title: "Liquid Retina HD",
        desc: "All-screen LCD with IPS. 1792×828 resolution at 326 ppi. True Tone & Haptic Touch.",
      },
      target: target.display,
    },
    {
      category: "Chip",
      icon: "memory",
      xr: {
        badge: "A12 Bionic",
        title: "7nm Neural Engine",
        desc: "8-core architecture delivering 5 trillion operations/sec and Smart HDR pipeline.",
      },
      target: target.chip,
    },
    {
      category: "Camera",
      icon: "photo_camera",
      xr: {
        badge: "12MP Wide",
        title: "ƒ/1.8 Aperture",
        desc: "Single wide lens with Smart HDR, advanced bokeh, and real-time Depth Control.",
      },
      target: target.camera,
    },
    {
      category: "Front Camera",
      icon: "person",
      xr: {
        badge: "7MP TrueDepth",
        title: "ƒ/2.2 Aperture",
        desc: "Face ID, Portrait mode with Depth Control, 1080p HD video, and Animoji / Memoji.",
      },
      target: target.frontCamera,
    },
    {
      category: "Battery Life",
      icon: "battery_charging_full",
      xr: {
        badge: "Longest in iPhone",
        title: "Up to 25 hrs talk time",
        desc: "Up to 15 hrs internet use. Qi fast wireless charging and 50% charge in 30 mins.",
      },
      target: target.battery,
    },
    {
      category: "Splash & Water",
      icon: "water_drop",
      xr: {
        badge: "Rated IP67",
        title: "Water Resistant",
        desc: "Submersible up to 1 meter for up to 30 minutes in fresh water.",
      },
      target: target.water,
    },
    {
      category: "Security",
      icon: "lock",
      xr: {
        badge: "TrueDepth",
        title: "Advanced Face ID",
        desc: "Facial authentication for device unlock, Apple Pay, and password management.",
      },
      target: target.biometrics,
    },
    {
      category: "Materials",
      icon: "layers",
      xr: {
        badge: "7000 Series",
        title: "Aerospace Aluminum",
        desc: "Precision-machined aluminum bands with 7-layer glass back in 6 vibrant colors.",
      },
      target: target.materials,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-3xl bg-white rounded-t-[2rem] sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden">
        <div className="sm:hidden w-full flex items-center justify-center pt-3 pb-1 cursor-pointer" onClick={onClose}>
          <div className="w-10 h-1.5 rounded-full bg-gray-300" />
        </div>

        <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
              Side-by-Side Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              Tech Specs Comparison
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-gray-200 flex items-center justify-center text-[#1d1d1f] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="px-6 py-3 bg-[#f5f5f7] border-b border-black/5 flex items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#86868b] font-medium hidden sm:inline">
            Compare iPhone XR with:
          </span>
          <div className="grid grid-cols-2 p-1 bg-gray-200 rounded-xl gap-1 w-full sm:w-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTargetModel("xs")}
              className={`py-1.5 px-4 rounded-lg transition-all cursor-pointer ${
                targetModel === "xs"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              iPhone XS
            </button>
            <button
              type="button"
              onClick={() => setTargetModel("iphone8")}
              className={`py-1.5 px-4 rounded-lg transition-all cursor-pointer ${
                targetModel === "iphone8"
                  ? "bg-white text-[#1d1d1f] shadow-sm"
                  : "text-[#86868b] hover:text-[#1d1d1f]"
              }`}
            >
              iPhone 8
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-8 flex-grow">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-black/5 text-center">
            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#0071e3]/30">
              <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#0071e3] bg-blue-100 rounded-full">
                This Model
              </span>
              <p className="text-lg sm:text-xl font-bold text-[#1d1d1f]">iPhone XR</p>
              <p className="text-xs text-[#86868b]">Liquid Retina HD</p>
              <p className="text-sm font-semibold text-[#0071e3] mt-1">From $499</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f5f7]">
              <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#86868b] bg-gray-200 rounded-full">
                Comparison
              </span>
              <p className="text-lg sm:text-xl font-bold text-[#1d1d1f]">{target.name}</p>
              <p className="text-xs text-[#86868b]">{target.subtitle}</p>
              <p className="text-sm font-semibold text-[#86868b] mt-1">{target.price}</p>
            </div>
          </div>

          {specsList.map((spec) => (
            <div key={spec.category} className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0071e3]">
                <span className="material-symbols-outlined text-[18px]">
                  {spec.icon}
                </span>
                <span>{spec.category}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
                  <span className="text-[11px] font-bold text-[#0071e3] block mb-1">
                    {spec.xr.badge}
                  </span>
                  <p className="font-semibold text-sm text-[#1d1d1f]">{spec.xr.title}</p>
                  <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                    {spec.xr.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
                  <span className="text-[11px] font-bold text-[#86868b] block mb-1">
                    {spec.target.badge || target.name}
                  </span>
                  <p className="font-semibold text-sm text-[#1d1d1f]">{spec.target.title}</p>
                  <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                    {spec.target.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-black/5 bg-[#f5f5f7] flex items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-[#86868b] hidden sm:block">
            Free shipping and free returns on every order.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-black/10 text-xs font-medium text-[#1d1d1f] hover:bg-gray-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBuy();
              }}
              className="flex-1 sm:flex-none px-6 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold cursor-pointer shadow-sm"
            >
              Order iPhone XR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
