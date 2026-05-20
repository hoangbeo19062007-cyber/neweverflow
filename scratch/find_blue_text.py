from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's search in the right half of the image for blue pixels
blue_pixels = []
for y in range(50, height - 50):
    for x in range(350, width - 20):
        r, g, b, *a = pixels[x, y]
        # Blue/cyan text on white background: b should be high, r should be low
        if b > 150 and g > 100 and r < 120:
            blue_pixels.append((x, y, (r, g, b)))

print("Total blue pixels found on the right:", len(blue_pixels))
if blue_pixels:
    min_x = min(p[0] for p in blue_pixels)
    max_x = max(p[0] for p in blue_pixels)
    min_y = min(p[1] for p in blue_pixels)
    max_y = max(p[1] for p in blue_pixels)
    print("Bounding box of blue pixels:", (min_x, min_y, max_x, max_y))
    # Print some of the colors to see what color the text actually is
    import collections
    colors = collections.Counter(p[2] for p in blue_pixels)
    print("Most common blue colors:", colors.most_common(10))
