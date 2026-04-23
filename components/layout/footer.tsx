import Link from "next/link"
import { Container } from "@/components/layout/container"

/** 모든 페이지 하단에 공통으로 표시되는 푸터 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Starter Kit. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/faridLim/claude-nextjs-starterkit"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            {/* TODO: 문서 URL로 교체하세요 */}
            <a href="#" className="transition-colors hover:text-foreground">문서</a>
            <Link href="/about" className="transition-colors hover:text-foreground">문의</Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
