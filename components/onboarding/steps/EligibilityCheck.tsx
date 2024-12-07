"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import IneligibleScreen from './IneligibleScreen'

export default function EligibilityCheck({
  onComplete,
  surface,
  rooms
}: {
  onComplete: () => void
  surface: number
  rooms: number
}) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isEligible, setIsEligible] = useState(true)

  useEffect(() => {
    // Check if property meets minimum requirements
    if (surface < 40 || rooms < 2) {
      setIsEligible(false)
      return
    }

    // Show checking animation for 2 seconds
    const checkingTimeout = setTimeout(() => {
      setShowSuccess(true)
      
      // Show success for 1 second before moving to photos
      const successTimeout = setTimeout(() => {
        onComplete()
      }, 1000)

      return () => clearTimeout(successTimeout)
    }, 2000)

    return () => clearTimeout(checkingTimeout)
  }, [onComplete, surface, rooms])

  if (!isEligible) {
    return <IneligibleScreen />
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white px-4">
      {showSuccess ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Votre bien est éligible!
          </h2>
          <p className="text-gray-500">encore une étape :)</p>
        </motion.div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Vérification de votre éligibilité
          </h2>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-purple-600 flex justify-center"
          >
            <Check size={32} />
          </motion.div>
          <p className="text-gray-500 mt-4">un instant svp</p>
        </div>
      )}
    </div>
  )
}