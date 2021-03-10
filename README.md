# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nixon Puertollano**

Time spent: **6 hrs (last documented 1:10 am 3/10/21)** hours spent in total

Link to project: (https://glitch.com/edit/#!/holly-canary-pig?path=README.md%3A9%3A59)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- Edit 1: Added 2 new buttons in html, a light orange/orange and light purple/purple in css
- Edit 2: Changed button 4 sound frequency, added two new sound frequencies for buttons 5 & 6
- Edit 3: Added generatePattern() function
## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://s4.gifyu.com/images/sitepreworkwingame2.gif)
![](https://s4.gifyu.com/images/sitepreworklosegame2.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/js/js_random.asp - for making random sequence
https://www.w3schools.com/jsref/jsref_tostring_array.asp - for printing out array for random sequence in console
https://pages.mtu.edu/~suits/notefreqs.html - frequencies - notes to reference when i changed the button sounds


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The last step for finishing the main guess function of the game was a bit of a challenge, as I am not well-versed in javascript. In fact, this is probably the second time I've looked and used HTML, CSS, and JS in a project. 
I realized that the conditional statements and functions work very similar to C++, but the challenge to me was referencing and calling the previous variables and functions from the previous steps to make the guess function.
After looking over the flowchart more and taking it case by case, I was able to come up with the correct function. Since most of the main features were walked through step-by-step, I mostly faced challenges trying to implement
the optional features. The random sequence function was one that was a bit challenging, but it became a piece of cake after I referenced JS code online regarding Math.floor and Math.random. Once I learned them, I used my 
previous knowledge to make a for loop which would randomly select an integer from 1-6, and returning each in the pattern array. I also realized I needed to keep the array inside the function, or else it would not clear the 
previous game's sequence, which would basically add onto the array values and make them greater than 6. Some of the other optional features I did were not too bad, since it was a matter of referencing material covered
in the main features walk-through or online. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Since this was the second time I really made some type of website application using HTML, CSS, and JS, I definitely would like to learn more, as there is definitely more I could learn to make my code more efficient. 
Also, I had some challenges with some of the optional features I did not complete, such as bumping up the playback speed per round and changing the game button appearances when they are clicked. 
While I was unsuccessful with using the knowledge I learned in the walkthrough to complete some of the optional features, I would definitely want to learn about how I could implement them. JavaScript is new to me because
I'm so used to calling functions with numerical/character inputs in C++, not with web elements that have different classes and properties. Regardless, I really enjoyed learning more about how the three languages interact
with eachother and would like to learn more. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would probably try to spend more time on the optional features that I was very close to making work. For instance, I had a good idea of how to decrease the playback speed of the clues per round, but I did not 
like the way it looked visually. I think it was because the instructions only said to change clueHoldTime to variable, and not the other ones. So while it did work to decrease the time clues would hold the button, 
there would still be the same pause time in between button clues. I tried messing around with more than one function to change this, but it ended up messing up the delays for each consecutive clue, so I decided
not to implement it as it was a little buggy. I would also try to add images and new sounds to the buttons. This memory game was used as a minigame in the multiplayer game "Among Us", so I wanted to add some
images of the imposters and show them on each button with the same color. However, I got a little confused with getting the CSS and JS to show the images on click. If I had more time, I would definitely like to 
spend more time on these features!


## License

    Copyright Nixon Puertollano

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.