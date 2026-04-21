"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" size="sm" onClick={() => toast.success("저장되었습니다!")}>
        성공 알림
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast.error("오류가 발생했습니다.")}>
        오류 알림
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast.info("새 업데이트가 있습니다.", { description: "v1.2.0 출시" })}
      >
        정보 알림
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toast.loading("처리 중...", {
            duration: 2000,
          })
        }
      >
        로딩 알림
      </Button>
    </div>
  )
}
