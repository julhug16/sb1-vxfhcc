"use client"

import { Input } from "@/components/ui/input"

export default function EmailStep({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Email</h2>
      </div>

      <Input
        type="email"
        placeholder="adresse@email.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-lg h-14 px-4"
      />
    </div>
  )
}