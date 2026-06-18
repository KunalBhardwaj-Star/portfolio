# Personal Portfolio Website - System Design

## 1. Problem Statement

Build a personal portfolio website to showcase my skills, projects, certificates, coding profiles, and resume. The platform should allow visitors to learn about me, explore my work, contact me, interact with an AI assistant, and provide feedback through a review system.

> The primary goal is to create a professional online presence while demonstrating full-stack development skills.

---

## 2. Users

### Visitor
- View profile information
- Explore projects
- View skills
- View certificates
- Download resume
- Contact me
- Submit reviews and feedback
- Interact with AI assistant

### Owner (Me)
- Manage portfolio data through the database
- Add new projects
- Update skills
- Add certificates
- Update resume
- Review visitor feedback and AI analysis

> No authentication is required because portfolio content is managed directly through the database and visitors do not have editing privileges.

---

## 3. Features

### Core Features
- About Me Section
- Projects Showcase
- Skills Section
- Certificates Section
- Resume Download
- Contact Form
- Visitor Counter
- AI Assistant
- AI Review Analysis System

### Future Enhancements
- GitHub Activity Integration
- LeetCode Profile Integration
- Blog Section
- Dark/Light Theme Toggle

> Features should remain modular so they can be extended without major architectural changes.

---

## 4. Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS

> React provides component-based development, TypeScript improves maintainability through type safety, and Tailwind CSS enables rapid UI development.

### Database
- Supabase PostgreSQL

> Chosen because it provides PostgreSQL, storage, a generous free tier, and seamless integration with React applications.

### Deployment
- Vercel

> Vercel offers simple deployment, automatic builds, preview deployments, and excellent React support.

### External Services
- Gemini API / Groq API

> Used to power the AI assistant and AI review analysis system.

---

## 5. High-Level Architecture

```text
Visitor
   ↓
React + TypeScript + Tailwind
   ↓
Supabase
   ↓
PostgreSQL Database

AI Assistant
   ↓
Gemini / Groq API

Review System
   ↓
Gemini / Groq API
   ↓
Review Analysis
   ↓
Database
```

> The frontend communicates directly with Supabase for data retrieval while AI services power the assistant and review analysis features.

---

## 6. Entities

### Profile
Stores personal information.

### Project
Stores project details and links.

### Skill
Stores technical skills and categories.

### Certificate
Stores certifications and achievements.

### Visitor
Tracks portfolio visits.

### ContactMessage
Stores messages submitted through the contact form.

### Review
Stores user reviews and AI-generated analysis.

> Entities represent the core data objects of the system and will map directly to database tables.

---

## 7. Database Schema

### Profile

### Project

### Skill

### Certificate

### Visitor

### ContactMessage

### Review

> The schema is intentionally simple because the application has a single owner and mostly read-only visitor interactions.

---

## 8. Data Operations (API Design)

### Projects
- Fetch all projects
- Fetch project by ID

### Skills
- Fetch all skills

### Certificates
- Fetch all certificates

### Profile
- Fetch profile information

### Contact Messages
- Create contact message

### Visitors
- Record visitor entry

### Reviews
- Create review
- Generate AI analysis
- Fetch review analysis

### AI Assistant
- Query portfolio information
- Generate AI responses

> Since Supabase provides APIs automatically, a separate backend is not required for Version 1.

---

## 9. Frontend Components

### Layout Components
- Navbar
- Footer

### Home Components
- Hero Section
- About Section

### Feature Components
- ProjectCard
- SkillCard
- CertificateCard
- ContactForm
- ResumeButton
- VisitorCounter
- AIChatWidget
- ReviewForm
- ReviewCard

> Components should be reusable and follow a clear separation of concerns.

---

## 10. Deployment Plan

### Frontend
- Vercel

### Database
- Supabase PostgreSQL

### Storage
- Supabase Storage

#### Storage Buckets
- resumes
- certificates
- project-images
- profile-images

### AI Service
- Gemini API / Groq API

> The architecture is serverless and minimizes operational overhead while remaining scalable for a personal portfolio website.

---

## Future Improvements

### Version 2
- Admin Dashboard
- Authentication
- Project Analytics
- Blog System
- Review Moderation Dashboard

### Version 3
- Custom Backend
- Advanced AI Assistant
- Real-Time Analytics
- Portfolio Recommendation System
- AI Career Advisor

> The architecture is designed to evolve incrementally without requiring major rewrites.