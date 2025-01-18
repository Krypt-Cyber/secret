'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

type Report = {
  id: string
  type: 'stream' | 'chat' | 'user'
  reason: string
  timestamp: string
  status: 'pending' | 'resolved' | 'dismissed'
  severity: 'low' | 'medium' | 'high'
}

export default function ModerationQueue() {
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      type: 'stream',
      reason: 'Inappropriate content',
      timestamp: '2024-01-14 15:30',
      status: 'pending',
      severity: 'high'
    },
    {
      id: '2',
      type: 'chat',
      reason: 'Spam messages',
      timestamp: '2024-01-14 15:25',
      status: 'pending',
      severity: 'low'
    },
    // Add more sample reports as needed
  ])

  const handleResolve = (id: string) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'resolved' } : report
    ))
  }

  const handleDismiss = (id: string) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: 'dismissed' } : report
    ))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Moderation Queue</h1>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.type}</TableCell>
                <TableCell>{report.reason}</TableCell>
                <TableCell>{report.timestamp}</TableCell>
                <TableCell>
                  <Badge variant={
                    report.severity === 'high' ? 'destructive' :
                    report.severity === 'medium' ? 'warning' : 'default'
                  }>
                    {report.severity}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    report.status === 'resolved' ? 'success' :
                    report.status === 'dismissed' ? 'secondary' : 'default'
                  }>
                    {report.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleResolve(report.id)}
                      disabled={report.status !== 'pending'}
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDismiss(report.id)}
                      disabled={report.status !== 'pending'}
                    >
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

