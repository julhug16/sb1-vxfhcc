"use client"

import { Input } from "@/components/ui/input"
import { MapPin } from 'lucide-react'
import { motion } from "framer-motion"

interface AddressInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  isLoading: boolean
  disabled: boolean
}

export default function AddressInput({
  value,
  onChange,
  onKeyDown,
  isLoading,
  disabled
}: AddressInputProps) {
  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
      {isLoading && (
        <motion.div 
          className="absolute right-3 top-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full" />
        </motion.div>
      )}
      <Input
        type="text"
        placeholder="saisissez votre adresse"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="pl-10 pr-10"
        disabled={disabled}
      />
    </div>
  )
}