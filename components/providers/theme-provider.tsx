"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

/** 다크모드/라이트모드를 전체 앱에 적용하는 Provider */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
