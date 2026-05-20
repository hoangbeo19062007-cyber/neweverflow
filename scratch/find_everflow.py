from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's find white pixels (r > 240, g > 240, b > 240)
white_regions = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        if r > 240 and g > 240 and b > 240:
            white_regions.append((x, y))

print("Total white pixels:", len(white_regions))
if white_regions:
    min_x = min(p[0] for p in white_regions)
    max_x = max(p[0] for p in white_regions)
    min_y = min(p[1] for p in white_regions)
    max_y = max(p[1] for p in white_regions)
    print("Bounding box of white pixels:", (min_x, min_y, max_x, max_y))
