"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

/** 계정 삭제 버튼 — 확인 후 처리 */
export function DangerZone() {
  const handleDelete = () => {
    const confirmed = window.confirm("정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")
    if (confirmed) {
      toast.error("계정이 삭제되었습니다.")
    }
  }

  return (
    <Button variant="destructive" onClick={handleDelete}>
      계정 삭제
    </Button>
  )
}
