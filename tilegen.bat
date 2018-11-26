mkdir ./static/images/maptiles
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 256x256 -crop 256x256 -set filename:tile ./static/images/maptiles/0-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 512x512 -crop 256x256 -set filename:tile ./static/images/maptiles/1-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 1024x1024 -crop 256x256 -set filename:tile ./static/images/maptiles/2-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 2048x2048 -crop 256x256 -set filename:tile ./static/images/maptiles/3-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 4096x4096 -crop 256x256 -set filename:tile ./static/images/maptiles/4-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
"C:\Program Files\ImageMagick-7.0.8-Q16\convert.exe" ./static/images/saboteur2_map.png -resize 8192x8192 -crop 256x256 -set filename:tile ./static/images/maptiles/5-%%[fx:page.x/(256)]-%%[fx:page.y/(256)] %%[filename:tile].png
