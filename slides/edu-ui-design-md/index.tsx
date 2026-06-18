import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import repoScreenshot from '../../assets/repo-screenshot.png';
import {
  baseDesign, baseC, baseFont, fill,
  Anim, Grid, EO, EI,
  Footer as BaseFooter, BackToFirstButton,
} from '../../src/design/base';

// ─── Design system tokens ────────────────────────────────────────────────────
export const design: DesignSystem = { ...baseDesign };

// ─── Local constants ─────────────────────────────────────────────────────────
const c = { ...baseC };
const font = { ...baseFont };
const Footer = () => <BaseFooter label="edu-ui-design-md" />;

// ─── Transitions ──────────────────────────────────────────────────────────────
export const transition: SlideTransition = {
  duration: 200,
  exit: { duration: 140, easing: EI, keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }] },
  enter: { duration: 200, delay: 80, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─── Page 1: Cover ───────────────────────────────────────────────────────────
// Budget: padding 0/140px sides, content flex-centered → no overflow risk
const Cover: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '0 140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        className="fu"
        style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 40, animationDelay: '0.05s' }}
      >
        edu-ui-design-md
      </div>
      <h1
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.035em', margin: 0, animationDelay: '0.15s' }}
      >
        設計知識層
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>維護指南</span>
      </h1>
      <p
        className="fu"
        style={{ marginTop: 56, fontSize: 40, lineHeight: 1.55, color: c.textSoft, maxWidth: 1200, animationDelay: '0.3s' }}
      >
        讓 AI 看懂設計規則。這個 repo 是什麼、誰來維護、怎麼更新。
      </p>
      <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48, animationDelay: '0.42s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>Vic Wang</span>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: c.muted, flexShrink: 0 }} />
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>June 12, 2026</span>
      </div>
    </div>
    <Footer />
  </div>
);

Cover.transition = {
  duration: 280,
  exit: { duration: 160, easing: EI, keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }] },
  enter: { duration: 280, delay: 100, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }] },
};

// ─── Page 2: 為什麼需要 DESIGN.md ────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 40 + body 62 + gap 48 + 3 cards ~272px = 571px ✅
const ProblemCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div
    style={{
      flex: 1,
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 'var(--osd-radius)',
      padding: '28px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <div style={{ fontSize: 40 }}>{icon}</div>
    <div style={{ fontFamily: font.display, fontSize: 36, fontWeight: 600, lineHeight: 1.2 }}>{title}</div>
    <div style={{ fontSize: 30, lineHeight: 1.5, color: c.textSoft }}>{desc}</div>
  </div>
);

const Why: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        01 / 為什麼
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        AI 做 UI 時，設計規則在哪？
      </h2>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.55, color: c.textSoft, maxWidth: 1400, margin: '0 0 48px', animationDelay: '0.2s' }}>
        設計決策分散在不同系統，AI 看不到，每次都要重新解釋，輸出品質難以穩定。
      </p>
      <div className="fu" style={{ display: 'flex', gap: 24, animationDelay: '0.3s' }}>
        <ProblemCard
          icon="🗂"
          title="設計規則分散各地"
          desc="Figma、VSDS Foundation、元件庫，沒有統一入口，AI 無法直接讀取"
        />
        <ProblemCard
          icon="🔁"
          title="每次都要重新解釋"
          desc="哪些 token 可用、哪些元件適合，協作時每次都得手動告知"
        />
        <ProblemCard
          icon="⚠️"
          title="輸出不穩定"
          desc="缺乏一致的設計 context，AI 只能猜：錯誤 token、錯誤間距、大量修正"
        />
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 3: Google 的定義 ───────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 40 + body 64 + gap 40 + 3 bullets 228px = 521px ✅
const GoogleSpec: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        02 / Google DESIGN.md
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        README.md 給人看；DESIGN.md 給 AI 看
      </h2>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.55, color: c.textSoft, maxWidth: 1500, margin: '0 0 40px', animationDelay: '0.2s' }}>
        Google Labs 從 AI 設計工具 Stitch 發展出這個開源格式，2026 年開源。讓 AI coding agent 能真正理解設計意圖，而不是只知道數值。
      </p>
      <div className="fu" style={{ display: 'flex', flexDirection: 'column', gap: 20, animationDelay: '0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>純文字、Git 版控、任何 AI agent 都能讀</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>不依賴特定工具，不需要 Figma plugin 或 build pipeline</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>設計師寫，開發者和 AI 都受益</span>
        </div>
      </div>
      <a
        className="fu"
        href="https://github.com/google-labs-code/design.md"
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: 36,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          fontFamily: font.mono,
          fontSize: 26,
          color: c.muted,
          textDecoration: 'none',
          animationDelay: '0.4s',
        }}
      >
        <span style={{ color: 'var(--osd-accent)' }}>↗</span>
        github.com/google-labs-code/design.md
      </a>
    </div>
    <Footer />
  </div>
);

// ─── Page 4: DESIGN.md 的結構 ────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 40 + insight 58 + gap 40 + two-col ~270px = 557px ✅
const StructureBlock = ({ label, tag, items, color }: { label: string; tag: string; items: string[]; color: string }) => (
  <div
    style={{
      flex: 1,
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 'var(--osd-radius)',
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 20,
          letterSpacing: '0.06em',
          color,
          background: `${color}14`,
          border: `1px solid ${color}30`,
          borderRadius: 6,
          padding: '5px 12px',
        }}
      >
        {tag}
      </div>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 600 }}>{label}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 14 }} />
          <span style={{ fontFamily: font.mono, fontSize: 28, lineHeight: 1.45, color: c.textSoft }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const DesignMdFormat: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        03 / 格式
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        Token 值 ＋ 使用規則，缺一不可
      </h2>
      <p className="fu" style={{ fontSize: 36, lineHeight: 1.5, color: c.textSoft, maxWidth: 1500, margin: '0 0 40px', animationDelay: '0.15s' }}>
        <span style={{ fontFamily: font.mono, color: 'var(--osd-accent)' }}>tokens.json</span> 只能說「是什麼」；DESIGN.md 同時說「為什麼」和「怎麼用」
      </p>
      <div className="fu" style={{ display: 'flex', gap: 28, animationDelay: '0.25s' }}>
        <StructureBlock
          tag="YAML front matter"
          label="機器可讀的精確數值"
          color={c.green}
          items={[
            'colors: primary #7c6ef5',
            'typography: body 16px / 1.5',
            'spacing: md 16px, lg 24px',
            'radius: card 12px',
          ]}
        />
        <StructureBlock
          tag="Markdown prose"
          label="AI 和人都能讀的規則"
          color="var(--osd-accent)"
          items={[
            'Colors — primary 只用於互動元素',
            'Typography — 中文不用 Thin / Light',
            'Layout — Content-First，不以對齊為目的',
            "Do's & Don'ts — 明確的禁止項目",
          ]}
        />
      </div>
      <div
        className="fu"
        style={{
          marginTop: 32,
          padding: '20px 28px',
          background: `${c.green}0d`,
          border: `1px solid ${c.green}28`,
          borderRadius: 'var(--osd-radius)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 16,
          animationDelay: '0.35s',
        }}
      >
        <span style={{ color: c.green, fontFamily: font.mono, fontSize: 24, lineHeight: 1.6, flexShrink: 0 }}>為什麼不用 foundation token？</span>
        <span style={{ fontSize: 28, lineHeight: 1.6, color: c.textSoft }}>
          Foundation token（如 Style Dictionary、VSDS tokens）需要 build pipeline 才能解析，AI agent 無法直接讀取。YAML front matter 是純文字，開箱即用，不依賴任何工具鏈。
        </span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Section cover: edu-ui-design-md repo ────────────────────────────────────
const RepoSectionCover: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'stretch' }}>
      {/* Left: title */}
      <div style={{ width: '42%', padding: '0 0 0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
        <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, animationDelay: '0.05s' }}>
          這個 repo
        </div>
        <h2
          className="fu"
          style={{ fontFamily: 'var(--osd-font-display)', fontSize: 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0, animationDelay: '0.15s' }}
        >
          edu-ui-<br />
          <span style={{ color: 'var(--osd-accent)' }}>design-md</span>
        </h2>
      </div>
      {/* Right: screenshot */}
      <div
        className="fu"
        style={{ flex: 1, padding: '80px 100px 80px 48px', display: 'flex', alignItems: 'center', animationDelay: '0.25s' }}
      >
        <img
          src={repoScreenshot}
          alt="edu-ui-design-md repo structure"
          style={{ width: '100%', borderRadius: 12, border: `1px solid ${c.borderBright}`, boxShadow: '0 8px 48px rgba(0,0,0,0.5)' }}
        />
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 5: 這個 repo 是什麼 ─────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 56 + body 62 + gap 48 + 2 bullets (54+20+54) = 443px ✅
const WhatIsIt: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        04 / 定位
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        一個 AI 看得懂的設計知識層
      </h2>
      <p className="fu" style={{ fontSize: 40, lineHeight: 1.55, color: c.textSoft, maxWidth: 1400, margin: '0 0 48px', animationDelay: '0.2s' }}>
        把分散的設計脈絡（Figma、VSDS token、元件文件）整理成 AI 能直接讀懂的格式。
      </p>
      <div className="fu" style={{ display: 'flex', flexDirection: 'column', gap: 20, animationDelay: '0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 40, lineHeight: 1.5 }}>AI 在產生 UI 前，應該讀哪些設計規則？</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 40, lineHeight: 1.5 }}>哪些是跨產品共用、哪些是產品層特有？</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 3: Repo 結構 ────────────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 48 + cards 240px = 437px ✅

const LayerCard = ({ tag, title, desc, delay }: { tag: string; title: string; desc: string; delay: number }) => (
  <div
    className="fu"
    style={{
      animationDelay: `${delay}s`,
      flex: 1,
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 'var(--osd-radius)',
      padding: '32px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}
  >
    <div
      style={{
        fontFamily: font.mono,
        fontSize: 21,
        letterSpacing: '0.1em',
        color: 'var(--osd-accent)',
        background: 'rgba(124,110,245,0.1)',
        border: '1px solid rgba(124,110,245,0.28)',
        padding: '6px 14px',
        borderRadius: 6,
        alignSelf: 'flex-start',
      }}
    >
      {tag}
    </div>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 38, fontWeight: 600, lineHeight: 1.2 }}>
      {title}
    </div>
    <div style={{ fontSize: 30, lineHeight: 1.5, color: c.textSoft }}>
      {desc}
    </div>
  </div>
);

const Structure: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        05 / 結構
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        四個知識層
      </h2>
      <div style={{ display: 'flex', gap: 24, flex: 1 }}>
        <LayerCard tag="shared/" title="跨產品規則" desc="顏色、字型、間距、元件共通使用規範" delay={0.2} />
        <LayerCard tag="products/" title="產品層規則" desc="Hub / myViewBoard 各自的設計規則與 token" delay={0.3} />
        <LayerCard tag="mappings/" title="對照查表" desc="VSDS token 架構、icon 規則、Figma 元件 URL" delay={0.4} />
        <LayerCard tag="components/" title="元件文件" desc="每個元件的 usage guidelines（自動產生）" delay={0.5} />
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Section intro: 作業慣例 ──────────────────────────────────────────────────
const MaintainIntro: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '0 140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, animationDelay: '0.05s' }}>
        除了 DESIGN.md
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 100, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.035em', margin: 0, animationDelay: '0.15s' }}
      >
        這個 Repo<br />
        <span style={{ color: 'var(--osd-accent)' }}>還做了什麼？</span>
      </h2>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.6, color: c.textSoft, maxWidth: 1300, animationDelay: '0.3s' }}>
        我定義了基礎的作業慣例：哪些檔案手動編輯、哪些自動產生、什麼時候要更新、如何紀錄變更。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 4: 自動產生 vs 手動維護 ────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 48 + grid 340px = 537px ✅

const ManualRow = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.green, flexShrink: 0 }} />
    <span style={{ fontFamily: font.mono, fontSize: 30, lineHeight: 1.5, color: c.textSoft }}>{text}</span>
  </div>
);

const AutoRow = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.amber, flexShrink: 0 }} />
    <span style={{ fontFamily: font.mono, fontSize: 30, lineHeight: 1.5, color: c.textSoft }}>{text}</span>
  </div>
);

const AutoVsManual: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        06 / 維護
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        哪些要手動、哪些自動產生
      </h2>
      <div className="fu" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, animationDelay: '0.2s' }}>
        <div style={{ background: c.surface, border: `1px solid ${c.borderBright}`, borderRadius: 'var(--osd-radius)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: c.green, flexShrink: 0 }} />
            <span style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.06em', color: c.green }}>手動維護（可直接編輯）</span>
          </div>
          <ManualRow text="shared/DESIGN.md" />
          <ManualRow text="products/*/DESIGN.md" />
          <ManualRow text="mappings/vsds-tokens.md" />
          <ManualRow text="mappings/icons.md" />
        </div>
        <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 'var(--osd-radius)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: c.amber, flexShrink: 0 }} />
            <span style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.06em', color: c.amber }}>自動產生（勿手動修改）</span>
          </div>
          <AutoRow text="products/*/tokens.md" />
          <AutoRow text="components/*.md" />
          <AutoRow text="mappings/figma.md" />
          <AutoRow text="assets/icons/" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 5: 如何更新 ─────────────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 48 + 3 cards (flex-row) ~240px = 437px ✅

const UpdateCard = ({ when, title, cmd, delay }: { when: string; title: string; cmd: string; delay: number }) => (
  <div
    className="fu"
    style={{
      animationDelay: `${delay}s`,
      flex: 1,
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 'var(--osd-radius)',
      padding: '28px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <div style={{ fontFamily: font.mono, fontSize: 22, color: c.muted, letterSpacing: '0.04em' }}>{when}</div>
    <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 600, lineHeight: 1.2 }}>{title}</div>
    <div
      style={{
        marginTop: 'auto',
        fontFamily: font.mono,
        fontSize: 26,
        color: 'var(--osd-accent)',
        background: 'rgba(124,110,245,0.08)',
        border: '1px solid rgba(124,110,245,0.22)',
        borderRadius: 8,
        padding: '12px 16px',
        wordBreak: 'break-all',
      }}
    >
      {cmd}
    </div>
  </div>
);

const HowToUpdate: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        07 / 更新流程
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        跟 Claude Code 說，或直接下指令
      </h2>
      <div style={{ display: 'flex', gap: 24, flex: 1 }}>
        <UpdateCard when="token 有更新時" title="更新 Token 對照表" cmd="generate-tokens.js hub" delay={0.2} />
        <UpdateCard when="元件文件有更新時" title="更新元件文件" cmd="generate-component-docs.js --all" delay={0.3} />
        <UpdateCard when="設計規則有調整時" title="直接編輯 DESIGN.md" cmd="products/hub/DESIGN.md" delay={0.4} />
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 6: 自動化 Hooks ─────────────────────────────────────────────────────
// Budget (padding 120px T/B → usable 840px):
// eyebrow 29 + gap 32 + heading 88 + gap 48 + 3 rows × ~96px + 2 gaps × 32 = 197+64+416 = 480px ✅

const HookRow = ({ tag, title, desc, delay }: { tag: string; title: string; desc: string; delay: number }) => (
  <div
    className="fu"
    style={{
      animationDelay: `${delay}s`,
      display: 'flex',
      gap: 36,
      alignItems: 'flex-start',
    }}
  >
    <div
      style={{
        fontFamily: font.mono,
        fontSize: 20,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--osd-accent)',
        background: 'rgba(124,110,245,0.1)',
        border: '1px solid rgba(124,110,245,0.28)',
        borderRadius: 6,
        padding: '8px 16px',
        flexShrink: 0,
        marginTop: 4,
        whiteSpace: 'nowrap',
      }}
    >
      {tag}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 38, fontWeight: 600, lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 32, lineHeight: 1.4, color: c.textSoft }}>{desc}</div>
    </div>
  </div>
);

const Hooks: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        08 / 自動化
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        Claude Code 幫你把關的三件事
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <HookRow tag="Commit 時" title="不能直接 commit 到 main" desc="自動阻擋，提示先開 branch 再繼續" delay={0.2} />
        <div style={{ height: 1, background: c.border }} />
        <HookRow tag="Push 時" title="Branch 命名格式檢查" desc="名稱不符 {type}/{short-description} → 阻擋並提示 rename" delay={0.3} />
        <div style={{ height: 1, background: c.border }} />
        <HookRow tag="結束時" title="提醒確認文件是否同步" desc="有非文件檔案變動時，提示是否需要更新 README / CHANGELOG" delay={0.4} />
      </div>
      <div className="fu" style={{ marginTop: 40, display: 'flex', gap: 48, animationDelay: '0.55s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>
          <span style={{ color: c.textSoft }}>commit</span>：把目前的修改存成一個版本紀錄
        </span>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>
          <span style={{ color: c.textSoft }}>push</span>：將本地的版本紀錄上傳到遠端 repo
        </span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 7: 模板化 ───────────────────────────────────────────────────────────

const Changelog: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.muted, marginBottom: 32 }}>
        09 / 模板化
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        新專案，一鍵安裝基礎設定
      </h2>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.6, color: c.textSoft, maxWidth: 1400, margin: '0 0 40px', animationDelay: '0.2s' }}>
        把基礎文件與 skill 整理成一個 template repo，之後開新 repo 只要一個步驟。
      </p>
      <div className="fu" style={{ display: 'flex', flexDirection: 'column', gap: 20, animationDelay: '0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>
            建立了 <span style={{ fontFamily: font.mono, color: 'var(--osd-accent)' }}>edu-ui-repo-template</span> repo
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>請 Claude Code 讀這個 repo，自動安裝好基礎文件與 skill</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 36, lineHeight: 1.5, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: 38, lineHeight: 1.5 }}>之後每個新 repo 都有一致的起點</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 8: Closing ─────────────────────────────────────────────────────────
// Budget: centered flex, total ~360px → no overflow risk
const Closing: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 160px',
        textAlign: 'center',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        edu-ui-design-md
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 100, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 48px', animationDelay: '0.15s' }}
      >
        設計脈絡在，
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>AI 輸出才穩定。</span>
      </h2>
      <p className="fu" style={{ fontSize: 40, lineHeight: 1.6, color: c.textSoft, maxWidth: 1300, animationDelay: '0.3s' }}>
        從知識層結構到自動化機制，讓 AI 每次都有可靠的設計規則可以參考。
      </p>
    </div>
    <BackToFirstButton />
    <Footer />
  </div>
);

Closing.transition = {
  duration: 460,
  exit: { duration: 180, easing: EI, keyframes: [{ opacity: 1 }, { opacity: 0 }] },
  enter: { duration: 240, delay: 300, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: 'edu-ui-design-md 維護指南',
  createdAt: '2026-06-11T17:26:09.678Z',
};

export default [Cover, Why, GoogleSpec, DesignMdFormat, WhatIsIt, RepoSectionCover, Structure, AutoVsManual, HowToUpdate, MaintainIntro, Hooks, Changelog, Closing] satisfies Page[];
