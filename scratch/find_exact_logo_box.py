from PIL import Image

img = Image.open('public/temp-fb-ads.png')
pixels = img.load()
width, height = img.size

logo_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        # Check for matching blue shades of EVERFLOW text:
        # r around 20-80, g around 140-210, b around 200-255
        if 15 <= r <= 90 and 130 <= g <= 215 and 200 <= b <= 255:
            logo_pixels.append((x, y))

print("Total logo pixels:", len(logo_pixels))
if logo_pixels:
    xs = [p[0] for p in logo_pixels]
    ys = [p[1] for p in logo_pixels]
    print("Bounding box of EVERFLOW logo text:", (min(xs), min(ys), max(xs), max(ys)))
