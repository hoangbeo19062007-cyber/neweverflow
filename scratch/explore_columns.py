from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

cols = {}
for x in range(400, width):
    count = 0
    for y in range(50, 350):
        r, g, b, *a = pixels[x, y]
        # Count if NOT extremely white (r,g,b > 250) and NOT extremely black (r,g,b < 50)
        if not (r > 245 and g > 245 and b > 245) and not (r < 40 and g < 40 and b < 40):
            count += 1
    cols[x] = count

print("Non-uniform pixels per column:")
# Print column indices with high counts
for x in range(400, width, 10):
    avg = sum(cols.get(xi, 0) for xi in range(x, x+10)) / 10
    print(f"Col {x}-{x+10}: {avg:.1f} pixels")
