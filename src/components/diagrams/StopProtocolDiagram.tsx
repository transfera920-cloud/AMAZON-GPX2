import React from 'react';

export const StopProtocolDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-F</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">山域迷途應變「STOP」標準作業程序流程圖</h4>
        </div>
        <span className="rounded bg-rose-900/60 px-2.5 py-1 text-xs font-bold text-rose-300 border border-rose-700/60">
          核心紀律：迷途絕不盲走，立刻停下
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 880 520"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="迷途STOP應變原則：S停止、T思考、O觀察、P計畫，隨後分支為原路退回最後確認點或原地避難待援之決策樹"
        >
          <defs>
            <marker id="stopArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
            <marker id="warnArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
            <linearGradient id="stopGradS" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#450a0a" />
              <stop offset="100%" stopColor="#1f0709" />
            </linearGradient>
            <linearGradient id="stopGradT" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b2d07" />
              <stop offset="100%" stopColor="#1a1403" />
            </linearGradient>
            <linearGradient id="stopGradO" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#083344" />
              <stop offset="100%" stopColor="#041822" />
            </linearGradient>
            <linearGradient id="stopGradP" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="880" height="520" fill="#0d131a" rx="8" />

          {/* Trigger Alert Header */}
          <rect x="30" y="20" width="820" height="38" rx="6" fill="#2d1217" stroke="#f43f5e" strokeWidth="1" />
          <text x="50" y="44" fill="#f87171" fontSize="13" fontWeight="bold">
            🚨 觸發情境：發現路跡消失、疊石不見、布條中斷、周遭地形與地圖預期產生分歧時
          </text>

          {/* Four Vertical Flow Cards (S - T - O - P) */}
          {/* Card 1: S - STOP */}
          <g transform="translate(30, 80)">
            <rect x="0" y="0" width="185" height="210" rx="8" fill="url(#stopGradS)" stroke="#f43f5e" strokeWidth="1.5" />
            <circle cx="92" cy="38" r="24" fill="#f43f5e" />
            <text x="92" y="46" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">S</text>
            <text x="92" y="82" fill="#fda4af" fontSize="15" fontWeight="bold" textAnchor="middle">STOP 停止</text>
            <line x1="20" y1="95" x2="165" y2="95" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.4" />
            <text x="15" y="116" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 立即停下腳步</text>
            <text x="15" y="134" fill="#cbd5e1" fontSize="10.5">絕不抱持「再走走看」</text>
            <text x="15" y="152" fill="#cbd5e1" fontSize="10.5">的投機心態。</text>
            <text x="15" y="174" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 停止體力消耗</text>
            <text x="15" y="192" fill="#cbd5e1" fontSize="10.5">喝口水、深呼吸冷靜。</text>
          </g>

          <line x1="215" y1="185" x2="238" y2="185" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#stopArrow)" />

          {/* Card 2: T - THINK */}
          <g transform="translate(245, 80)">
            <rect x="0" y="0" width="185" height="210" rx="8" fill="url(#stopGradT)" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="92" cy="38" r="24" fill="#f59e0b" />
            <text x="92" y="46" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">T</text>
            <text x="92" y="82" fill="#fde68a" fontSize="15" fontWeight="bold" textAnchor="middle">THINK 思考</text>
            <line x1="20" y1="95" x2="165" y2="95" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
            <text x="15" y="116" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 最後確定位置？</text>
            <text x="15" y="134" fill="#cbd5e1" fontSize="10.5">幾分鐘前看到布條？</text>
            <text x="15" y="152" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 剛才往哪走？</text>
            <text x="15" y="170" fill="#cbd5e1" fontSize="10.5">一直在稜線上嗎？</text>
            <text x="15" y="188" fill="#cbd5e1" fontSize="10.5">是否不知不覺下坡了？</text>
          </g>

          <line x1="430" y1="185" x2="453" y2="185" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#stopArrow)" />

          {/* Card 3: O - OBSERVE */}
          <g transform="translate(460, 80)">
            <rect x="0" y="0" width="185" height="210" rx="8" fill="url(#stopGradO)" stroke="#06b6d4" strokeWidth="1.5" />
            <circle cx="92" cy="38" r="24" fill="#06b6d4" />
            <text x="92" y="46" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">O</text>
            <text x="92" y="82" fill="#a5f3fc" fontSize="15" fontWeight="bold" textAnchor="middle">OBSERVE 觀察</text>
            <line x1="20" y1="95" x2="165" y2="95" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />
            <text x="15" y="116" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 檢視 GPS 與地圖</text>
            <text x="15" y="134" fill="#cbd5e1" fontSize="10.5">軌跡何時開始偏離？</text>
            <text x="15" y="152" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 觀察周遭環境</text>
            <text x="15" y="170" fill="#cbd5e1" fontSize="10.5">地形、天候、日落時間</text>
            <text x="15" y="188" fill="#cbd5e1" fontSize="10.5">隊友體力、保暖與水源</text>
          </g>

          <line x1="645" y1="185" x2="668" y2="185" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#stopArrow)" />

          {/* Card 4: P - PLAN */}
          <g transform="translate(675, 80)">
            <rect x="0" y="0" width="175" height="210" rx="8" fill="url(#stopGradP)" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="87" cy="38" r="24" fill="#10b981" />
            <text x="87" y="46" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle">P</text>
            <text x="87" y="82" fill="#a7f3d0" fontSize="15" fontWeight="bold" textAnchor="middle">PLAN 計畫</text>
            <line x1="20" y1="95" x2="155" y2="95" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
            <text x="15" y="116" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 評估可行方案</text>
            <text x="15" y="134" fill="#cbd5e1" fontSize="10.5">能安全原路退回嗎？</text>
            <text x="15" y="152" fill="#e2e8f0" fontSize="11" fontWeight="bold">● 決策執行步驟</text>
            <text x="15" y="170" fill="#cbd5e1" fontSize="10.5">原路退回 或是</text>
            <text x="15" y="188" fill="#cbd5e1" fontSize="10.5">原地避風等待救援。</text>
          </g>

          {/* Downward Decision Trunk Arrow */}
          <path d="M 762,290 L 762,315 L 440,315 L 440,335" fill="none" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#stopArrow)" />

          {/* Decision Tree Branching Area (Bottom) */}
          <g transform="translate(30, 340)">
            <rect x="0" y="0" width="820" height="155" rx="8" fill="#131c26" stroke="#334155" strokeWidth="1" />
            
            {/* Branch 1: Safe to Return to Last Known Point */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="365" height="115" rx="6" fill="#064e3b" fillOpacity="0.25" stroke="#10b981" strokeWidth="1.2" />
              <text x="20" y="28" fill="#34d399" fontSize="13" fontWeight="bold">
                方案 A：能辨識清楚路跡與返航方向
              </text>
              <line x1="20" y1="38" x2="345" y2="38" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
              <text x="20" y="58" fill="#e2e8f0" fontSize="11" fontWeight="bold">
                ➜ 立即原路退回「最後確認點 (Last Known Point)」
              </text>
              <text x="20" y="78" fill="#cbd5e1" fontSize="10.5">
                • 沿剛才留下的足跡緩慢折返，不做切西瓜冒險
              </text>
              <text x="20" y="96" fill="#cbd5e1" fontSize="10.5">
                • 退回正路後，重新檢視時間與體力，決策「繼續」或「撤退」
              </text>
            </g>

            {/* Branch 2: Cannot Return Safely -> Stay Put & Shelter */}
            <g transform="translate(430, 20)">
              <rect x="0" y="0" width="365" height="115" rx="6" fill="#450a0a" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1.2" />
              <text x="20" y="28" fill="#f87171" fontSize="13" fontWeight="bold">
                方案 B：無法安全返回（陡峭、天黑、濃霧、受傷）
              </text>
              <line x1="20" y1="38" x2="345" y2="38" stroke="#f43f5e" strokeWidth="0.8" strokeOpacity="0.4" />
              <text x="20" y="58" fill="#fecdd3" fontSize="11" fontWeight="bold">
                ➜ 絕對停止移動，就地避風固守待援！
              </text>
              <text x="20" y="78" fill="#fca5a5" fontSize="10.5">
                • <tspan fontWeight="bold" fill="#ffffff">禁止事項：</tspan> 絕對不可往溪谷盲目下切（瀑布絕壁死路）
              </text>
              <text x="20" y="96" fill="#cbd5e1" fontSize="10.5">
                • 在稜線背風安全處搭設緊急外帳、做好保暖、定期發送座標
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
