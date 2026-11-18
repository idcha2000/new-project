"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./page.module.css";

type IconName =
  | "sparkles" | "grid" | "code" | "layers" | "monitor" | "github"
  | "sun" | "moon" | "arrow" | "external" | "check" | "cursor"
  | "laptop" | "tablet" | "phone" | "chevron" | "git" | "terminal";

type Device = "desktop" | "tablet" | "mobile";
type ButtonVariant = "solid" | "outline";
type Theme = "system" | "light" | "dark";

const repoUrl = "https://github.com/idcha2000/new-project";

function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    sparkles: <><path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3Z"/><path d="m19 18 .65 1.35L21 20l-1.35.65L19 22l-.65-1.35L17 20l1.35-.65L19 18ZM4 2l.55 1.45L6 4l-1.45.55L4 6l-.55-1.45L2 4l1.45-.55L4 2Z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/></>,
    monitor: <><rect x="2" y="3" width="20" height="15" rx="2"/><path d="M8 22h8M12 18v4"/></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 4v-3.3a3 3 0 0 0-.8-2.4c2.6-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 0 0-1.2-3.2 4.2 4.2 0 0 0-.1-3.1s-1 0-3.2 1.7a11 11 0 0 0-6 0C6.8 3.1 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.1 4.6 4.6 0 0 0-1.2 3.2c0 4.6 2.7 5.6 5.3 5.9A3 3 0 0 0 9 17.7V21"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
    moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6"/></>,
    external: <><path d="M13 5h6v6m0-6-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    cursor: <><path d="m5 3 14 9-7 1-3 7-4-17Z"/><path d="m12 13 4 6"/></>,
    laptop: <><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/></>,
    tablet: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M11 18h2"/></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    git: <><circle cx="6" cy="3.5" r="2"/><circle cx="6" cy="20.5" r="2"/><circle cx="18" cy="8.5" r="2"/><path d="M6 5.5v13M18 10.5a7 7 0 0 1-7 7H6"/></>,
    terminal: <><rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 9 3 3-3 3m6 0h5"/></>,
  };

  return (
    <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

const navItems = [
  { href: "#overview", icon: "grid" as const, label: "Overview" },
  { href: "#playground", icon: "code" as const, label: "UI Playground" },
  { href: "#responsive", icon: "monitor" as const, label: "Responsive" },
  { href: "#projects", icon: "layers" as const, label: "Projects" },
  { href: "#github", icon: "github" as const, label: "GitHub" },
];

const featureItems = [
  { href: "#playground", icon: "code" as const, eyebrow: "01 / EXPERIMENT", title: "UI Playground", description: "컴포넌트의 스타일과 인터랙션을 자유롭게 실험하세요.", className: "violet" },
  { href: "#projects", icon: "layers" as const, eyebrow: "02 / ORGANIZE", title: "Projects", description: "현재 프로젝트와 기술 스택을 한곳에서 살펴보세요.", className: "peach" },
  { href: "#responsive", icon: "monitor" as const, eyebrow: "03 / PREVIEW", title: "Responsive", description: "데스크톱부터 모바일까지 화면 구성을 미리 확인하세요.", className: "mint" },
  { href: "#github", icon: "github" as const, eyebrow: "04 / CONNECT", title: "GitHub", description: "코드 저장소로 이동하고 변경 이력을 관리하세요.", className: "blue" },
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("system");
  const [systemDark, setSystemDark] = useState(false);
  const [variant, setVariant] = useState<ButtonVariant>("solid");
  const [clicks, setClicks] = useState(0);
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    return () => document.documentElement.removeAttribute("data-theme");
  }, [theme]);

  const isDark = theme === "system" ? systemDark : theme === "dark";

  return (
    <div className={styles.shell} id="top">
      <aside className={styles.sidebar} aria-label="사이드 메뉴">
        <a href="#top" className={styles.brand} aria-label="Dev Studio 처음으로">
          <span className={styles.brandSymbol}><Icon name="sparkles" size={22} /></span>
          <span>dev<span className={styles.brandLight}>studio</span><span className={styles.brandDot}>.</span></span>
        </a>
        <div className={styles.sidebarCaption}>WORKSPACE</div>
        <nav className={styles.sidebarNav} aria-label="주요 메뉴">
          {navItems.map(({ href, icon, label }, index) => (
            <a key={href} href={href} className={[styles.navLink, index === 0 ? styles.navLinkActive : ""].join(" ")}>
              <Icon name={icon} size={19} /><span>{label}</span>
              {index === 0 && <span className={styles.navActiveDot} />}
            </a>
          ))}
        </nav>
        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarHint}>
            <span className={styles.hintIcon}><Icon name="terminal" size={18} /></span>
            <strong>Ready to build</strong>
            <span>아이디어를 코드로 바꿔보세요.</span>
          </div>
          <div className={styles.sidebarCopyright}>DEVELOPER WORKSPACE <span>© 2026</span></div>
        </div>
      </aside>

      <div className={styles.content}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}><span>Workspace</span><Icon name="chevron" size={14} /><strong>Overview</strong></div>
          <div className={styles.topActions}>
            <span className={styles.status}><span className={styles.statusDot} /> Local workspace</span>
            <button type="button" className={styles.themeToggle} onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"} title={isDark ? "라이트 모드" : "다크 모드"}>
              <Icon name={isDark ? "sun" : "moon"} size={18} />
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
            </button>
            <a className={styles.headerGithub} href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub 저장소 열기"><Icon name="github" size={21} /></a>
          </div>
        </header>

        <main className={styles.main} id="overview">
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><span className={styles.eyebrowDash} /> YOUR CREATIVE WORKSPACE</div>
              <h1 id="hero-title">Build something <span>great.</span></h1>
              <p>아이디어를 코드로 구현하는 나만의 개발 공간.<br className={styles.desktopBreak} /> 작은 실험부터 멋진 결과물까지, 여기서 시작하세요.</p>
              <div className={styles.heroButtons}>
                <a className={styles.primaryButton} href="#playground">실험 시작하기 <Icon name="arrow" size={18} /></a>
                <a className={styles.secondaryButton} href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub 저장소 <Icon name="external" size={16} /></a>
              </div>
            </div>
            <div className={styles.heroArtwork} aria-hidden="true">
              <div className={styles.heroAura} />
              <div className={styles.orbitOne} /><div className={styles.orbitTwo} />
              <div className={styles.codeWindow}>
                <div className={styles.codeWindowHeader}><span/><span/><span/><i>hello-world.tsx</i></div>
                <div className={styles.codeLines}>
                  <div><span className={styles.lineNumber}>01</span><span className={styles.syntaxPink}>const</span> idea <span className={styles.syntaxMuted}>=</span> <span className={styles.syntaxYellow}>&quot;something great&quot;</span>;</div>
                  <div><span className={styles.lineNumber}>02</span></div>
                  <div><span className={styles.lineNumber}>03</span><span className={styles.syntaxPink}>export default</span> <span className={styles.syntaxBlue}>function</span> <span className={styles.syntaxGreen}>Create</span>() {'{'}</div>
                  <div><span className={styles.lineNumber}>04</span>  <span className={styles.syntaxPink}>return</span> <span className={styles.syntaxYellow}>&lt;Build</span> idea={'{'}idea{'}'} <span className={styles.syntaxYellow}>/&gt;</span>;</div>
                  <div><span className={styles.lineNumber}>05</span>{'}'}</div>
                </div>
              </div>
              <div className={styles.floatingChip}><span>✦</span> Create & explore</div>
            </div>
          </section>

          <section aria-labelledby="explore-title" className={styles.exploreSection}>
            <div className={styles.sectionHeading}>
              <div><span className={styles.sectionKicker}>DISCOVER</span><h2 id="explore-title">Explore your workspace<span className={styles.headingPeriod}>.</span></h2></div>
              <span className={styles.sectionSideLabel}>4 spaces to explore</span>
            </div>
            <div className={styles.featureGrid}>
              {featureItems.map(item => (
                <a href={item.href} key={item.href} className={[styles.featureCard, styles[item.className]].join(" ")}>
                  <div className={styles.featureTop}><span className={styles.featureIcon}><Icon name={item.icon} size={23} /></span><Icon name="arrow" size={18} className={styles.featureArrow} /></div>
                  <span className={styles.featureEyebrow}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
              ))}
            </div>
          </section>

          <div className={styles.toolGrid}>
            <section className={styles.toolPanel} id="playground" aria-labelledby="playground-title">
              <div className={styles.panelHeading}>
                <span className={[styles.panelIcon, styles.panelIconViolet].join(" ")}><Icon name="cursor" size={20} /></span>
                <div><span className={styles.sectionKicker}>INTERACTIVE LAB</span><h2 id="playground-title">UI Playground</h2></div>
              </div>
              <p className={styles.panelDescription}>버튼 스타일을 바꾸고, 직접 클릭하며 인터랙션을 확인해보세요.</p>
              <div className={styles.segmented} role="group" aria-label="버튼 스타일">
                <button type="button" className={variant === "solid" ? styles.segmentActive : ""} aria-pressed={variant === "solid"} onClick={() => setVariant("solid")}>Filled</button>
                <button type="button" className={variant === "outline" ? styles.segmentActive : ""} aria-pressed={variant === "outline"} onClick={() => setVariant("outline")}>Outline</button>
              </div>
              <div className={styles.playgroundCanvas}>
                <div className={styles.canvasLabel}>LIVE PREVIEW <span className={styles.liveDot} /></div>
                <button type="button" onClick={() => setClicks(count => count + 1)} className={[styles.demoButton, variant === "solid" ? styles.demoSolid : styles.demoOutline].join(" ")}>
                  Click me <Icon name="arrow" size={16} />
                </button>
                <p className={styles.clickFeedback} role="status">{clicks === 0 ? "버튼을 눌러 인터랙션을 테스트하세요" : clicks + "번 클릭했습니다. 잘 작동하고 있어요!"}</p>
              </div>
            </section>

            <section className={styles.toolPanel} id="responsive" aria-labelledby="responsive-title">
              <div className={styles.panelHeading}>
                <span className={[styles.panelIcon, styles.panelIconMint].join(" ")}><Icon name="monitor" size={20} /></span>
                <div><span className={styles.sectionKicker}>DEVICE PREVIEW</span><h2 id="responsive-title">Responsive</h2></div>
              </div>
              <p className={styles.panelDescription}>기기를 선택하면 아래 샘플 레이아웃의 폭이 변경됩니다.</p>
              <div className={styles.deviceButtons} role="group" aria-label="미리보기 기기">
                {(["desktop", "tablet", "mobile"] as const).map(value => (
                  <button key={value} type="button" onClick={() => setDevice(value)} aria-pressed={device === value} className={device === value ? styles.deviceActive : ""}>
                    <Icon name={value === "desktop" ? "laptop" : value === "tablet" ? "tablet" : "phone"} size={18} />
                    <span>{value === "desktop" ? "Desktop" : value === "tablet" ? "Tablet" : "Mobile"}</span>
                  </button>
                ))}
              </div>
              <div className={styles.deviceCanvas}>
                <div className={[styles.deviceFrame, styles[device]].join(" ")} aria-label={device + " 샘플 레이아웃"}>
                  <div className={styles.frameTop}><span className={styles.frameDots}><i/><i/><i/></span><span className={styles.frameUrl}>devstudio.local</span></div>
                  <div className={styles.frameBody}>
                    <div className={styles.mockSidebar}><span/><span/><span/></div>
                    <div className={styles.mockContent}><div className={styles.mockHeading}/><div className={styles.mockSubheading}/><div className={styles.mockTiles}><i/><i/><i/></div></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.bottomGrid}>
            <section id="projects" className={styles.bottomPanel} aria-labelledby="projects-title">
              <div className={styles.bottomPanelTop}><span className={styles.bottomIcon}><Icon name="layers" size={20} /></span><span className={styles.projectTag}><span/> CURRENT PROJECT</span></div>
              <h2 id="projects-title">new-project</h2>
              <p>Next.js와 React로 시작하는 첫 번째 개발 프로젝트입니다.</p>
              <div className={styles.techPills}><span>Next.js 16</span><span>React 19</span><span>TypeScript</span></div>
            </section>
            <section id="github" className={[styles.bottomPanel, styles.githubPanel].join(" ")} aria-labelledby="github-title">
              <div className={styles.bottomPanelTop}><span className={styles.bottomIcon}><Icon name="git" size={20} /></span><span className={styles.githubMiniLabel}>SOURCE CONTROL</span></div>
              <h2 id="github-title">Stay connected.</h2>
              <p>저장소의 소스와 변경 이력을 GitHub에서 확인하세요.</p>
              <a className={styles.repoLink} href={repoUrl} target="_blank" rel="noopener noreferrer"><Icon name="github" size={19} /><span>idcha2000/new-project</span><Icon name="external" size={16} /></a>
            </section>
          </div>
          <footer className={styles.footer}><span>Made for curious minds <span className={styles.footerHeart}>✳</span></span><span>Dev Studio · Your space to build</span></footer>
        </main>
      </div>
    </div>
  );
}
