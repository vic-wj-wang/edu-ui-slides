import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { ImagePlaceholder } from '@open-slide/core';
import {
  lightDesign, lightC, LightGrid,
  baseFont, fill,
  Anim, EO, EI,
  Footer as BaseFooter, BackToFirstButton,
} from '../../src/design/base';

// ─── Design system tokens ────────────────────────────────────────────────────
export const design: DesignSystem = { ...lightDesign };

const c = { ...lightC };
const font = { ...baseFont };
const Footer = () => <BaseFooter label="vsds-flow-battle" />;

// ─── Transitions ─────────────────────────────────────────────────────────────
export const transition: SlideTransition = {
  duration: 200,
  exit: { duration: 140, easing: EI, keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }] },
  enter: { duration: 200, delay: 80, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─── Page 1: Opening ─────────────────────────────────────────────────────────
const Opening: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h1 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 112, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.15s' }}>
        一致性靠人維持，
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>靠不住。</span>
      </h1>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.6, color: c.textSoft, maxWidth: 900, animationDelay: '0.3s' }}>
        我今天想聊的，是我們怎麼讓系統自己守。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 2: Pain — Designer ─────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~120 + body ~76 + placeholder ~280 = ~532px ✓
const PainDesigner: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        01 / Pain
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 32px', animationDelay: '0.1s' }}>
        設計師花幾週調好一個元件
      </h2>
      <p className="fu" style={{ fontSize: 34, lineHeight: 1.6, color: c.textSoft, margin: '0 0 40px', animationDelay: '0.2s' }}>
        hover state、focus ring、鍵盤導覽。Figma 裡呈現不了，只能靠口頭說明傳遞。<br />
        handoff 之後，那些決策就消失了。
      </p>
      <div className="fu" style={{ animationDelay: '0.3s' }}>
        <ImagePlaceholder hint="Figma 設計稿 vs Production 截圖並排" height={240} style={{ width: '100%', borderRadius: 12 }} />
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 3: Pain — Engineer ─────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + body ~76 + 3 cards ~200 = ~440px ✓
const PainEngineer: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        01 / Pain
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 32px', animationDelay: '0.1s' }}>
        工程師那一側也一樣
      </h2>
      <p className="fu" style={{ fontSize: 34, lineHeight: 1.6, color: c.textSoft, margin: '0 0 40px', animationDelay: '0.2s' }}>
        幾個產品各自的 Button 元件——叫不同名字，props 不一樣，邏輯不一樣。
      </p>
      <div className="fu" style={{ display: 'flex', gap: 20, animationDelay: '0.3s' }}>
        {[
          { label: 'Product A', code: '<button class="btn-primary">' },
          { label: 'Product B', code: '<Button type="main" size="md">' },
          { label: 'Product C', code: '<PrimaryButton\n  variant="filled" />' },
        ].map(({ label, code }) => (
          <div key={label} style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 16, color: c.muted, marginBottom: 12 }}>{label}</div>
            <pre style={{ fontFamily: font.mono, fontSize: 18, color: c.textSoft, margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{code}</pre>
          </div>
        ))}
      </div>
      <div className="fu" style={{ marginTop: 28, padding: '18px 24px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.4s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginRight: 12 }}>{''}</span>
        <span style={{ fontSize: 26, color: c.textSoft, fontStyle: 'italic' }}>{''}</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 4: Reframe ─────────────────────────────────────────────────────────
const Reframe: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        02 / Reframe
      </div>
      <p className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 52, lineHeight: 1.4, color: c.textSoft, margin: '0 0 40px', animationDelay: '0.1s' }}>
        我們以為問題是沒有設計系統。
      </p>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', margin: 0, animationDelay: '0.25s' }}>
        真正的問題是——
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>設計系統能不能在沒有人守著的情況下，自己活著？</span>
      </h2>
    </div>
    <Footer />
  </div>
);

// ─── Page 5: Reframe — Claude Code + Figma MCP ───────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + two cols ~260 = ~424px ✓
const ReframeMCP: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        02 / Reframe
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        Claude Code + Figma MCP，AI 讀到的是什麼？
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 24, animationDelay: '0.25s' }}>
        <div style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 16, padding: '32px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginBottom: 20 }}>沒有 Code Connect</div>
          <div style={{ fontFamily: font.mono, fontSize: 20, color: c.textSoft, lineHeight: 1.7 }}>
            Dev Mode 給你 CSS<br />
            <span style={{ color: c.muted }}>color: #5c5cf0;<br />border-radius: 8px;<br />padding: 12px 20px;</span>
          </div>
          <div style={{ marginTop: 20, fontSize: 26, color: c.muted }}>還是要自己找到正確的 component。</div>
        </div>
        <div style={{ flex: 1, background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 16, padding: '32px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: 'var(--osd-accent)', marginBottom: 20 }}>有 Code Connect</div>
          <div style={{ fontFamily: font.mono, fontSize: 20, color: c.textSoft, lineHeight: 1.7 }}>
            直接給你可用的語言<br />
            <span style={{ color: 'var(--osd-accent)' }}>{`<Button variant="primary"\n  size="md" />`}</span>
          </div>
          <div style={{ marginTop: 20, fontSize: 26, color: c.textSoft }}>VSDS 不是要代替你的工作流。是讓 AI 的輸出，第一次就說同一種語言。</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 6: Solution — 三層共同語言 ─────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + 3 rows × ~88 = ~428px ✓
const SolutionLayers: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        03 / Solution
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        三層共同語言
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { delay: '0.2s', layer: '視覺外觀', tool: 'Figma Token', desc: '設計師與工程師命名對齊，不用翻譯' },
          { delay: '0.3s', layer: '互動體驗', tool: 'Storybook', desc: '活的元件，設計驗收不靠口頭說明' },
          { delay: '0.4s', layer: 'Code 對映', tool: 'Code Connect', desc: 'Dev Mode 直接給可用程式碼' },
        ].map(({ delay, layer, tool, desc }) => (
          <div key={tool} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 32, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: '20px 28px', animationDelay: delay }}>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, width: 120, flexShrink: 0 }}>{layer}</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', width: 180, flexShrink: 0 }}>{tool}</div>
            <div style={{ fontSize: 28, color: c.textSoft }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 7: Solution — AI 自動迭代 ──────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + flow ~140 + quote ~80 = ~384px ✓
const SolutionAI: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        03 / Solution
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        AI 自動迭代
      </h2>
      <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 40, animationDelay: '0.25s' }}>
        {[
          'Figma token 改',
          'AI 同步 CSS',
          '自動開 PR',
          'Designer 給 spec',
          'AI 產出 TypeScript + Storybook',
        ].map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ background: i % 2 === 0 ? `rgba(92,92,240,0.12)` : c.surface, border: `1px solid ${i % 2 === 0 ? c.borderBright : c.border}`, borderRadius: 10, padding: '14px 20px', fontSize: 22, color: i % 2 === 0 ? 'var(--osd-text)' : c.textSoft, whiteSpace: 'nowrap' }}>
              {step}
            </div>
            {i < 4 && <div style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', padding: '0 12px' }}>→</div>}
          </div>
        ))}
      </div>
      <div className="fu" style={{ padding: '18px 24px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.4s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginRight: 12 }}>{''}</span>
        <span style={{ fontSize: 26, color: c.textSoft, fontStyle: 'italic' }}>{''}</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 8: Proof ───────────────────────────────────────────────────────────
const Proof: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 140px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 40, animationDelay: '0.05s' }}>
        04 / Proof
      </div>
      <div className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 140, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', margin: '0 0 16px', animationDelay: '0.15s' }}>
        320 <span style={{ color: c.muted }}>→</span> <span style={{ color: 'var(--osd-accent)' }}>480</span>
      </div>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 28, color: c.muted, marginBottom: 48, animationDelay: '0.25s' }}>
        工作天
      </div>
      <p className="fu" style={{ fontSize: 34, lineHeight: 1.7, color: c.textSoft, maxWidth: 1100, animationDelay: '0.35s' }}>
        純人工從頭建立並維護整套系統。每次更新、每次新產品加入，這個數字重新計算不變——除非系統自己在迭代。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 9: Bridge to Demo ───────────────────────────────────────────────────
const BridgeToDemo: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        讓我們直接看。
      </h2>
      <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 16, animationDelay: '0.3s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)' }}>→</span>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>Demo by Yuri</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 10: Closing ────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 160px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 48px', animationDelay: '0.15s' }}>
        一致性靠人維持，靠不住。
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>VSDS 加 AI，讓系統自己守。</span>
      </h2>
      <p className="fu" style={{ fontSize: 36, lineHeight: 1.7, color: c.textSoft, maxWidth: 1200, animationDelay: '0.3s' }}>
        下次你在跑 Claude Code 或 Figma MCP，把 VSDS 加進你的 context。不是要改變你的工作方式——是讓它的輸出，第一次就說同一種語言。
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

// ═══════════════════════════════════════════════════════════════════════════════
// 版本二：5–7 分鐘簡報（以產品端採用為主軸）
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Page 11: 版本分隔 ───────────────────────────────────────────────────────
const V2Divider: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 140px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: '31px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ff00ea', marginBottom: 32, animationDelay: '0.05s' }}>
        第二版本
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 24px', animationDelay: '0.15s' }}>
        5–7 分鐘版
      </h2>
      <p className="fu" style={{ fontFamily: font.mono, fontSize: 22, color: c.muted, animationDelay: '0.3s' }}>
        主軸：Library ready 不等於 Adoption ready
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 12: Opening ────────────────────────────────────────────────────────
const V2Opening: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h1 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 100, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.15s' }}>
        VSDS ready<br />≠<br />Easy to Adopt
        
        <span style={{ color: c.muted }}>{''}</span>
        
        <span style={{ color: 'var(--osd-accent)' }}>{''}</span>
      </h1>
      <p className="fu" style={{ fontSize: 34, lineHeight: 1.7, color: c.textSoft, maxWidth: 1000, animationDelay: '0.3s' }}>
        VSDS Common Library 加上 AI Workflow，可以降低導入，並讓同步與維護形成閉環。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 13: 現況 ───────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + body ~90 + callout ~80 = ~334px ✓
const V2Status: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        01 / 現況
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 36px', animationDelay: '0.1s' }}>
        新專案容易用，既有產品不容易用
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 20, marginBottom: 36, animationDelay: '0.2s' }}>
        <div style={{ flex: 1, background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: 'var(--osd-accent)', marginBottom: 12 }}>新專案</div>
          <div style={{ fontSize: 28, color: c.textSoft, lineHeight: 1.7 }}>沒有歷史包袱，直接從 design-token、vsds-ui、vsds-icons 開始。</div>
        </div>
        <div style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginBottom: 12 }}>既有產品</div>
          <div style={{ fontSize: 28, color: c.textSoft, lineHeight: 1.7 }}>已有自己的 codebase、style、component 與歷史包袱，導入容易被視為遷移成本。</div>
        </div>
      </div>
      <div className="fu" style={{ padding: '18px 28px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, animationDelay: '0.35s' }}>
        <span style={{ fontSize: 28, color: 'var(--osd-text)', fontWeight: 600 }}>既有產品不是不能用，而是導入成本太高。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 14: 問題 — Figma-only SSOT ────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + table ~240 + callout ~70 = ~474px ✓
const V2Problem: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        02 / 問題
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        Figma 可以作為「設計意圖」的 SSOT<br />但不能取代產品實作的 SSOT
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 16, marginBottom: 28, animationDelay: '0.2s' }}>
        {[
          { col: 'Figma 能解決', items: ['設計意圖', '元件外觀', '主題規範', 'Icon 視覺'], accent: true },
          { col: '產品端仍要做', items: ['CSS / token mapping', 'component / props', 'product theme config', 'icon package、Storybook、A11y'], accent: false },
        ].map(({ col, items, accent }) => (
          <div key={col} style={{ flex: 1, background: accent ? `rgba(92,92,240,0.06)` : c.surface, border: `1px solid ${accent ? c.borderBright : c.border}`, borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: accent ? 'var(--osd-accent)' : c.muted, marginBottom: 16 }}>{col}</div>
            {items.map(item => (
              <div key={item} style={{ fontSize: 24, color: c.textSoft, lineHeight: 1.8, paddingLeft: 4 }}>· {item}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="fu" style={{ padding: '18px 28px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, animationDelay: '0.35s' }}>
        <span style={{ fontSize: 27, color: 'var(--osd-text)' }}>如果每個產品、每個平台都重新翻譯一次，就會形成重工，也會慢慢產生 drift。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 15: 解法 — Common Library = Web code-level SSOT ────────────────────
// Budget: eyebrow ~56 + h2 ~108 + 3 rows ~180 + body ~76 = ~420px ✓
const V2Solution: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        03 / 解法
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.1s' }}>Common Library 讓 Web 成為 code-level SSOT</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
        {[
          { delay: '0.2s', pkg: 'design-token', desc: 'token 實作來源，設計決策延伸到 codebase' },
          { delay: '0.3s', pkg: 'vsds-ui', desc: 'Web component 實作來源' },
          { delay: '0.4s', pkg: 'vsds-icons', desc: 'icon package 來源' },
        ].map(({ delay, pkg, desc }) => (
          <div key={pkg} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: '16px 24px', animationDelay: delay }}>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', width: 180, flexShrink: 0 }}>{pkg}</div>
            <div style={{ fontSize: 26, color: c.textSoft }}>{desc}</div>
          </div>
        ))}
      </div>
      <div className="fu" style={{ padding: '18px 28px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.5s' }}>
        <span style={{ fontSize: 27, color: 'var(--osd-text)', fontWeight: 600 }}>Common Library 把 VSDS 從設計語言，延伸成 Web 產品可以真正使用的工程資產。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 16: 導入策略 ────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + flow steps ~200 + callout ~70 = ~434px ✓
const V2Adoption: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        04 / 導入策略
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        不是一次遷移，而是分層接上
      </h2>
      <div className="fu" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36, animationDelay: '0.25s' }}>
        {[
          { step: '1', label: 'design-token', note: '低風險，直接對齊視覺層' },
          { step: '2', label: 'vsds-icons', note: '獨立替換，幾乎零衝突' },
          { step: '3', label: 'vsds-ui 高頻元件', note: '逐步替換，可並行驗證' },
          { step: '4', label: 'Storybook / CI / release workflow', note: '建立後續維護閉環' },
        ].map(({ step, label, note }) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 20, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: '14px 24px' }}>
            <div style={{ fontFamily: font.mono, fontSize: 16, color: c.muted, width: 24, flexShrink: 0 }}>{step}</div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', width: 320, flexShrink: 0 }}>{label}</div>
            <div style={{ fontSize: 24, color: c.muted }}>{note}</div>
          </div>
        ))}
      </div>
      <div className="fu" style={{ padding: '16px 24px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.5s' }}>
        <span style={{ fontSize: 26, color: 'var(--osd-text)' }}>從最低風險、最高共用性的 token 與 icon 開始，把導入成本降到最小。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 17: Workflow 角色 ───────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + 2-col table ~280 = ~444px ✓
const V2WorkflowRole: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        05 / AI Workflow
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        AI 不是替人決定，而是降低維護成本
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 20, animationDelay: '0.25s' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: 'var(--osd-accent)', marginBottom: 4 }}>AI / Workflow 負責</div>
          {['token sync', 'issue 觸發修正', '產出 PR', 'Storybook / test 草稿', '協助比對 drift'].map(item => (
            <div key={item} style={{ background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 8, padding: '12px 18px', fontSize: 24, color: c.textSoft }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginBottom: 4 }}>人負責</div>
          {['確認設計意圖', 'review 修正方向', 'merge 決策', '驗收品質', '決定接受或修正'].map(item => (
            <div key={item} style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 8, padding: '12px 18px', fontSize: 24, color: c.textSoft }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 18: Demo 交棒 ───────────────────────────────────────────────────────
const V2Demo: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        06 / Demo
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 48px', animationDelay: '0.1s' }}>直接看 Demo，驗證三件事</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {[
          { delay: '0.2s', num: '1', title: '產品端可以接上 Common Library', desc: 'design-token、vsds-ui、vsds-icons，而不是每個產品自己重做' },
          { delay: '0.3s', num: '2', title: '設計改 token 後能產出可 review 的更新', desc: 'product theme / token 改變後，進入 sync → PR → Storybook → CI → release' },
          { delay: '0.4s', num: '3', title: '產品端問題可以回流 VSDS', desc: '產品端 issue → AI 協助修正 → PR → Storybook / CI → release → 其他產品也受益' },
        ].map(({ delay, num, title, desc }) => (
          <div key={num} className="fu" style={{ display: 'flex', gap: 24, animationDelay: delay }}>
            <div style={{ fontFamily: font.mono, fontSize: 24, color: 'var(--osd-accent)', width: 32, flexShrink: 0, paddingTop: 4 }}>{num}</div>
            <div>
              <div style={{ fontSize: 28, color: 'var(--osd-text)', fontWeight: 600, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 24, color: c.muted, lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 19: Closing v2 ─────────────────────────────────────────────────────
const V2Closing: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 160px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.15s' }}>
        Common Library 是基礎<br />Agentic Workflow 才是這次要展示的能力邊界
        
        <span style={{ color: 'var(--osd-accent)' }}>{''}</span>
      </h2>
      <p className="fu" style={{ fontSize: 32, lineHeight: 1.8, color: c.textSoft, maxWidth: 1200, animationDelay: '0.3s' }}>
        它讓 VSDS 不只是新專案可用的元件庫，而是既有產品也能逐步接上、設計變更可以同步、產品問題可以回流、後續維護成本可以一直降的工作流。
      </p>
    </div>
    <BackToFirstButton />
    <Footer />
  </div>
);

V2Closing.transition = {
  duration: 460,
  exit: { duration: 180, easing: EI, keyframes: [{ opacity: 1 }, { opacity: 0 }] },
  enter: { duration: 240, delay: 300, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 版本三：合併版（V1 情感開場 + V2 產品端採用邏輯）
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Page 20: 版本分隔 ───────────────────────────────────────────────────────
const V3Divider: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 140px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: '37px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ff00d0', marginBottom: 32, animationDelay: '0.05s' }}>第二版本・合併版</div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 24px', animationDelay: '0.15s' }}>
        情感開場 + 採用邏輯
      </h2>
      <p className="fu" style={{ fontFamily: font.mono, fontSize: 22, color: c.muted, animationDelay: '0.3s' }}>
        V1 的情感鉤 × V2 的產品端論述
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 21: Opening ────────────────────────────────────────────────────────
const V3Opening: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h1 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 108, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.15s' }}>
        一致性只靠人維持，<span style={{ color: 'var(--osd-accent)' }}>靠不住<br /><span style={{ color: '#a2a7c3' }}>VSDS ready ≠ Easy to Adopt</span></span>
      </h1>
      <p className="fu" style={{ fontSize: 36, lineHeight: 1.7, color: c.textSoft, maxWidth: 1100, animationDelay: '0.3s' }}>
        VSDS Common Library 已經 ready<br />但 Library ready，不等於 Adoption ready<br />{''}<br />今天要說的是這中間的距離怎麼縮短
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 22: Pain（合併設計師 + 工程師）────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + 2 col ~220 + callout ~70 = ~454px ✓
const V3Pain: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        01 / 現況
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 36px', animationDelay: '0.1s' }}>
        設計決策在 handoff 後消失，工程端各自重做
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 20, marginBottom: 28, animationDelay: '0.2s' }}>
        <div style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 17, color: c.muted, marginBottom: 14 }}>設計端</div>
          <div style={{ fontSize: 26, color: c.textSoft, lineHeight: 1.7 }}>hover state、focus ring、鍵盤導覽——Figma 裡呈現不了，只能口頭傳遞。handoff 之後，決策就消失了。</div>
        </div>
        <div style={{ flex: 1, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 17, color: c.muted, marginBottom: 14 }}>工程端</div>
          <div style={{ fontSize: 26, color: c.textSoft, lineHeight: 1.7 }}>每個產品自己的 Button、自己的 token、自己的 icon。每次設計更新，每個產品重新翻譯一次。</div>
        </div>
      </div>
      <div className="fu" style={{ padding: '16px 24px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.35s' }}>
        <span style={{ fontSize: 26, color: 'var(--osd-text)', fontWeight: 600 }}>Figma 解決設計一致，但無法解決產品實作一致。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 23: 問題根源 ────────────────────────────────────────────────────────
const V3Problem: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '0 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        02 / 根源
      </div>
      <p className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 52, lineHeight: 1.4, color: c.textSoft, margin: '0 0 32px', animationDelay: '0.1s' }}>Figma 是設計決策的 SSOT，</p>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.2s' }}>
        <span style={{ color: 'var(--osd-accent)' }}>不是產品實作的 SSOT</span>
      </h2>
      <p className="fu" style={{ fontSize: 34, lineHeight: 1.7, color: c.textSoft, maxWidth: 1100, animationDelay: '0.35s' }}>
        CSS、Component 屬性、Product theme、Icon package<br />每個產品、每個平台都還是要自己翻譯一次。翻譯越多，落差越大
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 24: 解法 ────────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~108 + 3 rows ~160 + callout ~70 = ~394px ✓
const V3Solution: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        03 / 解法
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.1s' }}>讓 Common Library 成為跨平台的 code-level SSOT</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
        {[
          { delay: '0.2s', pkg: 'design-token', desc: '設計決策從 Figma 延伸到 codebase，不靠人工對齊' },
          { delay: '0.3s', pkg: 'vsds-ui', desc: 'Web component 實作共用，不靠各產品自己重做' },
          { delay: '0.4s', pkg: 'vsds-icons', desc: 'icon 一個來源，不再各自維護版本' },
        ].map(({ delay, pkg, desc }) => (
          <div key={pkg} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: '16px 24px', animationDelay: delay }}>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', width: 200, flexShrink: 0 }}>{pkg}</div>
            <div style={{ fontSize: 26, color: c.textSoft }}>{desc}</div>
          </div>
        ))}
      </div>
      <div className="fu" style={{ padding: '16px 24px', background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 10, animationDelay: '0.5s' }}>
        <span style={{ fontSize: 26, color: 'var(--osd-text)', fontWeight: 600 }}>既有產品不是不能用，而是導入成本太高。分層接上，把成本降到最小。</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 25: 導入策略 ────────────────────────────────────────────────────────
const V3Adoption: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        04 / 導入策略
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 48px', animationDelay: '0.1s' }}>
        不是 all or nothing，而是分層接上
      </h2>
      <div className="fu" style={{ display: 'flex', alignItems: 'stretch', gap: 0, animationDelay: '0.25s' }}>
        {[
          { step: '1', label: 'design-token', note: '低風險，直接對齊視覺層' },
          { step: '2', label: 'vsds-icons', note: '獨立替換，幾乎零衝突' },
          { step: '3', label: 'vsds-ui\n高頻元件', note: '逐步替換，可並行驗證' },
          { step: '4', label: 'CI / release\nworkflow', note: '建立後續維護閉環' },
        ].map(({ step, label, note }, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ background: i % 2 === 0 ? `rgba(92,92,240,0.08)` : c.surface, border: `1px solid ${i % 2 === 0 ? c.borderBright : c.border}`, borderRadius: 12, padding: '24px 20px', width: 240, textAlign: 'center' }}>
              <div style={{ fontFamily: font.mono, fontSize: 14, color: c.muted, marginBottom: 10 }}>Step {step}</div>
              <pre style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', margin: '0 0 12px', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>{label}</pre>
              <div style={{ fontSize: 20, color: c.muted, lineHeight: 1.5 }}>{note}</div>
            </div>
            {i < 3 && <div style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', padding: '0 12px', flexShrink: 0 }}>→</div>}
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 26: AI Workflow 角色 ────────────────────────────────────────────────
const V3WorkflowRole: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 22, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        05 / AI Workflow
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        AI 負責搬運修正，人負責決策 review
      </h2>
      <div className="fu" style={{ display: 'flex', gap: 20, animationDelay: '0.25s' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: 'var(--osd-accent)', marginBottom: 4 }}>AI / Workflow 自動做</div>
          {['token sync → CSS 更新', 'issue 觸發 → 產出 PR', 'Storybook / test 草稿', '比對產品端 drift'].map(item => (
            <div key={item} style={{ background: `rgba(92,92,240,0.06)`, border: `1px solid ${c.borderBright}`, borderRadius: 8, padding: '12px 20px', fontSize: 24, color: c.textSoft }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', color: c.muted, fontFamily: font.mono, fontSize: 20 }}>→</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: c.muted, marginBottom: 4 }}>人來確認</div>
          {['設計意圖正確', 'PR review 與 merge', 'Storybook preview 驗收', '接受或請 AI 再修'].map(item => (
            <div key={item} style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 8, padding: '12px 20px', fontSize: 24, color: c.textSoft }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 27: Demo 交棒 ───────────────────────────────────────────────────────
const V3Demo: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        讓我們直接看。
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { delay: '0.2s', num: '1', title: '產品端接上 Common Library' },
          { delay: '0.3s', num: '2', title: '設計改 token → 可 review 的 PR 自動產出' },
          { delay: '0.4s', num: '3', title: '產品端問題回流 VSDS，其他產品受益' },
        ].map(({ delay, num, title }) => (
          <div key={num} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: delay }}>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', width: 28, flexShrink: 0 }}>{num}</div>
            <div style={{ fontSize: 30, color: c.textSoft }}>{title}</div>
          </div>
        ))}
      </div>
      <div className="fu" style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 16, animationDelay: '0.5s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)' }}>→</span>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>Demo by Yuri</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 28: Closing v3 ─────────────────────────────────────────────────────
const V3Closing: Page = () => (
  <div style={fill}>
    <Anim />
    <LightGrid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 160px', textAlign: 'center' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 48, animationDelay: '0.05s' }}>
        VSDS Flow Battle
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 76, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.15s' }}>
        一致性靠人維持，靠不住<br />Common Library 是基礎，<br />Agentic Workflow 讓系統自己守
        
        <span style={{ color: 'var(--osd-accent)' }}>{''}</span>
      </h2>
      <p className="fu" style={{ fontSize: 30, lineHeight: 1.8, color: c.textSoft, maxWidth: 1200, animationDelay: '0.3s' }}>
        VSDS 不只是新專案可用的元件庫。既有產品可以逐步接上，設計變更可以同步，產品問題可以回流，後續維護成本可以一直降。
      </p>
    </div>
    <BackToFirstButton />
    <Footer />
  </div>
);

V3Closing.transition = {
  duration: 460,
  exit: { duration: 180, easing: EI, keyframes: [{ opacity: 1 }, { opacity: 0 }] },
  enter: { duration: 240, delay: 300, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: 'VSDS Flow Battle',
  createdAt: '2026-06-23T00:00:00.000Z',
};

export default [
  // 版本一（10 頁）
  V3Opening,
  // 版本三・合併版（9 頁）
  V2Status, V3Pain, V3Problem,
  V3Solution, V3Adoption, V3WorkflowRole,
  V2Demo, V3Closing,
] satisfies Page[];
