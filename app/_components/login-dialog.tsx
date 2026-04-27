"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const schema = z.object({
  email: z.string().email("올바른 이메일 형식을 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
})

type FormValues = z.infer<typeof schema>

export function LoginDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  /** TODO: 실제 인증 로직으로 교체 */
  const onSubmit = async (_data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">로그인하기</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>계정에 로그인하여 서비스를 이용하세요.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="dialog-email">이메일</Label>
            <Input
              id="dialog-email"
              type="email"
              placeholder="hong@example.com"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="dialog-password">비밀번호</Label>
            <Input
              id="dialog-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "로그인 중..." : "로그인하기"}
          </Button>
        </form>

        <DialogFooter className="justify-center text-sm text-muted-foreground">
          계정이 없으신가요?
          <Link
            href="/register"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            회원가입
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
