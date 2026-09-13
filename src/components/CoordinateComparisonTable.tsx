import React from 'react';

export const CoordinateComparisonTable: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-700/70 bg-[#141b24] p-4 sm:p-6 shadow-xl">
      <div className="mb-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm">TABLE 12-1</span>
          登山常用座標系統與大地基準核心比較表
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          座標系統就像語言，不同系統就像不同方言。迷途通報或地圖校對時，最怕報了座標卻「沒說基準」，導致搜救人員定位偏移數百公尺！
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full text-left text-sm border-collapse min-w-[680px]">
          <thead>
            <tr className="bg-slate-900/90 text-slate-200 border-b border-slate-700/80">
              <th className="py-3 px-4 font-semibold">座標系統 / 基準</th>
              <th className="py-3 px-4 font-semibold">適用環境</th>
              <th className="py-3 px-4 font-semibold text-emerald-400">核心優點</th>
              <th className="py-3 px-4 font-semibold text-amber-400">關鍵注意事項與限制</th>
              <th className="py-3 px-4 font-semibold">常見實務用途</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm text-slate-300">
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="py-3.5 px-4 font-medium text-slate-100 whitespace-nowrap">
                <div className="font-bold text-sky-400">經緯度 (Lat / Long)</div>
                <div className="text-[11px] text-slate-300">度分秒 (DMS) / 十進位 (DD)</div>
              </td>
              <td className="py-3.5 px-4">全球通用、任何緯度</td>
              <td className="py-3.5 px-4 text-emerald-300 font-medium">
                直觀、所有地圖軟體與搜救通報通用介面
              </td>
              <td className="py-3.5 px-4 text-amber-200/90">
                表示法格式繁多（如 24°10'30" vs 24.1750°），報案或輸入時格式混淆易生大錯
              </td>
              <td className="py-3.5 px-4">
                通報消防搜救單位、Google Maps、一般定位點分享
              </td>
            </tr>

            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="py-3.5 px-4 font-medium text-slate-100 whitespace-nowrap">
                <div className="font-bold text-emerald-400">WGS84</div>
                <div className="text-[11px] text-slate-300">全球地心座標系統</div>
              </td>
              <td className="py-3.5 px-4">GPS衛星定位、跨國導航</td>
              <td className="py-3.5 px-4 text-emerald-300 font-medium">
                全球衛星導航標配基準，手機晶片直接原生輸出
              </td>
              <td className="py-3.5 px-4 text-amber-200/90">
                若台灣舊版地圖使用 TWD67 基準，直接套用 WGS84 座標會產生約 200 公尺系統偏差
              </td>
              <td className="py-3.5 px-4">
                智慧型手機、Garmin 手持機、GPX 檔案紀錄
              </td>
            </tr>

            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="py-3.5 px-4 font-medium text-slate-100 whitespace-nowrap">
                <div className="font-bold text-amber-400">TWD97</div>
                <div className="text-[11px] text-slate-300">台灣大地基準 1997</div>
              </td>
              <td className="py-3.5 px-4">台灣本島與澎金馬地區</td>
              <td className="py-3.5 px-4 text-emerald-300 font-medium">
                以二度分帶平面直角公尺為單位，計算距離落差極為精確
              </td>
              <td className="py-3.5 px-4 text-amber-200/90">
                僅限台灣適用，出國不可使用；常與舊版 TWD67 混淆
              </td>
              <td className="py-3.5 px-4">
                台灣經建版地形圖、林務局山林圖資、專業 GIS 調查
              </td>
            </tr>

            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="py-3.5 px-4 font-medium text-slate-100 whitespace-nowrap">
                <div className="font-bold text-purple-400">UTM</div>
                <div className="text-[11px] text-slate-300">通用橫軸墨卡托投影</div>
              </td>
              <td className="py-3.5 px-4">全球分區 (台灣為 Zone 51)</td>
              <td className="py-3.5 px-4 text-emerald-300 font-medium">
                標準千米方格網（Grid），便於利用比例尺尺規量測距離
              </td>
              <td className="py-3.5 px-4 text-amber-200/90">
                跨越經度 6 度分區邊界時計算較複雜，初學者不易直接心算
              </td>
              <td className="py-3.5 px-4">
                國際搜救隊伍 (SAR)、軍事作戰地圖、專業指北針圖面導航
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 rounded-lg bg-sky-950/40 border border-sky-850 p-4 text-xs sm:text-sm text-sky-200/90 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sky-300 text-sm">
          <span>🧭</span>
          <span>教育視角深度解析：破解「誰比較準」的重大迷思</span>
        </div>
        <p className="leading-relaxed">
          很多登山初學者常問：「WGS84 和 TWD97 哪一個比較準？」——這是一個觀念錯誤的提問！<br />
          <strong>真相是：座標系統本質上是「數學地球模型（大地基準與投影法）」的差異，沒有高低貴賤，只有「定義基準是否一致」。</strong>
        </p>
        <p className="leading-relaxed text-slate-300">
          WGS84 採用地心為基準，考量全球平均曲率；而 TWD97 在台灣地區與 GRS80 橢球相容，其幾何中心更契合台灣本島。在實務上，<strong>TWD97 與 WGS84 在台灣的誤差在公分級別</strong>，登山導航完全可以視為等同。真正致命的是<strong>把舊版 TWD67 誤當成 TWD97 或 WGS84</strong>，這會導致高達 <strong>200 公尺的水平位移</strong>！在台灣險峻的斷崖地貌中，200 公尺的偏差就是「稜線步道」與「千仞深淵」的生死之別。
        </p>
      </div>
    </div>
  );
};
