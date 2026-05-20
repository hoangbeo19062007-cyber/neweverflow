from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's inspect the right screen: x from 450 to 730, y from 80 to 250
# Let's find all pixels that are NOT white (e.g. r < 240 or g < 240 or b < 240)
# and NOT background blue (b > 150 and r < 100) if the background is blue
non_white = []
for y in range(80, 250):
    for x in range(450, 730):
        r, g, b, *a = pixels[x, y]
        # If it's a solid colored pixel (not near-white)
        if not (r > 240 and g > 240 and b > 240):
            non_white.append((x, y, (r, g, b)))

print("Total non-white pixels in right screen region:", len(non_white))
if non_white:
    # Group them by y-coordinate to see where text rows are
    rows = {}
    for x, y, rgb in non_white:
        rows[y] = rows.get(y, 0) + 1
    print("Rows with non-white pixels:")
    for y in sorted(rows.keys()):
        if rows[y] > 5:
            print(f"Row {y}: {rows[y]} pixels")
