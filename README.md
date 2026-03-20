# Shaan Saurav Portfolio - React Version

Your portfolio has been successfully converted to React with Vite!

## Project Structure

```
myportfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollProgress.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Setup & Installation

1. Open PowerShell in your project directory
2. Install dependencies:
   ```
   npm install
   ```

## Running the Project

### Development Server
To start the development server:
```
npm run dev
```
This will start the Vite dev server (usually at http://localhost:5173)

### Build for Production
To build for production:
```
npm run build
```
This generates a `dist` folder ready for deployment

### Preview Production Build
To preview the production build locally:
```
npm run preview
```

## Features

✅ Fully responsive design  
✅ Dark/Light mode toggle  
✅ Smooth scrolling with progress bar  
✅ Typing animation on hero section  
✅ Modular component-based architecture  
✅ Mobile-friendly navigation  
✅ Animated skill bars  
✅ Contact form  
✅ Project showcase  
✅ Experience timeline  

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS 3** - Styling with custom properties
- **Font Awesome** - Icons

## Customization

### Update Personal Information
Edit the component files to update your information:
- `src/components/Hero.jsx` - Your name, title, and stats
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Your contact info

### Modify Styles
Edit `src/styles/index.css` to customize colors, fonts, and layout

### Change Colors
Update the CSS variables in `src/styles/index.css`:
```css
:root {
    --primary: #0ea5e9;
    --secondary: #a855f7;
    --accent: #ec4899;
    /* ... other colors ... */
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically!

### Netlify
```
npm run build
```
Then drag and drop the `dist` folder to Netlify

## Notes

- The old files (`styles.css`, `scripts.js`, `index-react.html`) are kept for reference
- All functionality from the original portfolio is preserved
- The React version is more efficient and maintainable

Enjoy your new React portfolio! 🚀
