import React from 'react';

export const SaddleDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
        <div>
          <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">圖解 12-C</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">雙峰鞍部（Saddle / Col）地形判讀圖</h4>
        </div>
        <div className="text-xs text-amber-300 font-medium">
          重要地形辨識點：兩峰之間相對最低點、兩側谷線起始處
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="鞍部地形圖：顯示西峰3100公尺與東峰3050公尺，中間夾著海拔2850公尺的開闊鞍部，下方附有地形剖面與風切隘口警示"
        >
          <defs>
            <marker id="saddleArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="800" height="480" fill="#0d131a" rx="8" />

          {/* Top Panel: Topographic Plan View of Saddle */}
          <g transform="translate(40, 20)">
            <text x="0" y="20" fill="#94a3b8" fontSize="13" fontWeight="600" letterSpacing="1">
              [平面視角] 雙峰與鞍部等高線（沙漏形馬鞍狀）
            </text>

            {/* 2700m Base Contour connecting both mountains */}
            <path
              d="M 20,140 C 20,60 120,40 220,40 C 300,40 330,80 360,80 C 390,80 420,40 500,40 C 600,40 700,60 700,140 C 700,220 600,240 500,240 C 420,240 390,200 360,200 C 330,200 300,240 220,240 C 120,240 20,220 20,140 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="665" y="130" fill="#94a3b8" fontSize="9" fontFamily="monospace">2700m</text>

            {/* 2800m Contour (Saddle constriction contour) */}
            <path
              d="M 50,140 C 50,80 140,65 220,65 C 290,65 320,105 360,105 C 400,105 430,65 500,65 C 580,65 670,80 670,140 C 670,200 580,215 500,215 C 430,215 400,175 360,175 C 320,175 290,215 220,215 C 140,215 50,200 50,140 Z"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <text x="640" y="145" fill="#e2e8f0" fontSize="10" fontWeight="bold" fontFamily="monospace">2800m (首曲線)</text>

            {/* 2900m Separate Loop: Left Peak (Peak A) */}
            <path
              d="M 90,140 C 90,100 150,90 210,90 C 270,90 310,105 310,140 C 310,175 270,190 210,190 C 150,190 90,175 90,140 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="100" y="135" fill="#94a3b8" fontSize="9" fontFamily="monospace">2900m</text>

            {/* 2900m Separate Loop: Right Peak (Peak B) */}
            <path
              d="M 410,140 C 410,105 450,90 510,90 C 570,90 630,100 630,140 C 630,175 570,190 510,190 C 450,190 410,175 410,140 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="605" y="135" fill="#94a3b8" fontSize="9" fontFamily="monospace">2900m</text>

            {/* 3000m Peak A Loop */}
            <path
              d="M 130,140 C 130,115 170,110 210,110 C 250,110 280,120 280,140 C 280,160 250,170 210,170 C 170,170 130,160 130,140 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="145" y="143" fill="#94a3b8" fontSize="9" fontFamily="monospace">3000m</text>

            {/* 3000m Peak B Loop */}
            <path
              d="M 440,140 C 440,120 470,110 510,110 C 550,110 590,115 590,140 C 590,160 550,170 510,170 C 470,170 440,160 440,140 Z"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text x="565" y="143" fill="#94a3b8" fontSize="9" fontFamily="monospace">3000m</text>

            {/* Peak A 3100m Inner Summit */}
            <circle cx="210" cy="140" r="16" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="210,132 216,144 204,144" fill="#38bdf8" />
            <text x="210" y="160" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">主峰 3120m</text>

            {/* Peak B 3050m Inner Summit */}
            <circle cx="510" cy="140" r="14" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="510,133 516,144 504,144" fill="#38bdf8" />
            <text x="510" y="160" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">東峰 3050m</text>

            {/* Saddle Center Mark */}
            <circle cx="360" cy="140" r="8" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
            <line x1="360" y1="132" x2="360" y2="148" stroke="#f59e0b" strokeWidth="2" />
            <line x1="352" y1="140" x2="368" y2="140" stroke="#f59e0b" strokeWidth="2" />
            
            {/* Saddle Label Box */}
            <rect x="300" y="10" width="120" height="28" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="360" y="28" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
              中央鞍部 2850m
            </text>
            <line x1="360" y1="38" x2="360" y2="128" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />

            {/* North-South Valley drainage lines leading away from saddle */}
            <path d="M 360,140 Q 360,90 350,55" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="340" y="65" fill="#38bdf8" fontSize="9" textAnchor="end">北側溪谷下切</text>
            <path d="M 360,140 Q 360,190 370,225" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="385" y="225" fill="#38bdf8" fontSize="9">南側溪谷下切</text>
          </g>

          {/* Bottom Panel: Profile View along Ridge A -> Saddle -> B */}
          <g transform="translate(40, 275)">
            <text x="0" y="15" fill="#94a3b8" fontSize="13" fontWeight="600" letterSpacing="1">
              [稜線剖面] 山峰 → 鞍部 → 山峰 地形走勢圖
            </text>

            {/* Elevation Grid Lines */}
            <line x1="20" y1="35" x2="700" y2="35" stroke="#1e293b" strokeWidth="1" />
            <text x="15" y="38" fill="#64748b" fontSize="9" textAnchor="end">3100m</text>
            <line x1="20" y1="75" x2="700" y2="75" stroke="#1e293b" strokeWidth="1" />
            <text x="15" y="78" fill="#64748b" fontSize="9" textAnchor="end">2900m</text>
            <line x1="20" y1="115" x2="700" y2="115" stroke="#1e293b" strokeWidth="1" />
            <text x="15" y="118" fill="#64748b" fontSize="9" textAnchor="end">2700m</text>

            {/* Saddle Cross Profile Path */}
            <path
              d="M 20,140 L 70,130 C 130,100 170,30 210,30 C 260,30 310,95 360,95 C 410,95 460,45 510,45 C 560,45 610,100 670,130 L 700,140 L 700,165 L 20,165 Z"
              fill="#182330"
              stroke="#10b981"
              strokeWidth="2.5"
            />

            {/* Alignment markers */}
            <circle cx="210" cy="30" r="4" fill="#38bdf8" />
            <text x="210" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">主峰頂 (高點)</text>

            <circle cx="360" cy="95" r="5" fill="#f59e0b" />
            <text x="360" y="118" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">最低鞍部 (2850m)</text>

            <circle cx="510" cy="45" r="4" fill="#38bdf8" />
            <text x="510" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">東峰頂 (高點)</text>

            {/* Travel Path arrows: Peak -> Col -> Peak */}
            <path d="M 230,45 Q 295,85 340,93" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#saddleArrow)" />
            <path d="M 380,93 Q 430,70 490,52" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#saddleArrow)" />

            <text x="280" y="60" fill="#cbd5e1" fontSize="10">下切鞍部 (-270m)</text>
            <text x="440" y="60" fill="#cbd5e1" fontSize="10">攀升東峰 (+200m)</text>

            {/* Baseline */}
            <line x1="20" y1="165" x2="700" y2="165" stroke="#475569" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg bg-slate-900/60 p-3 border border-slate-800">
          <span className="font-semibold text-emerald-400">▍導航核心戰略價值：</span>
          <p className="mt-1 text-slate-300 leading-relaxed">
            鞍部是稜線行進中最顯著的「地形錨點」。當你在濃霧或密林中前進，發現原本持續下降的地形轉為平緩並即將開始上升，且左右兩側皆為向下傾斜的山谷，即可 100% 確認隊伍正位於中央鞍部。
          </p>
        </div>
        <div className="rounded-lg bg-slate-900/60 p-3 border border-slate-800">
          <span className="font-semibold text-amber-400">▍山域風險防範（風口與陷阱）：</span>
          <p className="mt-1 text-slate-300 leading-relaxed">
            鞍部為氣流匯聚之「隘口（Wind Funnel）」，常有強烈側風與劇烈降溫，絕不可在風口迎風面長時間停留；此外，鞍部兩側常有獸徑或獵徑下切水源，極易被誤判為登山步道而誤入溪谷斷崖！
          </p>
        </div>
      </div>
    </div>
  );
};
