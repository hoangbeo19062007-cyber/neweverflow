from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

white_pixels = []
for y in range(50, 350):
    for x in range(300, width - 10):
        r, g, b, *a = pixels[x, y]
        if r > 245 and g > 245 and b > 245:
            white_pixels.append((x, y))

print("Total white pixels:", len(white_pixels))
if white_pixels:
    xs = [p[0] for p in white_pixels]
    ys = [p[1] for p in white_pixels]
    print("Bounding box of white region:", (min(xs), min(ys), max(xs), max(ys)))
