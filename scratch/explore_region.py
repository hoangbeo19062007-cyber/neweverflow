from PIL import Image
import collections

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's inspect a region around the right monitor: x from 450 to 650, y from 130 to 250
# Let's count all unique colors in this region, excluding near-whites and near-greys
region_colors = []
for y in range(130, 250):
    for x in range(450, 650):
        r, g, b, *a = pixels[x, y]
        # Ignore white/light grey (r, g, b all > 200) and dark grey/black (r, g, b all < 50)
        # Also ignore greys where |r-g| < 15 and |g-b| < 15 and |r-b| < 15
        if not (r > 200 and g > 200 and b > 200) and not (r < 50 and g < 50 and b < 50):
            if abs(r - g) > 15 or abs(g - b) > 15 or abs(r - b) > 15:
                region_colors.append((x, y, (r, g, b)))

print("Non-grey pixels in the region:", len(region_colors))
if region_colors:
    min_x = min(p[0] for p in region_colors)
    max_x = max(p[0] for p in region_colors)
    min_y = min(p[1] for p in region_colors)
    max_y = max(p[1] for p in region_colors)
    print("Bounding box of non-grey pixels:", (min_x, min_y, max_x, max_y))
    colors = collections.Counter(p[2] for p in region_colors)
    print("Most common colorful colors:", colors.most_common(15))
