var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/welder.png") {
      myImage.setAttribute ("src", "images/welder2.png");
    } else {
      myImage.setAttribute ("src", "images/welder.png");
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please introduce youreself.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Welding is cool, ' + myName;
  };

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Welding is cool, ' + storedName;
  };

myButton.onclick = function() {
    setUserName();
  };
