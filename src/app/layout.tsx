import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Net Ninja Tutorial",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-6xl">{children}</main>
      </body>
    </html>
  )
}
