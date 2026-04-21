import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Eye, MousePointerClick, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "분석 | Starter Kit",
}

const metrics = [
  {
    icon: Eye,
    label: "페이지 뷰",
    value: "124,530",
    change: "+14.2%",
    trend: "up",
  },
  {
    icon: MousePointerClick,
    label: "클릭률 (CTR)",
    value: "3.8%",
    change: "+0.5%",
    trend: "up",
  },
  {
    icon: Clock,
    label: "평균 체류 시간",
    value: "2분 34초",
    change: "-0.3%",
    trend: "down",
  },
  {
    icon: Users,
    label: "신규 방문자",
    value: "8,102",
    change: "+22.1%",
    trend: "up",
  },
]

const topPages = [
  { path: "/", title: "홈", views: 42300 },
  { path: "/dashboard", title: "대시보드", views: 28900 },
  { path: "/about", title: "소개", views: 15200 },
  { path: "/dashboard/analytics", title: "분석", views: 9800 },
  { path: "/dashboard/settings", title: "설정", views: 4100 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground">트래픽 및 사용자 행동 데이터를 확인하세요.</p>
      </div>

      {/* 주요 지표 */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{metric.label}</CardDescription>
              <metric.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{metric.value}</p>
              <div className="mt-1 flex items-center gap-1 text-xs">
                {metric.trend === "up" ? (
                  <TrendingUp className="size-3 text-green-500" />
                ) : (
                  <TrendingDown className="size-3 text-red-500" />
                )}
                <Badge
                  variant={metric.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 인기 페이지 */}
      <Card>
        <CardHeader>
          <CardTitle>인기 페이지</CardTitle>
          <CardDescription>최근 30일 기준 페이지별 방문 수입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {topPages.map((page, index) => (
              <div key={page.path} className="flex items-center gap-4">
                <span className="w-4 text-sm text-muted-foreground">{index + 1}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{page.title}</p>
                  <p className="text-xs text-muted-foreground">{page.path}</p>
                </div>
                <span className="text-sm font-semibold">{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
