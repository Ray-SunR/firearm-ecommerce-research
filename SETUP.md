# GitHub Pages Setup Instructions

## Quick Start

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `firearm-ecommerce-research`
3. Make it **public** (required for free GitHub Pages)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Push to GitHub

```bash
cd /Users/renchen/Work/github/firearm-ecommerce-research

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/firearm-ecommerce-research.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4. Wait for Build

- GitHub Pages will automatically build your site using Jekyll
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's ready

### 5. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/firearm-ecommerce-research/
```

## Local Development (Optional)

To preview the site locally before publishing:

```bash
# Install Jekyll (requires Ruby)
gem install bundler jekyll

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open in browser
open http://localhost:4000
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the repository root with your domain name
2. Configure DNS records as instructed by GitHub
3. Update repository settings → Pages → Custom domain

## Troubleshooting

### Site Not Building

- Check the **Actions** tab for build errors
- Ensure `_config.yml` is valid YAML
- Verify all required files are present

### Theme Not Loading

- The `minima` theme is included in the Gemfile
- GitHub Pages will automatically use it
- No additional configuration needed

### Updates Not Showing

- GitHub Pages rebuilds on every push to main branch
- Wait 1-2 minutes after pushing
- Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)

## File Structure

```
firearm-ecommerce-research/
├── _config.yml          # Jekyll configuration
├── index.md             # Main content (converted to HTML)
├── README.md            # Repository description
├── SETUP.md             # This file
├── Gemfile              # Ruby dependencies
└── .gitignore           # Git ignore rules
```

## Support

For GitHub Pages documentation, visit:
https://docs.github.com/en/pages

