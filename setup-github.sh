#!/bin/bash

# GitHub Repository Setup Script for Matomo Vue3 Integration
# This script helps you set up the project for GitHub publishing

echo "🚀 Setting up Matomo Vue3 Integration for GitHub..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_info "Initializing Git repository..."
    git init
    print_status "Git repository initialized"
else
    print_status "Git repository already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    print_warning ".gitignore not found, but it should have been created"
else
    print_status ".gitignore exists"
fi

# Install frontend dependencies
print_info "Installing frontend dependencies..."
cd frontend
if [ -f "package.json" ]; then
    npm install
    print_status "Frontend dependencies installed"
else
    print_error "package.json not found in frontend directory"
    exit 1
fi
cd ..

# Run tests to make sure everything works
print_info "Running tests..."
cd frontend
npm run test
if [ $? -eq 0 ]; then
    print_status "All tests passed"
else
    print_warning "Some tests failed, but continuing..."
fi
cd ..

# Add all files to git
print_info "Adding files to Git..."
git add .

# Create initial commit
if git diff --cached --quiet; then
    print_warning "No changes to commit"
else
    git commit -m "feat: initial commit - Matomo Vue3 integration demo

- Complete Vue 3 + TypeScript frontend
- Matomo analytics integration
- Docker containerization
- Unit testing with Vitest
- GitHub Actions CI/CD
- Comprehensive documentation"
    print_status "Initial commit created"
fi

# Instructions for GitHub setup
echo ""
echo "🎉 Project is ready for GitHub!"
echo ""
print_info "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Update the repository URLs in package.json"
echo "3. Add your GitHub repository as remote:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/matomo-vue3-integration.git"
echo "4. Push to GitHub:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
print_info "Optional customizations:"
echo "• Update SECURITY.md with your contact email"
echo "• Modify package.json author and repository fields"
echo "• Update README.md with your specific details"
echo "• Configure GitHub repository settings (branch protection, etc.)"
echo ""
print_status "Setup complete! 🚀"