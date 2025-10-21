# Contributing to Woap

Thank you for your interest in contributing to Woap! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Be collaborative and constructive
- Focus on what is best for the community
- Show empathy towards others

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- Git
- Docker & Docker Compose (recommended)

### Setup Development Environment

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/woap.git
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

Fill in the required environment variables in `.env.local`.

4. **Start the development environment**

```bash
# Start Docker services
docker-compose up -d

# Push database schema
cd packages/db && pnpm db:push && cd ../..

# Start dev server
pnpm dev
```

## Development Workflow

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications

Example: `feature/add-graphql-support`

### Commit Messages

Follow the Conventional Commits specification:

```
type(scope): subject

body

footer
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

Example:
```
feat(api): add GraphQL endpoint generation

Implement GraphQL schema generation from AI descriptions.
Includes query and mutation generation with type safety.

Closes #123
```

### Making Changes

1. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**

- Write clean, readable code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

3. **Test your changes**

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Tests
pnpm test

# Build check
pnpm build
```

4. **Commit your changes**

```bash
git add .
git commit -m "feat: your feature description"
```

5. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

6. **Open a Pull Request**

Go to the original repository and click "New Pull Request".

## Pull Request Guidelines

### PR Title

Use the same format as commit messages:

```
feat(scope): add new feature
```

### PR Description

Include:
- **What**: What does this PR do?
- **Why**: Why is this change needed?
- **How**: How does it work?
- **Testing**: How was it tested?
- **Screenshots**: If applicable

Template:
```markdown
## Description
Brief description of changes

## Motivation
Why this change is needed

## Changes Made
- Change 1
- Change 2

## Testing
How to test these changes

## Screenshots
If applicable

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Changelog updated
```

### PR Checklist

Before submitting:

- [ ] Code follows the project style
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No merge conflicts
- [ ] PR is linked to an issue (if applicable)

## Code Style

### TypeScript

- Use TypeScript strict mode
- Prefer `interface` over `type` for object types
- Use explicit return types for functions
- Avoid `any` - use `unknown` if needed

### React

- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused
- Use meaningful component names

### File Organization

```
component/
├── Component.tsx       # Main component
├── Component.test.tsx  # Tests
├── hooks/             # Custom hooks
├── utils/             # Utilities
└── types.ts           # Type definitions
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Files**: PascalCase for components, camelCase for utils
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase

## Testing

### Unit Tests

```bash
pnpm test
```

Write tests for:
- Utility functions
- Custom hooks
- Complex logic

### E2E Tests

```bash
pnpm test:e2e
```

Write E2E tests for:
- Critical user flows
- Authentication
- API interactions

### Test Coverage

Aim for >80% coverage on new code:

```bash
pnpm test:coverage
```

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Explain complex logic with inline comments
- Keep README.md up to date

### API Documentation

Document all tRPC endpoints with:
- Input schema
- Output schema
- Description
- Example usage

## Database Changes

When modifying the database schema:

1. Update schema files in `packages/db/src/schema/`
2. Run `pnpm db:push` to update the database
3. Document migration steps if needed
4. Update related TypeScript types

## Release Process

Maintainers will handle releases:

1. Version bump in `package.json`
2. Update `CHANGELOG.md`
3. Create release tag
4. Publish to npm (if applicable)
5. Deploy to production

## Questions?

- Open an issue for bugs
- Start a discussion for questions
- Join our community chat (coming soon)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Woap! 🚀
