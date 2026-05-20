from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's search the entire image for pixels that are blue: b > r + 30
blue_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        if b > r + 20:
            blue_pixels.append((x, y, (r, g, b)))

print("Total blue pixels in the whole image:", len(blue_pixels))
# Let's print some coordinates to see where they are
if blue_pixels:
    # Print a few samples across the image
    print("Samples of blue coordinates (first 20):", [p[:2] for p in blue_pixels[:20]])
    print("Samples of blue coordinates (last 20):", [p[:2] for p in blue_pixels[-20:]])
