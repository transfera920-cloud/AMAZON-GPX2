import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '../types';
import { CheckCircle2, Circle, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-offline-map',
    text: '下載完整離線地圖圖資',
    detail: '確保包含航程周圍 5~10 公里緩衝區之台灣魯地圖（MOI OSM）或地形圖層，而非僅下載一條細線周遭。',
    category: 'offline-map',
  },
  {
    id: 'chk-map-coverage',
    text: '確認涵蓋完整活動區域與撤退路線',
    detail: '手動縮放地圖，檢查預備下撤之溪谷、支稜或聯外林道圖資是否已完整快取，避免緊急改道時地圖一片空白。',
    category: 'offline-map',
  },
  {
    id: 'chk-import-gpx',
    text: '匯入事前審核過的 GPX 軌跡',
    detail: '不盲目下載單一檔案，至少備有 2 份近期不同隊伍的軌跡以資比對，並排除迷路繞圈航段。',
    category: 'gpx',
  },
  {
    id: 'chk-gpx-display',
    text: '確認 GPX 軌跡與航點能清晰渲染顯示',
    detail: '檢查重要水源點、鞍部、營地、岔路口標籤（Waypoint）是否正常顯示在圖面，線條顏色對比分明。',
    category: 'gpx',
  },
  {
    id: 'chk-gps-test',
    text: '於空曠處實際測試 GPS 衛星定位狀態',
    detail: '確認手機 GPS 模組運作正常，誤差半徑在 5~10 公尺內，了解所處環境搜星狀況。',
    category: 'hardware',
  },
  {
    id: 'chk-battery-100',
    text: '確認手機出發前電量為 100% 充飽狀態',
    detail: '關閉不必要的背景耗電程式、藍牙、自動同步，將螢幕亮度設定為適中以延長寒冷山區電池壽命。',
    category: 'hardware',
  },
  {
    id: 'chk-powerbank',
    text: '準備充足容量之行動電源與耐低溫充電線',
    detail: '高山低溫會導致鋰電池放電容量銳減，至少準備能為手機充滿 2~3 次的防潮防凍行動電源。',
    category: 'hardware',
  },
  {
    id: 'chk-paper-map',
    text: '準備防水封裝的紙本等高線地圖',
    detail: '實體紙圖永不當機、無需電力、無懼低溫關機，是山域導航第一優先的實體終極備援。',
    category: 'hardware',
  },
  {
    id: 'chk-compass',
    text: '準備指北針（定向羅盤）並確認磁針靈敏',
    detail: '攜帶標準定向指北針，遠離手機磁吸殼或鐵器干擾，隨時校正現場真實磁北方向。',
    category: 'hardware',
  },
  {
    id: 'chk-team-briefing',
    text: '向全體隊友布達基本導航與備援撤退方案',
    detail: '建立團隊導航默契，確認每位隊員知曉今日目標鞍部、預定通過時間、重要岔路特徵及走失處理原則。',
    category: 'team',
  },
];

const STORAGE_KEY = 'mta_ch12_nav_checklist_state_v1';

export const ChecklistInteractive: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedIds(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const resetAll = () => {
    setCheckedIds({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const total = INITIAL_CHECKLIST.length;
  const completedCount = INITIAL_CHECKLIST.filter((item) => checkedIds[item.id]).length;
  const progressPercent = Math.round((completedCount / total) * 100);

  return (
    <div className="my-8 rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-7 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/70 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-950/80 px-2 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-700/60">
              實務檢核清單
            </span>
            <span className="text-xs text-slate-300">出發前強制檢驗</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-100 mt-1">
            出發前山域導航準備檢核清單（Pre-Departure Navigation Checklist）
          </h4>
        </div>

        <button
          onClick={resetAll}
          id="btn-reset-nav-checklist"
          type="button"
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          重置勾選
        </button>
      </div>

      {/* Progress Bar */}
      <div className="my-5 rounded-lg bg-slate-900/80 p-4 border border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
            {completedCount === total ? (
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            )}
            導航備援整備度：
            <strong className={completedCount === total ? 'text-emerald-400' : 'text-amber-400'}>
              {completedCount} / {total} 項完成 ({progressPercent}%)
            </strong>
          </span>
          <span className="text-xs font-mono text-slate-300">
            {completedCount === total ? '✅ 已符合安全出團門檻' : '⚠️ 仍有必備項目未整備'}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className={`h-full transition-all duration-300 ${
              completedCount === total ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items list */}
      <div className="space-y-3">
        {INITIAL_CHECKLIST.map((item, idx) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              id={`checklist-row-${item.id}`}
              className={`group flex items-start gap-3.5 rounded-lg border p-3.5 sm:p-4 cursor-pointer transition-all ${
                isChecked
                  ? 'border-emerald-700/60 bg-emerald-950/20 text-slate-200'
                  : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              <button
                type="button"
                id={`btn-${item.id}`}
                aria-label={`標記 ${item.text} 為${isChecked ? '未完成' : '已完成'}`}
                className="mt-0.5 flex-shrink-0 text-slate-500 focus:outline-none"
              >
                {isChecked ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 transition-transform group-hover:scale-110" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-500 group-hover:text-slate-400 transition-transform group-hover:scale-110" />
                )}
              </button>

              <div className="flex-1 select-none">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-slate-300">{String(idx + 1).padStart(2, '0')}.</span>
                  <span className={`text-sm sm:text-base font-semibold ${isChecked ? 'line-through text-slate-300' : 'text-slate-100'}`}>
                    {item.text}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-lg bg-slate-900/90 border border-slate-800 p-3.5 text-xs text-slate-300">
        <strong className="text-emerald-400">💡 領隊指導提醒：</strong>
        「導航能力不是到了登山口才開機，而是從出發前一週的圖資審查就已開始。」如果出發前無法全數勾選上述 10 項，請勿貿然進入中高海拔未開發山域！
      </div>
    </div>
  );
};
