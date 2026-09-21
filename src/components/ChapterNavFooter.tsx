import React from 'react';
import { ShieldAlert, Compass } from 'lucide-react';

export const ChapterNavFooter: React.FC = () => {
  return (
    <div className="mt-16 border-t border-slate-800 pt-10">
      {/* Association Authority & Educational Declaration */}
      <footer className="rounded-2xl border border-slate-800/80 bg-[#0d131a] p-6 sm:p-8 text-xs text-slate-300">
        <div className="flex flex-col items-center justify-center text-center gap-4 border-b border-slate-800 pb-6">
          <a
            href="https://amazon-hike.com/"
            className="inline-flex items-center justify-center gap-2.5 text-slate-100 font-bold text-base tracking-wide hover:text-emerald-400 transition-colors"
            title="亞馬遜國家山岳協會"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-400">
              <Compass className="h-4 w-4" />
            </div>
            <span>亞馬遜國家山岳協會</span>
          </a>
        </div>

        {/* Safety & Emergency Callout */}
        <div className="my-6 rounded-xl bg-rose-950/20 border border-rose-900/40 p-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-300 space-y-1">
              <p className="font-bold text-rose-300">山域安全與求救應急須知：</p>
              <p className="leading-relaxed">
                高山環境氣候瞬息萬變，任何電子產品皆有失效風險。本教材內容為登山安全防禦思維之建立，絕不可取代實際山野實作與經驗累積。
                在台灣山區若遭遇緊急狀況且手機無收訊，<strong>請使用手機直接撥打「112」國際緊急求救專線</strong>（只要有任何一家電信業者訊號即可接通搜救總機），並清楚報出「經緯度座標」、「大地基準」、「最後確認時間」與「目前人員狀況」。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Legal & Copyright - Centered */}
        <div className="flex items-center justify-center text-center text-slate-300 text-[11px]">
          <div>
            © 2026 <a href="https://amazon-hike.com/" className="hover:text-emerald-400 transition-colors font-medium">亞馬遜國家山岳協會</a> (Amazon Alpine Association). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
