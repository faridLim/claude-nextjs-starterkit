import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "./_components/profile-form"
import { NotificationSettings } from "./_components/notification-settings"
import { DangerZone } from "./_components/danger-zone"

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
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>

      <Separator />

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림</CardTitle>
          <CardDescription>이메일 알림 수신 여부를 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <NotificationSettings />
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
          <DangerZone />
        </CardContent>
      </Card>
    </div>
  )
}
