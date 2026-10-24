"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ColorStudio from "./components/ColorStudio";
import FeaturesBento from "./components/FeaturesBento";
import Footer from "./components/Footer";
import TechSpecsModal from "./components/TechSpecsModal";
import BuyModal from "./components/BuyModal";

export default function Home() {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    id: "blue",
    name: "Blue",
    hex: "#4EA7DE",
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onOpenBuy={() => setIsBuyOpen(true)}
      />

      <main className="flex-grow pt-12">
        <Hero
          onOpenBuy={() => setIsBuyOpen(true)}
          onOpenSpecs={() => setIsSpecsOpen(true)}
        />
        <ColorStudio onSelectColor={(color) => setSelectedColor(color)} />
        <FeaturesBento onOpenSpecs={() => setIsSpecsOpen(true)} />
      </main>

      <Footer
        onOpenSpecs={() => setIsSpecsOpen(true)}
        onOpenBuy={() => setIsBuyOpen(true)}
      />

      <TechSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        onOpenBuy={() => setIsBuyOpen(true)}
      />

      <BuyModal
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
        selectedColor={selectedColor}
        onColorChange={(color) => setSelectedColor(color)}
      />
    </div>
  );
}
