# 🧠 Interactive Brain Personal Website

An interactive personal website featuring a clickable brain interface where different brain regions reveal various aspects of your personality, interests, and skills.

## ✨ Features

- **Interactive Brain Interface**: Click on different colored regions of the brain to explore different aspects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful hover effects and transitions
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Accessible**: Keyboard navigation and touch support included

## 🧠 Brain Regions & Content

The website includes 6 main brain regions, each representing different aspects:

1. **Prefrontal Cortex** - Planning & Sports (Cycling, Running, etc.)
2. **Occipital Lobe** - Visual Arts & Photography
3. **Temporal Lobe** - Music & Language
4. **Parietal Lobe** - Technology & Problem Solving
5. **Cerebellum** - Coordination & Balance
6. **Hippocampus** - Memory & Learning

## 🚀 Getting Started

1. **Clone or download** the files to your local machine
2. **Open `index.html`** in your web browser
3. **Start exploring** by clicking on the colored brain regions!

## 🎨 Customization

### Personalizing Content

Edit the `script.js` file to customize the content for each brain region:

```javascript
const brainData = {
    prefrontal: {
        title: "Your Title Here",
        content: `
            <h3>Your Content</h3>
            <p>Add your personal information here...</p>
        `
    },
    // ... other regions
};
```

### Changing Colors

Modify the CSS in `styles.css` to change the color scheme:

```css
#prefrontal {
    background: linear-gradient(45deg, #your-color-1, #your-color-2);
}
```

### Adding Images

Replace the placeholder images in the content with your own:

```html
<div class="gallery">
    <img src="your-image-1.jpg" alt="Description">
    <img src="your-image-2.jpg" alt="Description">
</div>
```

### Modifying Brain Regions

To add or remove brain regions:

1. **HTML**: Add/remove `<div class="brain-region">` elements in `index.html`
2. **CSS**: Add corresponding styles for positioning and colors
3. **JavaScript**: Add content data in the `brainData` object

## 📁 File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── brain.svg           # Brain image (SVG)
└── README.md           # This file
```

## 🎯 Brain Region Positioning

The brain regions are positioned using CSS percentages. You can adjust their positions by modifying the `top`, `left`, `width`, and `height` properties in `styles.css`:

```css
#prefrontal {
    top: 15%;      /* Distance from top */
    left: 25%;     /* Distance from left */
    width: 120px;  /* Region width */
    height: 80px;  /* Region height */
}
```

## 🌟 Tips for Personalization

1. **Add Real Photos**: Replace placeholder images with your actual photos
2. **Update Achievements**: Add your real accomplishments and experiences
3. **Include Links**: Add links to your social media, portfolio, or projects
4. **Customize Colors**: Match the color scheme to your personal brand
5. **Add More Regions**: Create additional brain regions for other interests

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies required
- **SVG Brain Image**: Scalable vector graphics for crisp display at any size
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Animations**: Smooth transitions and hover effects
- **Touch Support**: Optimized for mobile devices

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to customize this template for your own personal website! You can:

- Add new brain regions
- Improve the design
- Add new features
- Share your customized version

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy exploring your brain! 🧠✨** 