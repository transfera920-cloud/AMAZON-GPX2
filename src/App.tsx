import React, { useState, useEffect } from 'react';
import {
  Compass,
  MapPin,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  FileCheck2,
  Layers,
  Cpu,
  Footprints,
  Users,
  Award,
  ChevronRight,
  BookOpen,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles
} from 'lucide-react';

import { ContourDiagram } from './components/diagrams/ContourDiagram';
import { RidgeValleyDiagram } from './components/diagrams/RidgeValleyDiagram';
import { SaddleDiagram } from './components/diagrams/SaddleDiagram';
import { NavDecisionArchitectureDiagram } from './components/diagrams/NavDecisionArchitectureDiagram';
import { GpxWorkflowDiagram } from './components/diagrams/GpxWorkflowDiagram';
import { StopProtocolDiagram } from './components/diagrams/StopProtocolDiagram';
import { CrossValidationDiagram } from './components/diagrams/CrossValidationDiagram';
import { CoordinateComparisonTable } from './components/CoordinateComparisonTable';
import { ChecklistInteractive } from './components/ChecklistInteractive';
import { KeyTakeaways } from './components/KeyTakeaways';
import { QuickToc } from './components/QuickToc';
import { ChapterNavFooter } from './components/ChapterNavFooter';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d131a] text-[#e2e8f0] font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 pb-16">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-emerald-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Global Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/90 bg-[#0d131a]/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            title="亞馬遜國家山岳協會"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-400 group-hover:border-emerald-500 transition-colors">
              <Compass className="h-4 w-4 animate-spin-slow" />
            </div>
            <span className="text-sm font-bold text-slate-100 tracking-wide group-hover:text-emerald-300 transition-colors">
              亞馬遜國家山岳協會
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              進度：{Math.round(scrollProgress)}%
            </div>
            <span className="rounded bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 border border-slate-700">
              山域安全必修
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* ================================================== */}
        {/* 1. CHAPTER HERO */}
        {/* ================================================== */}
        <section id="chapter-hero" className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-[#16212d] to-[#101720] p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle Topo lines decoration background */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 opacity-10 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-emerald-400 fill-none" strokeWidth="1">
              <circle cx="100" cy="100" r="20" />
              <circle cx="100" cy="100" r="40" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="80" />
              <circle cx="100" cy="100" r="98" />
            </svg>
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300">
              登山導航與地圖應用進階
            </h1>

            {/* Core Golden Rule Quote */}
            <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-slate-900/80 p-4 sm:p-5">
              <p className="text-lg sm:text-2xl font-bold text-emerald-300 italic tracking-wide">
                「GPS 可以告訴你在哪裡，但地圖能力才能告訴你該往哪裡走。」
              </p>
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-950/80 px-3 py-1 border border-emerald-700/60 text-sm font-black text-emerald-300">
                  <ShieldCheck className="h-4 w-4" />
                  <span>核心理念：導航能力 = 安全能力</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              本章並非單純教你操作某個登山手機 APP 的按鈕，而是建立現代登山者立足高山環境所必備的「自主導航思維」與「風險決策能力」。當你在暴風雨、濃霧或體力耗盡的迷途邊緣時，只有深刻理解地形、等高線與多重複合備援，才能指引整支隊伍平安歸來。
            </p>
          </div>
        </section>

        {/* Table of Contents Component */}
        <QuickToc />

        {/* ================================================== */}
        {/* 2. CORE PHILOSOPHY & FOUNDATIONAL PRINCIPLES */}
        {/* ================================================== */}
        <section id="section-core" className="my-14 scroll-mt-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 00 ｜ 核心價值
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            導航能力 = 安全能力：登山導航六大基石認知
          </h2>

          <div className="rounded-xl border border-slate-700/70 bg-[#121922] p-5 sm:p-6 mb-6">
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              在山難事故分析中，超過六成的迷途罹難者「身上都攜帶智慧型手機，甚至手機裡都有下載離線地圖」。為什麼有科技工具依然會發生悲劇？因為很多人誤把「擁有工具」當作「擁有能力」。
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              登山導航的真正本質是<strong>防禦性駕駛</strong>——你必須在每一個轉折、每一個鞍部、每一條稜線，主動質疑並驗證眼前的路況。
            </p>
          </div>

          {/* 6 Key Understandings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">1</span>
                <span>GPS 只是工具，不是導航能力本身</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                GPS 晶片只能透過衛星訊號計算出空間座標，它沒有智慧、無法預知前方崩塌、更無法感受風雨溫度的劇烈惡化。
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">2</span>
                <span>手機不是唯一的導航工具</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                低溫會讓鋰電池瞬間凍結關機、雨水會讓觸控螢幕失靈、一次滑墜就可能摔碎螢幕。永遠必須具備紙本地圖與實體指北針備援。
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">3</span>
                <span>GPX 不是拿到就可以盲目跟著走</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                網路上的航跡充滿了別人的迷路走錯、探勘冒險與過期路況。未經審核的 GPX，只是帶你精確重複別人的錯誤。
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">4</span>
                <span>地圖判讀能力比單純看定位點更重要</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                定位點只是一個孤立點，唯有藉由等高線看清四周的山峰、稜線、鞍部與溪谷落差，你才能在腦海中建立全景三維空間感。
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">5</span>
                <span>登山導航必須建立多重備援</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                主機（主力手機）、備用機（隊友手機）、防寒行動電源、防水封套紙圖與磁針指北針，形成無單點故障的防護網。
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2.5 font-bold text-slate-100 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono">6</span>
                <span>真正導航能力來自四步閉環決策</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                位置確認 ➜ 地形判讀 ➜ 路線判斷 ➜ 風險決策。這四個步驟形成一個持續循環，一旦地貌不符預期，立即啟動停止程序。
              </p>
            </div>
          </div>

          {/* Central Mantra Callout */}
          <div className="mt-6 rounded-xl border border-emerald-800/70 bg-emerald-950/30 p-5 text-center">
            <h4 className="text-base sm:text-lg font-bold text-emerald-300">
              ⚡ 貫穿全章的最核心定義：
            </h4>
            <p className="mt-2 text-base sm:text-xl font-black text-slate-100 leading-relaxed">
              「導航不是找路。導航是：持續確認自己在哪裡，確認自己原本要去哪裡，確認目前地形是否符合預期；如果不符合，就停止並重新判斷。」
            </p>
          </div>
        </section>

        {/* ================================================== */}
        {/* 3. COGNITIVE ARCHITECTURE */}
        {/* ================================================== */}
        <section id="section-architecture" className="my-14 scroll-mt-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION ARCH ｜ 導航認知架構
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-2">
            導航能力架構：從「工具定位」到「安全決策」
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            現代登山者最容易犯的致命認知錯誤，是把「第一階段的點位定位」誤認為「已經完成導航」。請仔細研讀下方的心智決策閉環架構：
          </p>

          <NavDecisionArchitectureDiagram />
        </section>

        {/* ================================================== */}
        {/* 4. SECTION 1: 為什麼登山需要導航能力 */}
        {/* ================================================== */}
        <section id="section-1" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 01
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第一節｜為什麼登山需要導航能力
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              在傳統觀念中，許多人常將山難迷途歸咎於「方向感不好」或「運氣差碰上起霧」。<strong>然而，在專業山域搜救與事故統計中，迷途事故從來就不是單純的個人生理方向感問題，而是一連串「過度依賴脆弱工具」、「缺乏地形驗證思維」與「決策盲動」所導致的系統性崩潰。</strong>
            </p>
            <p>
              登山環境與城市道路有著本質差異：城市裡走錯路頂多折返或叫車，但在台灣中高海拔原始山林，一步走偏幾十公尺，就可能從緩坡步道跌入深不見底的崩塌溪谷或箭竹海，面臨失溫、墜崖與脫水的致命威脅。
            </p>
          </div>

          {/* Causes vs Solutions Comparison */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Common Causes */}
            <div className="rounded-xl border border-rose-900/50 bg-[#191215] p-5">
              <h3 className="text-base font-bold text-rose-300 flex items-center gap-2 border-b border-rose-900/60 pb-3">
                <XCircle className="h-5 w-5 text-rose-400" />
                常見迷途事故的 9 大根源：
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>只依賴單一手機定位：</strong>毫無任何實體地圖或第二備援設備。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>低溫電池耗盡或關機：</strong>高山 0°C 以下手機電量急墜或凍結。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>不會看等高線地形圖：</strong>只認得螢幕上一條線，看不懂周遭是崖是谷。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>無法現場判斷實際地形：</strong>肉眼無法辨別山脊稜線與下切溪谷之別。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>GPS 訊號漂移或多路徑誤差：</strong>在深邃溪谷或峭壁旁誤信跳動的定位點。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>天候劇烈惡化視線遮蔽：</strong>白芒濃霧或暴雨中喪失參照物陷入恐慌。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>對預定路線毫無事前研究：</strong>完全不清楚今日落差、關鍵岔路與水源。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>過度相信未經審核的 GPX：</strong>盲目跟隨他人走錯折返的歷史軌跡。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✓</span>
                  <span><strong>缺乏備援導航工具與心態：</strong>沒有指北針、沒有紙圖、沒有撤退意識。</span>
                </li>
              </ul>
            </div>

            {/* Why Navigation Competence Saves Lives */}
            <div className="rounded-xl border border-emerald-900/50 bg-[#0e1b19] p-5">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2 border-b border-emerald-900/60 pb-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                成熟導航能力帶來的 6 重防禦價值：
              </h3>
              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">建立多元工具備援：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">任何一項裝備故障，其餘工具能無縫接軌，不慌亂失措。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">深刻理解山岳地形走向：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">明白走在稜線上能保證視野與通訊，遠離易受困的致命溪谷。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">天候惡化時依然保有定力：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">在伸手不見五指的濃霧中，利用等高線變化與指北針穩定維持航向。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">精準掌握隊伍時空配速：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">預知前方坡度落差，精準估算通過鞍部與抵達營地的日落倒數時間。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">從源頭根本降低迷途風險：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">在走偏 20 公尺內即刻發現異常並中止前進，絕不越走越深。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-100">全面提升山域安全決策水準：</strong>
                    <p className="text-slate-300 text-xs mt-0.5">能在惡劣情況下做出「果斷原路退回」或「避風就地待援」的理性判斷。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 5. SECTION 2: 地圖基本概念 */}
        {/* ================================================== */}
        <section id="section-2" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 02
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第二節｜地圖基本概念與四大微地形判讀
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              地圖是三維真實地球在二維平面上的幾何投影。要在平面圖紙或手機螢幕上看懂立體的大山，最核心的密碼就是<strong>等高線（Contour Lines）</strong>。
            </p>
            <p>
              <strong>等高線的定義：</strong>在假想的海平面之上，將地表上海拔高度完全相同的所有點連成的閉合曲線。
            </p>
          </div>

          {/* SVG Diagram A: Contour lines */}
          <ContourDiagram />

          {/* Detailed explanations for Ridge & Valley */}
          <div className="my-8 rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <Layers className="h-5 w-5 text-emerald-400" />
              山脊與山谷：登山安全中生死攸關的地形兩極
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-800/40">
                <strong className="text-amber-300 font-bold block mb-1">⛰️ 山脊（Ridge / 稜線）：</strong>
                地形向兩側持續下降的高地脊線。等高線的 <strong>V 字尖端指向海拔較「低」處</strong>。<br />
                <strong>登山價值：</strong>視野開闊、訊號相對良好、路跡較不易被水流沖毀，通常是傳統登山步道的主要依託。
              </div>
              <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-800/40">
                <strong className="text-cyan-300 font-bold block mb-1">🌊 山谷（Valley / 溪谷）：</strong>
                兩側地形較高，中間向下凹陷的地形。等高線的 <strong>V 字尖端指向海拔較「高」處</strong>。<br />
                <strong>安全警訊：</strong>雨水由此匯聚向下奔流。常有巨石崩落、深潭阻隔、垂直瀑布斷崖，迷途時絕不可冒然順水下切！
              </div>
            </div>
          </div>

          {/* SVG Diagram B: Ridge vs Valley */}
          <RidgeValleyDiagram />

          {/* Explanation for Saddle / Col */}
          <div className="my-8 rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3">
              鞍部（Saddle / Col）：兩山相接的戰略轉折點
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              鞍部是兩個相鄰山峰高點之間的相對低陷處，外形類似馬鞍。在等高線圖上，鞍部通常呈現一對對稱相對的沙漏弧線。它是翻越山脈時最省力的隘口通道，也是兩側溪谷發源的頂端起點。
            </p>
          </div>

          {/* SVG Diagram C: Saddle */}
          <SaddleDiagram />

          {/* Practical Application Guide */}
          <div className="mt-8 rounded-xl border border-emerald-900/60 bg-[#0e1921] p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">
              <Eye className="h-5 w-5 text-emerald-400" />
              登山者實際應用：看見等高線後，你該主動進行的 6 項連續判斷
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              看到等高線後，不只是知道「現在高度多少」，而是必須即時與感官對齊：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">1. 我要往哪個方位走？</span>
                <p className="text-slate-300 text-xs mt-1">對照指北針方位角，確認目前行進方向是否與地圖航線嚴格一致。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">2. 前方是上坡還是下坡？</span>
                <p className="text-slate-300 text-xs mt-1">若地圖顯示前方是持續爬升，雙腳卻在不斷向下切，代表 100% 走偏了！</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">3. 是否正在接近山脊？</span>
                <p className="text-slate-300 text-xs mt-1">坡度是否逐漸收斂？兩側視野是否即將豁然開朗？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">4. 是否正在切入溪谷？</span>
                <p className="text-slate-300 text-xs mt-1">兩側土石是否變得潮濕泥濘？水流聲是否接近？是否有崩坍威脅？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">5. 是否接近中央鞍部？</span>
                <p className="text-slate-300 text-xs mt-1">下坡是否即將結束並轉為上坡？風勢是否在隘口明顯增強？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-bold text-slate-100">6. 目前地形是否符合預期？</span>
                <p className="text-slate-300 text-xs mt-1">只要肉眼環境與大腦對地圖的預想產生牴觸，立刻停步確認！</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 6. SECTION 3: 登山常用座標系統 */}
        {/* ================================================== */}
        <section id="section-3" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 03
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第三節｜登山常用座標系統與大地基準解析
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              在山域求救與搜救任務中，消防搜救隊伍最常遇到的噩夢之一就是報案者說：「我在北緯 24 度多、東經 121 度多……」或者報了一組數字，卻不知道自己用的是 <strong>WGS84</strong> 還是 <strong>TWD97</strong>、甚至拿著幾十年前老地圖的 <strong>TWD67</strong> 座標！
            </p>
            <p>
              <strong>座標系統不是單純的數字串，它建立在地球橢球體數學模型（大地基準 Datum）與投影法之上。</strong>理解不同座標系統的特性，才能在通報搜救或圖資校對時做到分秒不差。
            </p>
          </div>

          <CoordinateComparisonTable />
        </section>

        {/* ================================================== */}
        {/* 7. SECTION 4: GPX 軌跡應用 */}
        {/* ================================================== */}
        <section id="section-4" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 04
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第四節｜GPX 軌跡應用：解構、驗證與拒絕盲從
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              <strong>GPX（GPS Exchange Format）</strong>是一種基於 XML 結構的全球通用開放 GPS 資料交換格式。不論你使用的是哪一款手機登山 APP 或專用 GPS 手持機，都能互相讀取 GPX 檔案。
            </p>
          </div>

          {/* GPX Three Core Elements */}
          <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-800 bg-[#121820] p-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Component 01</span>
              <h3 className="text-base font-bold text-slate-100 mt-1">Waypoint（航點）</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                特定具名座標點。通常標記重要地標，例如：登山口、水源點、三岔路口、避難山屋、中央鞍部與危險斷崖拉繩處。
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#121820] p-4">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase">Component 02</span>
              <h3 className="text-base font-bold text-slate-100 mt-1">Track（航跡 / 軌跡）</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                登山者實際行走時，儀器每隔數秒或數十公尺自動連續記錄的點位麵包屑軌跡（含時間戳與即時高程）。這也是我們最常用到的「歷史路線」。
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#121820] p-4">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">Component 03</span>
              <h3 className="text-base font-bold text-slate-100 mt-1">Route（航線）</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                出發前在電腦規劃的一連串導航轉折點清單，多由直觀折線構成，供儀器引導「從點 A 直線前往點 B」，在複雜荒野較少單獨使用。
              </p>
            </div>
          </div>

          {/* GPX is NOT Truth Callout */}
          <div className="my-6 rounded-xl border border-amber-850 bg-amber-950/30 p-5">
            <h3 className="text-base sm:text-lg font-bold text-amber-300">
              ⚠️ 核心安全箴言：GPX 不等於「正確路線」，GPX 只是資料！
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              下載到手機上的 GPX，本質上只是「某個人在某個時間點，拿著某支設備走過的歷史紀錄」。那個人可能在林道走錯路原地打轉半小時才折返、可能為了找水源強行下切崩壁、也可能他的手機在深谷中 GPS 產生了 40 公尺的巨大漂移。如果你不加思索地跟著那條「藍線」走，你就是在賭命！
            </p>
          </div>

          {/* 9 Step Verification Protocol */}
          <div className="rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-6 my-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <FileCheck2 className="h-5 w-5 text-emerald-400" />
              下載 GPX 後必須執行的 9 步安全審核清單：
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">1. 查看來源可靠度：</span>
                <p className="text-slate-300 mt-0.5 text-xs">是否來自可信山岳機構或資深嚮導？還是未經認證的隨機山友？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">2. 檢查軌跡平整度：</span>
                <p className="text-slate-300 mt-0.5 text-xs">放大檢視有無蛛網狀原地打轉、劇烈折返或反覆衝撞死路的痕跡。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">3. 檢查起訖點位置：</span>
                <p className="text-slate-300 mt-0.5 text-xs">起點是否為預定登山口？是否有偷跑管制區或開車段混入航跡？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">4. 檢查總里程數：</span>
                <p className="text-slate-300 mt-0.5 text-xs">比對官方公告步道里程，若出現大幅落差，必然包含額外岔路或漂移。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">5. 檢查總爬升與剖面：</span>
                <p className="text-slate-300 mt-0.5 text-xs">檢視高度落差折線圖，掌握關鍵陡上長坡分佈，評估自身體力門檻。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">6. 檢查明顯偏離：</span>
                <p className="text-slate-300 mt-0.5 text-xs">將 GPX 疊加至魯地圖，檢查航跡是否無故遠離既成步道切入危險斷崖。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">7. 確認符合自身行程：</span>
                <p className="text-slate-300 mt-0.5 text-xs">是順走還是逆走？是單日輕裝快速攀爬還是多日重裝紮營？</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">8. 匯入離線地圖：</span>
                <p className="text-slate-300 mt-0.5 text-xs">在主力與備份手機中分別匯入，並設定高反差醒目顏色（如螢光藍/洋紅）。</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-emerald-400 font-bold">9. 出發前離線實際測試：</span>
                <p className="text-slate-300 mt-0.5 text-xs">關閉行動網路開啟飛航模式，確認在無網路狀態下軌跡與底圖依然能流暢縮放。</p>
              </div>
            </div>
          </div>

          <GpxWorkflowDiagram />
        </section>

        {/* ================================================== */}
        {/* 8. SECTION 5: 手機離線地圖應用 */}
        {/* ================================================== */}
        <section id="section-5" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 05
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第五節｜手機離線地圖應用與出發前嚴格檢查清單
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              在台灣與全球登山界，常見的離線地圖軟體包括：<strong>綠野遊蹤（Hikingbook）、OruxMaps、Gaia GPS、Garmin Explore 生態系</strong>，乃至於最基礎的 <strong>Google Maps 離線地圖</strong>。
            </p>
            <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800">
              <h4 className="text-sm font-bold text-amber-300">⚠️ 教育視角定位：拒絕將教育頁面淪為商業 APP 推薦排行榜！</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                「APP 只是容器，背後讀取的地圖資料結構與登山者的空間理解能力，才是安全的靈魂。」沒有任何一款 APP 能單獨保證你在暴風雨中活命。你應該將不同數位工具視為不同的戰略角色：
              </p>
            </div>
          </div>

          {/* 5 Functional Roles */}
          <div className="my-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs">
            <div className="p-3 rounded-lg bg-[#141b24] border border-slate-800">
              <span className="font-bold text-sky-400 block text-sm mb-1">定位功能</span>
              <span className="text-slate-300">讀取衛星晶片，精確反映當前經緯度坐標點</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141b24] border border-slate-800">
              <span className="font-bold text-emerald-400 block text-sm mb-1">軌跡功能</span>
              <span className="text-slate-300">即時疊加行走路線與標準 GPX 參照對比</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141b24] border border-slate-800">
              <span className="font-bold text-amber-400 block text-sm mb-1">地圖底圖</span>
              <span className="text-slate-300">離線呈現魯地圖等高線、山名、水源標記</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141b24] border border-slate-800">
              <span className="font-bold text-purple-400 block text-sm mb-1">紀錄航程</span>
              <span className="text-slate-300">記錄實際移動速度、累積爬升與耗費時間</span>
            </div>
            <div className="p-3 rounded-lg bg-[#141b24] border border-slate-800 col-span-2 sm:col-span-1">
              <span className="font-bold text-rose-400 block text-sm mb-1">備援系統</span>
              <span className="text-slate-300">第二手機備份同款圖資與 GPX，隨時支援</span>
            </div>
          </div>

          {/* Interactive Checklist */}
          <ChecklistInteractive />
        </section>

        {/* ================================================== */}
        {/* 9. SECTION 6: GPS 正確使用觀念 */}
        {/* ================================================== */}
        <section id="section-6" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 06
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第六節｜GPS 正確使用觀念：優勢、物理邊界與哲學限制
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              全球衛星定位系統（GPS / GLONASS / Galileo / 唯達）是人類測繪史上的巨大飛躍。但正因為它太過便利，許多登山者在無意識中將整條性命無條件交付給一塊電子晶片。
            </p>
          </div>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GPS Strengths */}
            <div className="rounded-xl border border-emerald-900/50 bg-[#0e1b17] p-5">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                GPS 衛星定位的四大核心優勢：
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>快速確認座標點：</strong>在晴朗無遮蔽環境，數秒內即可給予高精度定位。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>連續記錄真實航跡：</strong>自動留下行進麵包屑，便於原路精準折返。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>大幅降低確認位置時間：</strong>免除傳統純紙圖複雜的交會法測量步驟。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>即時換算剩餘距離：</strong>精準計算直線距離與預估抵達時間。</span>
                </li>
              </ul>
            </div>

            {/* GPS Limitations */}
            <div className="rounded-xl border border-rose-900/50 bg-[#1a1114] p-5">
              <h3 className="text-base font-bold text-rose-300 flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-rose-400" />
                GPS 設備的五大物理與環境限制：
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span><strong>電池必定耗盡：</strong>極端低溫會導致鋰電池電壓瞬間驟降而自動關機。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span><strong>電子設備脆弱故障：</strong>摔落岩石、受潮進水或系統當機隨時可能發生。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span><strong>地形峽谷遮蔽與多路徑誤差：</strong>深邃峽谷或高聳崖壁會使衛星訊號折射產生 30~50m 漂移。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span><strong>使用者操作錯誤與坐標系混淆：</strong>輸入錯誤基準將造成數百公尺致命落差。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✗</span>
                  <span><strong>定位正常絕不代表路線安全：</strong>定位點精準無誤，但前方可能有昨日剛發生的落石坍塌。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Philosophical Climax */}
          <div className="my-6 rounded-xl border-2 border-slate-700 bg-slate-900/90 p-5 sm:p-6 text-center">
            <h4 className="text-base font-bold text-slate-300">
              🧭 導航哲學核心問答：
            </h4>
            <p className="mt-3 text-lg sm:text-2xl font-black text-emerald-300 leading-snug">
              「GPS 可以回答：我在哪裡？<br />
              但它不能單獨回答：我為什麼要往那裡走？」
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              「為什麼要往那裡走？」需要結合你對天氣演變的預判、隊伍剩餘體力、當前日落時間、等高線坡度、水源儲備以及撤退計畫的全局思考。這是人類登山大腦的職責，任何演算法都無法取代。
            </p>
          </div>
        </section>

        {/* ================================================== */}
        {/* 10. SECTION 7: 地形導航技巧與溪谷致命迷思 */}
        {/* ================================================== */}
        <section id="section-7" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 07
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第七節｜地形導航技巧與破解「溪谷下撤」致命迷思
          </h2>

          {/* CRITICAL SAFETY REVISION: Valley Fallacy */}
          <div className="rounded-xl border-2 border-rose-600 bg-[#250d11] p-5 sm:p-6 shadow-2xl mb-8">
            <div className="flex items-center gap-2.5 text-rose-300 mb-2">
              <ShieldAlert className="h-6 w-6 text-rose-400 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-black">
                山域安全重大修正：嚴厲破除「迷路沿溪流往下走」的致命錯誤！
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
              在許多未經山岳嚴謹考證的通俗讀物或舊式童軍教材中，常流傳一句話：「迷路就順著溪水往下走，一定能找到人類聚落與村莊。」——<strong>在台灣島嶼高山地形中，這是一句致命的催命咒語！</strong>
            </p>

            <div className="mt-4 rounded-lg bg-black/40 p-4 border border-rose-800/60 text-xs sm:text-sm text-slate-200 space-y-2">
              <strong className="text-rose-300 block font-bold">⚠️ 為什麼盲目下切溪谷極端危險？</strong>
              <p className="leading-relaxed">
                1. <strong>地形垂直斷層：</strong> 台灣造山運動劇烈，中高海拔溪谷充滿數十公尺高的垂直瀑布、深潭與峽谷峭壁。登山者徒步下切時順坡滑下容易，但一旦遇到無路可走的瀑布深淵，想要回頭往上爬卻因濕滑泥濘絕壁而根本無法折返！
              </p>
              <p className="leading-relaxed">
                2. <strong>落石與崩塌源頭：</strong> 溪谷兩側邊坡土石鬆動脆弱，極易因風化或動物踩踏引發落石坍方；午後雷雨更會瞬間引發溪水暴漲，將受困者捲走。
              </p>
              <p className="leading-relaxed">
                3. <strong>失溫與通訊死角：</strong> 溪谷底濕度高達 100%、常年不見天日，低溫水氣會以驚人速度帶走體溫；且深谷遮蔽衛星與基地台訊號，搜救直升機在茂密樹冠與峽谷中完全無法看見受困者，也無法吊掛。
              </p>
            </div>

            <p className="mt-4 text-xs sm:text-sm font-bold text-rose-300">
              結論：溪流絕對不是迷途後的通用撤退路線！迷途第一原則是「往上走回最後已知的稜線安全步道」，而非往下盲目切入溪谷！
            </p>
          </div>

          {/* Terrain Navigation Elements */}
          <div className="rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-6 mb-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-3">
              地形導航七大關鍵實地特徵：
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">1. 山脊（稜線）：</strong>
                兩側向下滑落的高聳主線，登山最主要且視野開闊的安全走廊。
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">2. 山谷（溪溝）：</strong>
                兩側高起、中間低凹的水系匯聚地，需謹慎面對濕滑與落石。
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">3. 鞍部（隘口）：</strong>
                兩高點間最低鞍座，最容易確認地標與遭受強風灌注的風口。
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">4. 稜線分岔處：</strong>
                主稜分出支稜的重要路口，最容易在濃霧中誤走支稜下切迷途。
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">5. 地形轉折點：</strong>
                山路從向東橫切突然轉向北方陡升之處，必須即時校對航向。
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <strong className="text-slate-100">6. 地形天然障礙：</strong>
                倒木群、巨石堆、崩壁與刺藤箭竹海，需預判安全繞行路徑。
              </div>
            </div>
          </div>

          {/* Cross Validation Diagram G */}
          <CrossValidationDiagram />

          <div className="mt-4 rounded-lg bg-slate-900/80 p-4 border border-slate-800 text-xs text-slate-300">
            <strong className="text-amber-400">🧭 太陽方位的科學正確認知：</strong>
            許多舊文章宣稱「看太陽位置就能導航」。在現代高山安全規範中必須澄清：在台灣緯度，太陽高度角會隨季節（夏至冬至）劇烈變換，且在密林、白芒濃霧或暴風雨中太陽根本無法辨識。太陽方位只能作為粗略的大致概念，<strong>絕不能用來取代精密的實體羅盤與等高線地圖！</strong>
          </div>
        </section>

        {/* ================================================== */}
        {/* 11. SECTION 8: 迷途預防與處理 */}
        {/* ================================================== */}
        <section id="section-8" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 08
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第八節｜山域迷途預防與「STOP 原則」標準作業程序
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              當一位登山者意識到自己迷路時，體內腎上腺素會劇烈飆升，引發強烈的「恐慌反應（Panic Panic Panic）」。恐慌會讓人產生一種極度危險的直覺衝動：<strong>「前面看起來像有路，我再往前跑個兩百公尺看看！」</strong>
            </p>
            <p>
              <strong>正是這種「可能只差一點點」的賭博心態，讓原本只偏離主步道 30 公尺的人，在半小時內徹底迷失在數平方公里的無人蠻荒之中！</strong>
            </p>
          </div>

          {/* STOP Protocol SVG */}
          <StopProtocolDiagram />

          {/* 8 Decision Assessment Factors */}
          <div className="mt-8 rounded-xl border border-slate-700/80 bg-[#121922] p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              迷途處理不是「找到路繼續走」：必須同時權衡的 8 項關鍵生命因素
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">1. 天候演變 (Weather)</span>
                <span className="text-slate-300 text-xs">氣溫是否急降？強風暴雨是否即將來襲？能否承受繼續推進？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">2. 殘餘日光 (Time)</span>
                <span className="text-slate-300 text-xs">距離日落還有多少小時？天黑後摸黑找路的生還率幾乎為零！</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">3. 隊員體能 (Stamina)</span>
                <span className="text-slate-300 text-xs">是否有人雙腿抽筋、體力衰竭？是否已無力應付高強度攀爬？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">4. 隊伍士氣 (Morale)</span>
                <span className="text-slate-300 text-xs">全員是否冷靜？有沒有隊員情緒崩潰或恐慌爭吵？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">5. 現地地形 (Terrain)</span>
                <span className="text-slate-300 text-xs">所處位置是否有落石與滑墜危險？有沒有避風遮雨的平整平台？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">6. 通訊狀況 (Comms)</span>
                <span className="text-slate-300 text-xs">手機有無任何微弱訊號能撥打 112？無線電或衛星通訊能否聯繫？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">7. 剩餘裝備 (Gear)</span>
                <span className="text-slate-300 text-xs">保暖雨衣、緊急外帳、瓦斯爐、求生毯與乾糧飲水能支撐幾晚？</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">8. 心理理性 (Mindset)</span>
                <span className="text-slate-300 text-xs">果斷放下「一定要登頂」的面子執念，以「全員平安回家」為最高目標。</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 12. SECTION 9: 領隊導航管理 */}
        {/* ================================================== */}
        <section id="section-9" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              SECTION 09
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
            第九節｜領隊導航管理與團隊協同導航文化
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              在商業團或自組團中，最危險的一種隊伍形態是：<strong>「整隊 10 個人，只有走在最前面的領隊一個人看過地圖，其他 9 個人低頭只盯著前面隊友的腳後跟走。」</strong>
            </p>
            <p>
              這種模式具備極高的<strong>「單點崩潰風險」</strong>——一旦領隊滑倒受傷、或者中後段隊員在上廁所落單，整個團隊將瞬間陷入不知身在何處的集體迷途！真正的專業領隊，帶領的是一隻具備「團隊導航能力」的隊伍。
            </p>
          </div>

          {/* Pre-trip 7 vs On-trail 6 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700/70 bg-[#121922] p-5">
              <h3 className="text-base font-bold text-sky-300 border-b border-slate-800 pb-3 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4" /> 出發前：領隊的 7 項導航準備作業
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>1. <strong>徹底熟悉全線地形：</strong>反覆閱讀等高線圖，記住關鍵稜脊走向。</li>
                <li>2. <strong>深度研究紙本與電子地圖：</strong>標註所有水源點、營地與通訊點。</li>
                <li>3. <strong>嚴格審查 GPX 軌跡：</strong>剔除錯誤漂移段，準備兩份以上比對軌跡。</li>
                <li>4. <strong>找出關鍵迷途路口：</strong>標記出最容易走錯的假路口、舊林道與獸徑。</li>
                <li>5. <strong>找出潛在迷途危險區域：</strong>寬緩台地、箭竹迷宮與多條支稜交會區。</li>
                <li>6. <strong>預設各路段的撤退點：</strong>明訂「幾點前未抵達鞍部，全隊強制折返」。</li>
                <li>7. <strong>制定壞天氣替代方案：</strong>如遇暴雨溪水暴漲時的高繞或就地避難備案。</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700/70 bg-[#121922] p-5">
              <h3 className="text-base font-bold text-emerald-300 border-b border-slate-800 pb-3 flex items-center gap-2">
                <Users className="h-4 w-4" /> 行進中：領隊的 6 項現場動態管理
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>1. <strong>定期且主動確認位置：</strong>抵達休息點時，對照地圖高度計與即時座標。</li>
                <li>2. <strong>引導隊員觀察實際地形：</strong>「大家看右手邊，那就是我們預計 1 小時後經過的鞍部。」</li>
                <li>3. <strong>隨時維持隊伍完整性：</strong>嚴格指派壓後嚮導，不准隊員私自脫隊超前。</li>
                <li>4. <strong>重要路口集結確認方向：</strong>在任何三岔路口停下，全員到齊確認路標再出發。</li>
                <li>5. <strong>不要只盯著手機藍線：</strong>隨時抬頭觀察眼前山勢特徵與路面磨損痕跡。</li>
                <li>6. <strong>隨機抽問隊員位置：</strong>確保隊員不是盲目跟走，而是同步具備空間認知。</li>
              </ul>
            </div>
          </div>

          {/* Team Nav Culture */}
          <div className="mt-6 rounded-xl border border-emerald-800/60 bg-emerald-950/20 p-5">
            <h3 className="text-base font-bold text-emerald-300 mb-2">
              🤝 建立「團隊導航文化（Team Navigation）」：
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              在每一次山域活動中，領隊應在每日出發前朝會與休息時，讓所有隊員清楚了解：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                • <strong>我們現在在哪裡：</strong>（例如：海拔 2650m 的活水源營地）
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                • <strong>下一個重要地標是什麼：</strong>（例如：1.5 小時後的乾水池鞍部）
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                • <strong>今日主要行進方向：</strong>（例如：全程沿著西北主稜線持續爬升）
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                • <strong>如果走散怎麼處理：</strong>（原地 STOP 絕不可下切溪谷，吹響哨音待援）
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 13. SECTION 10: 本章重點整理 */}
        {/* ================================================== */}
        <section id="section-10" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <KeyTakeaways />
        </section>

        {/* ================================================== */}
        {/* 14. CONCLUSION / EPILOGUE */}
        {/* ================================================== */}
        <section id="section-conclusion" className="my-14 scroll-mt-20 border-t border-slate-800 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              EPILOGUE ｜ 結語
            </span>
            <span className="h-px flex-1 bg-slate-800"></span>
          </div>

          <div className="rounded-2xl border-2 border-emerald-600/70 bg-gradient-to-b from-[#142328] to-[#0f181e] p-6 sm:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight leading-tight">
              結語：最好的導航工具不是 GPS，<br />
              <span className="text-emerald-400">而是你清醒的判斷能力。</span>
            </h2>

            <div className="my-6 space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              <p>
                登山導航能力，從來不是去記住手機上哪個 APP 的按鈕排在左邊還是右邊，更不是拿著 GPS 像被牽繩拉著走一樣，只懂得死死追著螢幕上的藍色小線前進。
              </p>
              <div className="rounded-xl bg-black/40 p-5 border border-emerald-850">
                <p className="font-bold text-emerald-300 text-base mb-2">
                  真正的登山導航能力，是一套嚴謹而優美的認知鏈條：
                </p>
                <div className="font-mono text-xs sm:text-sm text-slate-200 space-y-1.5 leading-relaxed">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold">
                    <span>1.</span> 知道自己確切在哪裡（座標定位）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-sky-300 font-bold">
                    <span>2.</span> 理解周遭真實地形走向（等高線與稜谷空間感）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <span>3.</span> 清楚知道自己原本預定要去哪裡（行程規劃與時限）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-purple-300 font-bold">
                    <span>4.</span> 判斷目前眼前環境是否仍在正確路線上（交叉驗證）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-rose-300 font-bold">
                    <span>5.</span> 只要發現任何異常，立刻停止前進（啟動 STOP 原則）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-teal-300 font-bold">
                    <span>6.</span> 原路返回重新確認，或在安全稜線就地避難（風險管理）
                  </div>
                  <div className="pl-5 text-slate-400">↓</div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span>7.</span> 做出能帶領全員平安回家的下一步決策！
                  </div>
                </div>
              </div>
              <p>
                GPS、智慧型手機、離線地圖、GPX 軌跡、防水紙圖、磁針指北針，全部都只是工具。工具能提供精準無比的數據，但<strong>真正決定你在山裡是安全返航還是身陷險境的，永遠是你能不能讀懂這些工具背後的意義，並在危機來臨時做出冷靜且果斷的選擇。</strong>
              </p>
              <p className="font-bold text-slate-100">
                敬畏山岳，掌握地圖，建立備援。願每一位登山者，都能憑藉扎實的導航素養，安然行走於群山之巔。
              </p>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 15. CHAPTER NAVIGATION & FOOTER */}
        {/* ================================================== */}
        <ChapterNavFooter />
      </main>
    </div>
  );
}
