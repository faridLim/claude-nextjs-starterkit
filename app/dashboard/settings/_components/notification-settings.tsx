"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

const NOTIFICATION_ITEMS = [
  { label: "새 사용자 가입 알림", desc: "신규 사용자가 등록될 때 이메일을 받습니다." },
  { label: "주간 리포트", desc: "매주 월요일 주간 통계 이메일을 받습니다." },
  { label: "시스템 점검 공지", desc: "점검 일정 안내 이메일을 받습니다." },
]

/** 이메일 알림 켜기/끄기 설정 목록 */
export function NotificationSettings() {
  const [enabled, setEnabled] = useState<boolean[]>(NOTIFICATION_ITEMS.map(() => true))

  const toggle = (index: number) => {
    setEnabled((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      const item = NOTIFICATION_ITEMS[index]
      if (next[index]) {
        toast.success(`'${item.label}' 알림을 켰습니다.`)
      } else {
        toast.info(`'${item.label}' 알림을 껐습니다.`)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {NOTIFICATION_ITEMS.map((item, index) => (
        <div key={item.label} className="flex items-start justify-between gap-4 rounded-md border p-4">
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => toggle(index)}>
            {enabled[index] ? "끄기" : "켜기"}
          </Button>
        </div>
      ))}
    </div>
  )
}
