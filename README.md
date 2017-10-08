# gateway-ctf-web

## Installation
So, you wanna install this docker image.
Run 'npm install' in root the directory
Run 'sudo docker build -t gw-web .' in the root directory
Run 'sudo docker run gw-web' in the root directory. 
Woah, all these challenges in one docker image. OwO

## Intro
Good job reading the intro, father would be proud.

## No Comment
If you look in the page source, the flag is located near the bottom

## Functional vs Object Oriented
Looking at the page source there are two functions, testLogin() & t(). testLogin compares the SHA256 hash of the password input and a given hash, if they are different the page will display 'Incorrect Password'. If the passwords are the same t() will be called. t() constructs a string from an array of characters and displays it on the page. In order to solve this, you could try cracking the SHA hash, or you could call t(). If you open up the Javascript console you can run JS commands, including print declared variables, run functions, etc. If you run t()... Kachow. Flag.

## Get My DL
You are greeted with yet another deep, inspirational and meaningful haiku and a link. If you click the link you get a file download called 'download.txt'. Looking at the source code, that link is directed at the /file endpoint, and passes a get parameter: 'f=download.txt'. If we copy/paste this url into our browser we can change the get parameter. If we change it to test it returns an error that /some/directory/whatever/test doesn't exist. We now know that by changing the get paramteter we can change the file we download. We solve this by changing it to flag.txt.

## I Love Eating Cookies
Cookie
