"use client"

import { motion } from 'framer-motion'
import { XCircle } from 'lucide-react'

export default function IneligibleScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-red-600 mb-8"
      >
        <XCircle size={64} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Désolé
        </h2>
        <p className="text-gray-600">
          Votre bien ne correspond pas à nos critères de sélections.<br />
          Bon courage dans la réalisation de votre projet.
        </p>
      </motion.div>
    </div>
  )
}