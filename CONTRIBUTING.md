# Contributing to Matomo Vue3 Integration Example

Thank you for your interest in contributing to this project! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- Docker and Docker Compose
- Git

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/matomo-vue3-integration.git
   cd matomo-vue3-integration
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Start the development environment:
   ```bash
   # From project root
   docker-compose up --build
   ```

## 🧪 Running Tests

Before submitting any changes, make sure all tests pass:

```bash
cd frontend
npm run test
npm run coverage
```

## 📝 Code Style

This project follows these conventions:

- **TypeScript**: Use TypeScript for all new code
- **Vue 3**: Use Composition API with `<script setup>`
- **ESLint**: Follow the configured linting rules
- **Prettier**: Code formatting is handled automatically

## 🔄 Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. Push to your fork and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Fill out the pull request template with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Test coverage information

## 🐛 Bug Reports

When filing bug reports, please include:

- Operating system and version
- Node.js version
- Docker version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or error logs

## 💡 Feature Requests

For feature requests, please:

- Check existing issues first
- Provide clear use case
- Explain why it would be valuable
- Consider implementation complexity

## 📋 Commit Message Format

We follow conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

## 🤝 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Keep discussions on-topic

## 📞 Getting Help

- Open an issue for bugs or feature requests
- Start a discussion for questions
- Check existing documentation first

Thank you for contributing! 🎉