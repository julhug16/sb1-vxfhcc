"use client"

import { useEffect, useState } from "react"
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import AddressInput from "./location/AddressInput"
import AddressSuggestions from "./location/AddressSuggestions"
import { isEligibleAddress, extractAddressComponents } from "@/lib/utils/location"
import { Alert } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

interface LocationValue {
  address: string
  placeId: string | null
  coordinates: {
    lat: number | null
    lng: number | null
  }
  isEligible: boolean
  city: string | null
}

export default function LocationStep({
  value,
  onChange,
  surface,
  rooms
}: {
  value: LocationValue
  onChange: (value: LocationValue) => void
  surface: number
  rooms: number
}) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'fr' },
      types: ['address']
    },
    debounce: 300,
    defaultValue: value.address
  })

  useEffect(() => {
    setValue(value.address, false)
  }, [value.address, setValue])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setSuccess(null)
    setValue(e.target.value)
    onChange({
      address: e.target.value,
      placeId: null,
      coordinates: { lat: null, lng: null },
      isEligible: false,
      city: null
    })
    setShowSuggestions(true)
    setHighlightedIndex(-1)
  }

  const handleSelect = async (suggestion: google.maps.places.AutocompletePrediction) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    setValue(suggestion.description, false)
    clearSuggestions()
    setShowSuggestions(false)

    try {
      const results = await getGeocode({ placeId: suggestion.place_id })
      const { lat, lng } = await getLatLng(results[0])
      const address = extractAddressComponents(results[0])
      const { isEligible, message } = isEligibleAddress(results[0].address_components, surface, rooms)

      if (!isEligible && message) {
        setError(message)
      } else {
        setSuccess("Génial! Seecret est bien présent dans votre ville!")
      }
      
      onChange({
        address: address.formattedAddress,
        placeId: suggestion.place_id,
        coordinates: { lat, lng },
        isEligible,
        city: address.city
      })
    } catch (error) {
      console.error("Error: ", error)
      setError("Une erreur est survenue lors de la validation de l'adresse.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || !data.length) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < data.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : prev
        )
        break
      case "Enter":
        e.preventDefault()
        if (highlightedIndex >= 0) {
          handleSelect(data[highlightedIndex])
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setHighlightedIndex(-1)
        break
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">A quelle adresse se situe votre bien ?</h2>
      </div>

      <div className="relative">
        <AddressInput
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          isLoading={isLoading}
          disabled={!ready}
        />

        {status === "OK" && showSuggestions && (
          <AddressSuggestions
            suggestions={data}
            onSelect={handleSelect}
            highlightedIndex={highlightedIndex}
          />
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="flex items-center">
          <AlertCircle className="h-4 w-4" />
          <span className="ml-2">{error}</span>
        </Alert>
      )}

      {success && (
        <Alert className="flex items-center bg-green-50 text-green-700 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span className="ml-2">{success}</span>
        </Alert>
      )}
    </div>
  )
}