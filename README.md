# Terminal Portfolio - OpsPilot Theme

A retro-futuristic terminal-style portfolio website with Matrix Green aesthetics and command-line interface design.

![Portfolio Preview](https://img.shields.io/badge/Status-Production_Ready-success?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 🎯 Overview

This portfolio showcases my work as an Aspiring AI Engineer with a focus on NLP, Python development, and local-first AI architecture. The terminal UI aesthetic reflects my passion for command-line tools and system automation.

**Live Demo**: [Your Cloudflare Pages URL]

## ✨ Features

- **Terminal UI Design**: Authentic command-line interface with Matrix Green theme
- **Dynamic Career Timeline**: Automatically calculates role durations with real-time uptime display
- **Responsive Design**: Fully mobile-responsive while maintaining terminal aesthetic
- **CRT Effects**: Scanline overlay and terminal glow for retro feel
- **Smooth Animations**: Fade-in effects and smooth scrolling navigation
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **No Frameworks**: Pure HTML, CSS, and vanilla JavaScript

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3 (Custom Properties & Flexbox/Grid), Vanilla JavaScript
- **Fonts**: [Fira Code](https://fonts.google.com/specimen/Fira+Code) (Google Fonts)
- **Deployment**: Cloudflare Pages
- **Version Control**: Git

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with terminal theme
├── script.js           # Interactive functionality
├── _headers            # Cloudflare Pages headers configuration
├── robots.txt          # SEO crawler directives
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **View the portfolio**:
   - Navigate to `http://localhost:8000`

### Deployment to Cloudflare Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Cloudflare Pages**:
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Pages** → **Create a project**
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: Leave empty (static site)
     - **Build output directory**: `/`
   - Click **Save and Deploy**

3. **Custom Domain** (Optional):
   - Go to your Pages project settings
   - Add custom domain under **Custom domains**

## 🎨 Customization

### Personal Information

Update the following sections in `index.html`:

1. **Meta Tags** (Lines 7-23):
   ```html
   <meta name="description" content="Your description">
   <meta name="keywords" content="Your, Keywords">
   <meta name="author" content="Your Name">
   ```

2. **ASCII Art Name** (Lines 48-54):
   - Use [Text to ASCII Art Generator](https://patorjk.com/software/taag/)
   - Font: "Standard" recommended for terminal style

3. **Skills** (Lines 107-113):
   - Add/remove skills as needed

4. **Projects** (Lines 134-190):
   - Update project descriptions, tech stacks, and status

5. **Career History** (Lines 207-237):
   - Update `data-start` attributes for accurate uptime calculation
   - Format: `YYYY-MM-DD`

6. **Contact Links** (Lines 285-305):
   - Replace GitHub, LinkedIn, and email with your actual links

### Theme Colors

Edit CSS variables in `style.css` (Lines 7-30):

```css
:root {
    --terminal-green: #00ff00;     /* Primary terminal color */
    --terminal-blue: #00ccff;      /* Accent color */
    --terminal-amber: #ffb000;     /* Warning/highlight color */
    --bg-primary: #0d1117;         /* Background */
}
```

### Dynamic Features

The portfolio includes:

- **Uptime Calculator** (`script.js`, Lines 230-278):
  - Automatically calculates role durations
  - Updates on page load

- **Smooth Scrolling** (`script.js`, Lines 42-93):
  - Navigation links trigger smooth scroll
  - Updates command display

- **Date/Time Display** (`script.js`, Lines 186-199):
  - Shows current date in header
  - Session uptime in footer

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- **Tablet**: `max-width: 768px`
- **Mobile**: `max-width: 480px`

Career entries, project cards, and navigation adapt for smaller screens while maintaining the terminal aesthetic.

## 🔧 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE11 (Limited support)

## 📄 Files Explained

- **`_headers`**: Cloudflare Pages configuration for security headers and caching
- **`robots.txt`**: Allows all search engine crawlers
- **`style.css`**: Contains terminal theme, animations, and responsive styles
- **`script.js`**: Handles navigation, animations, and dynamic content

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork the repository
- Use it as a template for your own portfolio
- Submit issues or suggestions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Govindhasamy K**
- GitHub: [@kggopi-16](https://github.com/kggopi-16)
- LinkedIn: [govindhasamy-k](https://linkedin.com/in/govindhasamy-k)
- Email: govindhasamyk16@gmail.com

---

### 💡 Acknowledgments

- Inspired by terminal emulators and retro computing aesthetics
- Font: [Fira Code](https://github.com/tonsky/FiraCode) by Nikita Prokopov
- Color scheme: Matrix Green with custom neon accents

---

**Built with ❤️ and JavaScript** | **Last Updated**: January 2026
