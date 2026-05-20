from PIL import Image
import collections

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's search the whole image for blue-ish/cyan-ish pixels: b > 120, b > r + 30, g > 80
found_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        if b > 120 and b > r + 20 and g > 80:
            found_pixels.append((x, y, (r, g, b)))

print("Total blue-ish pixels in the whole image:", len(found_pixels))

# Let's group them by x-coordinate to see where the concentrations are
x_counts = collections.Counter(p[0] // 20 for p in found_pixels)
print("Concentration of blue pixels by X column (divided by 20):")
for col in sorted(x_counts.keys()):
    print(f"Col {col*20}-{col*20+20}: {x_counts[col]} pixels")

# Let's also group them by y-coordinate
y_counts = collections.Counter(p[1] // 20 for p in found_pixels)
print("Concentration of blue pixels by Y row (divided by 20):")
for row in sorted(y_counts.keys()):
    print(f"Row {row*20}-{row*20+20}: {y_counts[row]} pixels")
