import React, { useState } from 'react';
import { ListCollapse, ChevronRight, Compass } from 'lucide-react';

const SECTIONS = [
  { id: 'section-core', label: '核心理念：導航能力 = 安全能力' },
  { id: 'section-architecture', label: '架構：導航認知四層遞進' },
  { id: 'section-1', label: '第一節｜為什麼登山需要導航能力' },
  { id: 'section-2', label: '第二節｜地圖基本概念（等高線/山脊/山谷/鞍部）' },
  { id: 'section-3', label: '第三節｜登山常用座標系統與大地基準' },
  { id: 'section-4', label: '第四節｜GPX 軌跡應用與七步審核' },
  { id: 'section-5', label: '第五節｜手機離線地圖應用與行前清單' },
  { id: 'section-6', label: '第六節｜GPS 正確使用觀念與物理限制' },
  { id: 'section-7', label: '第七節｜地形導航技巧與溪谷致命迷思' },
  { id: 'section-8', label: '第八節｜迷途預防與 STOP 標準處理' },
  { id: 'section-9', label: '第九節｜領隊導航管理與團隊導航' },
  { id: 'section-10', label: '第十節｜本章重點整理（十項法則）' },
  { id: 'section-conclusion', label: '結語｜最好的導航工具是判斷能力' },
];

export const QuickToc: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <aside className="my-8 rounded-xl border border-slate-700/80 bg-[#121922] p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-emerald-400">
          <Compass className="h-5 w-5" />
          <h3 className="text-base font-bold text-slate-100">本章研讀目錄（Table of Contents）</h3>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-200"
          aria-expanded={isOpen}
        >
          <ListCollapse className="h-4 w-4" />
          {isOpen ? '收合目錄' : '展開目錄'}
        </button>
      </div>

      <nav
        className={`mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 ${
          isOpen ? 'block' : 'hidden sm:grid'
        }`}
        aria-label="章節目錄導覽"
      >
        {SECTIONS.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className="flex items-center gap-2 text-left rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 hover:border-emerald-600/40 px-3 py-2 text-xs sm:text-[13px] text-slate-300 hover:text-emerald-300 transition-all group"
          >
            <span className="font-mono text-xs text-slate-300 group-hover:text-emerald-400">
              {String(idx + 1).padStart(2, '0')}.
            </span>
            <span className="truncate flex-1">{sec.label}</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </button>
        ))}
      </nav>
    </aside>
  );
};
