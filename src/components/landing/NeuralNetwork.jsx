import React, { useEffect, useRef } from "react";

const nodes = [
  { id: 0, x: 240, y: 80, color: "#24F2C7", size: 10 },
  { id: 1, x: 100, y: 180, color: "#43E7FF", size: 8 },
  { id: 2, x: 380, y: 180, color: "#A855F7", size: 8 },
  { id: 3, x: 60, y: 300, color: "#24F2C7", size: 7 },
  { id: 4, x: 200, y: 280, color: "#43E7FF", size: 9 },
  { id: 5, x: 340, y: 300, color: "#24F2C7", size: 7 },
  { id: 6, x: 420, y: 300, color: "#A855F7", size: 6 },
  { id: 7, x: 130, y: 390, color: "#A855F7", size: 8 },
  { id: 8, x: 300, y: 400, color: "#24F2C7", size: 7 },
  { id: 9, x: 240, y: 440, color: "#43E7FF", size: 10 },
];

const edges = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [2, 6],
  [3, 7], [4, 7], [4, 8], [5, 8], [6, 8], [7, 9], [8, 9],
];

const nodeLabels = [
  { text: "RAG System", className: "top-6 right-6", colorClass: "bg-[#24F2C7]/10 border-[#24F2C7]/20 text-[#24F2C7]" },
  { text: "LLM Orchestration", className: "top-20 left-8", colorClass: "bg-[#43E7FF]/10 border-[#43E7FF]/20 text-[#43E7FF]" },
  { text: "Prompt Engineering", className: "top-36 left-0", colorClass: "bg-[#24F2C7]/10 border-[#24F2C7]/20 text-[#24F2C7]" },
  { text: "MLOps", className: "top-44 right-0", colorClass: "bg-[#A855F7]/10 border-[#A855F7]/20 text-[#A855F7]" },
  { text: "Automation", className: "bottom-28 left-2", colorClass: "bg-[#43E7FF]/10 border-[#43E7FF]/20 text-[#43E7FF]" },
  { text: "AI Tools", className: "bottom-2 left-1/2 -translate-x-1/2", colorClass: "bg-[#24F2C7]/10 border-[#24F2C7]/20 text-[#24F2C7]" },
  { text: "AI Agents", className: "bottom-14 left-4", colorClass: "bg-[#A855F7]/10 border-[#A855F7]/20 text-[#A855F7]" },
  { text: "GenAI", className: "bottom-6 right-10", colorClass: "bg-[#43E7FF]/10 border-[#43E7FF]/20 text-[#43E7FF]" },
];

export default function NeuralNetwork() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = 480, H = 480;
    canvas.width = W;
    canvas.height = H;

    const animate = () => {
      timeRef.current += 0.015;
      const t = timeRef.current;
      ctx.clearRect(0, 0, W, H);

      // Draw edges with animated pulses
      edges.forEach(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        grad.addColorStop(0, na.color + "40");
        grad.addColorStop(1, nb.color + "40");
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Pulse dot moving along edge
        const phase = (t * 0.8 + i * 0.37) % 1;
        const px = na.x + (nb.x - na.x) * phase;
        const py = na.y + (nb.y - na.y) * phase;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = na.color + "cc";
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = 1 + 0.25 * Math.sin(t * 2 + i * 0.8);
        const r = node.size * pulse;

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        glow.addColorStop(0, node.color + "30");
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Inner node
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.color + "90";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-[480px] h-[480px] float">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-[#24F2C7]/10" />
      <div className="absolute inset-8 rounded-full border border-[#A855F7]/10" />
      {/* Glow bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#24F2C7]/5 via-transparent to-[#A855F7]/5 rounded-full blur-2xl" />
      <canvas ref={canvasRef} className="relative z-10 w-full h-full" />
      {/* Label badges */}
      {nodeLabels.map((label) => (
        <div
          key={label.text}
          className={`absolute ${label.className} px-3 py-1.5 rounded-lg border text-xs font-medium font-body backdrop-blur-sm whitespace-nowrap ${label.colorClass}`}
        >
          {label.text}
        </div>
      ))}
    </div>
  );
}