#!/bin/bash
# Quick start script for local Jekyll preview

echo "🔍 Firearm E-commerce Tech Stack Analysis - Local Preview"
echo "=========================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "_config.yml" ]; then
    echo "❌ Error: Please run this script from the repository root directory"
    exit 1
fi

# Check for Ruby
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed"
    echo "📦 Installing Ruby via Homebrew..."
    brew install ruby
    echo "✅ Ruby installed. Please restart your terminal and run this script again."
    exit 0
fi

# Check for Bundler
if ! command -v bundle &> /dev/null; then
    echo "📦 Installing Bundler..."
    gem install bundler
fi

# Install dependencies
echo "📦 Installing Jekyll and dependencies..."
bundle install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Installation failed. Try one of these options:"
    echo ""
    echo "Option 1: Install Ruby via Homebrew (recommended)"
    echo "  brew install ruby"
    echo "  echo 'export PATH=\"/opt/homebrew/opt/ruby/bin:\$PATH\"' >> ~/.zshrc"
    echo "  source ~/.zshrc"
    echo "  gem install bundler jekyll"
    echo ""
    echo "Option 2: Use Docker"
    echo "  docker run --rm -p 4000:4000 -v \"\$PWD\":/srv/jekyll -it jekyll/jekyll:4.3 jekyll serve"
    echo ""
    echo "See LOCAL_PREVIEW.md for more options"
    exit 1
fi

# Start Jekyll server
echo ""
echo "✅ Starting Jekyll server..."
echo "🌐 Open your browser to: http://localhost:4000/firearm-ecommerce-research/"
echo "📝 Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --host 0.0.0.0

