# 🧠 Master Prompt — Portfolio Website for Nguyen Ngoc Quoc Son

> Copy toàn bộ prompt này và paste vào Claude, v0.dev, Cursor AI, hoặc bất kỳ AI coding agent nào.
> Prompt đã được tối ưu cho **Next.js 14+ App Router + Vercel deployment**.

---

## ROLE

You are a senior fullstack engineer and product designer with 15+ years of experience building developer portfolios and personal branding sites. You write clean, production-ready Next.js code, apply expert-level UI/UX principles, and have a sharp eye for what makes a developer portfolio stand out to both recruiters and potential freelance clients.

---

## OBJECTIVE

Build a **complete, production-ready personal portfolio website** for a senior fullstack developer. The site must serve two goals simultaneously:

1. **Job seeking** — impress tech recruiters and hiring managers at product companies
2. **Freelance acquisition** — attract clients who need a trusted solo developer to build things from zero

The tone must feel **honest, grounded, and technically credible** — never salesy or over-polished.

---

## TECH STACK & DEPLOYMENT

- **Framework**: Next.js 14+ with App Router (`/app` directory)
- **Styling**: Tailwind CSS v3 + CSS variables for theming
- **Animations**: Framer Motion (purposeful, not decorative — each animation must earn its place)
- **Icons**: Lucide React
- **i18n**: `next-intl` for bilingual support (English + Vietnamese)
- **SEO**: Next.js built-in `metadata` API, `next-sitemap`, Open Graph tags, structured JSON-LD
- **Deployment**: Vercel (free tier) — configure `vercel.json` if needed
- **Font**: Use `next/font` with Google Fonts — choose a pairing that feels technical yet human. Suggested: `DM Sans` (body) + `Space Mono` or `JetBrains Mono` (code/accent). Do NOT use Inter or Roboto.
- **Theme**: Auto dark/light via `prefers-color-scheme` + manual toggle with `next-themes`. Default follows OS preference. No flash of wrong theme (use `suppressHydrationWarning`).
- **Performance**: All images via `next/image`, lazy loading, fonts preloaded, no layout shift (CLS = 0 target), Lighthouse score ≥ 90 on mobile

---

## DESIGN DIRECTION

**Aesthetic**: "Refined Engineering" — the visual language of a developer who has strong opinions about quality. Not cold/corporate. Not playful/startup. Somewhere between a well-crafted technical doc and a thoughtfully designed dev tool.

**Key principles**:
- **Generous whitespace** — breathable layout, nothing crowded
- **Typography does the heavy lifting** — hierarchy through type scale, not decoration
- **Accent color is used sparingly** — one primary accent (suggest a deep electric blue `#2563EB` in light mode, `#60A5FA` in dark), used only for meaningful interactive moments
- **Grid discipline** — consistent baseline grid, intentional column breaks
- **Animations**: Only 3 types allowed:
  1. Fade-in + subtle upward slide on scroll (staggered for lists)
  2. Smooth underline/highlight hover on links and nav
  3. Subtle background gradient shift on hero (slow, calm — not distracting)
- **NO**: parallax, spinning loaders, pop-ups, heavy JS particle effects, gradient rainbow text

**Mobile first**: Design starts at 375px. Every section must be fully usable and beautiful on mobile.

---

## BILINGUAL SYSTEM (i18n)

- Use `next-intl` with locale files at `/messages/en.json` and `/messages/vi.json`
- **Language detection**: Read `Accept-Language` header server-side via Next.js middleware. Default to `en` if unsupported locale.
- **Language toggle**: Visible in navbar, one-click switch. Persist choice in `localStorage`. Do NOT reload the page (client-side locale switch).
- **Tone in English**: Professional but approachable. Like a senior dev explaining their work to a smart non-technical friend. Avoid jargon dumps.
- **Tone in Vietnamese**: Gần gũi, tự nhiên — như anh em trong nghề nói chuyện với nhau. Không dùng từ ngữ cứng nhắc kiểu dịch máy. Không "Tôi là một lập trình viên với..." — hãy dùng "Mình" hoặc "Tôi" một cách nhất quán (chọn "Mình" cho freelance context, "Tôi" cho professional).

---

## SITE STRUCTURE

### 1. `/` — Single Page Application with anchor-based navigation

Smooth scroll between sections. Sticky top navbar with:
- Logo/name (left): `Son Nguyen` in monospace accent font
- Nav links (center/right): About · Skills · Experience · Projects · Contact
- Language toggle (right): `EN / VI`
- Theme toggle (right): sun/moon icon
- Mobile: hamburger → full-screen slide-in menu

---

### SECTION 1 — HERO / ABOUT

**Layout**: Full viewport height on desktop, content-centered. Name large. Role underneath. Short punchy bio. Two CTAs.

**Content**:

```
Name:    Nguyen Ngoc Quoc Son
Role:    Fullstack Developer · Frontend & Mobile Specialist
Tagline: 9+ years turning ideas into products — from backend APIs
         to pixel-perfect UIs and App Store releases.
```

**EN bio** (use this exact text, tone-edit as needed):
> I build complete products — not just components. With 9+ years across web and mobile, I've led teams, shipped SaaS platforms, and delivered freelance projects solo from zero. My strongest territory is the React ecosystem, but I'm comfortable anywhere in the stack.

**VI bio**:
> Mình xây sản phẩm hoàn chỉnh — không chỉ viết component. Hơn 9 năm làm việc với web lẫn mobile, mình từng dẫn team, ra mắt nền tảng SaaS, và tự tay xây dựng các dự án freelance từ đầu. React ecosystem là sân nhà, nhưng mình thoải mái với cả stack.

**CTAs**:
- Primary: `View My Work` / `Xem dự án`  → scrolls to Experience
- Secondary: `Download CV` / `Tải CV`  → links to `/Son_Nguyen_CV.pdf` (add to `/public`)

**Visual treatment**: Subtle animated code snippet or terminal-style text in the background (ASCII art or typed-out stack names) — very low opacity, purely atmospheric. Use CSS animation, no heavy JS.

---

### SECTION 2 — SKILLS / TECH STACK

**Layout**: Grouped skill categories in a clean grid. NOT a list of progress bars (those are meaningless). Use tag/badge style with subtle hover glow.

**Groups and skills**:

| Category | Skills |
|---|---|
| Frontend | ReactJS, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, SASS, Styled Components |
| Mobile | React Native, Expo, iOS (Xcode), Android (Android Studio), Push Notifications, Native Modules |
| State Management | Redux, Redux-Saga, Redux Thunk, MobX, Context API |
| Backend & API | Node.js, RESTful APIs, GraphQL, WebSocket, WebRTC, Axios |
| Web3 | Ethereum/Solidity, Web3Auth, WalletConnect |
| Tooling & DevOps | Vite, Webpack, Babel, ESLint, Prettier, Firebase, Fastlane, Git |
| Exploring | AI/LLM API integration, Edge deployment, Micro-frontends |

**EN label**: "My Toolkit" | **VI label**: "Công nghệ mình dùng"

**Design note**: The "Exploring" category should have a slightly different visual treatment — e.g., dashed border or italic label — to signal these are in-progress areas honestly.

---

### SECTION 3 — WORK EXPERIENCE

**Layout**: Vertical timeline on desktop (line on the left, cards on the right). Single-column stacked cards on mobile.

**EN label**: "Experience" | **VI label**: "Kinh nghiệm"

**Each card contains**:
- Role (bold, large)
- Company + team size (subtitle, muted)
- Date range (right-aligned or below role)
- 3–5 bullet points (most impactful first)
- Tech stack tags (same badge style as Skills section)

**Jobs — include all, in this order** (most recent first):

---

**1. Technical Lead & Senior Fullstack Developer**
*Charmsta Cty Ltd · Tech Lead · Team: 5 · Nov 2022 – Present*

- Architected and shipped the Charmsta SaaS platform end-to-end — store management, inventory, employee management, and booking for nail & cosmetic businesses.
- Built the customer-facing ReactJS + TypeScript web app with a reusable component library, code splitting, lazy loading, and memoization for fast load times.
- Developed the React Native mobile app for iOS and Android; engineered native payment modules supporting multiple gateways and cut app startup time by 35%.
- Integrated Firebase Cloud Messaging for push notifications and Redux for cross-feature state management.
- Set coding standards, conducted code reviews, and mentored 2 junior developers.

Stack: ReactJS · TypeScript · React Native · Redux · Node.js · Firebase · CSS Modules · Axios

---

**2. Senior Frontend & Mobile Developer**
*EST Media (Remote) · Team: 4 · Aug 2021 – Nov 2022*

- Contributed to OP3N — a Web3 NFT super-app covering creation, minting, trading, and community features.
- Implemented Web3Auth and WalletConnect for seamless crypto wallet authentication on web and mobile.
- Built responsive NFT gallery UI with optimised FlatList rendering for large asset collections.
- Applied React.memo, useMemo, and custom hooks to improve perceived performance across React and React Native.

Stack: ReactJS · React Native · TypeScript · MobX · Web3Auth · WalletConnect · Styled Components

---

**3. Mobile Technical Lead**
*VUI Việt Nam · Team Leader · Team: 5 · Sep 2019 – Aug 2021*

- Led development of TAP TAP — a loyalty app partnered with major consumer brands for in-store engagement.
- Built native payment modules for multiple providers and QR-code scanning for loyalty card integration.
- Integrated geolocation services for store-locator and Redux-Saga for complex async workflows.
- Delivered a React admin dashboard with Chart.js data visualisation for partner brand analytics.

Stack: React Native · TypeScript · Redux-Saga · ReactJS · SASS · Native Modules

---

**4. Senior Frontend & Mobile Developer**
*Success Software Services · Team: 3 · Mar 2019 – Aug 2019*

- Built Xpersity — a platform connecting clients with domain experts via real-time video consultation.
- Implemented WebRTC-based video calling for web and mobile with reliable session management.
- Performance improvements contributed to a 25% increase in user engagement metrics.

Stack: ReactJS · React Native · TypeScript · Redux Saga · WebRTC · Material-UI

---

**5. Mobile Team Leader**
*Marry Network · Team Leader · Team: 3 · Dec 2017 – Mar 2019*

- Led MarryBaby and 1000NgayVang apps — pregnancy tracking and parenting tools with 100k+ users.
- Pioneered on-device baby image classification using TensorFlow Mobile — an early mobile ML integration.
- Built React admin panels with analytics dashboards for editorial and engagement monitoring.

Stack: React Native · TypeScript · Redux Thunk · TensorFlow Mobile · ReactJS · Bootstrap

---

**6. Frontend Developer**
*Landsoft Company · Team: 5 · Nov 2016 – Dec 2017*

- Developed Vime — a real estate & social networking platform for condominium residents.
- Built real-time chat using WebSocket and notification system for building-wide announcements.
- Delivered responsive property listing pages with an interactive browsing experience.

Stack: ReactJS · Redux Thunk · WebSocket · SCSS

---

### SECTION 4 — PROJECTS / FREELANCE

**Layout**: Card grid (2-col desktop, 1-col mobile). Each card has domain badge, title, description, stack tags, and a subtle "Solo Build" indicator.

**EN label**: "Freelance Projects" | **VI label**: "Dự án Freelance"

**Intro text EN**: 
> Alongside full-time roles, I've taken on select freelance projects where I owned the full stack — architecture decisions, implementation, and post-launch support. These are real products built for real clients.

**Intro text VI**:
> Song song với công việc chính, mình nhận một số dự án freelance — tự thiết kế kiến trúc, code từ đầu đến cuối và maintain sau khi ra mắt. Đây là sản phẩm thật, cho khách hàng thật.

**Project 1 — Fintech Platform**
- Domain badge: `Fintech`
- Year: 2025
- Description EN: Built a fintech mobile application solo — Node.js backend API + React Native frontend — covering transaction flows, account management, and secure third-party financial service integrations. Handled full post-launch maintenance.
- Description VI: Tự tay xây app fintech — từ Node.js backend đến React Native frontend — bao gồm luồng giao dịch, quản lý tài khoản và tích hợp dịch vụ tài chính bên thứ ba. Maintain toàn bộ sau khi ra mắt.
- Stack: Node.js · React Native · REST API · TypeScript
- Badge: Solo · Full-stack · 2025

**Project 2 — Banking Platform**
- Domain badge: `Banking`
- Year: 2022
- Description EN: Built a banking web application from zero as a solo fullstack developer — Node.js REST API backend + ReactJS frontend — including account operations, fund transfers, transaction history, and secure auth flows.
- Description VI: Xây ứng dụng ngân hàng từ đầu một mình — Node.js backend và ReactJS frontend — bao gồm quản lý tài khoản, chuyển tiền, lịch sử giao dịch và luồng xác thực bảo mật.
- Stack: Node.js · ReactJS · REST API · TypeScript
- Badge: Solo · Full-stack · 2022

**Design note**: Cards should feel like project case-study previews, not just a list. Consider a subtle gradient background per card based on domain color (fintech = green tint, banking = blue tint) — very low opacity, not distracting.

---

### SECTION 5 — CONTACT / HIRE ME

**Layout**: Two-column on desktop (left: copy, right: contact info + social links). Single column on mobile.

**EN heading**: "Let's Build Something" | **VI heading**: "Mình có thể giúp gì cho bạn?"

**EN copy**:
> Whether you're looking to hire a senior fullstack developer or need someone to take a project from idea to launch — I'm open to conversations. No agencies, no middlemen. You talk directly to the person who'll build your product.

**VI copy**:
> Dù bạn đang tìm một senior developer về team hay cần người tự tay build dự án từ ý tưởng đến launch — mình sẵn sàng lắng nghe. Không qua trung gian. Bạn nói chuyện trực tiếp với người sẽ xây sản phẩm cho bạn.

**Contact info**:
- Email: `nguyensonrc@gmail.com` — clickable `mailto:` link
- Phone: `+84 376 586 716` — clickable `tel:` link
- Location: Ho Chi Minh City, Vietnam (open to remote)

**CTA button EN**: `Send me a message` → opens `mailto:nguyensonrc@gmail.com?subject=Let's work together`
**CTA button VI**: `Liên hệ ngay` → same mailto

**Education note** (small, below contact):
BSc Information Technology — Đà Lạt University, 2013 · English: Intermediate

---

## FOOTER

Minimal. Dark background regardless of theme.
- Left: `© 2025 Nguyen Ngoc Quoc Son`
- Right: `Built with Next.js · Deployed on Vercel`
- Center (mobile): stacked

---

## FILE STRUCTURE TO GENERATE

```
/app
  layout.tsx          # Root layout with ThemeProvider, i18n, metadata
  page.tsx            # Main single-page entry, renders all sections
  globals.css         # CSS variables, base reset, theme tokens

/components
  Navbar.tsx
  Hero.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  LanguageToggle.tsx
  ThemeToggle.tsx
  AnimatedSection.tsx  # Reusable scroll-reveal wrapper

/messages
  en.json             # All English strings
  vi.json             # All Vietnamese strings

/public
  Son_Nguyen_CV.pdf   # Placeholder — user adds actual file

next.config.js
tailwind.config.js
middleware.ts         # next-intl locale detection
package.json
vercel.json           # Optional: redirect / header config
```

---

## SEO REQUIREMENTS

In `app/layout.tsx`, include full metadata:

```typescript
export const metadata: Metadata = {
  title: "Son Nguyen — Fullstack Developer | React, React Native, Node.js",
  description: "Senior Fullstack Developer with 9+ years building web and mobile products. Available for full-time roles and freelance projects.",
  keywords: ["fullstack developer", "react developer", "react native", "nodejs", "vietnam developer", "freelance developer", "senior developer"],
  authors: [{ name: "Nguyen Ngoc Quoc Son" }],
  openGraph: {
    title: "Son Nguyen — Fullstack Developer",
    description: "9+ years building production-grade web and mobile apps. React · React Native · Node.js",
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
  },
  robots: { index: true, follow: true },
}
```

Also add JSON-LD structured data (Person schema) in the Hero or layout component.

---

## ANIMATION SPEC

Use Framer Motion. Keep it minimal. Exact specs:

```typescript
// Scroll-reveal (use on every section and card)
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

// Stagger children (use for skill badges, experience bullets, project cards)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
}

// Hero background gradient (CSS-only, in globals.css)
// Slow animated gradient shift: 8s ease infinite
// Use very subtle color stops: near-black → near-black with 5% hue shift
// Light mode: near-white → very light blue-gray
```

Trigger animations with `whileInView={{ visible }}` + `viewport={{ once: true, margin: "-80px" }}`.

**Do NOT animate**: the navbar, footer, or any text that's critical for readability.

---

## WHAT NOT TO BUILD

- ❌ No blog section (keep it focused)
- ❌ No testimonials section (no fake quotes)
- ❌ No "availability" calendar widget
- ❌ No progress bars for skill levels (dishonest UX)
- ❌ No heavy 3D effects or WebGL
- ❌ No cookie banners or pop-ups
- ❌ No contact form (email link is cleaner and has no server dependency)
- ❌ No animations that delay content visibility

---

## QUALITY CHECKLIST (verify before outputting code)

- [ ] All text content is wrapped in i18n keys (no hardcoded EN strings in components)
- [ ] Dark/light theme works without flash on first load
- [ ] Language auto-detect works via middleware
- [ ] All sections have proper heading hierarchy (h1 → h2 → h3)
- [ ] Mobile nav works correctly (hamburger + close)
- [ ] CV download link points to `/Son_Nguyen_CV.pdf`
- [ ] `next/image` used for all images
- [ ] No `console.log` left in code
- [ ] Tailwind config includes custom color tokens matching the design
- [ ] `vercel.json` or `next.config.js` includes proper cache headers for static assets

---

## FINAL INSTRUCTION TO AI AGENT

Generate the **complete file-by-file code** for this portfolio. Start with:

1. `package.json` (with all dependencies)
2. `tailwind.config.js` (with custom theme tokens)
3. `app/globals.css` (CSS variables for light/dark, font imports)
4. `middleware.ts` (locale detection)
5. `messages/en.json` + `messages/vi.json` (all strings)
6. `app/layout.tsx` (root layout with metadata + providers)
7. `app/page.tsx`
8. Each component file

Write complete, copy-paste-ready code. No placeholders like `// TODO` or `// add content here`. Every component must be functional with real content from the spec above.
