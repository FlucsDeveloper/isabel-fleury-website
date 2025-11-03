#!/bin/bash

# Image Copy Helper Script
# This script helps you copy the three images to the correct locations

echo "🖼️  Isabel Fleury Website - Image Setup"
echo "========================================"
echo ""

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "Creating image directories..."
    mkdir -p public/images/hero
    mkdir -p public/images/services
    mkdir -p public/images/about
    echo "✓ Directories created"
fi

echo ""
echo "Please provide the paths to your images:"
echo ""

# Image 1: Buddha Garden
read -p "Path to Buddha Garden image (for homepage): " IMAGE1
if [ -f "$IMAGE1" ]; then
    cp "$IMAGE1" public/images/hero/buddha-garden.jpg
    echo "✓ Copied to: public/images/hero/buddha-garden.jpg"
else
    echo "⚠ File not found: $IMAGE1"
fi

echo ""

# Image 2: Meditation Altar
read -p "Path to Meditation Altar image: " IMAGE2
if [ -f "$IMAGE2" ]; then
    cp "$IMAGE2" public/images/services/meditation-altar.jpg
    echo "✓ Copied to: public/images/services/meditation-altar.jpg"
else
    echo "⚠ File not found: $IMAGE2"
fi

echo ""

# Image 3: Isabel Portrait
read -p "Path to Isabel's portrait: " IMAGE3
if [ -f "$IMAGE3" ]; then
    cp "$IMAGE3" public/images/about/isabel-portrait.jpg
    echo "✓ Copied to: public/images/about/isabel-portrait.jpg"
else
    echo "⚠ File not found: $IMAGE3"
fi

echo ""
echo "========================================"
echo "✅ Image setup complete!"
echo ""
echo "Next steps:"
echo "1. Start the dev server: npm run dev"
echo "2. Visit http://localhost:3001"
echo "3. Check that images appear correctly"
echo ""
