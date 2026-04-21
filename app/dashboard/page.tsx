import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ToastDemo } from "./_components/toast-demo"
import { Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "대시보드 | Starter Kit",
}

const stats = [
  {
    icon: Users,
    label: "총 사용자",
    value: "2,350",
    change: "+12.5%",
    trend: "up",
  },
  {
    icon: TrendingUp,
    label: "이번 달 방문",
    value: "18,240",
    change: "+8.2%",
    trend: "up",
  },
  {
    icon: ShoppingCart,
    label: "주문 수",
    value: "573",
    change: "-3.1%",
    trend: "down",
  },
  {
    icon: DollarSign,
    label: "매출",
    value: "₩4,280,000",
    change: "+19.4%",
    trend: "up",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">주요 지표를 한눈에 확인하세요.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
              <Badge
                variant={stat.trend === "up" ? "default" : "destructive"}
                className="mt-1 text-xs"
              >
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Toast 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>Toast 알림 예시</CardTitle>
          <CardDescription>
            버튼을 클릭하면 화면 구석에 알림이 나타납니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ToastDemo />
        </CardContent>
      </Card>
    </div>
  )
}
