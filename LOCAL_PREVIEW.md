# Local Preview Guide

There are several ways to preview your GitHub Pages site locally. Choose the method that works best for your setup.

## Option 1: Jekyll with Homebrew Ruby (Recommended for macOS)

If you have Homebrew installed, this is the easiest method:

```bash
# Install Homebrew Ruby (if not already installed)
brew install ruby

# Add Homebrew Ruby to your PATH (add to ~/.zshrc or ~/.bash_profile)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Install Jekyll and Bundler
gem install --user-install bundler jekyll

# Add gem bin directory to PATH
echo 'export PATH="$HOME/.gem/ruby/3.3.0/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Navigate to project directory
cd /Users/renchen/Work/github/firearm-ecommerce-research

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve
```

Then open: **http://localhost:4000/firearm-ecommerce-research/**

## Option 2: Jekyll with rbenv

```bash
# Install rbenv (if not installed)
brew install rbenv ruby-build

# Initialize rbenv
rbenv init

# Install Ruby
rbenv install 3.3.0
rbenv global 3.3.0

# Install Jekyll
gem install bundler jekyll

# Navigate to project
cd /Users/renchen/Work/github/firearm-ecommerce-research

# Install dependencies
bundle install

# Start server
bundle exec jekyll serve
```

## Option 3: Docker (No Local Ruby Needed)

If you have Docker installed:

```bash
cd /Users/renchen/Work/github/firearm-ecommerce-research

# Run Jekyll in Docker
docker run --rm \
  -p 4000:4000 \
  -v "$PWD":/srv/jekyll \
  -it jekyll/jekyll:4.3 \
  jekyll serve --host 0.0.0.0
```

Then open: **http://localhost:4000/firearm-ecommerce-research/**

## Option 4: Simple HTTP Server (Quick Preview)

This won't process Jekyll, but you can see the HTML structure:

```bash
cd /Users/renchen/Work/github/firearm-ecommerce-research

# Build the site first (if you have Jekyll working)
bundle exec jekyll build

# Or use Python's built-in server
python3 -m http.server 8000 --directory _site
```

Then open: **http://localhost:8000/firearm-ecommerce-research/**

## Option 5: Use GitHub Codespaces (Cloud-based)

1. Push your code to GitHub
2. Go to your repository on GitHub
3. Click the green "Code" button
4. Select "Codespaces" → "Create codespace on main"
5. In the terminal, run: `bundle install && bundle exec jekyll serve`
6. Click "Ports" tab and make the port public

## Troubleshooting

### Port Already in Use
If port 4000 is busy, use a different port:
```bash
bundle exec jekyll serve --port 4001
```

### Watch for Changes
Jekyll automatically rebuilds on file changes. Just refresh your browser.

### Baseurl Issues
Make sure `baseurl` in `_config.yml` matches your setup:
- Project site: `baseurl: "/firearm-ecommerce-research"`
- User site: `baseurl: ""`

### Clear Cache
If you see old content:
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

## Quick Start (If Jekyll is Already Working)

```bash
cd /Users/renchen/Work/github/firearm-ecommerce-research
bundle install
bundle exec jekyll serve
```

Open browser to: **http://localhost:4000/firearm-ecommerce-research/**

