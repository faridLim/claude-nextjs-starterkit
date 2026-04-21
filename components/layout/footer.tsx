import { Container } from "@/components/layout/container"
import { getYear } from "date-fns"

/** 모든 페이지 하단에 공통으로 표시되는 푸터 */
export function Footer() {
  const currentYear = getYear(new Date())

  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Starter Kit. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">GitHub</a>
            <a href="#" className="transition-colors hover:text-foreground">문서</a>
            <a href="#" className="transition-colors hover:text-foreground">문의</a>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
