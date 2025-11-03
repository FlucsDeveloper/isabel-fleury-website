# Image Setup Guide

This guide will help you add the images to the website.

## Images to Add

You have three beautiful images to integrate:

1. **Buddha in Garden (Image #1)** - Golden Buddha statue with waterfall and flowers
2. **Buddha Altar (Image #2)** - Buddha statue with candles and sacred objects
3. **Isabel Portrait (Image #3)** - Black and white portrait of Isabel

## Where to Place Images

### Step 1: Save Images to Project

Copy your images to these locations in the project:

```bash
isabel-fleury-website/
└── public/
    └── images/
        ├── hero/
        │   └── buddha-garden.jpg       # Image #1 (Buddha with waterfall)
        ├── services/
        │   └── meditation-altar.jpg    # Image #2 (Buddha altar)
        └── about/
            └── isabel-portrait.jpg     # Image #3 (Isabel's photo)
```

### Step 2: Manual Copy Instructions

**From your desktop:**

1. Locate the three images you uploaded to Claude
2. Rename them as follows:
   - Image #1 → `buddha-garden.jpg`
   - Image #2 → `meditation-altar.jpg`
   - Image #3 → `isabel-portrait.jpg`

3. Copy to project folders:
   ```bash
   # Navigate to the project
   cd /Users/felipec/Desktop/Site-IsabelFleury/isabel-fleury-website

   # Copy images (update paths to where your images are saved)
   cp ~/Downloads/image1.png public/images/hero/buddha-garden.jpg
   cp ~/Downloads/image2.png public/images/services/meditation-altar.jpg
   cp ~/Downloads/image3.png public/images/about/isabel-portrait.jpg
   ```

## Image Usage in Website

### Homepage Hero Background
- **File**: `public/images/hero/buddha-garden.jpg`
- **Used in**: Homepage hero section as background
- **Purpose**: Creates serene, contemplative atmosphere

### Meditation Page
- **File**: `public/images/services/meditation-altar.jpg`
- **Used in**: Meditation page header/feature
- **Purpose**: Visual representation of meditation practice

### About Page
- **File**: `public/images/about/isabel-portrait.jpg`
- **Used in**: About page alongside biography
- **Purpose**: Personal connection with Isabel

## Image Optimization Tips

For best performance:

1. **Format**: Use WebP or JPEG format
2. **Size**:
   - Hero images: 1920x1080px (max)
   - Portrait: 800x800px (max)
   - Meditation image: 1200x800px (max)

3. **Compression**: Use tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - ImageOptim (Mac)

4. **File size**: Aim for <500KB per image

## Quick Copy Script

Save this as `copy-images.sh` in the project root:

```bash
#!/bin/bash

# Update these paths to where your images are located
IMAGE1_PATH="$HOME/Desktop/buddha-garden.jpg"
IMAGE2_PATH="$HOME/Desktop/meditation-altar.jpg"
IMAGE3_PATH="$HOME/Desktop/isabel-portrait.jpg"

# Copy to project
cp "$IMAGE1_PATH" public/images/hero/buddha-garden.jpg
cp "$IMAGE2_PATH" public/images/services/meditation-altar.jpg
cp "$IMAGE3_PATH" public/images/about/isabel-portrait.jpg

echo "✓ Images copied successfully!"
```

Make it executable and run:
```bash
chmod +x copy-images.sh
./copy-images.sh
```

## Verify Images

After copying, check that images appear correctly:

1. Start development server: `npm run dev`
2. Visit pages:
   - Homepage: http://localhost:3001
   - About: http://localhost:3001/about
   - Meditation: http://localhost:3001/meditation

3. Check browser console for any image loading errors

## Alternative: Using Next.js Image Component

The website is already configured to use Next.js `<Image>` component which provides:
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

Images will be automatically optimized when you build for production.

## Need Help?

If images don't appear:
1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folders
3. Clear browser cache (Cmd+Shift+R on Mac)
4. Check browser console for errors
5. Restart development server

---

**Note**: The website will work without images, showing placeholders. Add images when ready for the best visual experience.
