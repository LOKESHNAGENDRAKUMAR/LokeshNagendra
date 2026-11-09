import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Sparkles, RefreshCw, Zap } from 'lucide-react';

export default function AnimeGrid() {
  const gridRef = useRef(null);
  const rows = 6;
  const cols = 14;
  const totalDots = rows * cols;

  const runWave = (fromIndex = 0) => {
    if (!gridRef.current) return;
    const dots = gridRef.current.querySelectorAll('.ripple-dot');
    if (!dots.length) return;

    animate(dots, {
      scale: [
        { value: 0.2, duration: 150, ease: 'outQuad' },
        { value: 1.6, duration: 400, ease: 'outElastic(1, .5)' },
        { value: 1, duration: 600, ease: 'outQuad' }
      ],
      backgroundColor: [
        { value: '#ff4b4b', duration: 250 },
        { value: '#a855f7', duration: 400 },
        { value: 'rgba(255, 255, 255, 0.15)', duration: 600 }
      ],
      delay: stagger(45, {
        grid: [cols, rows],
        from: fromIndex
      })
    });
  };

  useEffect(() => {
    // Initial organic entry wave on mount
    const timer = setTimeout(() => {
      runWave('center');
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleDotClick = (index) => {
    runWave(index);
  };

  return (
    <div className="w-full p-5 sm:p-6 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
      {/* Top Header of the interactive canvas */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff4b4b] animate-ping" />
          <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase">
            Interactive Kinetic Grid • Powered by Anime.js v4
          </span>
        </div>

        {/* Trigger controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => runWave('center')}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Trigger center ripple wave"
          >
            <Zap size={11} className="text-[#ff4b4b]" />
            <span>Pulse Wave</span>
          </button>
          <button
            onClick={() => runWave(0)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Trigger corner wave"
          >
            <RefreshCw size={10} className="text-purple-400" />
            <span>Corner Wave</span>
          </button>
        </div>
      </div>

      {/* Grid Canvas */}
      <div
        ref={gridRef}
        className="grid grid-cols-14 gap-2.5 sm:gap-3 py-3 justify-items-center items-center cursor-crosshair select-none"
      >
        {Array.from({ length: totalDots }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDotClick(idx)}
            className="ripple-dot"
            title={`Coordinate #${idx} • Click to trigger Anime.js stagger`}
          />
        ))}
      </div>

      {/* Micro-label footer */}
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/5 text-[10px] font-mono text-slate-500">
        <span>Click any dot to trigger stagger physics</span>
        <span>stagger(45ms) • ease: outElastic</span>
      </div>
    </div>
  );
}
