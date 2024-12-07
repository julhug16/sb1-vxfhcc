"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function AgreementStep({
  value,
  onChange,
  onComplete
}: {
  value: boolean
  onChange: (value: boolean) => void
  onComplete: () => void
}) {
  const agreements = [
    "Je suis bien propriétaire du bien que je liste sur Seecret et j'en fournirai la preuve.",
    "Je souhaite rejoindre Seecret en tant que particulier, et non en tant que professionnel de l'immobilier. Je ne ferai pas de démarchage.",
    "Je m'engage à respecter les conditions générales et suis en accord avec les Règles de Vie Privée de Seecret"
  ]

  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false])

  const handleCheck = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = checked
    setCheckedItems(newCheckedItems)
    
    // Only set parent value to true if all items are checked
    const allChecked = newCheckedItems.every(Boolean)
    onChange(allChecked)
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col px-4 py-8"
      >
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-semibold">Dernière étape</h2>
          <p className="text-gray-600">
            Acceptez les conditions d'utilisation pour finaliser votre inscription
          </p>
        </div>

        <div className="space-y-6 flex-1">
          {agreements.map((text, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Checkbox 
                id={`agreement-${index}`}
                checked={checkedItems[index]}
                onCheckedChange={(checked) => handleCheck(index, checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor={`agreement-${index}`}
                className="text-sm leading-tight"
              >
                {text}
              </label>
            </div>
          ))}
        </div>

        <Button
          className="w-full mt-auto mb-4 bg-purple-600 hover:bg-purple-700 text-white h-14 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!value}
          onClick={onComplete}
        >
          Soumettre ma demande
        </Button>
      </motion.div>
    </div>
  )
}