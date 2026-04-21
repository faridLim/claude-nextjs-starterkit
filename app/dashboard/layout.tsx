import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import { Container } from "@/components/layout/container"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="py-8">
      <div className="flex gap-8">
        <DashboardSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </Container>
  )
}
