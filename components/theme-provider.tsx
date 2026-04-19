'use client'

import type { ThemeProviderProps } from 'next-themes'
import {
  ThemeProvider as NextThemesProvider,

} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider themes={['dark']} {...props}>
      {children}
    </NextThemesProvider>
  )
}
