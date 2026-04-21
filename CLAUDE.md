# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

테스트 설정은 없습니다.

## 아키텍처

Next.js 16 App Router 기반 스타터킷입니다. **`node_modules/next/dist/docs/`** 에 이 버전의 공식 문서가 있으며, API나 컨벤션 작성 전 반드시 참조해야 합니다.

### 레이아웃 계층

- `app/layout.tsx` — 루트 레이아웃. `ThemeProvider`, `Header`, `Footer`, `Toaster`를 전역 래핑
- `app/dashboard/layout.tsx` — 대시보드 전용 중첩 레이아웃. `DashboardSidebar` + 콘텐츠 영역으로 구성

### 라우트 구조

| 경로 | 설명 |
|------|------|
| `/` | 홈 (기술 스택 소개) |
| `/about` | shadcn/ui 컴포넌트 예시 (Alert, Form, Skeleton) |
| `/dashboard` | 대시보드 개요 |
| `/dashboard/analytics` | 분석 |
| `/dashboard/users` | 사용자 |
| `/dashboard/settings` | 설정 |

페이지 전용 컴포넌트는 해당 라우트 폴더 내 `_components/`에 위치합니다.

### UI 컴포넌트

shadcn/ui(style: `radix-nova`) 기반이며, 컴포넌트는 `components/ui/`에 위치합니다. 새 컴포넌트 추가 시:

```bash
npx shadcn add <component-name>
```

### 경로 별칭

`@/`는 프로젝트 루트를 가리킵니다 (`tsconfig.json`의 `paths` 설정).

### 핵심 유틸리티

- `lib/utils.ts` — `cn()` 함수: `clsx` + `tailwind-merge` 조합으로 Tailwind 클래스 병합
- `components/layout/container.tsx` — `max-w-7xl` 중앙 정렬 래퍼, 모든 페이지 콘텐츠에 사용
- `components/providers/theme-provider.tsx` — `next-themes` 기반 다크모드

### 폼 패턴

`react-hook-form` + `zod` 조합 사용. `app/about/_components/contact-form.tsx`가 참조 구현입니다.
