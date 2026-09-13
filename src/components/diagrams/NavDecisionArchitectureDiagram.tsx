import React from 'react';

export const NavDecisionArchitectureDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-D</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">現代登山導航心智決策架構圖</h4>
        </div>
        <span className="rounded bg-rose-950/60 px-2.5 py-1 text-xs font-bold text-rose-300 border border-rose-800/60">
          「知道自己在哪裡 ≠ 知道該往哪裡走」
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 880 440"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="導航心智決策架構：從GPS取得座標點，到地圖解析周遭地形等高線，再到現場肉眼地貌判讀，最後做出路線判斷與風險決策之閉環流程"
        >
          <defs>
            <marker id="navFlowArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
            <marker id="navWarnArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
            <linearGradient id="boxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="decisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="880" height="440" fill="#0d131a" rx="8" />

          {/* Cognitive Level Dividers / Zones */}
          {/* Level 1: Tool Level (Left Zone) */}
          <rect x="25" y="45" width="220" height="345" rx="8" fill="#111827" stroke="#334155" strokeWidth="1" />
          <text x="40" y="75" fill="#94a3b8" fontSize="12" fontWeight="bold" letterSpacing="1">
            階段一｜工具層（定位）
          </text>

          {/* GPS Box */}
          <g transform="translate(45, 95)">
            <rect x="0" y="0" width="180" height="85" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="90" y="32" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">
              GPS 衛星定位
            </text>
            <text x="90" y="52" fill="#94a3b8" fontSize="11" textAnchor="middle">
              手機 / 戶外專用 GPS
            </text>
            <text x="90" y="70" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
              給予：經緯度 (X, Y, Z)
            </text>
          </g>

          {/* Tool arrow down */}
          <line x1="135" y1="180" x2="135" y2="215" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#navFlowArrow)" />

          {/* Position Confirmation Box */}
          <g transform="translate(45, 220)">
            <rect x="0" y="0" width="180" height="75" rx="6" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.2" />
            <text x="90" y="28" fill="#e2e8f0" fontSize="13" fontWeight="bold" textAnchor="middle">
              確認自己在哪裡
            </text>
            <text x="90" y="48" fill="#94a3b8" fontSize="11" textAnchor="middle">
              螢幕上的孤立定位點
            </text>
            <text x="90" y="64" fill="#38bdf8" fontSize="10" textAnchor="middle">
              「我在點 (24.41, 121.28)」
            </text>
          </g>

          {/* Limitation Warning */}
          <rect x="40" y="315" width="190" height="60" rx="4" fill="#2a1215" stroke="#f43f5e" strokeWidth="0.8" />
          <text x="135" y="335" fill="#fda4af" fontSize="11" fontWeight="bold" textAnchor="middle">
            ⚠️ 認知邊界停止點
          </text>
          <text x="135" y="352" fill="#fecdd3" fontSize="10" textAnchor="middle">
            若只停在此處：
          </text>
          <text x="135" y="367" fill="#fecdd3" fontSize="10" fontWeight="bold" textAnchor="middle">
            無法得知前方是斷崖或步道
          </text>

          {/* Horizontal transition arrow: Position -> Map */}
          <path d="M 225,257 L 275,257 L 275,135 L 305,135" fill="none" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#navFlowArrow)" />

          {/* Level 2: Terrain Cognition (Middle Zone) */}
          <rect x="310" y="45" width="250" height="345" rx="8" fill="#111827" stroke="#334155" strokeWidth="1" />
          <text x="325" y="75" fill="#94a3b8" fontSize="12" fontWeight="bold" letterSpacing="1">
            階段二｜判讀層（空間環境）
          </text>

          {/* Map Box */}
          <g transform="translate(330, 95)">
            <rect x="0" y="0" width="210" height="85" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="105" y="32" fill="#fbbf24" fontSize="14" fontWeight="bold" textAnchor="middle">
              地圖（等高線 / 經緯）
            </text>
            <text x="105" y="52" fill="#94a3b8" fontSize="11" textAnchor="middle">
              離線電子地圖 + 實體紙圖
            </text>
            <text x="105" y="70" fill="#cbd5e1" fontSize="10" textAnchor="middle">
              將孤立定位點置入地形脈絡
            </text>
          </g>

          {/* Arrow down to understand surrounding terrain */}
          <line x1="435" y1="180" x2="435" y2="215" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#navFlowArrow)" />

          {/* Understand Terrain Box */}
          <g transform="translate(330, 220)">
            <rect x="0" y="0" width="210" height="120" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.2" />
            <text x="105" y="28" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
              理解周遭地形
            </text>
            <line x1="20" y1="38" x2="190" y2="38" stroke="#334155" strokeWidth="1" />
            <text x="25" y="56" fill="#cbd5e1" fontSize="10.5">• 左側坡度是否為崩塌陡崖？</text>
            <text x="25" y="74" fill="#cbd5e1" fontSize="10.5">• 前方是否為即將轉折的稜線？</text>
            <text x="25" y="92" fill="#cbd5e1" fontSize="10.5">• 右下方溪谷有無深潭瀑布？</text>
            <text x="25" y="110" fill="#cbd5e1" fontSize="10.5">• 距離最近的安全鞍部多遠？</text>
          </g>

          {/* Horizontal transition arrow: Terrain -> Decision */}
          <line x1="540" y1="280" x2="590" y2="280" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#navFlowArrow)" />

          {/* Level 3: Decision & Action (Right Zone) */}
          <rect x="595" y="45" width="260" height="345" rx="8" fill="#111827" stroke="#334155" strokeWidth="1" />
          <text x="610" y="75" fill="#94a3b8" fontSize="12" fontWeight="bold" letterSpacing="1">
            階段三｜決策層（安全管理）
          </text>

          {/* Route Judgment Box */}
          <g transform="translate(615, 95)">
            <rect x="0" y="0" width="220" height="85" rx="6" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <text x="110" y="32" fill="#c084fc" fontSize="14" fontWeight="bold" textAnchor="middle">
              判斷前進路線
            </text>
            <text x="110" y="52" fill="#e2e8f0" fontSize="11" textAnchor="middle">
              肉眼路況與地圖預期是否吻合？
            </text>
            <text x="110" y="70" fill="#94a3b8" fontSize="10" textAnchor="middle">
              比對步道痕跡、疊石與指北針
            </text>
          </g>

          {/* Arrow down to Action Decision */}
          <line x1="725" y1="180" x2="725" y2="215" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#navFlowArrow)" />

          {/* Safe Decision Box (Key Goal) */}
          <g transform="translate(615, 220)">
            <rect x="0" y="0" width="220" height="150" rx="6" fill="url(#decisionGrad)" stroke="#10b981" strokeWidth="2" />
            <text x="110" y="28" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">
              做出下一步安全決策
            </text>
            <line x1="15" y1="38" x2="205" y2="38" stroke="#047857" strokeWidth="1" />
            
            <rect x="15" y="46" width="190" height="28" rx="3" fill="#064e3b" />
            <text x="110" y="64" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
              【符合預期】保持航向，穩健前進
            </text>

            <rect x="15" y="80" width="190" height="58" rx="3" fill="#3b1115" stroke="#f43f5e" strokeWidth="0.8" />
            <text x="110" y="98" fill="#fda4af" fontSize="10.5" fontWeight="bold" textAnchor="middle">
              【不符預期】立即啟動 STOP
            </text>
            <text x="110" y="114" fill="#fecdd3" fontSize="9.5" textAnchor="middle">
              停下、思考、觀察、原路退回
            </text>
            <text x="110" y="128" fill="#fecdd3" fontSize="9.5" textAnchor="middle">
              不盲走、不賭運氣、評估撤退
            </text>
          </g>

          {/* Feedback loop arrow returning from STOP to re-verification */}
          <path
            d="M 615,350 C 500,420 280,420 135,300"
            fill="none"
            stroke="#f43f5e"
            strokeWidth="1.8"
            strokeDasharray="4,4"
            markerEnd="url(#navWarnArrow)"
          />
          <rect x="290" y="398" width="260" height="22" rx="3" fill="#1e131d" stroke="#f43f5e" strokeWidth="0.8" />
          <text x="420" y="413" fill="#fda4af" fontSize="10.5" fontWeight="bold" textAnchor="middle">
            異常反饋閉環：不符預期立即返回重新確認
          </text>
        </svg>
      </div>

      <div className="mt-4 rounded-lg bg-slate-900/60 p-4 border border-slate-800 text-xs text-slate-300 leading-relaxed">
        <h5 className="font-bold text-slate-100 text-sm mb-1">💡 登山導航心智模型本質：</h5>
        許多山友將「導航」簡化為「盯著手機上的藍色小箭頭跟著線走」，這不是導航，這叫「盲目跟隨」。真正高段的登山者，大腦隨時在進行「座標 → 等高線 → 眼前地貌 → 風險預判」的高頻交叉驗證。一旦眼前出現「地圖上沒有的深邃溪溝」或「路跡持續向陡峭崖邊下切」，立刻意識到環境與地圖出現分歧，這就是導航能力保全性命的關鍵時刻。
      </div>
    </div>
  );
};
