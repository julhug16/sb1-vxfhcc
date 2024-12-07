"use client"

import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export default function PhoneStep({
  value,
  onChange
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [isFocused, setIsFocused] = useState(false)

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    // Allow digits, spaces, and + at the beginning
    const sanitized = input.replace(/[^\d\s+]/g, '')
    onChange(sanitized)
  }

  // Handle focus
  const handleFocus = () => {
    setIsFocused(true)
    if (value === 'numéro de mobile') {
      onChange('')
    }
  }

  // Handle blur
  const handleBlur = () => {
    setIsFocused(false)
    if (!value.trim()) {
      onChange('numéro de mobile')
    }
  }

  // Initialize with placeholder
  useEffect(() => {
    if (!value) {
      onChange('numéro de mobile')
    }
  }, [])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Téléphone</h2>
      </div>

      <div className="flex">
        <div className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-r-0 border-input rounded-l-lg">
          🇫🇷
        </div>
        <Input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`text-lg h-14 rounded-l-none ${
            !isFocused && value === 'numéro de mobile' ? 'text-gray-400' : 'text-black'
          }`}
        />
      </div>
    </div>
  )
}