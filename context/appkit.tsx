'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Replace with your actual Project ID from Reown Cloud
const projectId = '5a4740b63204d2b63f0615a1f44959af'

// 2. Define metadata for your app
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'http://localhost:3000', // Replace with your domain/subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 3. Initialize AppKit
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true // Optional: Enable analytics, defaults to Cloud config
  }
})

export function AppKit({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
