import React, { useState, useEffect } from 'react';
import { ShieldCheck, Smartphone, Key, Lock, CheckCircle2, AlertTriangle, RefreshCw, Cpu, Activity, Send, Flame, Zap } from 'lucide-react';
import { playClick, playPop, playSuccess, playBeep } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export const NikshaySimulator = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [clientId, setClientId] = useState('punjab_district_lab02');
  const [validDays, setValidDays] = useState(30);
  const [generatedToken, setGeneratedToken] = useState('NKA1.eyJpZCI6InB1bmphYl9kaXN0cmljdF9sYWIwMiIsImlhdCI6MTcyNzgxOTAwMCwiZXhwIjoxNzMwNDExMDAwfQ.d8f921ab4c6e9021');
  const [verificationResult, setVerificationResult] = useState({ valid: true, message: 'Signature Authentic • 30 Days Remaining' });
  const [tampered, setTampered] = useState(false);

  // Background Runner State
  const [isRunning, setIsRunning] = useState(true);
  const [heartbeatCount, setHeartbeatCount] = useState(14);
  const [activeModule, setActiveModule] = useState('truenat');

  const modules = {
    presumptive: { name: 'Presumptive TB Enrollment', records: '120/150', speed: '3s/record (was 4 min)', tag: 'Demographics & Nikshay ID' },
    xray: { name: 'Chest X-Ray Diagnostics', records: '85/90', speed: '2s/record (was 3 min)', tag: 'Lab & Impression Logging' },
    truenat: { name: 'Truenat / CBNAAT Molecular Assay', records: '42/50', speed: '2.5s/record (was 5 min)', tag: 'Sample Times & Results' }
  };

  // Heartbeat looper simulation (2.5s tick)
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setHeartbeatCount(prev => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isRunning]);

  const generateNewToken = () => {
    playSuccess();
    triggerConfetti(0.5, 0.4);
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + (validDays * 86400);
    const payload = btoa(JSON.stringify({ id: clientId, iat, exp }));
    // Pseudo HMAC hex hash
    const signature = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
    const fullToken = `NKA1.${payload}.${signature}`;
    setGeneratedToken(fullToken);
    setTampered(false);
    setVerificationResult({ valid: true, message: `Signature Cryptographically Valid • Valid for ${validDays} days` });
  };

  const tamperToken = () => {
    playBeep();
    setTampered(true);
    // alter last character
    const altered = generatedToken.slice(0, -3) + "BAD";
    setGeneratedToken(altered);
    setVerificationResult({ valid: false, message: 'CRITICAL: HMAC-SHA256 Signature Verification FAILED! Token was forged or modified.' });
  };

  return (
    <div className="neo-box bg-[#FFFDF9] p-6 lg:p-8 rounded-none my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#70FF00] px-3 py-1 neo-tag text-xs font-black uppercase mb-1">
            <Zap size={14} className="text-black" />
            <span className="text-black">Presently Working On • Active Engineering</span>
          </div>
          <h3 className="font-extrabold text-2xl tracking-tight">
            Ni-Kshay Dual-Platform RPA & Cryptographic Licensing Engine
          </h3>
          <p className="text-gray-700 text-sm font-medium">
            National Tuberculosis Elimination Programme (NTEP) • Kotlin Android Native + Chromium Manifest V3.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => { playClick(); setActiveTab('crypto'); }}
            className={`px-3 py-1.5 font-mono font-bold text-xs border-2 border-black ${
              activeTab === 'crypto' ? 'bg-[#FFE600] shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-gray-100'
            }`}
          >
            🔑 Offline HMAC Crypto
          </button>
          <button
            onClick={() => { playClick(); setActiveTab('android'); }}
            className={`px-3 py-1.5 font-mono font-bold text-xs border-2 border-black ${
              activeTab === 'android' ? 'bg-[#00F0FF] shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-gray-100'
            }`}
          >
            🤖 Android Background Engine
          </button>
        </div>
      </div>

      {/* Tab 1: Offline HMAC Crypto Licensing */}
      {activeTab === 'crypto' && (
        <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Token Issuer Form */}
          <div className="lg:col-span-6 bg-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                <Key size={16} className="text-[#FF2A85]" />
                Ni-Kshay Manager (Admin Token Issuer)
              </span>
              <span className="font-mono text-[10px] font-bold bg-black text-[#70FF00] px-2 py-0.5">
                Zero Cloud DB Cost
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="font-bold text-gray-700">Client Login ID (Locked to User)</label>
                <input
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full mt-1 p-2 bg-[#FFF9F0] border-2 border-black font-bold focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700">Validity Period (Days)</label>
                <div className="flex gap-2 mt-1">
                  {[7, 30, 90, 365].map(days => (
                    <button
                      key={days}
                      onClick={() => { playClick(); setValidDays(days); }}
                      className={`flex-1 py-1.5 font-bold border-2 border-black ${
                        validDays === days ? 'bg-[#FFE600]' : 'bg-gray-100 hover:bg-white'
                      }`}
                    >
                      {days}d
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={generateNewToken}
                  className="flex-1 neo-btn py-2.5 bg-[#70FF00] hover:bg-[#5cd400] text-black font-black uppercase text-xs flex items-center justify-center gap-1.5"
                >
                  <Lock size={14} />
                  <span>Issue Signed Token</span>
                </button>
                <button
                  onClick={tamperToken}
                  className="neo-btn px-3 py-2.5 bg-[#FF6584] hover:bg-[#FF2A85] text-white font-black uppercase text-xs"
                  title="Simulate Hacker Tampering with Expiration Date"
                >
                  Tamper
                </button>
              </div>
            </div>
          </div>

          {/* Client Verifier Card */}
          <div className="lg:col-span-6 bg-[#121214] text-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#FFE600] flex items-center gap-1.5">
                  <ShieldCheck size={16} />
                  Client Token Activation Gate (Offline SubtleCrypto)
                </span>
                <span className="text-[10px] font-mono text-gray-400">Target: nikshay.in</span>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Cryptographic Token Format:</div>
                <div className="p-3 bg-gray-900 border border-gray-700 font-mono text-[11px] text-[#70FF00] break-all leading-relaxed">
                  {generatedToken}
                </div>
              </div>

              {/* Verification Feedback Banner */}
              <div className={`mt-4 p-3 border-2 font-mono text-xs flex items-start gap-2 ${
                verificationResult.valid 
                  ? 'bg-green-950/70 border-[#70FF00] text-[#70FF00]' 
                  : 'bg-red-950/70 border-[#FF6584] text-[#FF6584]'
              }`}>
                {verificationResult.valid ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertTriangle size={18} className="shrink-0 mt-0.5" />}
                <div>
                  <div className="font-black uppercase tracking-wider">{verificationResult.valid ? "AUTHORIZED ACCESS" : "ACCESS DENIED (403)"}</div>
                  <div className="text-[11px] mt-0.5">{verificationResult.message}</div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-gray-500 border-t border-gray-800 pt-2 flex items-center justify-between">
              <span>Token Structure: NKA1 . Base64Url(Payload) . HMAC-SHA256</span>
              <span className="text-gray-400">Zero Server Check</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Android Background Engine & V8 Heartbeat */}
      {activeTab === 'android' && (
        <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Module Selector & Metrics */}
          <div className="lg:col-span-6 bg-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] space-y-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-2">
              <span className="font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                <Smartphone size={16} className="text-[#3A86FF]" />
                Dual-WebView Android 14+ Runtime
              </span>
              <span className="font-mono text-[10px] font-bold bg-[#FFE600] px-2 py-0.5 border border-black">
                0 Dangerous Permissions
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-gray-700">Select Active Pipeline:</div>
              {Object.keys(modules).map(key => (
                <div
                  key={key}
                  onClick={() => { playClick(); setActiveModule(key); }}
                  className={`p-3 border-2 border-black cursor-pointer transition-all ${
                    activeModule === key ? 'bg-[#FFE600] shadow-[3px_3px_0px_#000] -translate-y-0.5' : 'bg-gray-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-black">{modules[key].name}</span>
                    <span className="font-bold bg-black text-white px-1.5 py-0.2 text-[10px]">{modules[key].records}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-600 mt-1">
                    <span>⚡ Speed: {modules[key].speed}</span>
                    <span className="font-bold text-black">{modules[key].tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#FFF9F0] border-2 border-black text-xs font-mono space-y-1">
              <div className="font-bold text-black">Scoped MediaStore Export:</div>
              <div className="text-[11px] text-gray-600">
                Exports timestamped CSVs directly to <code className="bg-white px-1 border border-black">Downloads/NikshayManager/</code> with immediate WhatsApp/Sheets share trigger.
              </div>
            </div>
          </div>

          {/* Android Notification Tray & V8 Heartbeat Simulation */}
          <div className="lg:col-span-6 bg-[#121214] text-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#70FF00] flex items-center gap-1.5">
                  <Activity size={16} />
                  Android 14 Foreground Service Notification
                </span>
                <span className="font-mono text-[10px] text-gray-400">PARTIAL_WAKE_LOCK: Active</span>
              </div>

              {/* Simulated Android Notification Card */}
              <div className="p-4 bg-gray-900 border-2 border-gray-700 rounded-lg space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FFE600] font-bold flex items-center gap-1.5">
                    <span>🛡️</span> Ni-Kshay Automation Service
                  </span>
                  <span className="text-[10px] text-gray-400">Just now</span>
                </div>
                <div className="font-bold text-sm text-white">
                  {modules[activeModule].name} in progress...
                </div>
                <div className="font-mono text-xs text-[#70FF00]">
                  Progress: {modules[activeModule].records} patients processed • 0 errors
                </div>
                <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
                  <div className="h-full bg-[#70FF00] w-3/4 animate-pulse"></div>
                </div>
              </div>

              {/* V8 Looper Monitor */}
              <div className="mt-4 p-3 bg-gray-800 border border-gray-700 text-xs font-mono space-y-1">
                <div className="flex items-center justify-between text-[#00F0FF] font-bold">
                  <span>Native 2.5s V8 Heartbeat Tick:</span>
                  <span>Tick #{heartbeatCount}</span>
                </div>
                <p className="text-[11px] text-gray-300">
                  Fires <code className="text-[#FFE600]">evaluateJavascript()</code> on the Android Main Looper to bypass Chromium background timer throttling.
                </p>
              </div>
            </div>

            <div className="text-[10px] font-mono text-gray-400 border-t border-gray-800 pt-2 flex items-center justify-between">
              <span>Dual WebViews: alpha layering + bringToFront()</span>
              <span className="text-[#70FF00]">No Layout Suspension</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
