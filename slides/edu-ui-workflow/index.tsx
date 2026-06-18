import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useState } from 'react';
import {
  baseDesign, baseC, baseFont, fill,
  Anim, Grid, EO, EI,
  Footer as BaseFooter, BackToFirstButton,
} from '../../src/design/base';

export const notes: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  `https://github.com/
edu-ui-test`,
  `我們現在要做的是把剛剛在 Github 上新增的 Repo 抓下來
怎麼抓？`,
  "viewsonic-edu.github.io/edu-fe-tutorial/git",
  "步驟一的目的是要讓專案都維持在同一個資料夾裡",
  undefined,
  undefined,
  "可以分這三個面向",
  `在經過開發 Repo 後，有整理出比較適合我們的專案資料夾結構
● AI 看得懂你的專案：了解專案 README.md、開發時有哪些自動化規則 CLAUDE.md
● 決策有記錄可查：CHANGELOG.md
● 團隊有共同起點：
- 必要：docs/ 不會更動的可參考文件、skills/ 手動喚起可重複執行的工作流，如 Git commit
- 非必要：references/、data/、report/`,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "讀取 edu-ui-repo-template，安裝範本",
  undefined,
  `貼群組：
為 myViewBoard 新版登入頁做 Design Review，整理設計決策與修改建議
建立 ViewSonic 品牌 Button、Icon 的使用規則與視覺狀態，供 UI Team 對齊
比較 Miro、Jamboard、FigJam 的協作白板 UX，作為 myViewBoard 改版參考`,
  `前面的情境一段話，加「幫我寫 README.md」

● 確認大家都有成功`,
  `更新 CHANGELOG.md
更新紀錄文件

● 確認大家都有成功`,
];


// ─── Design system tokens ────────────────────────────────────────────────────
export const design: DesignSystem = { ...baseDesign };

// ─── Local constants ─────────────────────────────────────────────────────────
const c = { ...baseC };
const font = { ...baseFont };
const Footer = () => <BaseFooter label="edu-ui-workflow" />;

// ─── Transitions ──────────────────────────────────────────────────────────────

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
      <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 56, animationDelay: '0.42s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>Vic Wang</span>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: c.muted, flexShrink: 0 }} />
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.muted }}>June 17, 2026</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 2: Agenda ───────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~120 + 3 items × ~90px + gaps = ~486px → OK
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
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 56px', animationDelay: '0.1s' }}>Agenda</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {[
          { num: 'Part 1', label: '事前準備 Check', sub: '行前準備清單' },
          { num: 'Part 2', label: '創立新專案', sub: '從零建立一個 repo' },
          { num: 'Part 3', label: '實戰演練', sub: 'README、CHANGELOG、skills/ 完整體驗' },
        ].map(({ num, label, sub }, i) => (
          <div
            key={num}
            className="fu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              padding: '24px 32px',
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: 14,
              animationDelay: `${0.15 + i * 0.08}s`,
            }}
          >
            <span style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', minWidth: 64, flexShrink: 0 }}>{num}</span>
            <div>
              <div style={{ fontSize: 36, lineHeight: 1.3 }}>{label}</div>
              <div style={{ fontSize: 24, color: c.muted, marginTop: 4 }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Part 1 Section Cover ─────────────────────────────────────────────────────
const Part1Cover: Page = () => (
  <div style={fill}>
    <Anim />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(124,110,245,0.18) 0%, rgba(8,13,28,0) 65%)',
      }}
    />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 140px',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 40, animationDelay: '0.05s' }}>
        Part 1
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 104, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.035em', margin: '0 0 40px', animationDelay: '0.15s' }}
      >
        事前準備
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>Check</span>
      </h2>
      <p className="fu" style={{ fontSize: 34, color: c.textSoft, lineHeight: 1.6, maxWidth: 860, animationDelay: '0.28s' }}>
        正式開始前，確認每個人都準備好了
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Page 3: Part 1 Checklist ────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~120 + 3 cards (~137+173+98) + gaps 40 = ~624px → OK
const Part1Checklist: Page = () => (
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
        Part 1 — 行前準備
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px', animationDelay: '0.1s' }}>事前準備 Check</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.15s' }}>
          <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${c.borderBright}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', marginTop: 2 }}>1</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.4 }}>安裝 VS Code</div>
            <div style={{ fontSize: 26, color: c.textSoft, marginTop: 6 }}>透過 Self Service 搜尋 Microsoft Visual Studio Code</div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.23s' }}>
          <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${c.borderBright}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', marginTop: 2 }}>2</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.4 }}>登入 GitHub 帳號，並修改 Username</div>
            <div style={{ fontSize: 26, color: c.textSoft, marginTop: 6 }}>
              格式：<span style={{ fontFamily: font.mono, color: 'var(--osd-accent)', fontSize: 24 }}>{'vs-{firstname}-{lastname}'}</span>
            </div>
            <div style={{ fontSize: 22, color: c.muted, marginTop: 8, fontFamily: font.mono }}>
              右上角頭像 → Profile → 左側 Edit profile
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.31s' }}>
          <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${c.borderBright}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', marginTop: 2 }}>3</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.4 }}>登入 Claude 帳號</div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.39s' }}>
          <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${c.borderBright}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', marginTop: 2 }}>4</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.4 }}>安裝 GitHub Desktop</div>
            <div style={{ fontSize: 26, color: c.textSoft, marginTop: 6, fontFamily: font.mono }}>desktop.github.com</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page 4: GitHub Username Checklist ───────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~128 + 3 rows × 68px + 2 gaps × 16px = ~460px → OK
const MEMBERS = [
  { name: 'Hsuan', username: 'vs-hsuan-lee' },
  { name: 'Karon', username: 'vs-karon-lu' },
  { name: 'Lulu',  username: 'vs-lulu-chang' },
  { name: 'Vic',   username: 'vs-vic-wang' },
  { name: 'Walt',  username: 'vs-walt-huang' },
  { name: 'Golden', username: 'vs-golden-tseng' },
];

const GitHubChecklist: Page = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div style={fill}>
      <Anim />
      <Grid />
      <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32 }}>
          Part 1 — GitHub Username
        </div>
        <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Github Username 確認清單</h2>
        <p style={{ fontSize: 28, color: c.muted, margin: '0 0 48px', fontFamily: font.mono }}>
          完成後點選打勾
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {MEMBERS.map(({ name, username }) => {
            const done = checked.has(name);
            return (
              <div
                key={name}
                onClick={() => toggle(name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '18px 28px',
                  background: done ? 'rgba(52,211,153,0.07)' : c.surface,
                  border: `1px solid ${done ? 'rgba(52,211,153,0.3)' : c.border}`,
                  borderRadius: 14,
                  cursor: 'pointer',
                  transition: 'background 0.2s, border-color 0.2s',
                  userSelect: 'none',
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  border: `2px solid ${done ? c.green : c.muted}`,
                  background: done ? c.green : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  color: '#080d1c',
                  fontWeight: 700,
                  transition: 'all 0.2s',
                }}>
                  {done ? '✓' : ''}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{
                    fontSize: 30,
                    color: done ? c.muted : 'var(--osd-text)',
                    textDecoration: done ? 'line-through' : 'none',
                    transition: 'color 0.2s',
                    lineHeight: 1.2,
                  }}>
                    {name}
                  </span>
                  <span style={{
                    fontFamily: font.mono,
                    fontSize: 20,
                    color: done ? c.muted : c.textSoft,
                    transition: 'color 0.2s',
                  }}>
                    {username}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── Part 2 Section Cover ─────────────────────────────────────────────────────
const Part2Cover: Page = () => (
  <div style={fill}>
    <Anim />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(124,110,245,0.18) 0%, rgba(8,13,28,0) 65%)',
      }}
    />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 140px',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 40, animationDelay: '0.05s' }}>
        Part 2
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 104, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.035em', margin: '0 0 48px', animationDelay: '0.15s' }}
      >
        創立
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>新專案</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { label: '基礎設定',              items: 'GitHub Desktop、新 Repo、Git 概念、VS Code、Clone' },
          { label: '開發專案前',             items: '為什麼需要規則、資料夾規範' },
          { label: 'edu-ui-repo-template', items: 'Template 介紹、跨專案 References、Clone 練習' },
        ].map(({ label, items }, i) => (
          <div key={label} className="fu" style={{ display: 'flex', alignItems: 'baseline', gap: 20, animationDelay: `${0.28 + i * 0.08}s` }}>
            <span style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', flexShrink: 0, minWidth: 220 }}>{label}</span>
            <span style={{ fontSize: 26, color: c.muted, lineHeight: 1.5 }}>{items}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Shared step badge style ──────────────────────────────────────────────────
const badge: React.CSSProperties = {
  flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
  border: `1.5px solid rgba(124, 110, 245, 0.28)`,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
  fontSize: 18, color: 'var(--osd-accent)',
};
const eyebrowStyle: React.CSSProperties = {
  fontFamily: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
  fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase',
  color: 'var(--osd-accent)', marginBottom: 32,
};
const h2Style: React.CSSProperties = {
  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 48px',
};

// ─── GitHubDesktop ────────────────────────────────────────────────────────────
const GitHubDesktop: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>設定 GitHub Desktop</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>開啟 GitHub Desktop，點選 Sign in to GitHub.com</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>在瀏覽器授權後，回到 GitHub Desktop</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.5 }}>完成，Git 環境已就緒</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080', marginTop: 6 }}>不需要 Terminal，所有操作都有視覺介面</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── CreateRepo ───────────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~128 + format card ~80 + 4 steps × 56 + 3 gaps × 20 = ~548px → OK
const CreateRepo: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>建立新的 GitHub Repo</h2>
      <div className="fu" style={{ padding: '16px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 12, marginBottom: 28, animationDelay: '0.14s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080' }}>命名規範　</span>
        <span style={{ fontFamily: font.mono, fontSize: 26, color: 'var(--osd-accent)' }}>edu-{'{team name}'}-{'{project name}'}</span>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080' }}>　範例：</span>
        <span style={{ fontFamily: font.mono, fontSize: 26, color: '#e2e6f5' }}>edu-ui-test</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          'GitHub 右上角 + → New repository',
          '填入名稱（依命名規範），設定為 Private',
          '點選 Create repository',
        ].map((text, i) => (
          <div key={i} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: `${0.18 + i * 0.07}s` }}>
            <span style={badge}>{i + 1}</span>
            <span style={{ fontSize: 34, lineHeight: 1.5 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── GitConcepts ──────────────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~128 + 3 rows × 88px + 2 gaps × 16px + link ~60px = ~564px → OK
const GIT_TERMS = [
  { term: 'Clone',  desc: '把遠端 repo 複製到本機' },
  { term: 'Branch', desc: '獨立的開發分支，不影響主線' },
  { term: 'Commit', desc: '記錄一次變更' },
  { term: 'Push',   desc: '把本機變更上傳到 GitHub' },
  { term: 'Pull',   desc: '把 GitHub 最新版本下載到本機' },
  { term: 'PR',     desc: 'Pull Request，請求合併分支' },
];

const GitConcepts: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>Git 基本概念</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        {GIT_TERMS.map(({ term, desc }, i) => (
          <div key={term} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.12)`, borderRadius: 12, animationDelay: `${0.14 + i * 0.06}s`, backgroundColor: '#0e1428' }}>
            <span style={{ fontFamily: font.mono, fontSize: 26, color: 'var(--osd-accent)', minWidth: 80 }}>{term}</span>
            <span style={{ fontSize: 26, color: '#a8b0d0', lineHeight: 1.4 }}>{desc}</span>
          </div>
        ))}
      </div>
      <div className="fu" style={{ animationDelay: '0.52s' }}>
        <a href="https://viewsonic-edu.github.io/edu-fe-tutorial/git" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: font.mono, fontSize: 22, color: '#5a6080', textDecoration: 'none' }}>
          <span style={{ color: 'var(--osd-accent)' }}>↗</span>
          詳細說明：viewsonic-edu.github.io/edu-fe-tutorial/git
        </a>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── VsCodeIntro ──────────────────────────────────────────────────────────────
const VsCodeIntro: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>VS Code 介紹</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { label: '編輯器', desc: '撰寫、瀏覽、修改任何格式的檔案，包含 Markdown、JSON、程式碼' },
          { label: '整合 Git', desc: '直接在編輯器內 commit、push，不用記指令' },
          { label: '擴充套件', desc: '安裝 Claude Code 等 Plugin，大幅擴充工作能力' },
        ].map(({ label, desc }, i) => (
          <div key={label} className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.12)`, borderRadius: 14, animationDelay: `${0.15 + i * 0.08}s` }}>
            <span style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', minWidth: 80, paddingTop: 4 }}>{label}</span>
            <span style={{ fontSize: 34, lineHeight: 1.5, color: '#a8b0d0' }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── VsCodeSetup ──────────────────────────────────────────────────────────────
const VsCodeSetup: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>VS Code 設定</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>左側 Extensions → 搜尋 <span style={{ fontFamily: font.mono, color: 'var(--osd-accent)', fontSize: 32 }}>Claude Code</span> → 安裝</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>登入 Claude 帳號</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>左下角頭像 → Sign in with GitHub → 連結帳號</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── CloneRepo ────────────────────────────────────────────────────────────────
const CloneRepo: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 基礎設定</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>Clone 到本機</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>在桌面新增名稱為 <span style={{ fontFamily: font.mono, color: 'var(--osd-accent)' }}>Github</span> 的資料夾</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.22s' }}>
          <span style={badge}>2</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>在 GitHub 找到 edu-ui-test，點選 Code → Open with GitHub Desktop</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.29s' }}>
          <span style={badge}>3</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>GitHub Desktop 自動開啟，確認 Local Path</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.36s' }}>
          <span style={badge}>4</span>
          <div>
            <div style={{ fontSize: 36, lineHeight: 1.5 }}>將路徑改到剛才建立的 Github/ 資料夾</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080', marginTop: 6 }}>保持所有 repo 在同一個地方，方便管理</div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.43s' }}>
          <span style={badge}>5</span>
          <span style={{ fontSize: 36, lineHeight: 1.5 }}>點選 Clone，再用 VS Code 開啟資料夾</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── ScenarioPick ─────────────────────────────────────────────────────────────
const SCENARIOS = [
  { num: '01', label: 'Design Review', desc: '為 myViewBoard 新版登入頁做 Design Review，整理設計決策與修改建議' },
  { num: '02', label: '元件規範文件', desc: '建立 ViewSonic 品牌 Button、Icon 的使用規則與視覺狀態，供 UI Team 對齊' },
  { num: '03', label: '競品分析',     desc: '比較 Miro、Jamboard、FigJam 的協作白板 UX，作為 myViewBoard 改版參考' },
];

const ScenarioPick: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 3 — 實戰演練</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>選一個情境開始</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {SCENARIOS.map(({ num, label, desc }, i) => (
          <div key={num} className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: `${0.15 + i * 0.08}s` }}>
            <span style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', flexShrink: 0, minWidth: 36, paddingTop: 4 }}>{num}</span>
            <div>
              <div style={{ fontSize: 32, lineHeight: 1.3, marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 26, color: c.textSoft, lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── WhyRules ─────────────────────────────────────────────────────────────────
const WhyRules: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 開發專案前</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>開發專案前，<br />我們先討論為什麼需要 Repo 的規則？</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { label: 'AI 看得懂你的專案', desc: '結構一致的專案讓 Claude Code 能更準確地理解需求、給出正確回應' },
          { label: '團隊有共同起點',    desc: '每個人開一個新專案，結構都一樣，溝通成本大幅降低' },
          { label: '決策有紀錄可查',    desc: 'CHANGELOG.md 記錄每次調整，未來回頭看看一目瞭然' },
        ].map(({ label, desc }, i) => (
          <div key={label} className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.12)`, borderRadius: 14, animationDelay: `${0.15 + i * 0.08}s` }}>
            <span style={{ color: 'var(--osd-accent)', fontSize: 32, flexShrink: 0, paddingTop: 4 }}>→</span>
            <div>
              <div style={{ fontSize: 34, lineHeight: 1.3, marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 26, color: '#a8b0d0', lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Page: 專案資料夾規範 ─────────────────────────────────────────────────────
// Budget: eyebrow ~56 + h2 ~120 + root label ~42 + 8 items × ~46px = ~586px → OK
const STRUCTURE = [
  { name: 'README.md',    desc: '專案介紹',             isDir: false },
  { name: 'CLAUDE.md',   desc: '自動化流程設定',         isDir: false },
  { name: 'CHANGELOG.md',desc: '調整紀錄',              isDir: false },
  { name: 'docs/',       desc: '說明文件、規格',          isDir: true  },
  { name: 'skills/',     desc: '可重複執行工作流程',       isDir: true  },
  { name: 'references/', desc: '參考資料',              isDir: true  },
  { name: 'data/',       desc: '資料來源',              isDir: true  },
  { name: 'report/',     desc: '最終輸出結果',            isDir: true  },
];

const FolderStructure: Page = () => (
  <div style={fill}>
    <Anim />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 32, animationDelay: '0.05s' }}>
        Part 2 — 開發專案前
      </div>
      <h2 className="fu" style={{ fontFamily: 'var(--osd-font-display)', fontSize: 80, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 40px', animationDelay: '0.1s' }}>
        專案資料夾規範
      </h2>
      <div style={{ fontFamily: font.mono }}>
        <div className="fu" style={{ fontSize: 26, color: c.textSoft, marginBottom: 12, animationDelay: '0.14s' }}>
          edu-ui-test/
        </div>
        {STRUCTURE.map(({ name, desc, isDir }, i) => (
          <div
            key={name}
            className="fu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '10px 0',
              borderBottom: `1px solid ${c.border}`,
              animationDelay: `${0.18 + i * 0.05}s`,
            }}
          >
            <span style={{ color: c.muted, fontSize: 22, flexShrink: 0, width: 40, textAlign: 'right' }}>
              {i === STRUCTURE.length - 1 ? '└──' : '├──'}
            </span>
            <span style={{ fontSize: 26, color: isDir ? 'var(--osd-accent)' : 'var(--osd-text)', minWidth: 220 }}>
              {name}
            </span>
            <span style={{ fontSize: 22, color: c.muted }}>
              {desc}
            </span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── TemplateBridge ───────────────────────────────────────────────────────────
const TemplateBridge: Page = () => (
  <div style={fill}>
    <Anim />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(124,110,245,0.12) 0%, rgba(8,13,28,0) 65%)' }} />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 140px' }}>
      <p
        className="fu"
        style={{ fontSize: 44, lineHeight: 1.6, color: c.textSoft, margin: '0 0 56px', maxWidth: 1100, animationDelay: '0.05s' }}
      >
        如果每次建立一個新 repo<br />都要手動設定這些，有點惱人
      </p>
      <div className="fu" style={{ width: 64, height: 2, background: c.borderBright, marginBottom: 56, animationDelay: '0.2s' }} />
      <p
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0, animationDelay: '0.3s' }}
      >
        我建了一個給 UI Team 專用的 Repo
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>edu-ui-repo-template</span>
      </p>
    </div>
    <Footer />
  </div>
);

// ─── EduUiTemplate ────────────────────────────────────────────────────────────
const EduUiTemplate: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 滿足專案規範</div>
      <h2 className="fu" style={{ ...h2Style, marginBottom: 16, animationDelay: '0.1s' }}>edu-ui-repo-template 是什麼？</h2>
      <p className="fu" style={{ fontSize: 30, color: '#a8b0d0', margin: '0 0 36px', lineHeight: 1.5, animationDelay: '0.14s' }}>
        一個已符合規範的起點，Clone 下來就能直接開始工作。
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { name: 'README.md',    desc: '專案介紹' },
          { name: 'CLAUDE.md',   desc: '自動化流程設定' },
          { name: 'CHANGELOG.md',desc: '調整紀錄' },
          { name: 'skills/',     desc: '可重複執行工作流程（含 git-branch、git-commit、setup、sync 等）' },
        ].map(({ name, desc }, i) => (
          <div key={name} className="fu" style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '20px 32px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.12)`, borderRadius: 14, animationDelay: `${0.18 + i * 0.07}s` }}>
            <span style={{ fontFamily: font.mono, fontSize: 26, color: name.endsWith('/') ? 'var(--osd-accent)' : '#e2e6f5', minWidth: 200, flexShrink: 0 }}>{name}</span>
            <span style={{ fontSize: 28, color: '#a8b0d0', lineHeight: 1.4 }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// ─── TemplateUsageBridge ──────────────────────────────────────────────────────
const TemplateUsageBridge: Page = () => (
  <div style={fill}>
    <Anim />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(124,110,245,0.12) 0%, rgba(8,13,28,0) 65%)' }} />
    <Grid />
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 140px' }}>
      <p
        className="fu"
        style={{ fontSize: 44, lineHeight: 1.6, color: c.textSoft, margin: '0 0 56px', maxWidth: 1100, animationDelay: '0.05s' }}
      >
        現在桌面的 Github/ 資料夾內，有兩個專案。<br />我主要在 <span style={{ fontWeight: '700', color: '#fff71a' }}>edu-ui-test</span> 做開發。
      </p>
      <div className="fu" style={{ width: 64, height: 2, background: c.borderBright, marginBottom: 56, animationDelay: '0.2s' }} />
      <p
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0, animationDelay: '0.3s' }}
      >
        要怎麼使用
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>edu-ui-repo-template</span> 裡面的東西？
      </p>
    </div>
    <Footer />
  </div>
);

// ─── ClaudeCodeRef ────────────────────────────────────────────────────────────
const ClaudeCodeRef: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 使用 edu-ui-repo-template</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>Claude Code 可以跨專案讀取 Repo</h2>
      <p className="fu" style={{ fontSize: 30, color: '#a8b0d0', margin: '0 0 36px', lineHeight: 1.6, animationDelay: '0.14s' }}>
        設定好之後，Claude Code 可以跨資料夾讀取參考資料。<br />不需要把別的專案檔案複製進來，保持兩個專案都乾淨。
      </p>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 26, padding: '28px 36px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 14, lineHeight: 1.9, animationDelay: '0.22s' }}>
        <div style={{ color: '#a8b0d0' }}>Github/</div>
        <div style={{ paddingLeft: 32 }}>
          <span style={{ color: '#5a6080' }}>├── </span>
          <span style={{ color: '#e2e6f5' }}>edu-ui-test/</span>
          <span style={{ color: '#5a6080', fontSize: 20 }}>　　← 正在開發</span>
        </div>
        <div style={{ paddingLeft: 32 }}>
          <span style={{ color: '#5a6080' }}>└── </span>
          <span style={{ color: 'var(--osd-accent)' }}>edu-ui-repo-template/</span>
          <span style={{ color: '#5a6080', fontSize: 20 }}>　← References</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── CloneTemplate ────────────────────────────────────────────────────────────
const CloneTemplate: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 使用 edu-ui-repo-template</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>Clone edu-ui-repo-template</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5 }}>將大家加到協作者名單中，前往 GitHub Repo → Settings → Collaborators & teams → Add people</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080', marginTop: 6 }}>將所有成員加入後再繼續</div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5, marginBottom: 8 }}>GitHub Desktop → File → Clone Repository → URL</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: 'var(--osd-accent)', padding: '10px 20px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8 }}>
              github.com/vic-wj-wang/edu-ui-repo-template.git
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5 }}>存放位置選 Github/ 資料夾</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: '#5a6080', marginTop: 6 }}>資料夾名稱保留 edu-ui-repo-template 不用改</div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: '0.39s' }}>
          <span style={badge}>4</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>點選 Clone，完成</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── InstallTemplate ──────────────────────────────────────────────────────────
const InstallTemplate: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 2 — 使用 edu-ui-repo-template</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>安裝範本到新專案</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>在 VS Code 中開啟 edu-ui-test 資料夾</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5, marginBottom: 12 }}>開啟 Claude Code，輸入以下指令</div>
            <div style={{ fontFamily: font.mono, fontSize: 26, color: 'var(--osd-accent)', padding: '14px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8 }}>
              讀取 edu-ui-repo-template，安裝範本
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5 }}>Claude 顯示 README 後，確認安裝</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: c.muted, marginTop: 6 }}>完成後，基礎檔案會自動建立在 edu-ui-test 裡</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Part 3 Section Cover ─────────────────────────────────────────────────────
const Part3Cover: Page = () => (
  <div style={fill}>
    <Anim />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(124,110,245,0.18) 0%, rgba(8,13,28,0) 65%)',
      }}
    />
    <Grid />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 140px',
      }}
    >
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--osd-accent)', marginBottom: 40, animationDelay: '0.05s' }}>
        Part 3
      </div>
      <h2
        className="fu"
        style={{ fontFamily: 'var(--osd-font-display)', fontSize: 104, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.035em', margin: '0 0 40px', animationDelay: '0.15s' }}
      >
        實戰演練
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>用自己的情境試一次</span>
      </h2>
      <p className="fu" style={{ fontSize: 34, color: c.textSoft, lineHeight: 1.6, maxWidth: 860, animationDelay: '0.28s' }}>
        README、CHANGELOG、skills/ 完整走一遍
      </p>
    </div>
    <Footer />
  </div>
);

// ─── Step1Readme ──────────────────────────────────────────────────────────────
const Step1Readme: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 3 — Step 1</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>用寫 README.md 練習</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>在 edu-ui-test 開啟 Claude Code</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5, marginBottom: 12 }}>輸入你選的情境，加上這句話</div>
            <div style={{ fontFamily: font.mono, fontSize: 24, color: 'var(--osd-accent)', padding: '14px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8, lineHeight: 1.6 }}>
              這是一個 [你的情境]，幫我寫 README.md
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>確認內容後儲存，完成</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Step2Changelog ───────────────────────────────────────────────────────────
const Step2Changelog: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 3 — Step 2</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>更新 CHANGELOG.md</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5, marginBottom: 12 }}>告訴 Claude Code 你今天做了什麼</div>
            <div style={{ fontFamily: font.mono, fontSize: 24, color: 'var(--osd-accent)', padding: '14px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8, lineHeight: 1.6 }}>
              今天建立了這個專案，更新 CHANGELOG.md
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>Claude 會自動補上日期與格式，確認後儲存</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Step3Commit ──────────────────────────────────────────────────────────────
const Step3Commit: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 3 — Step 3</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>用 skills 完成 Commit</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.15s' }}>
          <span style={badge}>1</span>
          <div>
            <div style={{ fontSize: 34, lineHeight: 1.5, marginBottom: 12 }}>輸入以下指令</div>
            <div style={{ fontFamily: font.mono, fontSize: 24, color: 'var(--osd-accent)', padding: '14px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8 }}>
              執行 git commit
            </div>
          </div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.23s' }}>
          <span style={badge}>2</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>Claude 讀取 skills/git-commit.md，產生符合格式的 commit message</span>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, animationDelay: '0.31s' }}>
          <span style={badge}>3</span>
          <span style={{ fontSize: 34, lineHeight: 1.5 }}>確認後完成，這次的修改正式記錄到 Git</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── Step4Push ────────────────────────────────────────────────────────────────
const Step4Push: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>Part 3 — Step 4</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>Push 到 GitHub</h2>
      <p className="fu" style={{ fontSize: 30, color: c.textSoft, margin: '0 0 40px', lineHeight: 1.6, animationDelay: '0.14s' }}>
        Commit 目前只在你的本機。有這兩種情況，才需要 Push：
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.2s' }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 28, flexShrink: 0, paddingTop: 4 }}>→</span>
          <div style={{ fontSize: 32, lineHeight: 1.4 }}>讓其他人協作，需要大家都看到最新版本</div>
        </div>
        <div className="fu" style={{ display: 'flex', alignItems: 'flex-start', gap: 28, padding: '24px 32px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14, animationDelay: '0.28s' }}>
          <span style={{ color: 'var(--osd-accent)', fontSize: 28, flexShrink: 0, paddingTop: 4 }}>→</span>
          <div style={{ fontSize: 32, lineHeight: 1.4 }}>今晚要回家加班，換一台電腦繼續工作 🤢</div>
        </div>
      </div>
      <div className="fu" style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 20, padding: '20px 28px', background: 'rgba(124,110,245,0.06)', border: `1px solid ${c.borderBright}`, borderRadius: 14, animationDelay: '0.36s' }}>
        <span style={{ fontFamily: font.mono, fontSize: 22, color: c.textSoft }}>操作：</span>
        <span style={{ fontSize: 30 }}>開啟 GitHub Desktop → 點選 Push origin</span>
      </div>
    </div>
    <Footer />
  </div>
);

// ─── BonusSync ────────────────────────────────────────────────────────────────
const BonusSync: Page = () => (
  <div style={fill}>
    <Anim /><Grid />
    <div style={{ position: 'absolute', inset: 0, padding: '120px 140px', display: 'flex', flexDirection: 'column' }}>
      <div className="fu" style={{ ...eyebrowStyle, animationDelay: '0.05s' }}>加碼</div>
      <h2 className="fu" style={{ ...h2Style, animationDelay: '0.1s' }}>範本有更新怎麼辦？</h2>
      <p className="fu" style={{ fontSize: 30, color: c.textSoft, margin: '0 0 28px', lineHeight: 1.6, animationDelay: '0.14s' }}>
        在 edu-ui-test 開啟 Claude Code，輸入：
      </p>
      <div className="fu" style={{ fontFamily: font.mono, fontSize: 26, color: 'var(--osd-accent)', padding: '14px 24px', background: '#0e1428', border: `1px solid rgba(124, 110, 245, 0.28)`, borderRadius: 8, marginBottom: 32, animationDelay: '0.2s' }}>
        同步範本更新
      </div>
      <div className="fu" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, animationDelay: '0.28s' }}>
        <div style={{ padding: '20px 24px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14 }}>
          <div style={{ fontFamily: font.mono, fontSize: 20, color: 'var(--osd-accent)', marginBottom: 12 }}>工具類 — 會更新</div>
          {['CLAUDE.md', 'skills/git-branch.md', 'skills/git-commit.md', '.claude/hooks/'].map(f => (
            <div key={f} style={{ fontFamily: font.mono, fontSize: 20, color: c.textSoft, lineHeight: 1.8 }}>{f}</div>
          ))}
        </div>
        <div style={{ padding: '20px 24px', background: c.surface, border: `1px solid ${c.border}`, borderRadius: 14 }}>
          <div style={{ fontFamily: font.mono, fontSize: 20, color: c.muted, marginBottom: 12 }}>專案內容 — 不動</div>
          {['README.md', 'CHANGELOG.md', 'skills/README.md'].map(f => (
            <div key={f} style={{ fontFamily: font.mono, fontSize: 20, color: c.muted, lineHeight: 1.8 }}>{f}</div>
          ))}
        </div>
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
    <BackToFirstButton />
    <Footer />
  </div>
);

// ─── Meta & export ────────────────────────────────────────────────────────────
export const meta: SlideMeta = {
  title: '設計師的開發工作流程',
  createdAt: '2026-06-16T00:00:00.000Z',
};

export default [
  Cover, Agenda,
  Part1Cover, Part1Checklist, GitHubChecklist,
  Part2Cover, CreateRepo, GitHubDesktop, GitConcepts, CloneRepo, VsCodeIntro, VsCodeSetup,
  WhyRules, FolderStructure,
  TemplateBridge, EduUiTemplate, CloneTemplate, TemplateUsageBridge, ClaudeCodeRef, InstallTemplate,
  Part3Cover, ScenarioPick, Step1Readme, Step2Changelog, Step3Commit, Step4Push, BonusSync, Closing,
] satisfies Page[];
