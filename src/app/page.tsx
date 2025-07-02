import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, BookOpen, CheckSquare, Target, Archive, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Second Brain</h1>
          </div>
          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Build Your <span className="text-primary">Second Brain</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Capture, organize, and retrieve your knowledge effortlessly. 
            Transform information into insight with your personal knowledge management system.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/auth/signup">Start Building Today</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Organize Your Mind
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Knowledge Vault</CardTitle>
              <CardDescription>
                Store atomic notes, book summaries, and references in one organized place
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CheckSquare className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                Track daily tasks, habits, and long-term projects with smart prioritization
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Goal Tracking</CardTitle>
              <CardDescription>
                Set and monitor yearly goals, quarterly OKRs, and personal milestones
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Archive className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Resource Archive</CardTitle>
              <CardDescription>
                Save templates, links, and documents with powerful search and tagging
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Daily Journal</CardTitle>
              <CardDescription>
                Reflect, track gratitude, and audit your time and energy patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Quick Capture</CardTitle>
              <CardDescription>
                Fast input for ideas and tasks with mobile-friendly design
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of people building their Second Brain
          </p>
          <Button asChild size="lg">
            <Link href="/auth/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Second Brain. Built with Next.js and love.</p>
        </div>
      </footer>
    </div>
  )
}
