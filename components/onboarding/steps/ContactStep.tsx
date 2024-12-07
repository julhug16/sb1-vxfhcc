"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactStep({
  contact,
  onChange
}: {
  contact: { email: string; phone: string }
  onChange: (contact: { email: string; phone: string }) => void
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Comment pouvons-nous vous contacter ?</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            value={contact.email}
            onChange={(e) => onChange({ ...contact, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06 XX XX XX XX"
            value={contact.phone}
            onChange={(e) => onChange({ ...contact, phone: e.target.value })}
          />
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center">
        En continuant, vous acceptez que Seecret vous contacte au sujet de votre bien
      </p>
    </div>
  )
}