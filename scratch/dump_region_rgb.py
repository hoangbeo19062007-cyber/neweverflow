from PIL import Image
import collections

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's search in x: [550, 700], y: [130, 200] for pixels where blue is dominant: b > r + 30 and b > g
blue_pixels = []
for y in range(130, 200):
    for x in range(520, 700):
        r, g, b, *a = pixels[x, y]
        if b > r + 40 and b > g + 20:
            blue_pixels.append((x, y, (r, g, b)))

print("Total blue-dominant pixels:", len(blue_pixels))
if blue_pixels:
    xs = [p[0] for p in blue_pixels]
    ys = [p[1] for p in blue_pixels]
    print("Bounding box of blue-dominant pixels:", (min(xs), min(ys), max(xs), max(ys)))
    colors = collections.Counter(p[2] for p in blue_pixels)
    print("Most common blue colors:", colors.most_common(10))
