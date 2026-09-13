import React from 'react';
import { TakeawayItem } from '../types';

const TAKEAWAYS: TakeawayItem[] = [
  {
    number: 1,
    title: '地圖能力是基本功',
    coreRule: '理解等高線與地形空間關係',
    actionableGuidance: '不論科技如何演進，能藉由等高線形狀腦補還原出真實山勢稜谷，是所有山岳安全決策的根本源頭。',
  },
  {
    number: 2,
    title: 'GPS 是工具，不是答案',
    coreRule: '定位點不等於導航方向',
    actionableGuidance: 'GPS 只能回報螢幕上的當前點位座標，無法代替登山者判斷前方路況、崩塌崖壁或下一步的安全取捨。',
  },
  {
    number: 3,
    title: 'GPX 必須事前確認',
    coreRule: 'GPX 只是資料，不是真理',
    actionableGuidance: '網路上的航跡充滿迷路折返、探勘改道與定位誤差；出發前必須逐段檢驗爬升、落差與起訖點，絕不盲目跟隨。',
  },
  {
    number: 4,
    title: '離線地圖必須事前準備',
    coreRule: '山區絕不能假設網路永遠存在',
    actionableGuidance: '進入登山口前必須將活動範圍與周邊撤退路徑之離線圖資全部下載快取完畢，並在飛航模式下實測確認。',
  },
  {
    number: 5,
    title: '理解座標系統與基準',
    coreRule: '不同資料可能採用不同基準',
    actionableGuidance: '通報搜救與對圖時，必須明確標註是 WGS84、TWD97 還是 TWD67，杜絕基準錯置帶來的兩百公尺致命誤差。',
  },
  {
    number: 6,
    title: '學會看懂等高線語彙',
    coreRule: '從線條疏密與走向預知險阻',
    actionableGuidance: '密集即陡峭危崖、稀疏即寬廣平緩；V 尖端朝低處為山脊、朝高處為溪谷，雙峰夾一低為鞍部。',
  },
  {
    number: 7,
    title: '判讀地形比追蹤航跡更重要',
    coreRule: '拒絕成為「手機藍線依賴者」',
    actionableGuidance: '隨時抬頭觀察眼前坡度、山脊線與路跡是否符合地圖預期；只要地貌與圖資不符，立即停下重新校準。',
  },
  {
    number: 8,
    title: '永遠建立多重備援',
    coreRule: '絕不讓單一設備成為單點故障',
    actionableGuidance: '實踐「手機雙機 + 防水紙圖 + 實體指北針 + 耐凍行動電源」防禦性配置，從容應對低溫關機與設備摔壞。',
  },
  {
    number: 9,
    title: '迷途第一步：立即停下 (STOP)',
    coreRule: '停止、思考、觀察、計畫',
    actionableGuidance: '絕不可抱持「再走一段碰碰運氣」的盲走心態，優先退回最後確認點；嚴禁盲目沿溪谷下切，瀑布斷崖為山難主要死因。',
  },
  {
    number: 10,
    title: '導航能力就是安全能力',
    coreRule: '導航本質上是高維度的風險管理',
    actionableGuidance: '高超的導航者不是不迷路的人，而是能在偏離軌跡的幾十公尺內即刻察覺異常、果斷停步並安全撤退的人。',
  },
];

export const KeyTakeaways: React.FC = () => {
  return (
    <div className="my-10">
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-emerald-400 font-bold tracking-wider uppercase">
            CHAPTER 12 RECAP
          </span>
          <span className="h-px flex-1 bg-slate-700/60"></span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">
          第十節｜本章核心重點整理：登山導航十項核心法則
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          將十項安全心法內化為登山本能反射。每一次入山，都是這十項原則的實踐檢驗。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TAKEAWAYS.map((item) => (
          <div
            key={item.number}
            id={`takeaway-card-${item.number}`}
            className="rounded-xl border border-slate-700/60 bg-[#131b24] p-4 sm:p-5 hover:border-emerald-600/50 transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 font-mono font-bold text-sm group-hover:bg-emerald-600 group-hover:text-slate-950 transition-colors">
                {String(item.number).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-1 inline-block text-xs font-semibold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                  ▍{item.coreRule}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.actionableGuidance}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
