import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Palette, Shield } from "lucide-react"
import Link from "next/link"
import { LoginDialog } from "./_components/login-dialog"

const techStack = [
  "Next.js v16", "React 19", "TypeScript", "Tailwind CSS v4",
  "shadcn/ui", "lucide-react", "next-themes", "Zod",
]

const features = [
  {
    icon: Zap,
    title: "빠른 시작",
    description: "설치 직후 바로 개발을 시작할 수 있도록 레이아웃, 네비게이션, 다크모드가 모두 구성되어 있습니다.",
  },
  {
    icon: Palette,
    title: "디자인 시스템",
    description: "shadcn/ui와 Tailwind CSS로 일관된 디자인 언어를 제공합니다. 다크모드도 기본 지원합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript와 Zod로 런타임까지 타입을 검증합니다. 폼 유효성 검사도 즉시 사용 가능합니다.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Hero 섹션 */}
      <section>
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge variant="secondary">Next.js v16 App Router</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              빠르게 시작하는
              <br />
              <span className="text-primary">모던 웹 스타터킷</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Next.js v16, TypeScript, TailwindCSS, shadcn/ui로 구성된 범용 스타터킷입니다.
              레이아웃, 다크모드, 폼 처리까지 이미 준비되어 있습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <LoginDialog />
              <Button asChild variant="outline" size="lg">
                <Link href="/dashboard">대시보드 보기</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 기술 스택 뱃지 */}
      <section>
        <Container>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              기술 스택
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Feature 카드 */}
      <section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/about">예시 보기 →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
