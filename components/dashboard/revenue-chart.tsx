'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const revenueData = [
  { day: 'Wed', amount: 9500 },
  { day: 'Wed', amount: 9800 },
  { day: 'Thu', amount: 10200 },
  { day: 'Wed', amount: 10500 },
  { day: 'Sas', amount: 11000 },
  { day: 'True', amount: 10800 },
  { day: 'Thu', amount: 11200 },
  { day: 'Fri', amount: 11500 },
  { day: 'Sat', amount: 11300 },
  { day: 'Wed', amount: 11800 },
  { day: 'Tue', amount: 12000 },
]

export function RevenueChart() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Revenue Overview</CardTitle>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600">
              Today
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600">
              Week
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600">
              Month
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="day" 
              stroke="#94a3b8" 
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#94a3b8" 
              fontSize={12}
              tickLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
              formatter={(value: any) => [`$${value}`, 'Revenue']}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#2563eb" 
              strokeWidth={2}
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
