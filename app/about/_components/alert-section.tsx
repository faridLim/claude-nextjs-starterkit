import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

export function AlertSection() {
  return (
    <div className="flex flex-col gap-3">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>안내</AlertTitle>
        <AlertDescription>일반적인 정보를 전달할 때 사용합니다.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>처리 중 문제가 발생했습니다. 다시 시도해주세요.</AlertDescription>
      </Alert>
    </div>
  )
}
