# Shaan Saurav — Developer Portfolio

A modern, minimalist developer portfolio built with HTML, CSS, and JavaScript featuring a custom animated cursor and interactive design elements.

## Features

- **Custom Animated Cursor** - Smooth, interactive cursor with hover effects
- **Modern Design** - Dark theme with neon accent colors (mint green, pink, blue)
- **Responsive Layout** - Optimized for all device sizes
- **Smooth Animations** - Carefully crafted transitions and entrance effects
- **Canvas Background** - Dynamic background using HTML5 Canvas
- **Professional Styling** - Custom typography with Space Mono, Bebas Neue, and DM Sans fonts

## Color Palette

- **Background**: `#050508` (Deep black)
- **Surface**: `#0d0d12` (Dark surface)
- **Primary Accent**: `#00ffaa` (Mint green)
- **Secondary Accent**: `#ff3f6c` (Neon pink)
- **Tertiary Accent**: `#5b8fff` (Electric blue)
- **Text**: `#e2e2f0` (Off-white)

## Files

- `index.html` - Entry point that redirects to the portfolio
- `portfolio.html` - Main portfolio page with full content and styling
- `README.md` - Project documentation

## Tech Stack

- **HTML5** - Semantic markup and Canvas API
- **CSS3** - Advanced layout with Grid, Flexbox, and custom properties
- **Vanilla JavaScript** - No frameworks, pure ES6+ for performance
- **Google Fonts** - Space Mono, Bebas Neue, and DM Sans typography

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shaan098/myportfolio.git
   cd myportfolio
   ```

2. **Open in browser:**
   - Double-click `index.html`, or
   - Use a local server: `python -m http.server 8000`
   - Then visit `http://localhost:8000`

3. **Start exploring!**
   The portfolio loads with a smooth animation and is ready to navigate

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Enjoy the interactive portfolio experience!

## Advanced Styling

### Custom Cursor Colors

The cursor uses two elements track your movement:
- **Inner dot** - Main cursor position indicator
- **Outer ring** - Larger hover area for interactive feedback

Both change color on hover, enhancing the interactive feel of the page.

### Typography System

The portfolio uses a three-font system for optimal hierarchy:
- `Space Mono` - Code/technical elements
- `Bebas Neue` - Large display text
- `DM Sans` - Body content and descriptions

## Customization

You can customize the portfolio by editing:

- **Colors** - Modify CSS variables in the `:root` selector in `portfolio.html`
- **Fonts** - Update Google Fonts import and font-family declarations
- **Content** - Edit the HTML sections in `portfolio.html`

## Browser Support

Works best in modern browsers that support:
- HTML5 Canvas
- CSS Grid and Flexbox
- ES6+ JavaScript

## Project Structure

```
myportfolio/
├── index.html          # Redirect landing page
├── portfolio.html      # Main portfolio with all content
└── README.md          # This documentation
```

## Performance Tips

- The custom cursor is optimized with CSS `mix-blend-mode` for smooth animations
- Canvas background uses requestAnimationFrame for optimal performance
- CSS transitions are GPU-accelerated for smooth interactions
- Minimal JavaScript keeps the page lightweight and fast

## Troubleshooting

**Cursor not visible?**
- Some browsers may require hardware acceleration enabled
- Try a different browser or update your graphics drivers

**Canvas animation stuttering?**
- Disable other resource-intensive browser extensions
- Ensure hardware acceleration is enabled in browser settings

**Fonts not loading?**
- Check your internet connection for Google Fonts CDN
- Fallback stack will display system fonts if unavailable

## Contributing

Have improvements or bug fixes? Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## FAQ

**Q: Can I use this template for my own portfolio?**
A: Absolutely! The template is designed to be forked and customized. Just update the content and colors to match your brand.

**Q: How do I add more sections to the portfolio?**
A: Edit the HTML in `portfolio.html`. Each section follows a consistent structure with semantic HTML elements.

**Q: Is this portfolio mobile-friendly?**
A: Yes! The responsive layout adapts to all screen sizes. Test on different devices to ensure everything looks great.

**Q: How can I disable the custom cursor?**
A: Remove or comment out the cursor-related CSS and JavaScript in `portfolio.html`.

**Q: Can I use this with other hosting platforms?**
A: Yes! Since it's pure HTML/CSS/JavaScript, it works on any static hosting service.

## Deployment & Hosting

### GitHub Pages (Free)
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your portfolio will be live at `https://yourusername.github.io/myportfolio`

### Netlify (Free & Easy)
1. Connect your GitHub repository to Netlify
2. Set build command to `(none)` - no build needed
3. Deploy! Your site is instantly live

### Vercel (Free & Fast)
1. Import your GitHub repository
2. Vercel auto-detects static hosting
3. One-click deployment with custom domain support

### Traditional Hosting
- Upload files via FTP to your web server
- Point your domain to the hosting provider
- Site is immediately accessible

## Accessibility

This portfolio follows web accessibility best practices:

- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Color Contrast** - Text meets WCAG AA standards for readability
- **Keyboard Navigation** - All interactive elements are keyboard accessible
- **Reduced Motion** - Respects `prefers-reduced-motion` system preference
- **Screen Reader Support** - Proper ARIA labels and alt text

**Improve Accessibility Further:**
- Add `aria-label` attributes to interactive elements
- Include descriptive `alt` text for any images
- Test with screen readers like NVDA or JAWS
- Verify keyboard tab order through all sections

## SEO Optimization

Boost your portfolio's search engine visibility:

### Meta Tags
- Update `<title>` tag to include your name and key skills
- Add descriptive `<meta name="description">` tag
- Use `<meta name="keywords">` for relevant terms

### Open Graph
```html
<meta property="og:title" content="Your Name — Portfolio">
<meta property="og:description" content="Brief description">
<meta property="og:image" content="preview-image.png">
```

### Structured Data
- Add JSON-LD schema for better search results
- Use `application/ld+json` for organization or person schema
- Help search engines understand your content

### Performance
- Fast loading improves SEO ranking
- Minimize CSS and JavaScript files
- Compress images for faster delivery
- Enable GZIP compression on server

## License

Feel free to use this portfolio template as inspiration for your own projects!

