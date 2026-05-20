from PIL import Image

img = Image.open('public/service-illustration.png')
pixels = img.load()
width, height = img.size

# Let's print an ASCII grid of the region x: [400, 745], y: [100, 300]
# We'll downsample to, say, 80 columns and 40 rows
col_start, col_end = 400, 745
row_start, row_end = 100, 300

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
            # If the pixel is close to black or dark (r, g, b < 100) -> '#'
            # If it's pure/near white (r,g,b > 240) -> ' '
            # If it has color:
            # Let's map it based on dominant component:
            # Red-dominant -> 'R', Green-dominant -> 'G', Blue-dominant -> 'B'
            if red > 220 and green > 220 and blue > 220:
                line.append(' ')
            elif red < 60 and green < 60 and blue < 60:
                line.append('#')
            else:
                # Color or gray
                if blue > red + 15 and blue > green + 15:
                    line.append('B')
                elif red > blue + 15 and red > green + 15:
                    line.append('R')
                elif green > red + 15 and green > blue + 15:
                    line.append('G')
                elif abs(red - green) < 15 and abs(green - blue) < 15:
                    # Grey
                    line.append('.')
                else:
                    line.append('?')
        else:
            line.append(' ')
    grid.append("".join(line))

for line in grid:
    print(line)
