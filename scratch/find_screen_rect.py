from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's find white pixels (r > 240, g > 240, b > 240) in the right half
white_pixels = []
for y in range(80, 320):
    for x in range(450, width - 10):
        r, g, b, *a = pixels[x, y]
        if r > 245 and g > 245 and b > 245:
            white_pixels.append((x, y))

print("Total white pixels in right half:", len(white_pixels))
if white_pixels:
    xs = [p[0] for p in white_pixels]
    ys = [p[1] for p in white_pixels]
    print("Bounding box of white region on the right:", (min(xs), min(ys), max(xs), max(ys)))
