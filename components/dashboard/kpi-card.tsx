import { Card, CardContent } from '@/components/ui/card'

interface KPICardProps {
  title: string
  value: string | number
  bgColor: string
  textColor?: string
}

export function KPICard({ title, value, bgColor, textColor = "text-white" }: KPICardProps) {
  return (
    <Card className={`${bgColor} border-0 shadow-sm`}>
      <CardContent className="p-6">
        <p className={`text-sm font-medium ${textColor} opacity-90 mb-2`}>
          {title}
        </p>
        <p className={`text-4xl font-bold ${textColor}`}>
          {value}
        </p>
      </CardContent>
    </Card>
  )
}
