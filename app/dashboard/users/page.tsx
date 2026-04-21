import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "사용자 | Starter Kit",
}

const users = [
  { name: "김민준", email: "minjun@example.com", role: "관리자", status: "활성" },
  { name: "이서연", email: "seoyeon@example.com", role: "편집자", status: "활성" },
  { name: "박지훈", email: "jihoon@example.com", role: "뷰어", status: "비활성" },
  { name: "최수아", email: "sua@example.com", role: "편집자", status: "활성" },
  { name: "정도윤", email: "doyun@example.com", role: "뷰어", status: "활성" },
  { name: "강하은", email: "haeun@example.com", role: "뷰어", status: "비활성" },
]

const roleVariant: Record<string, "default" | "secondary" | "outline"> = {
  관리자: "default",
  편집자: "secondary",
  뷰어: "outline",
}

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">사용자</h1>
        <p className="text-muted-foreground">등록된 사용자 목록을 관리하세요.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>총 {users.length}명의 사용자가 등록되어 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col divide-y">
            {users.map((user) => (
              <div key={user.email} className="flex items-center justify-between py-3">
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={roleVariant[user.role]}>{user.role}</Badge>
                  <Badge variant={user.status === "활성" ? "default" : "destructive"}>
                    {user.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
