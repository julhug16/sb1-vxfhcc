"use client"

import { Button } from "@/components/ui/button"

const AMENITIES = [
  { id: 'terrace', label: 'Terrasse' },
  { id: 'balcony', label: 'Balcon' },
  { id: 'garden', label: 'Jardin' },
  { id: 'parquet', label: 'Parquet' },
  { id: 'moldings', label: 'Moulures' },
  { id: 'fireplace', label: 'Cheminée' },
  { id: 'bright', label: 'Très lumineux' },
  { id: 'view', label: 'Vue dégagée' },
  { id: 'duplex', label: 'Duplex/Triplex' },
  { id: 'beams', label: 'Poutres apparentes' },
  { id: 'security', label: 'Système de sécurité' },
  { id: 'smart', label: 'Maison connectée' },
  { id: 'cellar', label: 'Cave' },
  { id: 'caretaker', label: 'Gardien' },
  { id: 'quiet', label: 'Calme' },
  { id: 'digicode', label: 'Digicode' }
]

export default function AmenitiesStep({
  value,
  onChange
}: {
  value: string[]
  onChange: (value: string[]) => void
}) {
  const toggleAmenity = (amenityId: string) => {
    if (value.includes(amenityId)) {
      onChange(value.filter(id => id !== amenityId))
    } else {
      onChange([...value, amenityId])
    }
  }

  return (
    <div className="space-y-8 pb-32"> {/* Added pb-32 for bottom padding */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Les + de votre bien</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {AMENITIES.map((amenity) => (
          <Button
            key={amenity.id}
            type="button"
            variant={value.includes(amenity.id) ? "default" : "outline"}
            className={`h-auto py-3 px-4 rounded-lg ${
              value.includes(amenity.id) 
                ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                : 'hover:border-purple-200'
            }`}
            onClick={() => toggleAmenity(amenity.id)}
          >
            {amenity.label}
          </Button>
        ))}
      </div>
    </div>
  )
}