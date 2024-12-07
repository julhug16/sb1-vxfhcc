"use client"

import { Card } from "@/components/ui/card"
import { Sparkles, CheckCircle, Wrench } from 'lucide-react'

const CONDITIONS = [
  { 
    id: 'new', 
    label: 'Refait à neuf',
    icon: Sparkles,
    description: 'Rénové récemment, aucun travaux nécessaire'
  },
  { 
    id: 'good', 
    label: 'Bon état',
    icon: CheckCircle,
    description: 'Bien entretenu, quelques rafraîchissements possibles'
  },
  { 
    id: 'needs_work', 
    label: 'Travaux à prévoir',
    icon: Wrench,
    description: 'Nécessite des rénovations'
  }
]

export default function ConditionStep({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-8 pb-32"> {/* Added pb-32 for bottom padding */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">État</h2>
      </div>

      <div className="space-y-4">
        {CONDITIONS.map((condition) => {
          const Icon = condition.icon
          return (
            <Card
              key={condition.id}
              className={`p-6 cursor-pointer transition-all duration-200 ${
                value === condition.id 
                  ? 'border-purple-600 bg-purple-50' 
                  : 'hover:border-purple-200'
              }`}
              onClick={() => onChange(condition.id)}
            >
              <div className="flex items-center gap-4">
                <Icon className={`w-6 h-6 ${
                  value === condition.id ? 'text-purple-600' : 'text-gray-400'
                }`} />
                <div>
                  <div className={`text-lg font-medium ${
                    value === condition.id ? 'text-purple-600' : 'text-gray-700'
                  }`}>
                    {condition.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {condition.description}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}