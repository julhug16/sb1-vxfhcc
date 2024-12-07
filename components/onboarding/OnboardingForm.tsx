"use client"

import { useState } from 'react'
import ProjectTypeStep from './steps/ProjectTypeStep'
import PropertyTypeStep from './steps/PropertyTypeStep'
import LocationStep from './steps/LocationStep'
import SurfaceStep from './steps/SurfaceStep'
import LayoutStep from './steps/LayoutStep'
import FloorStep from './steps/FloorStep'
import AmenitiesStep from './steps/AmenitiesStep'
import ConditionStep from './steps/ConditionStep'
import FirstNameStep from './steps/FirstNameStep'
import LastNameStep from './steps/LastNameStep'
import EmailStep from './steps/EmailStep'
import PhoneStep from './steps/PhoneStep'
import EligibilityCheck from './steps/EligibilityCheck'
import PhotoUploadStep from './steps/PhotoUploadStep'
import AgreementStep from './steps/AgreementStep'
import ThankYouStep from './steps/ThankYouStep'

const STEPS = [
  'project',
  'property',
  'location',
  'surface',
  'layout',
  'floor',
  'amenities',
  'condition',
  'firstName',
  'lastName',
  'email',
  'phone',
  'eligibility',
  'photos',
  'agreement',
  'thankyou'
] as const

type Step = typeof STEPS[number]

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

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [formData, setFormData] = useState({
    project: '',
    property: '',
    location: {
      address: '',
      placeId: null,
      coordinates: { lat: null, lng: null },
      isEligible: false,
      city: null
    } as LocationValue,
    surface: '',
    layout: { rooms: 0, bedrooms: 0, bathrooms: 0 },
    floor: { floor: 0, totalFloors: 0, hasElevator: null as boolean | null },
    amenities: [] as string[],
    condition: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    photos: [] as File[],
    agreement: false
  })

  const isStepValid = () => {
    const step = STEPS[currentStep]
    switch (step) {
      case 'project':
        return formData.project !== ''
      case 'property':
        return formData.property !== ''
      case 'location':
        return formData.location.isEligible
      case 'surface':
        return formData.surface !== '' && Number(formData.surface) > 0
      case 'layout':
        return formData.layout.rooms > 0
      case 'floor':
        return formData.floor.hasElevator !== null
      case 'amenities':
        return true // Optional
      case 'condition':
        return formData.condition !== ''
      case 'firstName':
        return formData.firstName.length >= 2
      case 'lastName':
        return formData.lastName.length >= 2
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      case 'phone':
        return formData.phone.replace(/\D/g, '').length >= 10
      case 'eligibility':
        return true
      case 'photos':
        return formData.photos.length === 3
      case 'agreement':
        return formData.agreement
      case 'thankyou':
        return true
      default:
        return false
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < STEPS.length - 1 && isStepValid()) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    const step = STEPS[currentStep]
    switch (step) {
      case 'project':
        return <ProjectTypeStep value={formData.project} onChange={(v) => updateFormData('project', v)} />
      case 'property':
        return <PropertyTypeStep value={formData.property} onChange={(v) => updateFormData('property', v)} />
      case 'location':
        return <LocationStep 
          value={formData.location} 
          onChange={(v) => updateFormData('location', v)}
          surface={Number(formData.surface)}
          rooms={formData.layout.rooms}
        />
      case 'surface':
        return <SurfaceStep value={formData.surface} onChange={(v) => updateFormData('surface', v)} />
      case 'layout':
        return <LayoutStep value={formData.layout} onChange={(v) => updateFormData('layout', v)} />
      case 'floor':
        return <FloorStep value={formData.floor} onChange={(v) => updateFormData('floor', v)} />
      case 'amenities':
        return <AmenitiesStep value={formData.amenities} onChange={(v) => updateFormData('amenities', v)} />
      case 'condition':
        return <ConditionStep value={formData.condition} onChange={(v) => updateFormData('condition', v)} />
      case 'firstName':
        return <FirstNameStep value={formData.firstName} onChange={(v) => updateFormData('firstName', v)} />
      case 'lastName':
        return <LastNameStep value={formData.lastName} onChange={(v) => updateFormData('lastName', v)} />
      case 'email':
        return <EmailStep value={formData.email} onChange={(v) => updateFormData('email', v)} />
      case 'phone':
        return <PhoneStep value={formData.phone} onChange={(v) => updateFormData('phone', v)} />
      case 'eligibility':
        return <EligibilityCheck 
          onComplete={handleNext}
          surface={Number(formData.surface)}
          rooms={formData.layout.rooms}
        />
      case 'photos':
        return <PhotoUploadStep 
          value={formData.photos} 
          onChange={(v) => updateFormData('photos', v)} 
          onComplete={handleNext}
        />
      case 'agreement':
        return <AgreementStep 
          value={formData.agreement} 
          onChange={(v) => updateFormData('agreement', v)}
          onComplete={handleNext}
        />
      case 'thankyou':
        return <ThankYouStep />
      default:
        return null
    }
  }

  const currentStepComponent = renderStep()
  if (!currentStepComponent) return null

  // Don't show navigation for certain steps
  const hideNavigation = ['eligibility', 'photos', 'agreement', 'thankyou'].includes(STEPS[currentStep])

  if (hideNavigation) {
    return (
      <div className="min-h-screen flex flex-col">
        {currentStepComponent}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col px-4">
        {currentStepComponent}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="max-w-md mx-auto flex gap-4">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="w-14 h-14 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              ←
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 h-14 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}