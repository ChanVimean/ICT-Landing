'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { initTheme, mounted } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  if (!mounted) return null;

  return <>{children}</>;
}
