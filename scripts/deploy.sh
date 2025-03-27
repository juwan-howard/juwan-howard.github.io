#!/bin/bash

# Exit if any command fails
set -e

# Clear the cache directories
echo "Cleaning cache directories..."
rm -rf node_modules/.cache
rm -rf .cache
rm -rf .gh-pages-cache

# Find and remove any nested .git directories (except the main one)
echo "Removing any nested Git repositories..."
find . -path './.git' -prune -o -name '.git' -type d -print -exec rm -rf {} \; 2>/dev/null || true

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for deployment
TEMP_DIR=$(mktemp -d)
echo "Created temporary directory: $TEMP_DIR"

# Copy build files to the temporary directory
echo "Copying build files..."
cp -R build/* $TEMP_DIR/

# Initialize a new git repository in the temporary directory
echo "Initializing Git repository for deployment..."
cd $TEMP_DIR
git init
git config user.name "juwan-howard"
git config user.email "your-email@example.com"
git remote add origin git@github-juwan:juwan-howard/juwan-howard.github.io.git

# Add all files and commit
echo "Committing files..."
git add .
git commit -m "Deploy website $(date +'%Y-%m-%d %H:%M:%S')"

# Force push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f origin master:gh-pages

# Clean up
echo "Cleaning up..."
cd -
rm -rf $TEMP_DIR

echo "Deployment complete!" 