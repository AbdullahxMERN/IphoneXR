"use client";

import { useState } from "react";

export default function BuyModal({
  isOpen,
  onClose,
  selectedColor,
  onColorChange,
}) {
  const colorOptions = [
    {
      id: "blue",
      name: "Blue",
      hex: "#4EA7DE",
      bgClass: "bg-[#4ea7de]",
      image: "/images/blue.jpg",
    },
    {
      id: "coral",
      name: "Coral",
      hex: "#FF6F59",
      bgClass: "bg-[#ff6f59]",
      image: "/images/coral.jpg",
    },
    {
      id: "yellow",
      name: "Yellow",
      hex: "#FFE168",
      bgClass: "bg-[#ffe168]",
      image: "/images/yellow.jpg",
    },
    {
      id: "red",
      name: "(PRODUCT)RED",
      hex: "#E11C2A",
      bgClass: "bg-[#e11c2a]",
      image: "/images/red.jpg",
    },
    {
      id: "white",
      name: "White",
      hex: "#F2F2F2",
      bgClass: "bg-[#f2f2f2]",
      image: "/images/white.jpg",
    },
    {
      id: "black",
      name: "Black",
      hex: "#1F2020",
      bgClass: "bg-[#1f2020]",
      image: "/images/black.jpg",
    },
  ];

  const initialColor =
    colorOptions.find((c) => c.id === selectedColor?.id) || colorOptions[0];
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [selectedStorage, setSelectedStorage] = useState("64GB");
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const storages = [
    { size: "64GB", price: 499 },
    { size: "128GB", price: 549 },
    { size: "256GB", price: 649 },
  ];

  const currentStorage = storages.find((s) => s.size === selectedStorage);

  const handleColorSelect = (color) => {
    setCurrentColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  const handleOrder = () => {
    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-xl bg-white rounded-t-[2rem] sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden">
        <div
          className="sm:hidden w-full flex items-center justify-center pt-3 pb-1 cursor-pointer"
          onClick={onClose}
        >
          <div className="w-10 h-1.5 rounded-full bg-gray-300" />
        </div>

        <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3]">
              Apple Store
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              Order iPhone XR
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-gray-200 flex items-center justify-center text-[#1d1d1f] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-6 flex-grow">
          {isOrdered ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[36px]">
                  check_circle
                </span>
              </div>
              <h4 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                Thank you!
              </h4>
              <p className="text-sm text-[#86868b] max-w-sm">
                Your order for iPhone XR ({selectedStorage}, {currentColor.name}
                ) has been placed. You will receive email tracking shortly.
              </p>
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                    1. Choose Finish
                  </p>
                  <span className="text-xs font-bold text-[#1d1d1f]">
                    {currentColor.name}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/5 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-20 h-28 flex items-center justify-center shrink-0">
                    <img
                      src={currentColor.image}
                      alt={currentColor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      {colorOptions.map((color) => {
                        const isSelected = currentColor.id === color.id;
                        return (
                          <button
                            key={color.id}
                            type="button"
                            onClick={() => handleColorSelect(color)}
                            aria-label={color.name}
                            className={`w-9 h-9 rounded-full transition-all flex items-center justify-center relative cursor-pointer ${
                              color.bgClass
                            } ${
                              isSelected
                                ? "ring-2 ring-[#0071e3] ring-offset-2 scale-110 shadow-sm"
                                : "hover:scale-105"
                            } ${color.id === "white" ? "border border-black/15" : ""}`}
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
                    <p className="text-[11px] text-[#86868b] mt-3">
                      Precision-milled aerospace glass and matching aluminum
                      band.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  2. Choose Storage Capacity
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {storages.map((s) => {
                    const isSelected = selectedStorage === s.size;
                    return (
                      <button
                        key={s.size}
                        type="button"
                        onClick={() => setSelectedStorage(s.size)}
                        className={`p-3 sm:p-4 rounded-2xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#0071e3] bg-blue-50/50 ring-2 ring-[#0071e3] shadow-sm"
                            : "border-black/5 bg-[#f5f5f7] hover:bg-gray-100"
                        }`}
                      >
                        <span className="block text-base sm:text-lg font-bold text-[#1d1d1f]">
                          {s.size}
                        </span>
                        <span className="block text-xs font-semibold text-[#0071e3] mt-1">
                          ${s.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-black/5 space-y-2 text-xs text-[#86868b]">
                <div className="flex justify-between text-[#1d1d1f]">
                  <span>
                    iPhone XR {selectedStorage} ({currentColor.name})
                  </span>
                  <span className="font-semibold">
                    ${currentStorage.price}.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Carrier Activation</span>
                  <span className="text-emerald-600 font-medium">
                    Free / Unlocked
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="text-emerald-600 font-medium">
                    Free Next-Day
                  </span>
                </div>
                <div className="border-t border-black/5 pt-2 flex justify-between font-bold text-sm text-[#1d1d1f]">
                  <span>Total</span>
                  <span>${currentStorage.price}.00</span>
                </div>
              </div>
            </>
          )}
        </div>

        {!isOrdered && (
          <div className="p-4 border-t border-black/5 bg-[#f5f5f7] flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={handleOrder}
              className="px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs sm:text-sm font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
