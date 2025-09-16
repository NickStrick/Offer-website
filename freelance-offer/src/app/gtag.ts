// app/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url: string) => {
  if (!GA_ID || typeof window === 'undefined') return
  // @ts-ignore
  window.gtag?.('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
  })
}
