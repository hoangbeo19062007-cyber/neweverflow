"""Remove EVERFLOW wordmark from hero PNG (same art as fb-ads2 CDN asset)."""
from __future__ import annotations

import io
import urllib.request
from pathlib import Path

from PIL import Image

CDN_URL = "https://w.ladicdn.com/s1150x1050/5f714867c025a83c10a07869/fb-ads2-1-20220802014840.png"
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "hero-home-illustration.png"


def is_logo_pixel(r: int, g: int, b: int) -> bool:
    if 15 <= r <= 90 and 130 <= g <= 215 and 200 <= b <= 255:
        return True
    if b > 200 and g < 120 and r < 100:
        return True
    return False


def load_source() -> Image.Image:
    with urllib.request.urlopen(CDN_URL, timeout=60) as resp:
        data = resp.read()
    return Image.open(io.BytesIO(data)).convert("RGBA")


def main() -> None:
    img = load_source()
    w, h = img.size
    px = img.load()

    rx0, ry0, rx1, ry1 = 668, 435, 952, 505

    mask = [[False] * w for _ in range(h)]
    for y in range(ry0, ry1):
        for x in range(rx0, rx1):
            r, g, b, a = px[x, y]
            if a < 128:
                continue
            if is_logo_pixel(r, g, b):
                mask[y][x] = True

    for _ in range(2):
        nmask = [row[:] for row in mask]
        for y in range(1, h - 1):
            for x in range(1, w - 1):
                if not mask[y][x]:
                    continue
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    nmask[ny][nx] = True
        mask = nmask

    for y in range(ry0, ry1):
        for x in range(rx0, rx1):
            if not mask[y][x]:
                continue
            sy = y - 1
            found = None
            while sy >= max(0, y - 80):
                r, g, b, a = px[x, sy]
                if a >= 128 and not is_logo_pixel(r, g, b) and not mask[sy][x]:
                    found = (r, g, b, a)
                    break
                sy -= 1
            if found:
                px[x, y] = found
            else:
                px[x, y] = (122, 123, 123, 255)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, optimize=True)
    print("Wrote", OUT, "size", img.size)


if __name__ == "__main__":
    main()
