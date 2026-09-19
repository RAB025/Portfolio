import React, { useState } from 'react';
import { ShieldAlert, Network, Brain, Activity, Search, Sparkles, CheckCircle, ChevronRight } from 'lucide-react';
import { playClick, playBeep, playPop } from '../utils/audio';

export const RiskGraphSimulator = () => {
  const [selectedCluster, setSelectedCluster] = useState('cluster-1');
  const [activeNode, setActiveNode] = useState(null);

  const clusters = [
    {
      id: 'cluster-1',
      name: 'High-Risk Privilege Anomalies',
      riskLevel: 'CRITICAL',
      riskColor: 'bg-[#FF2A85] text-white',
      badge: 'NetworkX Community #42',
      recordsMatched: '1,420 / 65,000',
      description: 'Discovered via NetworkX community detection: Dense subgraph of service accounts exhibiting uncharacteristic access to sensitive legal & auth endpoints.',
      nodes: [
        { id: 'node-auth', label: 'OAuth Gateway', type: 'Gateway', risk: 'Medium', centrality: '0.89' },
        { id: 'node-anomaly', label: 'Suspicious IP 192.168.4.12', type: 'Anomaly Actor', risk: 'High', centrality: '0.94' },
        { id: 'node-rbac', label: 'RBAC Policy Drift', type: 'Config Defect', risk: 'Critical', centrality: '0.97' },
        { id: 'node-db', label: 'Primary DB Replica', type: 'Asset', risk: 'Low', centrality: '0.62' },
      ],
      llmInsight: "Retrieval-Grounded LLM Assessment: Account `service-bot-qa` escalated privileges outside maintenance windows. NetworkX graph centrality indicates 3 hops to core credential vault. Recommendation: Revoke OIDC token and enforce strict zero-trust scope."
    },
    {
      id: 'cluster-2',
      name: 'Asynchronous API Spike Anomaly',
      riskLevel: 'HIGH',
      riskColor: 'bg-[#FF7B00] text-white',
      badge: 'Time-Series Trend Spike',
      recordsMatched: '3,810 / 65,000',
      description: 'Time-series trend analysis flagged 450% deviation in asynchronous payload volumes between 02:00 and 04:00 UTC.',
      nodes: [
        { id: 'node-queue', label: 'Async Task Queue', type: 'Broker', risk: 'High', centrality: '0.91' },
        { id: 'node-crawler', label: 'Unregistered Crawler', type: 'Agent', risk: 'High', centrality: '0.88' },
        { id: 'node-pdf-gen', label: 'ReportLab PDF Worker', type: 'Worker', risk: 'Medium', centrality: '0.74' },
      ],
      llmInsight: "Retrieval-Grounded LLM Assessment: Bulk request patterns mimic automated scraping rather than normal user sessions. Correlated with 200 OK responses with oversized payload sizes. Throttling applied."
    },
    {
      id: 'cluster-3',
      name: 'Baseline Enterprise Normalcy',
      riskLevel: 'LOW / BENIGN',
      riskColor: 'bg-[#70FF00] text-black',
      badge: 'Standard Operations',
      recordsMatched: '59,770 / 65,000',
      description: 'Healthy cluster matching expected user activity profiles, regular daytime schedules, and standard REST API calls.',
      nodes: [
        { id: 'node-web', label: 'Web Client React SPA', type: 'Client', risk: 'Low', centrality: '0.45' },
        { id: 'node-api', label: 'Django REST Endpoint', type: 'Server', risk: 'Low', centrality: '0.50' },
        { id: 'node-s3', label: 'AWS S3 Asset Bucket', type: 'Storage', risk: 'Low', centrality: '0.35' },
      ],
      llmInsight: "Retrieval-Grounded LLM Assessment: Normal behavioral patterns. No policy drift detected. Zero intervention required."
    }
  ];

  const currentCluster = clusters.find(c => c.id === selectedCluster);

  const handleClusterSelect = (id) => {
    playClick();
    setSelectedCluster(id);
    setActiveNode(null);
  };

  const handleNodeClick = (node) => {
    playPop();
    setActiveNode(node);
  };

  return (
    <div className="neo-box bg-[#FFFDF9] p-6 lg:p-8 rounded-none my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-3 border-black pb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#00F0FF] px-3 py-1 neo-tag text-xs font-black uppercase mb-1">
            <Network size={14} />
            <span>Graph Analytics & Risk Intelligence</span>
          </div>
          <h3 className="font-extrabold text-2xl tracking-tight">Interactive 65K+ Record Graph Explorer</h3>
          <p className="text-gray-700 text-sm font-medium">
            Explore NetworkX community detection clusters and LLM-grounded explainable risk insights.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono font-bold text-xs bg-black text-[#FFE600] px-3 py-1.5 border border-black">
          <Activity size={14} className="text-[#70FF00]" />
          <span>Pipeline: 65,000+ Normalized Logs</span>
        </div>
      </div>

      {/* Cluster Selector Tabs */}
      <div className="flex flex-wrap gap-2 my-5">
        {clusters.map((cluster) => (
          <button
            key={cluster.id}
            onClick={() => handleClusterSelect(cluster.id)}
            className={`px-3.5 py-2 font-black text-xs border-2 border-black transition-all flex items-center gap-2 ${
              selectedCluster === cluster.id
                ? 'bg-[#FFE600] shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <span className={`px-1.5 py-0.5 text-[10px] font-mono font-bold border border-black ${cluster.riskColor}`}>
              {cluster.riskLevel}
            </span>
            <span>{cluster.name}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Node Graph Canvas Mockup */}
        <div className="lg:col-span-7 bg-[#FFF9F0] p-5 border-3 border-black shadow-[4px_4px_0px_#000] relative min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
            <span className="font-extrabold text-xs uppercase tracking-wider text-gray-700">
              Community Subgraph Visualizer (NetworkX)
            </span>
            <span className="font-mono text-xs font-bold text-gray-500">
              {currentCluster.recordsMatched}
            </span>
          </div>

          <p className="text-xs text-gray-700 font-medium mb-4">
            {currentCluster.description}
          </p>

          {/* Interactive Nodes */}
          <div className="grid grid-cols-2 gap-3 my-2">
            {currentCluster.nodes.map((node) => {
              const isSelected = activeNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  className={`cursor-pointer p-3 border-2 border-black transition-all ${
                    isSelected 
                      ? 'bg-[#00F0FF] shadow-[4px_4px_0px_#000] -translate-y-1' 
                      : 'bg-white hover:bg-[#FFE600] shadow-[2px_2px_0px_#000]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs">{node.label}</span>
                    <span className="text-[10px] font-mono font-bold bg-black text-white px-1.5 py-0.2">
                      {node.type}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-gray-600">
                    <span>Centrality: {node.centrality}</span>
                    <span className="font-bold text-black">Risk: {node.risk}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-2 border-t-2 border-dashed border-gray-400 text-[11px] font-mono text-gray-600 flex items-center justify-between">
            <span>💡 Tip: Click any node to inspect graph centrality</span>
            <span>Graph engine: NetworkX + Pandas</span>
          </div>
        </div>

        {/* LLM Explainability Card */}
        <div className="lg:col-span-5 bg-[#121214] text-white p-5 border-3 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#FFE600] font-black text-xs uppercase tracking-wider mb-2">
              <Brain size={16} />
              <span>LLM Explainable Intelligence</span>
            </div>
            <div className="text-xs font-mono text-gray-400 mb-3 border-b border-gray-700 pb-2">
              Grounding: Audit logs + Time-series anomaly signals
            </div>

            <div className="p-3.5 bg-gray-900 border border-gray-700 rounded text-xs leading-relaxed text-gray-200 font-mono">
              <div className="flex items-start gap-2 mb-2 text-[#70FF00]">
                <Sparkles size={14} className="shrink-0 mt-0.5" />
                <span className="font-bold uppercase tracking-wide">Automated Investigation Report</span>
              </div>
              <p>{currentCluster.llmInsight}</p>
            </div>

            {activeNode && (
              <div className="mt-4 p-3 bg-gray-800 border border-[#00F0FF] text-xs">
                <div className="text-[#00F0FF] font-black uppercase text-[10px] tracking-wider">
                  Inspecting Node: {activeNode.label}
                </div>
                <div className="font-mono text-gray-300 mt-1">
                  Type: {activeNode.type} • Betweenness: {activeNode.centrality} • Status: Monitored
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-gray-400 font-mono flex items-center justify-between">
            <span>Query: Retrieval-Grounded Prompt</span>
            <span className="text-[#FFE600] font-bold">Confidence: 98.4%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

