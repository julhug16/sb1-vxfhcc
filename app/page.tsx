import { Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function LandingPage() {
  return (
    <main className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="mb-12">
            <Image
              src="/seecret-logo.svg"
              alt="Seecret"
              width={137}
              height={18}
              className="mx-auto w-[100px] sm:w-[137px]"
              priority
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black leading-tight">
            La plateforme
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block">du off-market</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black mb-12 max-w-2xl mx-auto">
            Seecret vous ouvre la porte de biens exclusifs, introuvables ailleurs, à visiter avant leur mise en vente. Vous êtes propriétaire à la recherche de votre prochain bien? Vous êtes au bon endroit.
          </p>
          <div className="space-y-4">
            <Link href="/onboarding">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                Mon bien est-il éligible ?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-gray-500">
              <p>Vendre sans projet d'achat?</p>
              <p>C'est possible et sans commission.</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2024 Seecret. Tous droits réservés.</p>
      </footer>
    </main>
  )
}