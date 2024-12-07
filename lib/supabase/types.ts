export interface Profile {
  id: string
  email: string
  first_name: string
  last_name: string
  phone: string
  role: 'user' | 'admin' | 'super_admin'
  created_at: string
}

export interface Property {
  id: string
  owner_id: string
  type: string
  address: string
  city: string
  postal_code: string
  surface: number
  rooms: number
  bedrooms: number
  bathrooms: number
  floor: number
  total_floors: number
  has_elevator: boolean
  amenities: string[]
  condition: string
  photos: string[]
  status: 'pending' | 'approved' | 'rejected' | 'archived'
  created_at: string
  updated_at: string
}

export interface Application {
  id: string
  property_id: string
  status: 'pending' | 'approved' | 'rejected'
  reviewed_by: string | null
  review_notes: string | null
  created_at: string
  updated_at: string
}