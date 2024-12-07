"use client"

import { Card } from "@/components/ui/card"
import { Building2, Home, Building } from 'lucide-react'

const PROPERTY_TYPES = [
  {
    id: 'apartment',
    label: 'Appartement',
    icon: Building2
  },
  {
    id: 'house',
    label: 'Maison',
    icon: Home
  },
  {
    id: 'duplex',
    label: 'Duplex',
    icon: Building
  }
]

export default function PropertyTypeStep({ 
  value, 
  onChange 
}: { 
  value: string
  onChange: (value: string) => void 
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Quel type de bien souhaitez-vous vendre ?</h2>
      <div className="grid gap-4">
        {PROPERTY_TYPES.map((type) => {
          const Icon = type.icon
          return (
            <Card
              key={type.id}
              className={`p-4 cursor-pointer transition-all duration-200 ${
                value === type.id 
                  ? 'border-purple-600 bg-purple-50' 
                  : 'hover:border-purple-200'
              }`}
              onClick={() => onChange(type.id)}
            >
              <div className="flex items-center">
                <Icon className={`w-6 h-6 mr-3 ${
                  value === type.id ? 'text-purple-600' : 'text-gray-500'
                }`} />
                <span className={value === type.id ? 'text-purple-600' : 'text-gray-700'}>
                  {type.label}
                </span>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}