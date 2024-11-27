import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { classNames } from '@/lib/functions'
import { RadioGroup } from '@headlessui/react'
import {
  CheckIcon
} from '@heroicons/react/20/solid'
import { useState } from 'react'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month per user' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year per user' },
  ],
  tiers: [
    {
      name: 'Community',
      id: 'tier-community',
      href: 'https://beta.codecloud.live',
      price: 'free',
      description:
        'Connect, Learn, Code. Join our thriving coding community for free.',
      features: [
        'Connect & Share knowledge',
        'Chat and Video calls with your peers',
        "Join brackets, you're interested in",
        'Connect with peers and build bridges',
        'VSCode plugin',
      ],
      mostPopular: false,
      buy: false,
    },
    {
      name: 'Teams',
      id: 'tier-teams',
      href: '#',
      price: { monthly: '€11.99', annually: '€107.8' },
      description:
        'Collaborate effortlessly with your team using our powerful orchestration platform.',
      features: [
        'Up to 1,000 users',
        'Seamless Collaboration',
        'Real-time Chat & Video',
        'Powerful Integrations',
        'AI-powered Knowledge Base',
        'No data processing',
      ],
      mostPopular: true,
      buy: true,
    },
    {
      name: 'Student',
      id: 'tier-student',
      href: '/contact',
      price: { monthly: '€6.99', annually: '€59.88' },
      description:
        'Empowering student coders. Special rates for educational institutions.',
      features: [
        'Designed for Students',
        'Special Institution Rates',
        'Seamless Collaboration',
        'Foster Learning & Collaboration',
        'Empowering Next Gen Coders',
      ],
      mostPopular: false,
      buy: false,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '/contact',
      price: null,
      description:
        'Tailored for enterprises. Scalable, secure, and dedicated support.',
      features: [
        'Tailored Solutions',
        'Customizable Plans',
        'Dedicated Support',
        'Advanced Security & Compliance',
        'Scalable & Robust',
        'Full control over your data',
        'On-Premises Coming Soon',
      ],
      mostPopular: false,
      buy: false,
    },
  ],
}

export default function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white">
      {/* Header */}
      <Header></Header>
      <main>

      </main>
      <Footer />
    </div>
  )
}
