from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

col_start, col_end = 460, 680
row_start, row_end = 80, 200

cols = 100
rows = 40

x_step = (col_end - col_start) / cols
y_step = (row_end - row_start) / rows

grid = []
for r in range(rows):
    line = []
    y = int(row_start + r * y_step)
    for c in range(cols):
        x = int(col_start + c * x_step)
        if x < width and y < height:
            rgb = pixels[x, y]
            red, green, blue = rgb[:3]
            
            # Check for blue/cyan: b > r + 20 and g > 100 or similar
            if blue > red + 35:
                line.append('B')
            elif red < 80 and green < 80 and blue < 80:
                line.append('#')
            elif red > 235 and green > 235 and blue > 235:
                line.append(' ')
            else:
                line.append('.')
        else:
            line.append(' ')
    grid.append("".join(line))

for line in grid:
    print(line)
