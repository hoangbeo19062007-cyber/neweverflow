from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Find all pixels where blue is significantly stronger than red and green in the right half of the image
candidates = []
for y in range(50, height - 50):
    for x in range(400, width - 20):
        r, g, b, *a = pixels[x, y]
        # Check if it's blue-ish/cyan-ish
        if b > r + 30 and b > g - 10:
            candidates.append((x, y, (r, g, b)))

print("Total blue-ish candidates in right half:", len(candidates))
if candidates:
    print("Samples of candidates (first 50):")
    for i, (x, y, rgb) in enumerate(candidates[:50]):
        print(f"({x}, {y}) -> {rgb}")
