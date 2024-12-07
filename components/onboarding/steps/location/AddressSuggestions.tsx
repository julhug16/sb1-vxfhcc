"use client"

import { motion, AnimatePresence } from "framer-motion"

interface AddressSuggestionsProps {
  suggestions: google.maps.places.AutocompletePrediction[]
  onSelect: (suggestion: google.maps.places.AutocompletePrediction) => void
  highlightedIndex: number
}

export default function AddressSuggestions({
  suggestions,
  onSelect,
  highlightedIndex
}: AddressSuggestionsProps) {
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto"
      >
        {suggestions.map((suggestion, index) => (
          <li
            key={suggestion.place_id}
            className={`px-4 py-2 cursor-pointer transition-colors ${
              index === highlightedIndex 
                ? 'bg-purple-50 text-purple-700' 
                : 'hover:bg-purple-50'
            }`}
            onClick={() => onSelect(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}