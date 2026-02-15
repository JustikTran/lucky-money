type Props = {
  isShaking: boolean;
  isOpening: boolean;
  onClick: () => void;
};

export default function LiXiEnvelope({
  isShaking,
  isOpening,
  onClick,
}: Props) {
  return (
    <>
      <div
        onClick={onClick}
        className={`
          relative
          w-64 h-80
          cursor-pointer
          select-none
          transition-all duration-500
          origin-center
          flex items-center justify-center
          ${isShaking ? "animate-envelope-shake" : ""}
          ${isOpening ? "scale-105 opacity-0" : ""}
        `}
      >
        {/* ===== Center Glow (absolute true center) ===== */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-[#D4AF37]/25 blur-3xl" />
        </div>

        {/* ===== Envelope Body ===== */}
        <div
          className="
            relative w-full h-full
            rounded-[32px]
            bg-gradient-to-b
            from-[#9c0000]
            via-[#7a0000]
            to-[#520000]
            border border-[#d4af37]/40
            shadow-[0_40px_80px_rgba(0,0,0,0.7)]
            overflow-hidden
          "
        >
          {/* Inner golden frame */}
          <div className="absolute inset-3 rounded-[26px] border border-[#d4af37]/40 pointer-events-none" />

          {/* Top light reflection */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* ===== Gold Curve (perfect center SVG) ===== */}
          <svg
            viewBox="0 0 300 120"
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[85%]"
          >
            <defs>
              <linearGradient id="luxGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f8e7a0" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#a67c00" />
              </linearGradient>
            </defs>

            <path
              d="M 0 60 Q 150 0 300 60"
              stroke="url(#luxGold)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* ===== Luxury Gold Button ===== */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <div
              className="
                relative
                w-24 h-24
                rounded-full
                bg-gradient-to-br
                from-[#fff3b0]
                via-[#d4af37]
                to-[#8c6b00]
                border-4 border-[#fff0b3]
                shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                flex items-center justify-center
              "
            >
              {/* inner metallic ring */}
              <div className="absolute inset-3 rounded-full border border-white/30" />

              {/* highlight spot */}
              <div className="absolute top-3 left-4 w-6 h-6 bg-white/40 blur-md rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes envelopeShake {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-5deg); }
          40% { transform: rotate(5deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-envelope-shake {
          animation: envelopeShake 0.9s ease-in-out;
          transform-origin: center;
        }
      `}</style>
    </>
  );
}
