# Woap - AI-Powered No-Code Backend Builder

![Woap Banner](https://via.placeholder.com/1200x400/7C3AED/FFFFFF?text=Woap+-+Build+Backends+with+AI)

**Woap** is a modern no-code backend builder that leverages AI to help developers and startups create complete REST APIs, database models, and deployment configurations through a conversational interface.

## Features

- **AI-Powered Backend Builder** - Chat with Claude, OpenAI, or Mistral to design entire backends
- **No-Code API Generator** - Automatically generate REST APIs from natural language
- **Database Schema Designer** - AI-assisted intelligent database design with visualization
- **Business Logic Generator** - Create serverless functions and workflows from descriptions
- **Real-time Chat Interface** - Interactive AI assistant with streaming responses
- **One-Click Deployment** - Deploy to Railway, Vercel, or Docker

## Tech Stack

### Backend
- Node.js 20+ with TypeScript
- Next.js 15 (App Router)
- tRPC for type-safe APIs
- PostgreSQL with Drizzle ORM
- Auth.js for authentication
- Vercel AI SDK (OpenAI, Claude, Mistral)
- BullMQ + Redis for background jobs

### Frontend
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui
- Radix UI primitives
- react-hook-form + zod validation
- Zustand for state management
- Lucide React icons

### DevOps
- pnpm monorepo workspace
- Docker + Docker Compose
- Turbo for build orchestration

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+
- Docker & Docker Compose (recommended)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/woap.git
cd woap
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- Add your database URL
- Add at least one AI provider API key (OpenAI or Anthropic recommended)
- Generate a secure NEXTAUTH_SECRET (min 32 characters)

4. **Start services with Docker**

```bash
docker-compose up -d
```

This starts PostgreSQL and Redis in containers.

5. **Push database schema**

```bash
cd packages/db
pnpm db:push
cd ../..
```

6. **Start the development server**

```bash
pnpm dev
```

7. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
woap/
├── apps/
│   └── web/              # Next.js application
│       ├── app/          # App Router pages
│       ├── components/   # React components
│       ├── server/       # tRPC server & routers
│       └── lib/          # Utilities
├── packages/
│   ├── db/              # Database schemas (Drizzle ORM)
│   ├── ai/              # AI provider integrations
│   └── ui/              # Shared UI components
├── docker-compose.yml   # Docker services
└── pnpm-workspace.yaml  # Monorepo configuration
```

## Usage

### Creating a Project

1. Sign up or log in to your account
2. Navigate to the Dashboard
3. Click "New Project"
4. Start chatting with the AI to design your backend

### Generating a Database Schema

In the AI chat, describe your data model:

```
I need a database for a blog platform with users, posts, and comments.
Users should have email, name, and profile picture.
Posts belong to users and have title, content, and publish date.
Comments belong to both users and posts.
```

The AI will generate a complete schema with proper relationships.

### Generating APIs

Ask the AI to create endpoints:

```
Generate REST API endpoints for the blog:
- List all posts with pagination
- Create a new post
- Get post by ID with comments
- Add a comment to a post
- Delete a comment (only by author)
```

### Deployment

1. Build your project:

```bash
pnpm build
```

2. Deploy using Docker:

```bash
docker-compose up --build
```

Or deploy to Vercel/Railway using their CLI tools.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `REDIS_URL` | Redis connection string | No |
| `NEXTAUTH_SECRET` | Secret for JWT signing (min 32 chars) | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `OPENAI_API_KEY` | OpenAI API key | No* |
| `ANTHROPIC_API_KEY` | Anthropic/Claude API key | No* |
| `MISTRAL_API_KEY` | Mistral API key | No* |
| `GITHUB_ID` | GitHub OAuth client ID | No |
| `GITHUB_SECRET` | GitHub OAuth client secret | No |
| `GOOGLE_ID` | Google OAuth client ID | No |
| `GOOGLE_SECRET` | Google OAuth client secret | No |

*At least one AI provider API key is required

## Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Database
pnpm db:push          # Push schema changes
pnpm db:studio        # Open Drizzle Studio

# Code Quality
pnpm lint             # Lint code
pnpm type-check       # Type check
pnpm format           # Format code

# Testing
pnpm test             # Run tests
pnpm test:e2e         # Run E2E tests
pnpm test:coverage    # Coverage report
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [Coming soon]
- **Issues**: [GitHub Issues](https://github.com/yourusername/woap/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/woap/discussions)

## Roadmap

- [ ] GraphQL API generation
- [ ] Real-time deployment logs
- [ ] Collaborative editing
- [ ] Template marketplace
- [ ] Mobile app
- [ ] Self-hosted option

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- AI powered by [Anthropic Claude](https://www.anthropic.com/) and [OpenAI](https://openai.com/)

---

Made with ❤️ by developers, for developers
