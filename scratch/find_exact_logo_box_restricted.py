from PIL import Image

img = Image.open('public/temp-fb-ads.png')
pixels = img.load()
width, height = img.size

logo_pixels = []
for y in range(250, 330):
    for x in range(480, 710):
        r, g, b, *a = pixels[x, y]
        if 15 <= r <= 95 and 130 <= g <= 215 and 200 <= b <= 255:
            logo_pixels.append((x, y))

print("Total logo pixels in restricted box:", len(logo_pixels))
if logo_pixels:
    xs = [p[0] for p in logo_pixels]
    ys = [p[1] for p in logo_pixels]
    print("Bounding box of text on screen:", (min(xs), min(ys), max(xs), max(ys)))
