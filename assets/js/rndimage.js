// Array of image paths relative to the HTML file
const images = [
  'images/jacksonprofile.jpg',
  'images/dillonprofile.jpg',
];

// Pick a random one
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Set it as the image source
document.getElementById('random-image').src = selectedImage;

// Still need to set up the framework for the undergrads and alumni