# 🧠 Using Your Own glTF Brain Model

## 📁 How to Add Your glTF Brain Model

### **Step 1: Prepare Your glTF File**
1. Make sure your brain model is in glTF format (`.glb` or `.gltf`)
2. Place your glTF file in the website folder
3. Recommended file name: `brain.glb`

### **Step 2: Update the Model URL**
Open `script.js` and find this line:
```javascript
const modelUrl = 'https://threejs.org/examples/models/gltf/brain.glb'; // Example URL
```

Replace it with your local file:
```javascript
const modelUrl = './brain.glb'; // Your local glTF file
```

### **Step 3: Adjust Brain Region Positions**
If your brain model has different proportions, you may need to adjust the region positions in the `createBrainRegions()` function:

```javascript
// Position regions around the brain
const angle = (index / 6) * Math.PI * 2;
const radius = 2.5; // Adjust this value to match your model size
region.position.set(
    Math.cos(angle) * radius,
    Math.sin(angle) * radius * 0.5,
    0
);
```

## 🎯 Alternative: Use Online glTF Models

You can also use free brain models from these sources:

### **Free Brain Models:**
1. **Sketchfab**: Search for "brain" and filter by "Downloadable"
2. **Google Poly** (now part of Tilt Brush): Free 3D models
3. **TurboSquid**: Some free brain models available
4. **CGTrader**: Free section with brain models

### **Example URLs:**
```javascript
// Replace with actual URLs from the sources above
const modelUrl = 'https://example.com/brain-model.glb';
```

## 🔧 Customizing Region Positions

If your brain model has specific anatomical regions, you can position the interactive spheres more precisely:

```javascript
// Example: Position regions at specific coordinates
const regionPositions = {
    prefrontal: { x: 0, y: 2, z: 0 },
    occipital: { x: 0, y: -2, z: 0 },
    temporal: { x: -2, y: 0, z: 0 },
    parietal: { x: 2, y: 0, z: 0 },
    cerebellum: { x: 0, y: -3, z: 0 },
    hippocampus: { x: 0, y: 0, z: 1 }
};

// Use positions in createBrainRegions()
region.position.set(
    regionPositions[regionName].x,
    regionPositions[regionName].y,
    regionPositions[regionName].z
);
```

## 📐 Model Scaling and Positioning

If your model appears too large or small, adjust the scale:

```javascript
// In loadBrainModel() function
brainModel.scale.set(0.5, 0.5, 0.5); // Make it smaller
// or
brainModel.scale.set(2, 2, 2); // Make it larger
```

## 🎨 Customizing Region Appearance

You can change the appearance of the interactive regions:

```javascript
// Change region size
const regionGeometry = new THREE.SphereGeometry(0.5, 16, 16); // Larger spheres

// Change region colors
const regionColors = {
    prefrontal: 0xff0000,    // Red
    occipital: 0x0000ff,     // Blue
    temporal: 0x00ff00,      // Green
    parietal: 0xffff00,      // Yellow
    cerebellum: 0xff00ff,    // Magenta
    hippocampus: 0x00ffff    // Cyan
};
```

## 🚀 Testing Your Model

1. **Local Testing**: Open `index.html` in a web browser
2. **File Structure**: Make sure your glTF file is in the same folder as `index.html`
3. **Console Errors**: Check browser console for loading errors
4. **Fallback**: If loading fails, the website will show a simple sphere as fallback

## 📱 Mobile Compatibility

The 3D brain works on mobile devices with touch controls:
- **Touch and drag** to rotate
- **Pinch** to zoom
- **Tap** regions to explore content

## 🔍 Troubleshooting

### **Model Not Loading:**
- Check file path is correct
- Ensure glTF file is valid
- Check browser console for errors

### **Regions Not Visible:**
- Adjust region positions to match your model
- Check if regions are behind the brain model
- Increase region size if too small

### **Performance Issues:**
- Reduce model complexity
- Lower texture resolution
- Use compressed glTF format

---

**Need Help?** Check the browser console (F12) for error messages and adjust accordingly! 