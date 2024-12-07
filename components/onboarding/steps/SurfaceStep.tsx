"use client"

import { Input } from "@/components/ui/input"

export default function SurfaceStep({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Surface</h2>
      </div>

      <div className="relative">
        <Input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Entrez la surface de votre bien"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-lg h-14 pr-12 text-right"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          m²
        </span>
      </div>
    </div>
  )
}