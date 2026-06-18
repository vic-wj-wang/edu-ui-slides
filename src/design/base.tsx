import type { DesignSystem } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import { useSearchParams } from 'react-router-dom';

// ─── Design system tokens ─────────────────────────────────────────────────────
export const baseDesign: DesignSystem = {
  palette: {
    bg: '#080d1c',
    text: '#e2e6f5',
    accent: '#5c5cf0',
  },
  fonts: {
    display: '"SF Pro Display", Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: '"SF Pro Text", Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  typeScale: {
    hero: 136,
    body: 40,
  },
  radius: 10,
};

// ─── Color aliases ────────────────────────────────────────────────────────────
export const baseC = {
  surface: '#0e1428',
  muted: '#5a6080',
  textSoft: '#a8b0d0',
  border: 'rgba(92, 92, 240, 0.12)',
  borderBright: 'rgba(92, 92, 240, 0.32)',
  green: '#34d399',
  amber: '#fbbf24',
};

// ─── Font aliases ─────────────────────────────────────────────────────────────
export const baseFont = {
  display: '"SF Pro Display", Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  body: '"SF Pro Text", Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  mono: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
};

// ─── Base layout style ────────────────────────────────────────────────────────
export const fill: React.CSSProperties = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative',
};

// ─── Animation ────────────────────────────────────────────────────────────────
export const animCss = `
  @keyframes fu { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .fu { opacity: 0; animation: fu 0.65s cubic-bezier(0,0,0.2,1) forwards; }
`;
export const Anim = () => <style>{animCss}</style>;

// ─── Grid background ──────────────────────────────────────────────────────────
export const Grid = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'linear-gradient(rgba(92,92,240,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(92,92,240,0.045) 1px, transparent 1px)',
      backgroundSize: '80px 80px',
      maskImage: 'radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)',
    }}
  />
);

// ─── Copy-link interceptor：點擊「複製連結」按鈕時同時另開視窗 ────────────────
if (typeof document !== 'undefined') {
  const LABELS = ['複製連結', 'Copy link', '复制链接', 'リンクをコピー'];
  document.addEventListener('click', (e: MouseEvent) => {
    const btn = (e.target as Element).closest('button[aria-label]');
    if (!btn || !LABELS.includes(btn.getAttribute('aria-label') ?? '')) return;
    // 等 React 的 onClick 完成後，改寫剪貼簿為第一頁 URL，並開新視窗
    setTimeout(async () => {
      const url = new URL(window.location.href);
      url.searchParams.delete('p');
      const firstPageUrl = url.href;
      try { await navigator.clipboard.writeText(firstPageUrl); } catch {}
      window.open(firstPageUrl, '_blank', 'noopener');
    }, 0);
  });
}

// ─── Footer (label 由各簡報傳入) ──────────────────────────────────────────────
export const Footer = ({ label }: { label: string }) => {
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
        fontFamily: baseFont.mono,
        fontSize: 22,
        color: baseC.muted,
        letterSpacing: '0.05em',
      }}
    >
      <span>{label}</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

// ─── Back to first page button ────────────────────────────────────────────────
export const BackToFirstButton = () => {
  const [, setSearchParams] = useSearchParams();
  return (
    <button
      type="button"
      onClick={() => setSearchParams({ p: '1' })}
      style={{
        position: 'absolute',
        top: 48,
        right: 140,
        fontFamily: baseFont.mono,
        fontSize: 18,
        color: baseC.muted,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 0',
        letterSpacing: '0.05em',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = baseC.textSoft; }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = baseC.muted; }}
    >
      ⬅︎ 回到首頁
    </button>
  );
};

// ─── Easing constants ─────────────────────────────────────────────────────────
export const EO = 'cubic-bezier(0,0,0.2,1)';
export const EI = 'cubic-bezier(0.4,0,1,1)';
