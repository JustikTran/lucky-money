"use client";

import React from "react";

export default function Result({ amount }: { amount: number }) {

    function getMessage(amount: number) {
        if (amount >= 100000) return "Jackpot đầu năm!";
        if (amount >= 50000) return "Năm nay đỏ lắm nha!";
        if (amount >= 10000) return "Khá may mắn đó!";
        return "Lì xì lấy hên thôi nha!";
    }

    return (
        <div className="relative flex items-center justify-center">

            {/* ===== Center Glow (true center, không lệch) ===== */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-[420px] h-[420px] bg-[#d4af37]/25 blur-3xl rounded-full" />
            </div>

            {/* ===== Luxury Card ===== */}
            <div
                className="
          relative
          bg-gradient-to-b
          from-[#8b0000]
          via-[#6e0000]
          to-[#4a0000]
          border border-[#d4af37]/50
          rounded-[28px]
          px-14 py-12
          text-center
          shadow-[0_40px_100px_rgba(0,0,0,0.7)]
          overflow-hidden
        "
            >
                {/* Inner frame */}
                <div className="absolute inset-3 rounded-[22px] border border-[#d4af37]/40 pointer-events-none" />

                {/* Top subtle highlight */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                {/* ===== Header ===== */}
                <p className="relative text-[#f5d76e] text-sm tracking-[0.5em] mb-6 opacity-80">
                    TÂN NIÊN CÁT TƯỜNG
                </p>

                {/* ===== Amount ===== */}
                <h2
                    className="
            relative
            text-6xl md:text-7xl
            font-semibold
            tracking-wide
            bg-gradient-to-b
            from-[#fff7c2]
            via-[#f5d76e]
            to-[#c89b1d]
            bg-clip-text
            text-transparent
          "
                    style={{
                        textShadow: `
              0 0 25px rgba(255,215,0,0.35),
              0 12px 50px rgba(0,0,0,0.9)
            `,
                    }}
                >
                    {amount.toLocaleString()}
                </h2>

                {/* Currency line */}
                <p className="mt-2 text-[#f5e6c8] text-lg tracking-widest opacity-80">
                    ĐỒNG PHÚ QUÝ
                </p>

                {/* ===== Blessing ===== */}
                <p className="mt-6 text-[#f5d76e] text-sm tracking-[0.4em] opacity-90">
                    {getMessage(amount)}
                </p>
            </div>
        </div>
    );
}
