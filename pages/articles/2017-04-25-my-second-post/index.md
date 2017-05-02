---
title: Two ways to add borders to landscape or portrait images
date: "2017-04-25T23:46:37.121Z"
layout: post
path: "/image-border/"
readNext: "/hello-world/"
category: "FrontEnd, Scripting"
description: "Two approaches for programatically adding borders to landscape or portrait images so that they are square."
---

Recently, I had to build an image gallery for MindMakers Project where all of the images from recent events that we'd held were to be presented in a square frame. You can see the final result [here](https://mindmakersproject.org/outreach/intro-to-programming) by navigating through the image gallery.

<figure class="floatRight">
  <img style="height: 310px;" src="./imageSample.jpg" alt="designer wants">
  <figcaption>What the designers wanted.</figcaption>
</figure>

Instead of having the images in black borders, the designers wanted to have a purple masked version of the image fill in the borders, like you can see on the side. I tried two approaches and went with the second because it was more performant and I'll get into why later on.

### CSS
The first approach I went with was to do it purely in CSS. Things were made a little bit more tricky because the images had to be centered horizontally and vertically because I would be dealing with both landscape and portrait images. There were two main tricks
1. To have two divs inside of a container div, the first containing the image cropped to cover the div size and masked the color that you want
2. The second div containing the actual image, centered both vertically and horizontally.

<figure>
  <iframe height='550' scrolling='no' title='Fancy Image borders' src='//codepen.io/wcjohnson11/embed/oWxxJW/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/wcjohnson11/pen/oWxxJW/'>Fancy Image borders</a> by William Johnson (<a href='http://codepen.io/wcjohnson11'>@wcjohnson11</a>) on <a href='http://codepen.io'>CodePen</a>.
  </iframe>
</figure>

This worked great on individual images but when I tested it out in the gallery, I ran into some performance issues due to all of the extra HTML elements and CSS in addition to the CSS gallery transitions. This made me start thinking about other ways to do this more performantly which to me meant pre-processing.

### ImageMagick

[ImageMagick](https://www.imagemagick.org/script/index.php) is a software suite for creating, editing, composing, converting, basically anything you'd want to do involving image manipulation and an amazing tool that I end up reaching for whenever I want to programmatically work with images. The following is a quick script that I wrote that achieves the same thing as the css above for all JPG photos in the file that this bash script is run in.
```
FILES=./*.jpg
# Loop through the JPG files in this directory
for f in $FILES
do 
  # print the file name
  echo "$f"
  # Resize the image to be 500x500 pixels (the ! forces IM to make both the height and width 500px)
  # Then fill with a slightly opaque mask of our purple color and save it as background.jpg
  convert $f -resize 500x500! -fill 'rgba(170, 130, 255, 0.7)' -colorize 80% background.jpg
  # Resize image so that the larger dimension becomes 500px and call it overlay.jpg
  convert $f -resize 500x500 overlay.jpg
  # Layer overlay.jpg in the center on top of background.jpg
  composite -gravity center overlay.jpg background.jpg $f
  # Clean up the temporary files
  rm overlay.jpg
  rm background.jpg
done
```
After running this script, all of the landscape and portrait photos will have our cool borders added to them. How cool is that?! This could be shortened to a single command but I think that it's easier to show it in multiple steps. The result definitely made the image gallery much more performant.

### Conclusions

The CSS way would work great for a single image or even just a couple images on a page but proved too costly for my needs in an image gallery. Preprocessing definitely made this more performant and I've even added this as a part of the build step for our website so that our marketing team can add images to the necessary folders and then the images will be processed automatically. Success!

Let me know if you have any questions about any of this!
