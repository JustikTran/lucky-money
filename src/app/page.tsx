"use client";

import { useState } from "react";
import options from "@/data/moneyOption.json";
import { getWeightedRandom } from "@/utils/randomMoney";
import BackgroundGlow from "@/components/BackgroundGlow";
import CoinEffect from "@/components/coin.effect";
import Result from "@/components/result";
import LiXiEnvelope from "@/components/luckyEnvelope";

export default function Home() {
  const [amount, setAmount] = useState<number | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showCoin, setShowCoin] = useState(false);

  const openLiXi = () => {
    if (amount) return;

    setIsHide(true);
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
      setIsOpening(true);

      const result = getWeightedRandom(options);

      setTimeout(() => {
        setAmount(result);
        setShowCoin(true);

        const audio = new Audio("/coin-donation.mp3");
        audio.play();

        setTimeout(() => {
          setShowCoin(false);
        }, 1500);
      }, 300);
    }, 1000);
  };

  return (
    <main
      className="
    relative
    min-h-screen
    flex
    items-center
    justify-center
    bg-[radial-gradient(circle_at_center,#b91c1c_0%,#7f1d1d_40%,#5c0000_100%)]
    overflow-hidden
    text-white
  "
    >
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundGlow />
      </div>

      {/* Coin Burst */}
      {showCoin && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <CoinEffect />
        </div>
      )}

      {/* UI Layer */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <h1 className="relative mb-12 text-center">
          {/* Top decorative line */}
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-sm tracking-[0.4em]">
              TÂN XUÂN
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Main title */}
          <span
            className="
      block
      text-4xl md:text-5xl
      font-semibold
      tracking-widest
      bg-gradient-to-b
      from-[#f8e7a0]
      via-[#d4af37]
      to-[#8c6b00]
      bg-clip-text
      text-transparent
      drop-shadow-[0_6px_16px_rgba(255, 255, 255, 0.7)]
    "
            style={{ fontFamily: "serif" }}
          >
            LÌ XÌ MAY MẮN
          </span>

          {/* Bottom decorative underline */}
          <div className="mt-6 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />
        </h1>


        {amount ? (
          <Result amount={amount} />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <LiXiEnvelope
              isShaking={isShaking}
              isOpening={isOpening}
              onClick={openLiXi}
            />

            {!isHide && (
              <p
                className="
      text-sm md:text-base
      tracking-wide
      text-[#f8e7a0]
      opacity-80
      animate-pulse
      transition-opacity duration-300
    "
              >
                Nhấn vào bao lì xì để mở
              </p>
            )}

          </div>
        )}
      </div>
    </main>

  );
}
