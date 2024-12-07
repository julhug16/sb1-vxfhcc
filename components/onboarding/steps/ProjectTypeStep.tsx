"use client"

import { Card } from "@/components/ui/card"

const PROJECT_TYPES = [
  {
    id: 'buy_and_sell',
    label: "Je souhaite trouver mon prochain bien, et vendre le miens pour l'acheter"
  },
  {
    id: 'sell_only',
    label: "Je souhaite vendre mon bien, sans projet de rachat"
  },
  {
    id: 'test_market',
    label: "Je souhaite tester l'attractivité de mon bien, sans projet de vente défini"
  }
]

export default function ProjectTypeStep({ 
  value, 
  onChange 
}: { 
  value: string
  onChange: (value: string) => void 
}) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Quel est votre projet ?</h2>
      </div>

      <div className="space-y-3">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onChange(type.id)}
            className="w-full text-left"
          >
            <Card
              className={`p-4 cursor-pointer transition-all duration-200 ${
                value === type.id 
                  ? 'border-2 border-purple-600 bg-purple-50' 
                  : 'border hover:border-purple-200'
              }`}
            >
              <span className={`block text-base ${
                value === type.id ? 'text-purple-600 font-medium' : 'text-gray-700'
              }`}>
                {type.label}
              </span>
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}