import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { AlertSection } from "./_components/alert-section"
import { ContactForm } from "./_components/contact-form"
import { SkeletonSection } from "./_components/skeleton-section"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "소개 | Starter Kit",
  description: "shadcn/ui 컴포넌트 예시 페이지",
}

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">컴포넌트 예시</h1>
          <p className="mt-2 text-muted-foreground">
            스타터킷에 포함된 주요 컴포넌트의 실제 사용 예시입니다.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Alert 예시 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Alert — 알림 메시지</h2>
            <AlertSection />
          </section>

          <Separator />

          {/* 폼 예시 */}
          <section>
            <h2 className="mb-1 text-xl font-semibold">Form — 폼 유효성 검사</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              react-hook-form + zod 조합. 빈 칸 제출 시 에러 메시지를 확인하세요.
            </p>
            <ContactForm />
          </section>

          <Separator />

          {/* Skeleton 예시 */}
          <section>
            <h2 className="mb-1 text-xl font-semibold">Skeleton — 로딩 상태</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              데이터를 불러오는 동안 보여주는 자리 표시자 UI입니다.
            </p>
            <SkeletonSection />
          </section>
        </div>
      </div>
    </Container>
  )
}
