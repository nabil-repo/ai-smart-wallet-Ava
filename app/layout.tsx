import "@rainbow-me/rainbowkit/styles.css"
import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";



export const metadata = {
  title: 'AVASense',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}