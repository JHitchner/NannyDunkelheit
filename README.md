# Nanny Dunkelheit


#### A story of friendship, adventure, and absolutely nothing creepy at all.
<!-- <hr> -->
### About this project:
Nanny Dunkelheit is an interactive storytelling experience inspired by a game I am currently developing in Unity. The user can click on certain elements of the page to trigger audio and animations.
### Tech Used in Development
Nanny Dunkelheit was created in vanilla JavaScript, CSS3, HTML5. It was built in Sinatra for the purpose of implementing the Sendgrid API.
The images were created in Photoshop CS5 and the audio was edited with Reason and Audacity. The individual audio pieces are public domain and were sampled from freesound.org.

### Animations:
I used two kinds of animations for this project.
#### CSS Transform
<span style="float:left;"><p width="200">For this animation I used the Transform property to manipulate the scale and the X,Y position. I included **-webkit-backface-visibility: hidden;** to address flickering issues.</p></span>
<span style="float:left;"><img src="https://user-images.githubusercontent.com/16992474/27233078-4bbf50f6-5286-11e7-8107-f19fc672b11f.gif" width="350"></span>
<span style="float:left;"><img src="https://user-images.githubusercontent.com/16992474/27230731-38f1c09c-527e-11e7-8a88-6b5a19374ced.gif" width="350"></span>


#### Sprite 
Second type is a Sprite animation which is little more involved. 
For these kinds of animations some math is needed!..but only some ;). Here I have a sprite sheet which illustrates how I want the animation to move.It is **important** to make sure each "frame" is **exactly the same width and height** , that the illustration is in a fixed position within the "frame" and does not exceed that frame. If not you will end up with a wonky animation that appears to be shifting while animating or clipped.
<img src="https://user-images.githubusercontent.com/16992474/27234709-fa5f8504-528b-11e7-833d-32c42c77e56a.png" width="350">

Once I finished with the sheet I needed to figure out in pixels how big each frame was. To do this take the length (in pixles) of the sprite sheet and divide that by the number of "frames". Mine is 7. I created a div with the width of that number and the height of my sprite sheet. From here I created my animation and named it. I then added steps and set it to one less than the number of frames I have (6). Aimation-fill-mode keeps the animation from reverting to the first frame at the end of the animatoin.

<span style="float:left;">
<img src="https://user-images.githubusercontent.com/16992474/27230902-d9b2ad20-527e-11e7-9bd7-72b16dda33cc.gif" width="350">
</span>
<span style="float:left;">
<img src="https://user-images.githubusercontent.com/16992474/27233079-4bc7c6f0-5286-11e7-8342-cf2dfcf23e83.gif" width="350">
</span>


### Interactions:

### JS Features:

[![forthebadge](http://forthebadge.com/images/badges/made-with-ruby.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
