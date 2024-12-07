import { Poppins } from 'next/font/google'
import OnboardingForm from '@/components/onboarding/OnboardingForm'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function OnboardingPage() {
  return (
    <main className={`${poppins.variable} font-sans min-h-screen bg-gradient-to-b from-purple-50 to-white`}>
      <div className="container mx-auto px-4 py-12">
        <OnboardingForm />
      </div>
    </main>
  )
}