'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { FileText, CheckSquare, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function QuickCapture() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Note form state
  const [noteTitle, setNoteTitle] = useState('')
  const [noteContent, setNoteContent] = useState('')

  // Task form state
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  if (!session) {
    router.push('/auth/signin')
    return null
  }

  const handleNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: noteTitle || 'Quick Note',
          content: noteContent,
          inbox: true,
        }),
      })

      if (response.ok) {
        setNoteTitle('')
        setNoteContent('')
        router.push('/dashboard')
      } else {
        setError('Failed to create note')
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTaskSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: taskTitle,
          description: taskDescription,
        }),
      })

      if (response.ok) {
        setTaskTitle('')
        setTaskDescription('')
        router.push('/dashboard')
      } else {
        setError('Failed to create task')
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Quick Capture</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Capture Your Thoughts</CardTitle>
            <CardDescription>
              Quickly save notes, tasks, or ideas to process later
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="note" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="note" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Note</span>
                </TabsTrigger>
                <TabsTrigger value="task" className="flex items-center space-x-2">
                  <CheckSquare className="h-4 w-4" />
                  <span>Task</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="note">
                <form onSubmit={handleNoteSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="note-title" className="text-sm font-medium">
                      Title (optional)
                    </label>
                    <Input
                      id="note-title"
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                      placeholder="Quick note title..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="note-content" className="text-sm font-medium">
                      Content
                    </label>
                    <Textarea
                      id="note-content"
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      placeholder="Write your thoughts here..."
                      className="min-h-[200px]"
                      required
                    />
                  </div>
                  {error && (
                    <div className="text-sm text-destructive">{error}</div>
                  )}
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? 'Saving...' : 'Save to Inbox'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="task">
                <form onSubmit={handleTaskSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="task-title" className="text-sm font-medium">
                      Task Title
                    </label>
                    <Input
                      id="task-title"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      placeholder="What needs to be done?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="task-description" className="text-sm font-medium">
                      Description (optional)
                    </label>
                    <Textarea
                      id="task-description"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      placeholder="Additional details..."
                      className="min-h-[120px]"
                    />
                  </div>
                  {error && (
                    <div className="text-sm text-destructive">{error}</div>
                  )}
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? 'Creating...' : 'Create Task'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Capture Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Notes go to your inbox for later processing and organization</li>
              <li>• Tasks are immediately added to your active task list</li>
              <li>• Don't worry about perfect formatting - just capture the idea</li>
              <li>• You can always edit and organize later</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}