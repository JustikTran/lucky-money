"use client";

import { useEffect, useRef } from "react";

type Coin = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
    rotateSpeed: number;
    size: number;
};

export default function CoinEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const coins: Coin[] = [];
        const total = 30; // số xu

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        for (let i = 0; i < total; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 4 + Math.random() * 4;

            coins.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                rotation: 0,
                rotateSpeed: (Math.random() - 0.5) * 0.3,
                size: 20 + Math.random() * 20
            });
        }

        let animationId: number;

        const gravity = 0.3;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            coins.forEach((coin) => {
                coin.vy += gravity;
                coin.x += coin.vx;
                coin.y += coin.vy;
                coin.rotation += coin.rotateSpeed;
                ctx.globalAlpha = 0.85;

                ctx.save();
                ctx.translate(coin.x, coin.y);
                ctx.rotate(coin.rotation);

                ctx.font = `${coin.size}px serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("🪙", 0, 0);

                ctx.restore();
            });

            animationId = requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
        />
    );
}
