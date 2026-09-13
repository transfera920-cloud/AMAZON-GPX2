import React from 'react';

export const GpxWorkflowDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-E</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">GPX 軌跡嚴謹使用七步工作流程圖</h4>
        </div>
        <span className="text-xs text-amber-300 font-medium">
          GPX 只是別人的歷史數據，不是絕對正確的通行真理
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 880 340"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="GPX檔案安全處理標準流程：從取得檔案、檢驗來源、核對路線地形、確認爬升落差、離線匯入、行前模擬到現場交叉驗證"
        >
          <defs>
            <marker id="gpxArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
            <linearGradient id="stepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="activeStepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="880" height="340" fill="#0d131a" rx="8" />

          {/* Top Stage Indicator */}
          <rect x="30" y="20" width="460" height="24" rx="4" fill="#1e293b" />
          <text x="260" y="36" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
            事前籌劃與審核檢驗階段（家裡有網路與大螢幕時）
          </text>

          <rect x="510" y="20" width="340" height="24" rx="4" fill="#064e3b" />
          <text x="680" y="36" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">
            行前測試與山域實踐階段（離線環境）
          </text>

          {/* Steps Array: 7 Steps Layout across 2 rows or clean responsive horizontal chain */}
          {/* Step 1: 下載 GPX */}
          <g transform="translate(30, 65)">
            <rect x="0" y="0" width="105" height="100" rx="6" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#334155" />
            <text x="20" y="24" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
            <text x="52" y="45" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">下載 GPX</text>
            <text x="52" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">健行筆記/社群</text>
            <text x="52" y="80" fill="#64748b" fontSize="9" textAnchor="middle">多下載 2~3 份</text>
          </g>

          <line x1="135" y1="115" x2="152" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 2: 檢查 GPX 來源 */}
          <g transform="translate(155, 65)">
            <rect x="0" y="0" width="105" height="100" rx="6" fill="url(#stepGrad)" stroke="#f59e0b" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#78350f" />
            <text x="20" y="24" fill="#fef3c7" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
            <text x="52" y="45" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">檢查來源</text>
            <text x="52" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">記錄者經驗？</text>
            <text x="52" y="80" fill="#f87171" fontSize="9" textAnchor="middle">是否含迷走折返</text>
          </g>

          <line x1="260" y1="115" x2="277" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 3: 確認路線細節 */}
          <g transform="translate(280, 65)">
            <rect x="0" y="0" width="105" height="100" rx="6" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#334155" />
            <text x="20" y="24" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
            <text x="52" y="45" fill="#e2e8f0" fontSize="12" fontWeight="bold" textAnchor="middle">確認路線</text>
            <text x="52" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">起訖點是否相符</text>
            <text x="52" y="80" fill="#64748b" fontSize="9" textAnchor="middle">有無探勘或改道</text>
          </g>

          <line x1="385" y1="115" x2="402" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 4: 確認距離／爬升 */}
          <g transform="translate(405, 65)">
            <rect x="0" y="0" width="115" height="100" rx="6" fill="url(#stepGrad)" stroke="#475569" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#334155" />
            <text x="20" y="24" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">4</text>
            <text x="57" y="45" fill="#e2e8f0" fontSize="11.5" fontWeight="bold" textAnchor="middle">確認距離/爬升</text>
            <text x="57" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">總里程 &amp; 總爬升</text>
            <text x="57" y="80" fill="#34d399" fontSize="9" textAnchor="middle">審視高度落差圖</text>
          </g>

          <line x1="520" y1="115" x2="537" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 5: 匯入離線地圖 */}
          <g transform="translate(540, 65)">
            <rect x="0" y="0" width="105" height="100" rx="6" fill="url(#stepGrad)" stroke="#10b981" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#064e3b" />
            <text x="20" y="24" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">5</text>
            <text x="52" y="45" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">匯入離線地圖</text>
            <text x="52" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">疊加魯地圖等高線</text>
            <text x="52" y="80" fill="#6ee7b7" fontSize="9" textAnchor="middle">確認航點清晰</text>
          </g>

          <line x1="645" y1="115" x2="662" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 6: 出發前測試 */}
          <g transform="translate(665, 65)">
            <rect x="0" y="0" width="105" height="100" rx="6" fill="url(#stepGrad)" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="20" cy="20" r="10" fill="#0369a1" />
            <text x="20" y="24" fill="#e0f2fe" fontSize="11" fontWeight="bold" textAnchor="middle">6</text>
            <text x="52" y="45" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">出發前測試</text>
            <text x="52" y="65" fill="#94a3b8" fontSize="10" textAnchor="middle">開飛航模式載入</text>
            <text x="52" y="80" fill="#bae6fd" fontSize="9" textAnchor="middle">圖資圖層縮放完整</text>
          </g>

          <line x1="770" y1="115" x2="787" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#gpxArrow)" />

          {/* Step 7: 實際導航 */}
          <g transform="translate(790, 65)">
            <rect x="0" y="0" width="60" height="100" rx="6" fill="url(#activeStepGrad)" stroke="#10b981" strokeWidth="1.8" />
            <circle cx="30" cy="20" r="10" fill="#047857" />
            <text x="30" y="24" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">7</text>
            <text x="30" y="50" fill="#6ee7b7" fontSize="12" fontWeight="bold" textAnchor="middle">實地</text>
            <text x="30" y="68" fill="#6ee7b7" fontSize="12" fontWeight="bold" textAnchor="middle">導航</text>
            <text x="30" y="86" fill="#a7f3d0" fontSize="9" textAnchor="middle">交叉驗證</text>
          </g>

          {/* Critical Rule Callout Container */}
          <g transform="translate(30, 195)">
            <rect x="0" y="0" width="820" height="120" rx="6" fill="#171e28" stroke="#f43f5e" strokeWidth="1" />
            
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="90" height="24" rx="4" fill="#450a0a" />
              <text x="45" y="16" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">致命盲區防範</text>
            </g>

            <text x="125" y="37" fill="#fecdd3" fontSize="13" fontWeight="bold">
              「不要因為手機上的藍線存在，就認為那條線一定可以走！」
            </text>

            <text x="20" y="65" fill="#cbd5e1" fontSize="11.5" leading="18">
              • <tspan fill="#f59e0b" fontWeight="bold">GPS 飄移漂移失真：</tspan> 在深谷、峭壁下，衛星訊號折射產生的多路徑誤差可達 30~50 公尺，使軌跡看似在斷崖上。
            </text>
            <text x="20" y="85" fill="#cbd5e1" fontSize="11.5" leading="18">
              • <tspan fill="#f59e0b" fontWeight="bold">別人的錯誤軌跡：</tspan> 網路上的 GPX 可能是走錯路後折返的紀錄，若未審查直接跟走，將會精準重複別人的迷途！
            </text>
            <text x="20" y="105" fill="#cbd5e1" fontSize="11.5" leading="18">
              • <tspan fill="#f59e0b" fontWeight="bold">路況時效性變更：</tspan> 昨天下大雨造成的新崩塌、路基掏空或倒木阻礙，不會自動更新在歷史 GPX 檔案中。
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
