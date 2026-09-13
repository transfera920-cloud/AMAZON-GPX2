import React from 'react';

export const RidgeValleyDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-B</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">山脊（稜線）與山谷（溪谷）等高線判讀對比圖</h4>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="inline-block h-2.5 w-5 rounded bg-amber-500/80"></span>
            山脊：V 尖端指向「低處」
          </span>
          <span className="flex items-center gap-1.5 text-cyan-300">
            <span className="inline-block h-2.5 w-5 rounded bg-cyan-500/80"></span>
            山谷：V 尖端指向「高處」
          </span>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 840 520"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="山脊與山谷等高線判讀圖：左側山脊等高線V字指向低海拔，右側山谷等高線V字指向高海拔並有藍色水流匯聚箭頭，底部包含地形切面"
        >
          <defs>
            <linearGradient id="ridgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="valleyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.25" />
            </linearGradient>
            <marker id="waterArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
            <marker id="ridgeArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="840" height="520" fill="#0d131a" rx="8" />

          {/* Elevation Bar on Left Side */}
          <g transform="translate(25, 50)">
            <line x1="15" y1="20" x2="15" y2="280" stroke="#475569" strokeWidth="2" />
            <polygon points="15,10 10,24 20,24" fill="#10b981" />
            <text x="15" y="0" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">高海拔 (High)</text>
            <text x="15" y="300" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">低海拔 (Low)</text>
          </g>

          {/* Left Panel: Mountain Ridge (山脊 / 稜線) */}
          <g transform="translate(60, 30)">
            <rect x="0" y="0" width="340" height="310" rx="6" fill="#141a22" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.4" />
            
            <text x="20" y="30" fill="#fbbf24" fontSize="15" fontWeight="bold">
              山脊（稜線 Ridge）
            </text>
            <text x="20" y="48" fill="#94a3b8" fontSize="11">
              兩側低、中間高｜等高線凸出端指向「低處」
            </text>

            {/* Contours of a Ridge */}
            {/* 2400m Contour (Top/High) */}
            <path d="M 40,80 C 120,80 150,110 170,115 C 190,110 220,80 300,80" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="280" y="76" fill="#94a3b8" fontSize="9" fontFamily="monospace">2400m</text>

            {/* 2300m Contour */}
            <path d="M 40,120 C 110,120 145,155 170,165 C 195,155 230,120 300,120" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="280" y="116" fill="#94a3b8" fontSize="9" fontFamily="monospace">2300m</text>

            {/* 2200m Contour */}
            <path d="M 40,160 C 100,160 140,205 170,215 C 200,205 240,160 300,160" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
            <text x="270" y="156" fill="#e2e8f0" fontSize="10" fontWeight="bold" fontFamily="monospace">2200m</text>

            {/* 2100m Contour */}
            <path d="M 40,200 C 90,200 135,250 170,265 C 205,250 250,200 300,200" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="280" y="196" fill="#94a3b8" fontSize="9" fontFamily="monospace">2100m</text>

            {/* Ridge Line Trace (Dotted Amber) */}
            <line x1="170" y1="65" x2="170" y2="280" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5,4" />
            
            {/* V-Shape Pointing Arrow */}
            <line x1="170" y1="215" x2="170" y2="255" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#ridgeArrow)" />

            {/* Badge for Rule */}
            <rect x="25" y="245" width="115" height="42" rx="4" fill="#201b13" stroke="#f59e0b" strokeWidth="1" />
            <text x="82" y="262" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">尖端朝向</text>
            <text x="82" y="278" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">▼ 海拔較低處</text>

            {/* Water dispersal indicators (slopes fall outward) */}
            <path d="M 155,140 Q 110,150 90,170" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
            <path d="M 185,140 Q 230,150 250,170" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
            <text x="170" y="55" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle">稜線高點 (2450m+)</text>
          </g>

          {/* Right Panel: Mountain Valley (山谷 / 溪谷) */}
          <g transform="translate(440, 30)">
            <rect x="0" y="0" width="360" height="310" rx="6" fill="#111c24" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.4" />
            
            <text x="20" y="30" fill="#38bdf8" fontSize="15" fontWeight="bold">
              山谷（溪谷 Valley / Gully）
            </text>
            <text x="20" y="48" fill="#94a3b8" fontSize="11">
              兩側高、中間凹｜等高線凸出端指向「高處」
            </text>

            {/* Contours of a Valley (V points toward high elevation!) */}
            {/* 2400m Contour (Top/High) */}
            <path d="M 40,95 C 100,95 150,75 180,65 C 210,75 260,95 320,95" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="300" y="90" fill="#94a3b8" fontSize="9" fontFamily="monospace">2400m</text>

            {/* 2300m Contour */}
            <path d="M 40,140 C 95,140 145,115 180,105 C 215,115 265,140 320,140" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="300" y="135" fill="#94a3b8" fontSize="9" fontFamily="monospace">2300m</text>

            {/* 2200m Contour */}
            <path d="M 40,185 C 90,185 140,155 180,145 C 220,155 270,185 320,185" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
            <text x="290" y="180" fill="#e2e8f0" fontSize="10" fontWeight="bold" fontFamily="monospace">2200m</text>

            {/* 2100m Contour */}
            <path d="M 40,230 C 85,230 135,195 180,185 C 225,195 275,230 320,230" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="300" y="225" fill="#94a3b8" fontSize="9" fontFamily="monospace">2100m</text>

            {/* Stream Flow Vector (Blue Solid Line with animated flow markers) */}
            <path d="M 180,55 L 180,280" fill="none" stroke="#0ea5e9" strokeWidth="3" />
            
            {/* Water flow direction markers */}
            <line x1="180" y1="120" x2="180" y2="170" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#waterArrow)" />
            <line x1="180" y1="210" x2="180" y2="260" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#waterArrow)" />

            {/* Badge for Valley Rule */}
            <rect x="225" y="70" width="120" height="42" rx="4" fill="#082f49" stroke="#0ea5e9" strokeWidth="1" />
            <text x="285" y="87" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">尖端朝向</text>
            <text x="285" y="103" fill="#bae6fd" fontSize="11" fontWeight="bold" textAnchor="middle">▲ 海拔較高處</text>

            <text x="180" y="295" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              水流匯聚向低處流動 ↓
            </text>
          </g>

          {/* Bottom Section: Side-by-side Topographic Cross Sections */}
          <g transform="translate(60, 360)">
            <rect x="0" y="0" width="740" height="140" rx="6" fill="#0f1722" stroke="#334155" strokeWidth="0.8" />
            
            {/* Left Cross-Section: Ridge (Inverted V / Dome) */}
            <g transform="translate(20, 15)">
              <text x="0" y="16" fill="#fbbf24" fontSize="12" fontWeight="bold">
                [山脊地形橫剖面] 凸狀隆起
              </text>
              <path
                d="M 10,95 Q 150,15 290,95 L 290,105 L 10,105 Z"
                fill="#2a2315"
                stroke="#f59e0b"
                strokeWidth="2"
              />
              <circle cx="150" cy="40" r="4" fill="#fbbf24" />
              <text x="150" y="30" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">山脊稜線 (安全行走帶/視野好)</text>
              <text x="40" y="90" fill="#94a3b8" fontSize="9">斜坡向西滑落</text>
              <text x="260" y="90" fill="#94a3b8" fontSize="9">斜坡向東滑落</text>
            </g>

            {/* Middle Divider */}
            <line x1="370" y1="15" x2="370" y2="125" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

            {/* Right Cross-Section: Valley (V / U shape) */}
            <g transform="translate(400, 15)">
              <text x="0" y="16" fill="#38bdf8" fontSize="12" fontWeight="bold">
                [山谷地形橫剖面] 凹狀聚集
              </text>
              <path
                d="M 10,25 Q 70,85 160,95 Q 250,85 310,25 L 310,105 L 10,105 Z"
                fill="#0c2533"
                stroke="#0284c7"
                strokeWidth="2"
              />
              {/* Water surface indicator */}
              <ellipse cx="160" cy="94" rx="20" ry="4" fill="#38bdf8" />
              <text x="160" y="80" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">溪谷匯流處 (潛藏落差/瀑布/暴漲)</text>
              <text x="30" y="40" fill="#94a3b8" fontSize="9">高聳崖壁</text>
              <text x="290" y="40" fill="#94a3b8" fontSize="9">陡峭邊坡</text>
            </g>
          </g>
        </svg>
      </div>

      <div className="mt-4 rounded-lg bg-amber-950/30 border border-amber-800/50 p-3 text-xs text-amber-200/90 leading-relaxed">
        <strong className="text-amber-300 font-semibold">⚠️ 關鍵安全警訊（破解致命迷思）：</strong>
        「等高線 V 字凹進去就是山谷，溪水往下匯流。」許多山難事故發生在登山者迷途後誤以為沿著山谷溪流就能走回人間，卻被困在兩側筆直岩壁與數十公尺高的垂直瀑布之間！在地形導航中，山脊是視線開闊、通訊較佳且不易被困死的地形；山谷溪流則是落石坍塌、地形阻斷與溪水暴漲的高危險地帶。
      </div>
    </div>
  );
};
