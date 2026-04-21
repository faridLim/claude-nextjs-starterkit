import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "설정 | Starter Kit",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">계정 및 서비스 설정을 변경하세요.</p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" defaultValue="홍길동" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" defaultValue="hong@example.com" />
          </div>
          <Button className="w-fit">저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림</CardTitle>
          <CardDescription>이메일 알림 수신 여부를 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {[
            { label: "새 사용자 가입 알림", desc: "신규 사용자가 등록될 때 이메일을 받습니다." },
            { label: "주간 리포트", desc: "매주 월요일 주간 통계 이메일을 받습니다." },
            { label: "시스템 점검 공지", desc: "점검 일정 안내 이메일을 받습니다." },
          ].map((item) => (
            <div key={item.label} className="flex items-start justify-between gap-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Button variant="outline" size="sm">
                끄기
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Separator />

      {/* 위험 구역 */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">위험 구역</CardTitle>
          <CardDescription>아래 작업은 되돌릴 수 없습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">계정 삭제</Button>
        </CardContent>
      </Card>
    </div>
  )
}
