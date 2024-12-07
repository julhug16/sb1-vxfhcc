"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus } from "lucide-react"
import { useEffect } from "react"

interface LayoutValue {
  rooms: number
  bedrooms: number
  bathrooms: number
}

export default function LayoutStep({
  value,
  onChange
}: {
  value: LayoutValue
  onChange: (value: LayoutValue) => void
}) {
  const updateField = (field: keyof LayoutValue, increment: boolean) => {
    const newValue = increment ? value[field] + 1 : Math.max(0, value[field] - 1)
    
    if (field === 'bedrooms') {
      // When updating bedrooms, ensure total rooms is at least equal to bedrooms
      const newRooms = Math.max(value.rooms, newValue)
      onChange({
        ...value,
        bedrooms: newValue,
        rooms: newRooms
      })
    } else if (field === 'rooms') {
      // Don't allow total rooms to be less than bedrooms
      if (!increment && newValue < value.bedrooms) return
      onChange({
        ...value,
        [field]: newValue
      })
    } else {
      onChange({
        ...value,
        [field]: newValue
      })
    }
  }

  const Counter = ({ label, field }: { label: string; field: keyof LayoutValue }) => (
    <div className="flex items-center justify-between py-4">
      <span className="text-lg">{label}</span>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-lg"
          onClick={() => updateField(field, false)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="w-10 text-center text-lg">{value[field]}</div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-lg"
          onClick={() => updateField(field, true)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Disposition</h2>
        <p className="text-sm text-gray-500 mt-2">Une chambre compte comme une pièce</p>
      </div>

      <Card className="p-4">
        <Counter label="Pièces" field="rooms" />
        <div className="border-t border-gray-200">
          <Counter label="Chambres" field="bedrooms" />
        </div>
        <div className="border-t border-gray-200">
          <Counter label="Salles de Bain" field="bathrooms" />
        </div>
      </Card>
    </div>
  )
}