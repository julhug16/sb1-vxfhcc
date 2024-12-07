"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus } from "lucide-react"
import { useEffect } from "react"

interface FloorValue {
  floor: number
  totalFloors: number
  hasElevator: boolean | null
}

export default function FloorStep({
  value,
  onChange
}: {
  value: FloorValue
  onChange: (value: FloorValue) => void
}) {
  const updateField = (field: 'floor' | 'totalFloors', increment: boolean) => {
    const newValue = increment ? value[field] + 1 : Math.max(0, value[field] - 1)
    
    if (field === 'floor') {
      // Automatically update total floors if needed
      const newTotalFloors = Math.max(newValue, value.totalFloors)
      onChange({
        ...value,
        floor: newValue,
        totalFloors: newTotalFloors
      })
    } else {
      // Don't allow total floors to be less than current floor
      if (!increment && newValue < value.floor) return
      onChange({
        ...value,
        [field]: newValue
      })
    }
  }

  // Reset elevator selection on mount
  useEffect(() => {
    if (value.hasElevator !== null) {
      onChange({ ...value, hasElevator: null })
    }
  }, [])

  const Counter = ({ label, field }: { label: string; field: 'floor' | 'totalFloors' }) => (
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
        <h2 className="text-2xl font-semibold">Étage</h2>
      </div>

      <Card className="p-4">
        <Counter label="Étage de votre bien" field="floor" />
        <div className="border-t border-gray-200">
          <Counter label="Nombres d'étages dans l'immeuble" field="totalFloors" />
        </div>
        <div className="border-t border-gray-200 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg">Ascenseur?</span>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={value.hasElevator === true ? "default" : "outline"}
                className={`px-6 rounded-lg ${
                  value.hasElevator === true ? 'bg-purple-600 hover:bg-purple-700' : ''
                }`}
                onClick={() => onChange({ ...value, hasElevator: true })}
              >
                oui
              </Button>
              <Button
                type="button"
                variant={value.hasElevator === false ? "default" : "outline"}
                className={`px-6 rounded-lg ${
                  value.hasElevator === false ? 'bg-purple-600 hover:bg-purple-700' : ''
                }`}
                onClick={() => onChange({ ...value, hasElevator: false })}
              >
                non
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}