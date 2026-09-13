import React from 'react';

export const ContourDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-A</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">等高線疏密與坡度關係原理圖</h4>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-5 rounded bg-rose-500/80"></span>
            等高線密集 = 陡坡
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-5 rounded bg-emerald-500/80"></span>
            等高線稀疏 = 緩坡
          </span>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 500"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="等高線地形圖與斷面剖面圖對照圖：左側等高線密集代表陡峭崖壁，右側等高線寬鬆稀疏代表平緩坡道"
        >
          <defs>
            <linearGradient id="steepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="gentleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
            </linearGradient>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8" />
            </marker>
            <marker id="arrowRose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
            <marker id="arrowEmerald" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="800" height="500" fill="#0d131a" rx="8" />
          <rect width="800" height="500" fill="url(#gridPattern)" rx="8" />

          {/* Map Top Area (Contour Map View) */}
          <g id="contour-plan-view">
            <text x="30" y="32" fill="#94a3b8" fontSize="13" fontWeight="600" letterSpacing="1">
              [平面視角] 地形圖等高線 (Contour Top View)
            </text>

            {/* Shaded slope regions */}
            <path d="M 120,50 L 320,50 L 320,240 L 120,240 Z" fill="url(#steepGrad)" rx="4" />
            <path d="M 380,50 L 720,50 L 720,240 L 380,240 Z" fill="url(#gentleGrad)" rx="4" />

            {/* Contour Lines for an asymmetrical mountain: steep on West (left), gentle on East (right) */}
            {/* 2800m Base Contour */}
            <path
              d="M 140,150 C 140,80 260,60 420,60 C 620,60 720,95 720,150 C 720,205 620,235 420,235 C 260,235 140,220 140,150 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="695" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">2800m</text>

            {/* 2900m Contour */}
            <path
              d="M 175,150 C 175,95 275,80 400,80 C 560,80 645,110 645,150 C 645,190 560,215 400,215 C 275,215 175,205 175,150 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="622" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">2900m</text>

            {/* 3000m (Index Contour - Thicker) */}
            <path
              d="M 210,150 C 210,110 290,100 380,100 C 500,100 570,120 570,150 C 570,180 500,198 380,198 C 290,198 210,190 210,150 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2.5"
            />
            <text x="546" y="145" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="monospace">3000m (首曲線)</text>

            {/* 3100m Contour */}
            <path
              d="M 245,150 C 245,125 305,118 360,118 C 440,118 495,130 495,150 C 495,170 440,182 360,182 C 305,182 245,175 245,150 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="470" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">3100m</text>

            {/* 3200m Peak Contour */}
            <path
              d="M 285,150 C 285,138 320,132 345,132 C 385,132 415,140 415,150 C 415,160 385,168 345,168 C 320,168 285,162 285,150 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />

            {/* Mountain Peak Symbol */}
            <polygon points="340,146 348,154 332,154" fill="#38bdf8" />
            <circle cx="340" cy="150" r="2.5" fill="#f8fafc" />
            <text x="350" y="148" fill="#38bdf8" fontSize="12" fontWeight="bold">▲ 主峰頂點 3245m</text>

            {/* Left Steep Slope Callout */}
            <line x1="140" y1="185" x2="285" y2="185" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="210" y1="185" x2="210" y2="215" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#arrowRose)" />
            <rect x="70" y="215" width="160" height="28" rx="4" fill="#1e131d" stroke="#f43f5e" strokeWidth="1" />
            <text x="150" y="233" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">
              線距極近 (密集) → 陡坡 / 峭壁
            </text>

            {/* Right Gentle Slope Callout */}
            <line x1="415" y1="185" x2="720" y2="185" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="565" y1="185" x2="565" y2="215" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrowEmerald)" />
            <rect x="490" y="215" width="170" height="28" rx="4" fill="#0d231e" stroke="#10b981" strokeWidth="1" />
            <text x="575" y="233" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">
              線距寬闊 (稀疏) → 緩坡 / 寬稜
            </text>

            {/* Cut-line A - B indicator */}
            <line x1="100" y1="150" x2="740" y2="150" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="6,4" />
            <circle cx="100" cy="150" r="10" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="100" y="154" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">A</text>
            <circle cx="740" cy="150" r="10" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />
            <text x="740" y="154" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">B</text>
          </g>

          {/* Divider between map and elevation profile */}
          <line x1="30" y1="262" x2="770" y2="262" stroke="#334155" strokeWidth="1" strokeDasharray="4,4" />

          {/* Bottom Area: Profile View (Cross-section along A-B) */}
          <g id="elevation-profile-view">
            <text x="30" y="285" fill="#94a3b8" fontSize="13" fontWeight="600" letterSpacing="1">
              [剖面視角] A-B 斷面地形剖面 (Cross-Section Elevation Profile)
            </text>

            {/* Y Axis Grid & Labels */}
            <line x1="80" y1="310" x2="740" y2="310" stroke="#1e293b" strokeWidth="1" />
            <text x="70" y="314" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">3200m</text>

            <line x1="80" y1="350" x2="740" y2="350" stroke="#1e293b" strokeWidth="1" />
            <text x="70" y="354" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">3000m</text>

            <line x1="80" y1="390" x2="740" y2="390" stroke="#1e293b" strokeWidth="1" />
            <text x="70" y="394" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">2800m</text>

            {/* Vertical projection alignment lines linking top contours to bottom profile */}
            <line x1="140" y1="150" x2="140" y2="390" stroke="#475569" strokeWidth="0.8" strokeDasharray="2,3" />
            <line x1="210" y1="150" x2="210" y2="350" stroke="#475569" strokeWidth="0.8" strokeDasharray="2,3" />
            <line x1="340" y1="150" x2="340" y2="305" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2,3" />
            <line x1="570" y1="150" x2="570" y2="350" stroke="#475569" strokeWidth="0.8" strokeDasharray="2,3" />
            <line x1="720" y1="150" x2="720" y2="390" stroke="#475569" strokeWidth="0.8" strokeDasharray="2,3" />

            {/* Terrain Profile Fill and Stroke */}
            <path
              d="M 100,430 L 100,410 C 130,405 140,390 175,370 C 210,350 245,330 285,310 C 315,302 335,300 340,300 C 350,300 380,310 440,325 C 500,340 570,350 645,370 C 690,380 720,390 740,398 L 740,430 Z"
              fill="#1e293b"
              stroke="#0ea5e9"
              strokeWidth="2.5"
            />

            {/* Slope Gradient Angle Annotations */}
            {/* Steep Slope Angle Tag */}
            <path d="M 180,370 Q 230,340 280,312" fill="none" stroke="#f43f5e" strokeWidth="3" />
            <rect x="140" y="318" width="105" height="22" rx="3" fill="#1e131d" stroke="#f43f5e" strokeWidth="0.8" />
            <text x="192" y="333" fill="#fda4af" fontSize="10" fontWeight="bold" textAnchor="middle">
              大坡度 (35°~ 55°)
            </text>

            {/* Gentle Slope Angle Tag */}
            <path d="M 460,330 Q 560,350 660,373" fill="none" stroke="#10b981" strokeWidth="3" />
            <rect x="520" y="375" width="105" height="22" rx="3" fill="#0d231e" stroke="#10b981" strokeWidth="0.8" />
            <text x="572" y="390" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">
              緩坡 (10°~ 18°)
            </text>

            {/* Axis Baseline */}
            <line x1="80" y1="430" x2="740" y2="430" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="750" y="434" fill="#94a3b8" fontSize="11">水平距離</text>
            <text x="95" y="445" fill="#fbbf24" fontSize="11" fontWeight="bold">A (西側)</text>
            <text x="735" y="445" fill="#fbbf24" fontSize="11" fontWeight="bold">B (東側)</text>
          </g>

          {/* Educational Note Box */}
          <rect x="30" y="462" width="740" height="26" rx="4" fill="#17212e" stroke="#334155" strokeWidth="0.8" />
          <text x="400" y="479" fill="#94a3b8" fontSize="11" textAnchor="middle">
            <tspan fill="#38bdf8" fontWeight="bold">核心公式：</tspan>
            水平距離內等高線密集 = 相同高差但水平前進距離短（坡度陡）｜等高線稀疏 = 相同高差但水平距離長（坡度緩）
          </text>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
        <div className="rounded-lg bg-slate-900/60 p-3 border border-slate-800">
          <span className="font-semibold text-rose-400">▍行進判斷要點（密集處）：</span>
          <p className="mt-1 text-slate-300 leading-relaxed">
            若行進路線垂直穿越密集等高線，代表需手腳並用劇烈攀登或下切，易有滑墜、落石風險；行進速度應大幅下修（每小時爬升可能低於 200m）。
          </p>
        </div>
        <div className="rounded-lg bg-slate-900/60 p-3 border border-slate-800">
          <span className="font-semibold text-emerald-400">▍營地與補給判斷（稀疏處）：</span>
          <p className="mt-1 text-slate-300 leading-relaxed">
            廣闊稀疏等高線多為開闊平緩稜線或台地，適合作為休息、紮營與調整隊形的避風開闊點，但要注意起霧時寬緩地形缺乏顯著地標易失去方向感。
          </p>
        </div>
      </div>
    </div>
  );
};
