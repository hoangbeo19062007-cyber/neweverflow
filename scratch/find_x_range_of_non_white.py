from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

non_white = []
for y in range(130, 250):
    for x in range(450, 730):
        r, g, b, *a = pixels[x, y]
        if not (r > 240 and g > 240 and b > 240):
            non_white.append((x, y))

if non_white:
    xs = [p[0] for p in non_white]
    ys = [p[1] for p in non_white]
    print("Bounding box of non-white pixels in right screen:", (min(xs), min(ys), max(xs), max(ys)))
