import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface BedData {
  ward: string
  percentage: number
}

const bedData: BedData[] = [
  { ward: 'Ward', percentage: 73 },
  { ward: 'ICU', percentage: 50 },
  { ward: 'OT', percentage: 60 },
]

export function BedAvailability() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Bed Availability</CardTitle>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <button className="hover:text-blue-600">← List</button>
            <button className="hover:text-blue-600">On-site →</button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {bedData.map((bed) => (
          <div key={bed.ward} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{bed.ward}</span>
              <span className="font-semibold text-slate-900">{bed.percentage}%</span>
            </div>
            <Progress value={bed.percentage} className="h-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
