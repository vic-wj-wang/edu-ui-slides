import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

// ─── Design system tokens ────────────────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#080d1c',
    text: '#e2e6f5',
    accent: '#7c6ef5',
  },
  fonts: {
    display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  typeScale: {
    hero: 136,
    body: 40,
  },
  radius: 14,
};

// ─── Local constants ─────────────────────────────────────────────────────────
const c = {
  surface: '#0e1428',
  muted: '#5a6080',
  textSoft: '#a8b0d0',
  border: 'rgba(124, 110, 245, 0.12)',
  borderBright: 'rgba(124, 110, 245, 0.28)',
  green: '#34d399',
  amber: '#fbbf24',
};

const font = {
  display: design.fonts.display,
  body: design.fonts.body,
  mono: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
};

const fill: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative',
};

// ─── Shared animation styles ──────────────────────────────────────────────────
const animCss = `
  @keyframes fu { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .fu { opacity: 0; animation: fu 0.65s cubic-bezier(0,0,0.2,1) forwards; }
`;
const Anim = () => <style>{animCss}</style>;

// ─── Grid background ──────────────────────────────────────────────────────────
const Grid = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'linear-gradient(rgba(124,110,245,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(124,110,245,0.045) 1px, transparent 1px)',
      backgroundSize: '80px 80px',
      maskImage: 'radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)',
    }}
  />
);

// ─── Page footer ──────────────────────────────────────────────────────────────
const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 56,
        left: 140,
        right: 140,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: font.mono,
        fontSize: 22,
        color: c.muted,
        letterSpacing: '0.05em',
      }}
    >
      <span>edu-ui-workflow</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

// ─── Transitions ──────────────────────────────────────────────────────────────
const EO = 'cubic-bezier(0,0,0.2,1)';
const EI = 'cubic-bezier(0.4,0,1,1)';

export const transition: SlideTransition = {
  duration: 200,
  exit: { duration: 140, easing: EI, keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }] },
  enter: { duration: 200, delay: 80, easing: EO, keyframes: [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

// ─── Page 1: Cover ───────────────────────────────────────────────────────────
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
        edu-ui-workflow
      </div>
      <h1
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 112, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.15s' }}
      >
        設計師的
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>開發工作流程</span>
      </h1>
      <p className="fu" style={{ fontSize: 38, lineHeight: 1.6, color: c.textSoft, maxWidth: 900, animationDelay: '0.3s' }}>
        VSCode、GitHub、repo 建立到模板使用，一次學完。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 2: Agenda ───────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~120 + 4 items × ~72px = ~464px → OK
const Agenda: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        今天的內容
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        四個步驟
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          { num: '01', label: 'VSCode 與 GitHub 環境設定' },
          { num: '02', label: '建立新的 GitHub Repo' },
          { num: '03', label: '套用 edu-ui-repo-template' },
          { num: '04', label: '維護 edu-ui-design-md' },
        ].map(({ num, label }, i) => (
          <div
            key={num}
            className="fu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              padding: '20px 32px',
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: 14,
              animationDelay: `${0.15 + i * 0.08}s`,
            }}
          >
            <span style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', minWidth: 36 }}>{num}</span>
            <span style={{ fontSize: 36, lineHeight: 1.4 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 3: VSCode & GitHub ──────────────────────────────────────────────────
const VscodeGithub: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        01 — 環境設定
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        VSCode 與 GitHub
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { step: '1', text: '安裝 VSCode 並登入 GitHub 帳號' },
          { step: '2', text: '安裝 GitHub Pull Requests 擴充套件' },
          { step: '3', text: '設定 Git 使用者名稱與 Email' },
          { step: '4', text: '用 VSCode 開啟專案資料夾' },
        ].map(({ step, text }, i) => (
          <div
            key={step}
            className="fu"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: `1.5px solid ${c.borderBright}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: font.mono,
                fontSize: 20,
                color: 'var(--osd-accent)',
              }}
            >
              {step}
            </span>
            <span style={{ fontSize: 38, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 4: 建立新 Repo ──────────────────────────────────────────────────────
const CreateRepo: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        02 — 建立 Repo
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        建立新的 GitHub Repo
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { step: '1', text: '前往 GitHub，點選 New repository' },
          { step: '2', text: '設定 repo 名稱與可見性（通常選 Private）' },
          { step: '3', text: '初始化時勾選 Add a README file' },
          { step: '4', text: '用 VSCode Clone 到本機' },
        ].map(({ step, text }, i) => (
          <div
            key={step}
            className="fu"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: `1.5px solid ${c.borderBright}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: font.mono,
                fontSize: 20,
                color: 'var(--osd-accent)',
              }}
            >
              {step}
            </span>
            <span style={{ fontSize: 38, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 5: edu-ui-repo-template ────────────────────────────────────────────
const RepoTemplate: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        03 — 套用模板
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        edu-ui-repo-template
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { step: '1', text: '前往 edu-ui-repo-template，點選 Use this template' },
          { step: '2', text: '將模板檔案複製到新 repo' },
          { step: '3', text: '確認目錄結構與基礎設定正確' },
          { step: '4', text: '推送（push）到 GitHub' },
        ].map(({ step, text }, i) => (
          <div
            key={step}
            className="fu"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: `1.5px solid ${c.borderBright}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: font.mono,
                fontSize: 20,
                color: 'var(--osd-accent)',
              }}
            >
              {step}
            </span>
            <span style={{ fontSize: 38, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 6: edu-ui-design-md ─────────────────────────────────────────────────
const DesignMd: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '120px 140px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        04 — 維護文件
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>
        edu-ui-design-md
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {[
          { step: '1', text: '打開 repo 內的 DESIGN.md' },
          { step: '2', text: '依照格式填寫元件、色票、字型規範' },
          { step: '3', text: '每次設計有更新就同步修改 DESIGN.md' },
          { step: '4', text: 'AI 工具讀取此文件，確保輸出符合設計系統' },
        ].map(({ step, text }, i) => (
          <div
            key={step}
            className="fu"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: `${0.15 + i * 0.08}s` }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: `1.5px solid ${c.borderBright}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: font.mono,
                fontSize: 20,
                color: 'var(--osd-accent)',
              }}
            >
              {step}
            </span>
            <span style={{ fontSize: 38, lineHeight: 1.5, paddingTop: 4 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 7: Closing ─────────────────────────────────────────────────────────
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
        edu-ui-workflow
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 100, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 48px', animationDelay: '0.15s' }}
      >
        從零開始，
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>一起建立工作流程。</span>
      </h2>
      <p className="fu" style={{ fontSize: 40, lineHeight: 1.6, color: c.textSoft, maxWidth: 1200, animationDelay: '0.3s' }}>
        有任何問題，隨時提出來討論。
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: '設計師的開發工作流程',
  createdAt: '2026-06-16T00:00:00.000Z',
};

export default [Cover, Agenda, VscodeGithub, CreateRepo, RepoTemplate, DesignMd, Closing] satisfies Page[];
