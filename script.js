// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imageURLS = [
"https://i.ytimg.com/vi/E_v8FRAcy1Y/maxresdefault.jpg", 
"https://i1.sndcdn.com/artworks-rYkavKMuzkSWUyXG-2F3hEg-t500x500.jpg", "https://i1.sndcdn.com/artworks-000627808747-vd16iv-t500x500.jpg", "https://i1.sndcdn.com/artworks-000235892530-rur276-t500x500.jpg", "https://i1.sndcdn.com/artworks-78LayNOjZtymbEzz-OGKryQ-t500x500.jpg"];

let songNames = ["your love is my  drug(8bit slowed)","Demise of A Nation","Dancing with the Flames","Revelation","The Mad Pries", ];

let artistNames = ["etxrnall","Secession Studies","Secession Studies","Ross Bugden","Rok Nardin"];

let linksSong = ["https://www.youtube.com/watch?v=nWKPYs54INA", 
"https://www.youtube.com/watch?v=eduwBgDcMwY", 
"https://www.youtube.com/watch?v=UauukzbPejE", 
"https://www.youtube.com/watch?v=0aaopn0jCrk", 
"https://www.youtube.com/watch?v=sJJ4OoFooak"];


//so the "" are just to keep them seperated? Ah, I got it now. Thanks.
// so you've got it actually, you just take the URLs, put them in an array. then later on you'll reference those urls when setting the src attribute on an img tag. sort of.
// the way to think about it is that "abc" defines a string containing abc where as in code, abc would be defining a variable named abc. so the "" tells javascript that the information between the quotes is text, then we separate our text in an array with , 
// does that make sense?
// Sick! happy to help!


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  //imageURLS, songNames, artistNames, linksSong
  //songNames, yes but i don't remever. i assume it startes with for()
//sort of. 
  console.log(songNames)
for(let i = 0; i <songNames.length;i++ ){
displaySong.insertAdjacentHTML('beforeend', `<p>${songNames[i]}</p>`);
};
  
for(let i = 0; i <artistNames.length;i++ ){
  displayArtist.insertAdjacentHTML('beforeend', `<p>${artistNames[i]}</p>`);
};
  
  for(let i = 0; i <linksSong.length;i++ ){
  displayLink.insertAdjacentHTML('beforeend', `<p>${linksSong[i]}</p>`);
};
  
  for(let i = 0; i <imageURLS.length;i++ ){
  displayImage.insertAdjacentHTML('beforeend', `<img src=${imageURLS[i]}>`);
};
//
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
