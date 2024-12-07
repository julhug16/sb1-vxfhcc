"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Application, Property } from '@/lib/supabase/types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle } from 'lucide-react'

interface ApplicationWithProperty extends Application {
  property: Property
}

export default function Applications() {
  const [applications, setApplications] = useState<ApplicationWithProperty[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from('applications')
      .select(`
        *,
        property:properties(*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching applications:', error)
    } else {
      setApplications(data || [])
    }
    setLoading(false)
  }

  const handleApplicationUpdate = async (id: string, status: 'approved' | 'rejected') => {
    const { error } = await supabase
      .from('applications')
      .update({ 
        status,
        reviewed_by: (await supabase.auth.getUser()).data.user?.id,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)

    if (error) {
      console.error('Error updating application:', error)
    } else {
      fetchApplications()
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Applications</h1>
      </div>

      <div className="grid gap-4">
        {applications.length === 0 ? (
          <Card className="p-6 text-center text-gray-500">
            Aucune application
          </Card>
        ) : (
          applications.map((application) => (
            <Card key={application.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {application.property.address}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(application.created_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      application.status === 'approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {application.status === 'pending' ? 'En attente' :
                       application.status === 'approved' ? 'Approuvé' :
                       'Refusé'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Surface</p>
                    <p className="font-medium">{application.property.surface} m²</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Pièces</p>
                    <p className="font-medium">{application.property.rooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">État</p>
                    <p className="font-medium">{application.property.condition}</p>
                  </div>
                </div>

                {application.status === 'pending' && (
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleApplicationUpdate(application.id, 'rejected')}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Refuser
                    </Button>
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApplicationUpdate(application.id, 'approved')}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approuver
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}