from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's search the whole image for bright blue pixels (e.g. typical brand blue: r < 100, g > 100, b > 180)
blue_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        if b > 180 and g > 100 and r < 100:
            blue_pixels.append((x, y, (r, g, b)))

print("Total bright blue pixels:", len(blue_pixels))
if blue_pixels:
    # Group into connected components or print bounding boxes of regions
    # Since we want to find the EVERFLOW text on the screen
    xs = [p[0] for p in blue_pixels]
    ys = [p[1] for p in blue_pixels]
    print("Bounding box of all bright blue pixels:", (min(xs), min(ys), max(xs), max(ys)))
    # Let's print points where x > 300
    right_blue = [p for p in blue_pixels if p[0] > 300]
    print("Bright blue pixels on the right:", len(right_blue))
    if right_blue:
        r_xs = [p[0] for p in right_blue]
        r_ys = [p[1] for p in right_blue]
        print("Bounding box on the right:", (min(r_xs), min(r_ys), max(r_xs), max(r_ys)))
