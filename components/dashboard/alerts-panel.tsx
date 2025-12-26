import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Package, FileX, Info } from 'lucide-react'

interface Alert {
  id: number
  type: 'emergency' | 'inventory' | 'insurance'
  title: string
  description: string
  time: string
  icon: any
  iconBg: string
  iconColor: string
}

const alerts: Alert[] = [
  {
    id: 1,
    type: 'emergency',
    title: 'Emergency Cases',
    description: '3 new emergency cases reported',
    time: '10 mins ago',
    icon: AlertCircle,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    id: 2,
    type: 'inventory',
    title: 'Low Inventory',
    description: 'Inventory running low in Pharmacy',
    time: '20 mins ago',
    icon: Package,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    type: 'insurance',
    title: 'Claim Rejections',
    description: '5 Insurance Claims rejected',
    time: '30 mins ago',
    icon: FileX,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
]

export function AlertsPanel() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Alerts & Notifications</CardTitle>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon
            return (
              <div key={alert.id} className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${alert.iconBg}`}>
                  <Icon className={`h-5 w-5 ${alert.iconColor}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-500">{alert.time}</span>
                      <Info className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{alert.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
