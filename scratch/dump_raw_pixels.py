from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's inspect pixel values on the right side of the image
coords = [
    (500, 100), (550, 100), (600, 100), (650, 100), (700, 100),
    (500, 150), (550, 150), (600, 150), (650, 150), (700, 150),
    (500, 200), (550, 200), (600, 200), (650, 200), (700, 200),
    (500, 250), (550, 250), (600, 250), (650, 250), (700, 250)
]

for x, y in coords:
    if x < width and y < height:
        print(f"({x}, {y}) -> {pixels[x, y]}")
