"use client";

import { useState } from "react";

export default function ColorStudio({ onSelectColor }) {
  const finishes = [
    {
      id: "all",
      name: "All Finishes",
      hex: "#1d1d1f",
      image: "/images/all.jpg",
      description: "Six stunning finishes crafted with precision-milled glass and aerospace-grade aluminum.",
    },
    {
      id: "blue",
      name: "Blue",
      hex: "#4EA7DE",
      bgClass: "bg-[#4ea7de]",
      image: "/images/blue.jpg",
      description: "An ocean-inspired blue finish achieved through a specialized seven-layer coloring process.",
    },
    {
      id: "coral",
      name: "Coral",
      hex: "#FF6F59",
      bgClass: "bg-[#ff6f59]",
      image: "/images/coral.jpg",
      description: "A bright, energetic tone highlighting the saturation of the rear glass.",
    },
    {
      id: "yellow",
      name: "Yellow",
      hex: "#FFE168",
      bgClass: "bg-[#ffe168]",
      image: "/images/yellow.jpg",
      description: "A warm, radiant yellow framed with color-matched anodized aluminum edges.",
    },
    {
      id: "red",
      name: "(PRODUCT)RED",
      hex: "#E11C2A",
      bgClass: "bg-[#e11c2a]",
      image: "/images/red.jpg",
      description: "A deep crimson finish that directly supports global health initiatives.",
    },
    {
      id: "white",
      name: "White",
      hex: "#F2F2F2",
      bgClass: "bg-[#f2f2f2]",
      image: "/images/white.jpg",
      description: "A pure, minimalist white glass back complemented by silver aluminum sides.",
    },
    {
      id: "black",
      name: "Black",
      hex: "#1F2020",
      bgClass: "bg-[#1f2020]",
      image: "/images/black.jpg",
      description: "A rich, deep obsidian black with seamless dark perimeter bands.",
    },
  ];

  const [activeFinish, setActiveFinish] = useState(finishes[1]);

  const handleSelect = (finish) => {
    setActiveFinish(finish);
    if (onSelectColor && finish.id !== "all") {
      onSelectColor(finish);
    }
  };

  return (
    <section id="finishes" className="py-20 px-4 bg-[#f5f5f7] border-y border-black/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] mb-2">
          Finishes
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-3">
          Six stunning finishes.
        </h2>

        <p className="max-w-md text-sm sm:text-base text-[#6e6e73] mb-8 leading-relaxed">
          Crafted with durable aerospace-grade 7000-series aluminum and precision-milled glass.
        </p>

        <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-black/5 flex flex-col items-center mb-8">
          <div className="w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden py-2">
            <img
              key={activeFinish.id}
              src={activeFinish.image}
              alt={activeFinish.name}
              className={`max-h-full object-contain transition-all duration-300 ${
                activeFinish.id === "all" ? "w-full max-h-72" : "w-auto max-h-80 sm:max-h-96"
              }`}
            />
          </div>

          <div className="mt-4 pt-4 border-t border-black/5 w-full">
            <span className="text-xs uppercase tracking-wider text-[#86868b] block mb-1">
              Finish
            </span>
            <span className="text-xl font-bold text-[#1d1d1f]">
              {activeFinish.name}
            </span>
            <p className="text-xs text-[#6e6e73] max-w-sm mx-auto mt-1 leading-relaxed">
              {activeFinish.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div
            className="flex flex-wrap items-center justify-center gap-3 p-2 bg-white rounded-full shadow-sm border border-black/10"
            role="radiogroup"
            aria-label="Select color finish"
          >
            <button
              type="button"
              onClick={() => handleSelect(finishes[0])}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFinish.id === "all"
                  ? "bg-[#1d1d1f] text-white shadow-sm"
                  : "bg-gray-100 text-[#1d1d1f] hover:bg-gray-200"
              }`}
            >
              All
            </button>

            {finishes.slice(1).map((finish) => {
              const isSelected = activeFinish.id === finish.id;
              return (
                <button
                  key={finish.id}
                  onClick={() => handleSelect(finish)}
                  aria-label={finish.name}
                  type="button"
                  className={`w-8 h-8 rounded-full transition-all duration-200 flex items-center justify-center relative cursor-pointer ${
                    finish.bgClass
                  } ${
                    isSelected
                      ? "ring-2 ring-[#0071e3] ring-offset-2 scale-110 shadow-sm"
                      : "hover:scale-105"
                  } ${finish.id === "white" ? "border border-black/15" : ""}`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-xs text-white drop-shadow font-bold">
                      check
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#86868b] mt-1">
            Seven-layer color process gives the back glass deep, rich hues.
          </span>
        </div>
      </div>
    </section>
  );
}
