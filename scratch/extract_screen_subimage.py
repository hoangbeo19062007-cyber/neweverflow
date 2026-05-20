from PIL import Image
import collections

img = Image.open('public/temp-fb-ads.png')
pixels = img.load()
width, height = img.size

# Crop region of right screen: x in [450, 720], y in [240, 420]
colors = []
for y in range(240, 420):
    for x in range(450, 720):
        r, g, b, *a = pixels[x, y]
        # Ignore white (r,g,b > 240) and black/dark grey (r,g,b < 50)
        if not (r > 240 and g > 240 and b > 240) and not (r < 50 and g < 50 and b < 50):
            colors.append((r, g, b))

counter = collections.Counter(colors)
print("Most common colorful colors on the right screen:")
for color, count in counter.most_common(20):
    print(f"Color {color} -> {count} pixels")
