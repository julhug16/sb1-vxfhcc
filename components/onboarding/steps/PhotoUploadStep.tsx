"use client"

import { useRef, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PhotoUploadStep({
  value,
  onChange,
  onComplete
}: {
  value: File[]
  onChange: (value: File[]) => void
  onComplete: () => void
}) {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newPhotos = Array.from(e.target.files)
      onChange([...value, ...newPhotos].slice(0, 3))
    }
  }

  const removePhoto = (index: number) => {
    onChange(value.filter((_, i) => i !== index))
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex flex-col bg-white px-4 py-8"
    >
      <div className="text-center space-y-4 mb-6">
        <h2 className="text-3xl font-semibold">Ajoutez 3 photos</h2>
        <p className="text-gray-600">
          Nous souhaitons nous faire une idée de votre bien.
        </p>
      </div>

      <Card className="flex-1 p-6 flex flex-col">
        <p className="text-lg font-medium mb-6 text-center">
          Montrez-nous vos pièces principales.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileSelect}
        />

        {value.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {value.map((photo, index) => (
              <div key={index} className="relative aspect-square bg-purple-50 rounded-lg flex items-center justify-center overflow-hidden">
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                >
                  <X size={16} />
                </button>
                <img 
                  src={URL.createObjectURL(photo)} 
                  alt={`Photo ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          {value.length < 3 ? (
            <Button 
              variant="outline"
              className="w-full h-32 border-dashed border-2 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
              onClick={triggerFileInput}
              disabled={uploading}
            >
              <div className="flex flex-col items-center space-y-4">
                <Upload className="w-8 h-8 text-purple-600" />
                <span className="text-purple-600 font-medium">
                  {uploading ? 'Chargement...' : '+ Ajoutez vos photos'}
                </span>
              </div>
            </Button>
          ) : (
            <Button
              className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              onClick={onComplete}
            >
              Valider mes photos
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}