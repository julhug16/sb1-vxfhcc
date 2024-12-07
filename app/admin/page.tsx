"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Application } from '@/lib/supabase/types'
import { Card } from '@/components/ui/card'

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          property:properties(*)
        `)
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error fetching applications:', error)
      } else {
        setApplications(data || [])
      }
      setLoading(false)
    }

    fetchApplications()

    // Set up real-time subscription
    const subscription = supabase
      .channel('applications')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'applications' 
      }, payload => {
        console.log('Change received!', payload)
        fetchApplications()
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

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
        <h1 className="text-2xl font-semibold">Applications récentes</h1>
      </div>

      <div className="grid gap-4">
        {applications.length === 0 ? (
          <Card className="p-6 text-center text-gray-500">
            Aucune application en attente
          </Card>
        ) : (
          applications.map((application) => (
            <Card key={application.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Application #{application.id}
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
            </Card>
          ))
        )}
      </div>
    </div>
  )
}