import "@rainbow-me/rainbowkit/styles.css"
import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";



export const metadata = {
  title: 'AVASense',
  description: 'AI-powered smart contract wallet on Avalanche Fuji Testnet. Chat or speak to send tokens, check balances, and manage your wallet securely.',
  keywords: ['AVASense', 'Smart Wallet', 'AI Wallet', 'Avalanche Fuji', 'Web3', 'Blockchain', 'RainbowKit', 'Wagmi'],
  authors: [{ name: 'Nabil Ansari' }],
  creator: 'AVASense Team',
  openGraph: {
    title: 'AVASense',
    description: 'AI-powered smart contract wallet with voice and chat interface on Avalanche Fuji.',
    url: 'https://avasense.vercel.app/',
    siteName: 'AVASense',
    images: [
      {
        url: 'https://avasense.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVASense Wallet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://avasense.vercel.app'),
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