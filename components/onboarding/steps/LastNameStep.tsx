"use client"

import { Input } from "@/components/ui/input"

export default function LastNameStep({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Nom</h2>
      </div>

      <Input
        type="text"
        placeholder="Votre nom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-lg h-14 px-4"
      />
    </div>
  )
}