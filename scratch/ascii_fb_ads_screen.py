from PIL import Image

img = Image.open('public/temp-fb-ads.png')
pixels = img.load()
width, height = img.size

col_start, col_end = 480, 680
row_start, row_end = 260, 340

cols = 90
rows = 25

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
            
            # Check for bright brand blue (the text color of "EVERFLOW"):
            # It's a bright blue: e.g. b > 180, r < 100, g > 100
            if blue > 180 and red < 120 and green > 100:
                line.append('B')
            elif red < 60 and green < 60 and blue < 60:
                line.append('#')
            elif red > 240 and green > 240 and blue > 240:
                line.append(' ')
            else:
                line.append('.')
        else:
            line.append(' ')
    grid.append("".join(line))

for line in grid:
    print(line)
