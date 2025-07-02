# 🧠 Second Brain - Personal Knowledge Management System

A modern, mobile-responsive web application for building your own "Second Brain" - a personal knowledge management system based on Tiago Forte's CODE methodology (Capture, Organize, Distill, Express).

![Second Brain App](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Second+Brain+Dashboard)

## ✨ Features

### 🗂 Knowledge Vault
- **Atomic Notes**: Create and manage evergreen notes in Zettelkasten style
- **Quick Capture**: Fast input for ideas, thoughts, and references
- **Inbox System**: Capture first, organize later workflow
- **Search & Tags**: Powerful search and tagging system for knowledge retrieval

### 📋 Task & Project Management
- **Daily Tasks**: Create and manage daily to-do items
- **Habit Tracking**: Track recurring habits and routines
- **Project Organization**: Organize tasks by projects and priorities
- **Completion Tracking**: Mark tasks as complete and track progress

### 🎯 Goal Tracking (Coming Soon)
- Yearly goals and milestones
- Quarterly OKRs tracking
- Personal KPI dashboards

### 📚 Resource Archive (Coming Soon)
- Document storage and management
- Link collection and organization
- Template library

### 🔄 Capture Inbox
- Quick note dump for processing later
- Mobile-friendly capture interface
- Seamless integration with knowledge vault

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with dark theme
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js with local credentials
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd second-brain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Getting Started
1. **Sign Up**: Create your account on the landing page
2. **Quick Capture**: Start capturing ideas and tasks immediately
3. **Dashboard**: Monitor your knowledge growth and task progress
4. **Organize**: Process your inbox and organize your knowledge

### Core Workflows

#### Capture Workflow
1. Click "Quick Capture" from anywhere in the app
2. Choose between Note or Task
3. Write your content and save
4. Items are automatically added to your inbox or task list

#### Knowledge Organization
1. Access your notes from the dashboard
2. Add tags for better organization
3. Link related notes together
4. Process inbox items regularly

#### Task Management
1. Create tasks with optional descriptions
2. Set due dates and priorities
3. Mark tasks as complete
4. Track habits and recurring tasks

## 🗂 Project Structure

```
second-brain/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── api/             # API routes
│   │   ├── auth/            # Authentication pages
│   │   ├── capture/         # Quick capture page
│   │   ├── dashboard/       # Main dashboard
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   └── providers.tsx    # Context providers
│   ├── lib/                # Utility functions
│   │   ├── auth.ts         # NextAuth configuration
│   │   ├── prisma.ts       # Database client
│   │   └── utils.ts        # Helper functions
│   └── types/              # TypeScript type definitions
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design Principles

- **Mobile-First**: Responsive design that works on all devices
- **Dark Theme**: Easy on the eyes for extended use
- **Minimal UI**: Clean, distraction-free interface
- **Fast Capture**: Quick input is prioritized over perfect organization
- **Progressive Enhancement**: Start simple, add complexity as needed

## 🔐 Security

- Local authentication with hashed passwords
- Session-based authentication with JWT tokens
- Input validation and sanitization
- CSRF protection built-in with Next.js

## 📊 Database Schema

The app uses a simple but extensible database schema:

- **Users**: Account management
- **Notes**: Knowledge storage with inbox system
- **Tasks**: Task management with habit tracking
- **Tags**: Flexible tagging system
- **Attachments**: File storage (ready for implementation)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Import your GitHub repository in Vercel
   - Add environment variables
   - Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Node.js:
- **Railway**: Simple deployment with database included
- **Render**: Free tier available
- **DigitalOcean App Platform**: Affordable hosting
- **Heroku**: Easy deployment

## 🛣 Roadmap

### Phase 1 (Current)
- ✅ User authentication
- ✅ Basic note taking
- ✅ Task management
- ✅ Quick capture
- ✅ Dashboard overview

### Phase 2 (Coming Soon)
- [ ] Advanced search functionality
- [ ] Note linking and backlinks
- [ ] File attachments
- [ ] Export/import functionality
- [ ] Mobile app (PWA)

### Phase 3 (Future)
- [ ] Collaboration features
- [ ] Advanced analytics
- [ ] AI-powered insights
- [ ] Integration with external tools

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tiago Forte](https://fortelabs.co/) for the Second Brain methodology
- [Building A Second Brain](https://www.buildingasecondbrain.com/) book and community
- The amazing open-source community for the tools and libraries used

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](../../issues) page
2. Create a new issue with your question
3. Join our community discussions

---

**Happy Knowledge Building! 🧠✨**
