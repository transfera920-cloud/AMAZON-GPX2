import React from 'react';

export const CrossValidationDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-G</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">山域導航「六重複合交叉驗證」防禦體系</h4>
        </div>
        <span className="text-xs text-slate-300">
          杜絕「單點失效」導致的山難事故
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 840 400"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="山域導航六重交叉驗證圖：中央為安全判斷核心，周圍環繞GPS座標、紙本地圖、GPX軌跡、實體羅盤、現地地貌與隊伍時間之相互驗證網"
        >
          <defs>
            <radialGradient id="centerCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.3" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="840" height="400" fill="#0d131a" rx="8" />

          {/* Verification Web Lines (Hexagon Connection) */}
          <polygon
            points="420,60 670,120 670,280 420,340 170,280 170,120"
            fill="none"
            stroke="#334155"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />

          {/* Spoke lines connecting center to nodes */}
          <line x1="420" y1="200" x2="420" y2="60" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="200" x2="670" y2="120" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="200" x2="670" y2="280" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="200" x2="420" y2="340" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="200" x2="170" y2="280" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="420" y1="200" x2="170" y2="120" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Center Hub: Safe Decision Core */}
          <circle cx="420" cy="200" r="68" fill="url(#centerCore)" stroke="#10b981" strokeWidth="2.5" />
          <text x="420" y="190" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
            登山者認知核心
          </text>
          <text x="420" y="210" fill="#a7f3d0" fontSize="14" fontWeight="900" textAnchor="middle">
            安全決策與判斷
          </text>
          <text x="420" y="228" fill="#cbd5e1" fontSize="9.5" textAnchor="middle">
            （六重交叉驗證）
          </text>

          {/* Node 1: GPS 定位 (Top) */}
          <g transform="translate(420, 60)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="0" y="-8" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1. GPS 定位</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">即時座標</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">受峽谷飄移影響</text>
          </g>

          {/* Node 2: 等高線地圖 (Top Right) */}
          <g transform="translate(670, 120)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
            <text x="0" y="-8" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">2. 等高線地圖</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">坡度 / 稜谷走向</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">宏觀地形依據</text>
          </g>

          {/* Node 3: 磁羅盤/指北針 (Bottom Right) */}
          <g transform="translate(670, 280)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
            <text x="0" y="-8" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">3. 磁針羅盤</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">絕對磁方位角</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">免電池物理基準</text>
          </g>

          {/* Node 4: 現地地貌特徵 (Bottom) */}
          <g transform="translate(420, 340)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
            <text x="0" y="-8" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">4. 現地地貌</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">肉眼山峰/鞍部/溪溝</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">與預期是否吻合</text>
          </g>

          {/* Node 5: 審查後GPX (Bottom Left) */}
          <g transform="translate(170, 280)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
            <text x="0" y="-8" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">5. 審查後 GPX</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">參考航跡走勢</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">非唯一聖經真理</text>
          </g>

          {/* Node 6: 隊伍配速與時間 (Top Left) */}
          <g transform="translate(170, 120)">
            <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
            <text x="0" y="-8" fill="#f472b6" fontSize="11" fontWeight="bold" textAnchor="middle">6. 配速與時間</text>
            <text x="0" y="10" fill="#94a3b8" fontSize="9" textAnchor="middle">推估航行法 (DR)</text>
            <text x="0" y="22" fill="#64748b" fontSize="8" textAnchor="middle">前進時間對應距離</text>
          </g>

          {/* Educational Note */}
          <text x="420" y="385" fill="#94a3b8" fontSize="11" textAnchor="middle">
            任一工具失常（如手機凍結關機或GPS訊號跳動），其餘五項工具立即無縫接管，形成固若金湯的安全閉環。
          </text>
        </svg>
      </div>
    </div>
  );
};
