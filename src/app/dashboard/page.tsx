import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, BookOpen, CheckSquare, Archive, FileText, Target } from 'lucide-react'
import Link from 'next/link'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  // Fetch user's recent data
  const [recentNotes, recentTasks, inboxCount] = await Promise.all([
    prisma.note.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
      take: 5,
    }),
    prisma.task.findMany({
      where: { userId: session.user.id, completed: false },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.note.count({
      where: { userId: session.user.id, inbox: true },
    }),
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome back, {session.user.name || session.user.email}
              </span>
              <Button asChild>
                <Link href="/capture">Quick Capture</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inbox Items</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inboxCount}</div>
              <p className="text-xs text-muted-foreground">
                Items to process
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentNotes.length}</div>
              <p className="text-xs text-muted-foreground">
                Knowledge items
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentTasks.length}</div>
              <p className="text-xs text-muted-foreground">
                Pending completion
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goals</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Coming soon
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Notes */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Notes</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/notes">
                    <Plus className="h-4 w-4 mr-2" />
                    New Note
                  </Link>
                </Button>
              </div>
              <CardDescription>
                Your latest knowledge captures
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentNotes.length > 0 ? (
                <div className="space-y-3">
                  {recentNotes.map((note) => (
                    <div key={note.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium mb-1">{note.title}</h4>
                      <p className="text-sm text-muted-foreground truncate">
                        {note.content}
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">
                        {new Date(note.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No notes yet. Start capturing your thoughts!</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Tasks</CardTitle>
                <Button asChild variant="outline" size="sm">
                  <Link href="/tasks">
                    <Plus className="h-4 w-4 mr-2" />
                    New Task
                  </Link>
                </Button>
              </div>
              <CardDescription>
                Tasks that need your attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentTasks.length > 0 ? (
                <div className="space-y-3">
                  {recentTasks.map((task) => (
                    <div key={task.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium mb-1">{task.title}</h4>
                      {task.description && (
                        <p className="text-sm text-muted-foreground truncate">
                          {task.description}
                        </p>
                      )}
                      <div className="text-xs text-muted-foreground mt-2">
                        Created {new Date(task.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No active tasks. Add some to get started!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common actions to build your Second Brain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 flex flex-col">
                  <Link href="/capture">
                    <Plus className="h-8 w-8 mb-2" />
                    Quick Capture
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 flex flex-col">
                  <Link href="/notes">
                    <BookOpen className="h-8 w-8 mb-2" />
                    Browse Notes
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 flex flex-col">
                  <Link href="/tasks">
                    <CheckSquare className="h-8 w-8 mb-2" />
                    Manage Tasks
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 flex flex-col">
                  <Link href="/archive">
                    <Archive className="h-8 w-8 mb-2" />
                    Resource Archive
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 