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
let displayTrash = document.querySelector(".display-trash");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

//let imageURLS = [
//"https://i.ytimg.com/vi/E_v8FRAcy1Y/maxresdefault.jpg", 
//"https://i1.sndcdn.com/artworks-rYkavKMuzkSWUyXG-2F3hEg-t500x500.jpg", "https://i1.sndcdn.com/artworks-000627808747-vd16iv-t500x500.jpg", "https://i1.sndcdn.com/artworks-000235892530-rur276-t500x500.jpg", "https://i.ytimg.com/vi/cQKGUgOfD8U/maxresdefault.jpg"];

//let songNames = ["your love is my  drug(8bit slowed)","Demise of A Nation","Dancing with the Flames","Revelation","ECHO", ];

//let artistNames = ["etxrnall","Secession Studies","Secession Studies","Ross Bugden","Crusher"];

//let linksSong = ["https://www.youtube.com/watch?v=nWKPYs54INA", 
//"https://www.youtube.com/watch?v=eduwBgDcMwY", 
//"https://www.youtube.com/watch?v=UauukzbPejE", 
//"https://www.youtube.com/watch?v=0aaopn0jCrk", 
//"https://www.youtube.com/watch?v=cQKGUgOfD8U"];


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
let song1 ={
  img:"https://i.ytimg.com/vi/E_v8FRAcy1Y/maxresdefault.jpg",
  song:"your love is my drug(8bit slowed)",
  artist:"etxrnall",
  link:"https://www.youtube.com/watch?v=nWKPYs54INA",
};

let song2 ={
  img:"https://i1.sndcdn.com/artworks-rYkavKMuzkSWUyXG-2F3hEg-t500x500.jpg",
  song:"Demise of A Nation",
  artist:"Secession Studies",
  link:"https://www.youtube.com/watch?v=eduwBgDcMwY",
};

let song3 ={
  img:"https://i1.sndcdn.com/artworks-000627808747-vd16iv-t500x500.jpg", 
  song:"Dancing with the Flames",
  artist:"Secession Studies",
  link:"https://www.youtube.com/watch?v=UauukzbPejE",
};

let song4 ={
  img:"https://i1.sndcdn.com/artworks-000235892530-rur276-t500x500.jpg",
  song:"Revelation",
  artist:"Ross Bugden",
  link:"https://www.youtube.com/watch?v=0aaopn0jCrk",
};

let song5 ={
  img:"https://i.ytimg.com/vi/cQKGUgOfD8U/maxresdefault.jpg",
  song:"ECHO",
  artist:"Crusher",
  link:"https://www.youtube.com/watch?v=cQKGUgOfD8U",
};
let songList = [song1,song2,song3,song4,song5];


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let userInputURL = image.value;
let userInputName = songName.value;
let userInputArtist = artist.value; 
let userInputLink =songLink.value;
  let info ={
    img:userInputURL,
  song:userInputName,
  artist:userInputArtist,
  link:userInputLink,
    }
    songList.push(info)
  displaySongInfo();
//let image = document.querySelector(".image");
//let songName = document.querySelector(".song-name");
//let artist = document.querySelector(".artist");
//let songLink = document.querySelector(".song-link");

// task 10: use `.push()` to add each input value to the correct array.
imageURLS.push(userInputURL); 
songNames.push(userInputName);
artistNames.push(userInputArtist);
linksSong.push(userInputLink);
}



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}
///////

//////
function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  //imageURLS, songNames, artistNames, linksSong
  //songNames, yes but i don't remever. i assume it startes with for()
//sort of. 
//   console.log(songNames)
// for(let i = 0; i <songNames.length;i++ ){
// displaySong.insertAdjacentHTML('beforeend', `<p>${songNames[i]}</p>`);
// };
  
  songList.forEach(function(song, index){	
		let songDelete = function(idx){
			songList.splice(idx,1)
		}
    displayImage.insertAdjacentHTML('beforeend', `<img src=${song.img}>`)
    displaySong.insertAdjacentHTML('beforeend', `<p>${song.song}</p>`)
    displayArtist.insertAdjacentHTML('beforeend', `<p>${song.artist}</p>`)
    displayLink.insertAdjacentHTML('beforeend', 
    `<a href = "${song.link}"target="_blank">${song.song}</a>`);
    // displayTrash.insertAdjacentHTML('beforeend',`<button onclick=songDelete(${index})">Delete</button>`)
  });

// for(let i = 0; i <artistNames.length;i++ ){
//   displayArtist.insertAdjacentHTML('beforeend', `<p>${artistNames[i]}</p>`);
// };
  
//   for(let i = 0; i <linksSong.length;i++ ){
//   displayLink.insertAdjacentHTML('beforeend', `<a href = "${linksSong[i]}">${linksSong[i]}</a>`);
// };
  
//   for(let i = 0; i <imageURLS.length;i++ ){
//   displayImage.insertAdjacentHTML('beforeend', `<img src=${imageURLS[i]}>`);
    
// };
  ///delete

//
}





// click event to add and display songs
add.onclick = function() {
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();

