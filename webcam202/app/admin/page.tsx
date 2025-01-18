import { Card } from '@/components/ui/card'
import {
  Chart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from '@/components/ui/chart'

export default function AdminDashboard() {
  // Sample data - replace with real data in production
  const stats = [
    { name: 'Total Users', value: '12,493' },
    { name: 'Active Streams', value: '231' },
    { name: 'Revenue (24h)', value: '$8,294' },
    { name: 'Reports', value: '23' },
  ]

  const chartData = [
    { date: '2024-01-08', users: 1200, streams: 180 },
    { date: '2024-01-09', users: 1350, streams: 195 },
    { date: '2024-01-10', users: 1500, streams: 205 },
    { date: '2024-01-11', users: 1450, streams: 220 },
    { date: '2024-01-12', users: 1600, streams: 240 },
    { date: '2024-01-13', users: 1750, streams: 260 },
    { date: '2024-01-14', users: 1900, streams: 280 },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Platform Activity</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#2563eb" 
                name="Active Users" 
              />
              <Line 
                type="monotone" 
                dataKey="streams" 
                stroke="#16a34a" 
                name="Active Streams" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}

