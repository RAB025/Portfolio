import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Zap, Clock, CheckCircle2, Terminal, Flame, Sparkles } from 'lucide-react';
import { playBeep, playSuccess, playClick } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const DomSimulator = () => {
  const [running, setRunning] = useState(false);
  const [standardProgress, setStandardProgress] = useState(0);
  const [optimizedProgress, setOptimizedProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [completed, setCompleted] = useState(false);

  const startRace = () => {
    if (running) return;
    playClick();
    setRunning(true);
    setCompleted(false);
    setStandardProgress(0);
    setOptimizedProgress(0);
    setLogs([
      "🚀 [INIT] Loading bulk healthcare patient CSV dataset...",
      "⚡ [RAZA-ENGINE] Chrome extension background worker initialized.",
      "⚠️ [STANDARD] Waiting on manual human keystrokes & Vue component reactivity..."
    ]);
  };

  const resetRace = () => {
    playClick();
    setRunning(false);
    setStandardProgress(0);
    setOptimizedProgress(0);
    setCompleted(false);
    setLogs([]);
  };

  useEffect(() => {
    if (!running) return;

    // Optimized engine runs 3x faster (finishes in ~3.3 seconds vs standard 10 seconds)
    const interval = setInterval(() => {
      setOptimizedProgress((prev) => {
        if (prev >= 100) return 100;
        const next = Math.min(100, prev + 5);
        if (next === 30) {
          setLogs((l) => [...l, "🔍 [RAZA-DOM] Async polling matched dynamic Vue #v-model field."]);
          playBeep();
        }
        if (next === 65) {
          setLogs((l) => [...l, "💉 [EVENT-DISPATCH] Synthetic input events dispatched; Vue boundary bypassed."]);
        }
        if (next === 90) {
          setLogs((l) => [...l, "💾 [STORAGE] State persisted across route transition in Chrome local storage."]);
        }
        if (next === 100 && prev < 100) {
          setLogs((l) => [...l, "🏁 [COMPLETE] Raza's Extension finished 10 records in 20.4s! (60% Faster)"]);
          playSuccess();
          triggerConfetti(0.7, 0.5);
        }
        return next;
      });

      setStandardProgress((prev) => {
        if (prev >= 100) return 100;
        const next = Math.min(100, prev + 1.6);
        if (next >= 100 && prev < 100) {
          setRunning(false);
          setCompleted(true);
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="neo-box bg-[#FFF9F0] p-6 lg:p-8 rounded-none my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#70FF00] px-3 py-1 neo-tag text-xs font-black uppercase mb-1">
            <Zap size={14} />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="font-extrabold text-2xl tracking-tight">Vue.js DOM-Polling & Execution Benchmark</h3>
          <p className="text-gray-700 text-sm font-medium">
            Simulating manual entry vs. Raza's custom Chrome Extension on dynamic healthcare portal records.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {!running && (
            <button
              onClick={startRace}
              className="neo-btn px-4 py-2.5 bg-[#FFE600] hover:bg-[#FFD000] text-black text-xs font-black flex items-center gap-1.5"
            >
              <Play size={16} fill="black" />
              <span>{completed ? "RUN AGAIN" : "START SIMULATION"}</span>
            </button>
          )}
          {running && (
            <div className="px-4 py-2.5 bg-[#FF6584] text-white font-black text-xs border-2 border-black animate-pulse flex items-center gap-1.5">
              <Flame size={16} />
              <span>BENCHMARKING...</span>
            </div>
          )}
          <button
            onClick={resetRace}
            disabled={running}
            className="neo-btn p-2.5 bg-white hover:bg-gray-100 text-black text-xs font-black disabled:opacity-50"
            title="Reset Benchmark"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Track */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        
        {/* Left: Standard Flow */}
        <div className="bg-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] space-y-3">
          <div className="flex items-center justify-between">
            <div className="font-extrabold text-sm flex items-center gap-2">
              <Clock size={18} className="text-gray-500" />
              <span>Manual / Standard Entry</span>
            </div>
            <span className="font-mono font-bold text-xs bg-gray-100 px-2 py-0.5 border border-black">
              ~60s / record
            </span>
          </div>
          <p className="text-xs text-gray-600 font-medium">
            Subject to human typing lag, Vue reactive cycle delays, and dropped state on page reloads.
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span>Progress: {Math.round(standardProgress)}%</span>
              <span>{standardProgress < 100 ? 'Processing...' : 'Done in ~60s'}</span>
            </div>
            <div className="w-full h-5 bg-gray-100 border-2 border-black overflow-hidden relative">
              <div
                className="h-full bg-gray-400 transition-all duration-150"
                style={{ width: `${standardProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Raza's Optimized Chrome Extension */}
        <div className="bg-[#FFE600] p-5 border-3 border-black shadow-[4px_4px_0px_#000] space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="font-extrabold text-sm flex items-center gap-2">
              <Zap size={18} className="text-black" />
              <span>Raza's Async Chrome Extension</span>
            </div>
            <span className="font-mono font-black text-xs bg-[#70FF00] px-2 py-0.5 border-2 border-black">
              ~20s / record ⚡
            </span>
          </div>
          <p className="text-xs text-black font-medium">
            Asynchronous DOM-polling, custom synthetic event dispatchers, and persistent state across page reloads.
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono font-black">
              <span>Speed: {Math.round(optimizedProgress)}%</span>
              <span className={optimizedProgress === 100 ? 'text-[#FF2A85] flex items-center gap-1' : ''}>
                {optimizedProgress === 100 ? <><Sparkles size={13} /> 60% Faster! Record Shaved</> : 'Turbo Dispatching...'}
              </span>
            </div>
            <div className="w-full h-5 bg-white border-2 border-black overflow-hidden relative">
              <div
                className="h-full bg-[#70FF00] border-r-2 border-black transition-all duration-150"
                style={{ width: `${optimizedProgress}%` }}
              />
            </div>
          </div>

          {optimizedProgress === 100 && (
            <div className="absolute top-2 right-2 bg-black text-[#FFE600] font-black text-[10px] px-2 py-0.5 border border-black rotate-3">
              SPEED CHAMPION 🏆
            </div>
          )}
        </div>

      </div>

      {/* Terminal Event Stream */}
      <div className="bg-[#121214] text-[#70FF00] p-4 border-3 border-black font-mono text-xs rounded-none shadow-[3px_3px_0px_#000]">
        <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2 text-gray-400">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span className="font-bold text-[11px] uppercase tracking-wider">DOM Automation Event Stream</span>
          </div>
          <div className="text-[10px] text-gray-400">Status: {running ? 'ACTIVE' : 'IDLE'}</div>
        </div>

        <div className="h-28 overflow-y-auto space-y-1 text-[11px]">
          {logs.length === 0 ? (
            <span className="text-gray-500 italic">Click "Start Simulation" to stream real-time DOM polling and event injection logs...</span>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="leading-relaxed">
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

