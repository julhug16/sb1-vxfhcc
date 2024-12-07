import { ELIGIBLE_CITIES, MINIMUM_SURFACE, MINIMUM_ROOMS, INELIGIBLE_CITY_MESSAGE, INELIGIBLE_PROPERTY_MESSAGE } from "@/lib/constants/location"

export function isEligibleAddress(
  components: google.maps.GeocoderAddressComponent[],
  surface: number,
  rooms: number
): { isEligible: boolean; message: string | null } {
  const city = components.find(component => 
    component.types.includes('locality')
  )?.long_name

  if (!city || !ELIGIBLE_CITIES.includes(city)) {
    return {
      isEligible: false,
      message: INELIGIBLE_CITY_MESSAGE
    }
  }

  // Only check property requirements if both surface and rooms are provided
  if (surface && rooms) {
    if (surface < MINIMUM_SURFACE || rooms < MINIMUM_ROOMS) {
      return {
        isEligible: false,
        message: INELIGIBLE_PROPERTY_MESSAGE
      }
    }
  }

  return {
    isEligible: true,
    message: null
  }
}

export function extractAddressComponents(result: google.maps.GeocoderResult) {
  const { address_components } = result
  
  const streetNumber = address_components.find(component => 
    component.types.includes('street_number')
  )?.long_name || ''

  const route = address_components.find(component => 
    component.types.includes('route')
  )?.long_name || ''

  const postalCode = address_components.find(component => 
    component.types.includes('postal_code')
  )?.short_name || ''

  const city = address_components.find(component => 
    component.types.includes('locality')
  )?.long_name || ''

  return {
    streetNumber,
    route,
    postalCode,
    city,
    formattedAddress: `${streetNumber} ${route}, ${postalCode} ${city}`.trim()
  }
}