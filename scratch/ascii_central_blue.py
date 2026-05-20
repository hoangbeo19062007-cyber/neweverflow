from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

col_start, col_end = 320, 520
row_start, row_end = 60, 260

cols = 90
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
            
            # Bright cyan/blue: b > r + 30 and b > 100
            if blue > red + 30 and blue > 100 and green > 100:
                line.append('B')
            elif red < 60 and green < 60 and blue < 60:
                line.append('#')
            elif red > 220 and green > 220 and blue > 220:
                line.append(' ')
            else:
                line.append('.')
        else:
            line.append(' ')
    grid.append("".join(line))

for line in grid:
    print(line)
