import React, { useState } from 'react';
import { Sparkles, Telescope, Activity, Radio, Cpu, CheckCircle, BarChart3, RefreshCw, Zap } from 'lucide-react';
import { playClick, playPop, playBeep, playSuccess } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const AstroTransientSimulator = () => {
  const [selectedState, setSelectedState] = useState('intermediate');
  const [showGaussianProcess, setShowGaussianProcess] = useState(true);

  const states = [
    {
      id: 'quiescence',
      name: 'Quiescence State',
      badge: 'Extended Dormancy',
      fluxLevel: 'Low (0.05 - 0.2 Crab)',
      hardnessRatio: '0.85 (Hard spectrum)',
      fractionalRMS: '12%',
      psdSignal: 'Noise-dominated low frequency plateau',
      color: 'bg-gray-200 text-black',
      xgboostPred: 'Quiescence (98.4%)',
      cnnLstmPred: 'Quiescence (97.9%)',
      description: 'Prolonged baseline state. Extreme class imbalance mitigated via SMOTE and weighted cross-entropy.'
    },
    {
      id: 'low-hard',
      name: 'Low / Hard State',
      badge: 'Corona Dominated',
      fluxLevel: 'Moderate (0.5 - 1.8 Crab)',
      hardnessRatio: '0.78 (Non-thermal hard)',
      fractionalRMS: '34% (Strong variability)',
      psdSignal: 'Broad-band noise with prominent QPO spikes',
      color: 'bg-[#FFE600] text-black',
      xgboostPred: 'Low / Hard (96.2%)',
      cnnLstmPred: 'Low / Hard (95.8%)',
      description: 'Accretion disk truncated; high energy X-ray emission and significant short-term temporal flickering.'
    },
    {
      id: 'intermediate',
      name: 'Intermediate State',
      badge: 'Rapid Transition Phase',
      fluxLevel: 'Dynamic Flare (2.0 - 4.5 Crab)',
      hardnessRatio: '0.45 (Rapid spectral softening)',
      fractionalRMS: '22% (Evolutionary swing)',
      psdSignal: 'Shifting quasi-periodic oscillation harmonics',
      color: 'bg-[#FF6584] text-white',
      xgboostPred: 'Intermediate (94.7%)',
      cnnLstmPred: 'Intermediate (96.1%)',
      description: 'Brief, physically critical evolutionary phase. Sliding-window segmentation detects rapid state boundary transitions.'
    },
    {
      id: 'high-soft',
      name: 'High / Soft State',
      badge: 'Thermal Disk Dominated',
      fluxLevel: 'Peak (4.0 - 6.2 Crab)',
      hardnessRatio: '0.18 (Soft thermal spectrum)',
      fractionalRMS: '4% (Suppressed variability)',
      psdSignal: 'Steep red noise power law',
      color: 'bg-[#70FF00] text-black',
      xgboostPred: 'High / Soft (98.1%)',
      cnnLstmPred: 'High / Soft (97.6%)',
      description: 'Standard geometrically thin accretion disk extends to innermost stable circular orbit; minimal fast timing noise.'
    }
  ];

  const currentState = states.find(s => s.id === selectedState);

  const handleStateChange = (id) => {
    playClick();
    setSelectedState(id);
    if (id === 'intermediate') {
      playSuccess();
      triggerConfetti(0.7, 0.4);
    } else {
      playBeep();
    }
  };

  const toggleGP = () => {
    playPop();
    setShowGaussianProcess(!showGaussianProcess);
  };

  return (
    <div className="neo-box bg-[#FFFDF9] p-6 lg:p-8 rounded-none my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#9D4EDD] text-white px-3 py-1 neo-tag text-xs font-black uppercase mb-1">
            <Telescope size={14} />
            <span>IUST Awantipora Research Lab Simulation</span>
          </div>
          <h3 className="font-extrabold text-2xl tracking-tight">
            Transient Spectral State & Light Curve Pipeline
          </h3>
          <p className="text-gray-700 text-sm font-medium">
            Simulating Gaussian Process gap-interpolation, multi-band feature extraction, and dual ML model state inference.
          </p>
        </div>

        <button
          onClick={toggleGP}
          className="neo-btn px-3.5 py-2 bg-[#FFE600] text-xs font-black flex items-center gap-2 self-start sm:self-auto"
        >
          <RefreshCw size={14} className={showGaussianProcess ? 'animate-spin' : ''} />
          <span>{showGaussianProcess ? "GP Interpolation: ON" : "GP Interpolation: RAW GAPS"}</span>
        </button>
      </div>

      {/* Spectral State Tabs */}
      <div className="flex flex-wrap gap-2 my-5">
        {states.map((st) => (
          <button
            key={st.id}
            onClick={() => handleStateChange(st.id)}
            className={`px-3.5 py-2 font-black text-xs border-2 border-black transition-all flex items-center gap-2 ${
              selectedState === st.id
                ? 'bg-[#00F0FF] shadow-[3px_3px_0px_#000] -translate-y-1'
                : 'bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#000]'
            }`}
          >
            <span className={`px-1.5 py-0.5 text-[10px] font-mono font-bold border border-black ${st.color}`}>
              {st.badge}
            </span>
            <span>{st.name}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Simulated Light Curve Waveform */}
        <div className="lg:col-span-7 bg-[#121214] text-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3">
              <div className="flex items-center gap-2 text-[#70FF00] font-mono font-bold text-xs">
                <Activity size={15} />
                <span>DYNAMIC LIGHT CURVE (FLUX vs TIME)</span>
              </div>
              <span className="text-[11px] font-mono text-[#FFE600]">
                {showGaussianProcess ? "Gaussian Process (GP) Smoothed" : "Raw Gapped Observations"}
              </span>
            </div>

            {/* Simulated Canvas / Waveform Visualizer */}
            <div className="h-44 bg-gray-900 border-2 border-dashed border-gray-700 relative overflow-hidden flex items-end px-3 py-2">
              {/* Observation Gaps indicator */}
              {!showGaussianProcess && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 text-center p-3">
                  <div className="bg-[#FF2A85] text-white text-xs font-mono font-bold px-3 py-1.5 border border-black shadow-[2px_2px_0px_#FFF]">
                    ⚠️ Irregular gaps & observational noise detected. Enable GP to interpolate!
                  </div>
                </div>
              )}

              {/* Dynamic waveform bars */}
              <div className="w-full flex items-end gap-1 h-36">
                {[
                  32, 45, 60, showGaussianProcess ? 58 : 0, 75, 88, 92, showGaussianProcess ? 85 : 0,
                  64, 50, 42, 65, showGaussianProcess ? 70 : 0, 85, 95, 78,
                  60, 48, 52, showGaussianProcess ? 55 : 0, 68, 80, 72, 60
                ].map((val, idx) => {
                  const factor = selectedState === 'quiescence' ? 0.35 : selectedState === 'low-hard' ? 0.65 : selectedState === 'high-soft' ? 1.05 : 0.85;
                  const computedHeight = Math.min(100, Math.max(10, Math.round(val * factor)));
                  return (
                    <div
                      key={idx}
                      style={{ height: `${val === 0 ? 0 : computedHeight}%` }}
                      className={`flex-1 transition-all duration-300 ${
                        val === 0 ? 'bg-transparent' :
                        selectedState === 'intermediate' ? 'bg-[#FF6584]' :
                        selectedState === 'high-soft' ? 'bg-[#70FF00]' :
                        selectedState === 'low-hard' ? 'bg-[#FFE600]' : 'bg-[#00F0FF]'
                      } border-t border-black`}
                      title={`Flux Bin #${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-gray-300 font-mono mt-3 leading-relaxed">
              {currentState.description}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] font-mono text-gray-400 flex items-center justify-between">
            <span>Sampling: Sliding-Window Segmentation</span>
            <span className="text-[#70FF00]">Splitting: Strict Chronological (0% Leakage)</span>
          </div>
        </div>

        {/* Right: Feature Extraction & Dual Model Inference */}
        <div className="lg:col-span-5 bg-[#FFF9F0] p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-4">
          
          {/* Domain Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-black font-black text-xs uppercase tracking-wider border-b-2 border-black pb-2">
              <Radio size={16} className="text-[#9D4EDD]" />
              <span>Extracted Physical Features</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-white border border-black shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-gray-500 font-bold uppercase">Hardness Ratio (Color)</div>
                <div className="font-black text-black mt-0.5">{currentState.hardnessRatio}</div>
              </div>
              <div className="p-2.5 bg-white border border-black shadow-[2px_2px_0px_#000]">
                <div className="text-[10px] text-gray-500 font-bold uppercase">Fractional RMS</div>
                <div className="font-black text-black mt-0.5">{currentState.fractionalRMS}</div>
              </div>
              <div className="p-2.5 bg-white border border-black shadow-[2px_2px_0px_#000] col-span-2">
                <div className="text-[10px] text-gray-500 font-bold uppercase">Power Spectral Density (PSD)</div>
                <div className="font-bold text-gray-800 mt-0.5 text-[11px]">{currentState.psdSignal}</div>
              </div>
            </div>
          </div>

          {/* Dual Predictive Model Architecture */}
          <div className="space-y-2 pt-2 border-t-2 border-black">
            <div className="flex items-center gap-2 text-black font-black text-xs uppercase tracking-wider">
              <Cpu size={16} className="text-[#FF2A85]" />
              <span>Dual ML Model Inference</span>
            </div>

            {/* Tree-based XGBoost */}
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-gray-700">🌲 XGBoost / Random Forest:</span>
                <span className="font-black text-green-700 bg-green-50 px-2 py-0.5 border border-green-700">
                  {currentState.xgboostPred}
                </span>
              </div>
              <div className="text-[10px] font-mono text-gray-500 mt-1">
                Trained on tabular physical features (Hardness, RMS, PSD slope)
              </div>
            </div>

            {/* Deep Sequence 1D-CNN + LSTM */}
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-gray-700">🧠 1D-CNN + LSTM Sequence:</span>
                <span className="font-black text-[#9D4EDD] bg-purple-50 px-2 py-0.5 border border-[#9D4EDD]">
                  {currentState.cnnLstmPred}
                </span>
              </div>
              <div className="text-[10px] font-mono text-gray-500 mt-1">
                Trained on raw interpolated temporal flux for morphological cues
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-gray-600 bg-amber-50 p-2 border border-amber-300">
            ⚖️ <strong>Class Imbalance:</strong> Mitigated via SMOTE synthetic over-sampling & custom cost-sensitive loss.
          </div>

        </div>

      </div>
    </div>
  );
};
