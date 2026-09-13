import React from 'react';
import { ArrowLeft, ArrowRight, ShieldAlert, BookOpen, ExternalLink } from 'lucide-react';

export const ChapterNavFooter: React.FC = () => {
  return (
    <div className="mt-16 border-t border-slate-800 pt-10">
      {/* Previous / Next Chapter Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div
          id="nav-prev-chapter"
          className="rounded-xl border border-slate-800 bg-[#121922] p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
        >
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
              <ArrowLeft className="h-3.5 w-3.5" /> 上一章（Chapter 11）
            </span>
            <h4 className="text-base font-bold text-slate-100">
              第十一章：山域氣候判讀、雲形預警與高山風雨風險因應
            </h4>
            <p className="text-xs text-slate-300 mt-2 line-clamp-2">
              理解鋒面、高氣壓、焚風與午後熱對流之微氣候形成機制，掌握失溫與雷擊防範要點。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-300 font-mono">
            <span>核心安全課綱</span>
            <span className="text-slate-300">已完讀</span>
          </div>
        </div>

        <div
          id="nav-next-chapter"
          className="rounded-xl border border-emerald-800/40 bg-[#0f1b1c] p-5 hover:border-emerald-600/60 transition-all flex flex-col justify-between"
        >
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
              下一章（Chapter 13） <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <h4 className="text-base font-bold text-slate-100">
              第十三章：高山野外急救、創傷搬運與緊急露宿避難處置
            </h4>
            <p className="text-xs text-slate-300 mt-2 line-clamp-2">
              高海拔肺水腫、腦水腫判別處置，利用隨身裝備搭設緊急庇護所，確保迷途待援之存活率。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs text-emerald-400 font-mono">
            <span>核心安全課綱</span>
            <span className="font-bold">接續研讀 ➔</span>
          </div>
        </div>
      </div>

      {/* Association Authority & Educational Declaration */}
      <footer className="rounded-2xl border border-slate-800/80 bg-[#0d131a] p-6 sm:p-8 text-xs text-slate-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-slate-100 font-black text-base tracking-wide">
              <BookOpen className="h-5 w-5 text-emerald-400" />
              <span>亞馬遜國家山岳協會｜國家登山教育與山域安全教材體系</span>
            </div>
            <p className="text-slate-300 mt-1">
              本教材由亞馬遜國家山岳協會教材編審委員會嚴格制定，旨在提升國人自主登山安全素養與野外生存決策能力。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-slate-800 px-2.5 py-1 text-slate-300 font-mono text-[11px]">
              版本：2026 增訂版（第十二章）
            </span>
            <span className="rounded bg-emerald-950 px-2.5 py-1 text-emerald-400 font-mono text-[11px] border border-emerald-800/60">
              課程代碼：MTA-NAV-201
            </span>
          </div>
        </div>

        {/* Safety & Emergency Callout */}
        <div className="my-6 rounded-xl bg-rose-950/20 border border-rose-900/40 p-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-300 space-y-1">
              <h5 className="font-bold text-rose-300">山域安全與求救應急須知：</h5>
              <p className="leading-relaxed">
                高山環境氣候瞬息萬變，任何電子產品皆有失效風險。本教材內容為登山安全防禦思維之建立，絕不可取代實際山野實作與經驗累積。
                在台灣山區若遭遇緊急狀況且手機無收訊，<strong>請使用手機直接撥打「112」國際緊急求救專線</strong>（只要有任何一家電信業者訊號即可接通搜救總機），並清楚報出「經緯度座標」、「大地基準」、「最後確認時間」與「目前人員狀況」。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-[11px]">
          <div>
            © 2026 亞馬遜國家山岳協會 (Amazon National Mountaineering Association). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>無痕山林 (Leave No Trace)</span>
            <span>•</span>
            <span>安全自主負責</span>
            <span>•</span>
            <span>守護台灣山林</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
