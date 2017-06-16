# Nanny Dunkelheit


#### A story of friendship, adventure, and absolutely nothing creepy at all.
<!-- <hr> -->
### About this project:
Nanny Dunkelheit is an interactive storytelling experience inspired by a game I am currently developing in Unity. The user can click on certain elements of the page to trigger audio and animations.
### Tech Used in Development
Nanny Dunkelheit was created in vanilla JavaScript, CSS3, HTML5. It was built in Sinatra for the purpose of implementing the Sendgrid API.
The images were created in Photoshop CS5 and the audio was edited with Reason and Audacity. The individual audio pieces are public domain and were sampled from freesound.org.

### Animations:

#### CSS Transform
<span>For this animation I used the Transform property to manipulate the scale and the X,Y position. I included <b>-webkit-backface-visibility: hidden;</b> to address flickering issues.</span>
<br>
<span style="margin:10px;">
<img src="https://user-images.githubusercontent.com/16992474/27233078-4bbf50f6-5286-11e7-8107-f19fc672b11f.gif" width="400">
<img src="https://user-images.githubusercontent.com/16992474/27230731-38f1c09c-527e-11e7-8a88-6b5a19374ced.gif" width="400"></span>


#### Sprite 
Second type is a Sprite animation which is little more involved. Instead of using transform the keyframes are changing the background-position. 
For these kinds of animations some math is needed!..but only some ;). Here I have a sprite sheet which illustrates how I want the animation to move.It is **important** to make sure each "frame" is **exactly the same width** , that the illustration is in a fixed position within the "frame" and the illustration does not exceed that frame. If not you will end up with a wonky animation that appears to be shifting while animating or clipped.
<img src="https://user-images.githubusercontent.com/16992474/27234709-fa5f8504-528b-11e7-833d-32c42c77e56a.png" width="400">

<span>Once I finished with the sheet I got the width of each "frame" in pixels. I created a div with the width of that number and the height of my sprite sheet. In the animation property I set <b>steps</b> to one less my total frames and set my final keyframe to the length of the sheet minus one frame. This allows the animation to end on the last illustration and not the return to the first. If your math is wrong you will see each illustration zip through the CSS element.</span><br>

<span><img src="https://user-images.githubusercontent.com/16992474/27230902-d9b2ad20-527e-11e7-9bd7-72b16dda33cc.gif" width="400">
<img style="float:left;" src="https://user-images.githubusercontent.com/16992474/27233079-4bc7c6f0-5286-11e7-8342-cf2dfcf23e83.gif" width="400"></span>

### JS Features:
#### OnScroll-
As mentioned above there were no libraries used in building this project. All functionality was created with pure Javascript. I used onScroll to trigger most of the animations and audio. In the below example the animation starts when the User scrolls between a short range of pixels. As I learned early on in the creation of this project is that onScroll works with **< >** comparison operators and not **==**. So I did a range of 100 pixels to check for.<br>

<span>
<img src="https://user-images.githubusercontent.com/16992474/27236512-5034a138-5293-11e7-8598-e99fe0a176d8.gif" width="400"> 
<img src="https://user-images.githubusercontent.com/16992474/27237606-cd9a29d2-5297-11e7-8977-b577a10d54e6.gif" width="400"> 
</span><br>

#### Auto Type-
<span>
This was fun for me to figure out. I wanted to create the "typing" affect but 100% from my own head. After some thought I came up with this solution.
</span>

<span>
<img style="float:left;" src="https://user-images.githubusercontent.com/16992474/27236513-5037a5cc-5293-11e7-8b82-33f31fae22d9.gif" width="400">
<img style="float:left;"src="https://user-images.githubusercontent.com/16992474/27237607-cda14a64-5297-11e7-8fa5-14baac42216b.gif" width="400">
</span>

[![forthebadge](http://forthebadge.com/images/badges/made-with-ruby.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
