"use client"

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function ThankYouStep() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-purple-600 mb-8"
      >
        <CheckCircle size={64} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Merci!</h2>
        <p className="text-gray-600">
          Nous avons bien reçu votre demande.<br />
          Notre équipe vous contactera très prochainement.
        </p>
      </motion.div>
    </motion.div>
  )
}