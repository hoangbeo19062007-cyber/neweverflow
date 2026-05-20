from PIL import Image

img = Image.open('public/temp-fb-ads.png')
pixels = img.load()
width, height = img.size

# Let's inspect the entire image for pixels that are blue: b > r + 30 and b > 120
blue_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, *a = pixels[x, y]
        # Ignore background blue: the background gradient in the top of the image
        # Let's look for pixels on a white screen: r, g, b would have a white border or surround
        if b > r + 40 and b > 150 and r < 120:
            blue_pixels.append((x, y, (r, g, b)))

print("Total blue pixels in temp-fb-ads:", len(blue_pixels))
if blue_pixels:
    xs = [p[0] for p in blue_pixels]
    ys = [p[1] for p in blue_pixels]
    print("Bounding box of blue pixels:", (min(xs), min(ys), max(xs), max(ys)))
    
    # Let's check clusters by printing concentrations
    import collections
    x_counts = collections.Counter(p[0] // 20 for p in blue_pixels)
    print("X column concentrations:")
    for col in sorted(x_counts.keys()):
        print(f"Col {col*20}-{col*20+20}: {x_counts[col]} pixels")
