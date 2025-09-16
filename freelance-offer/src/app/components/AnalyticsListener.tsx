// app/(anything)/analytics-listener.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '../gtag'

export default function AnalyticsListener() {
    console.log('pageview run')
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    pageview(url)
  }, [pathname, searchParams])

  return null
}
