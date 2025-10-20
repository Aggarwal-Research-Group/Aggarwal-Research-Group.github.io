// Array of image paths relative to the HTML file
const gradimages = [
  'images/profiles/jacksonprofile.jpg',
  'images/profiles/dillonprofile.jpg',
];

// Pick a random one
const randomGIndex = Math.floor(Math.random() * gradimages.length);
const selectedGradImage = gradimages[randomGIndex];

// Set it as the image source
document.getElementById('random-grad-image').src = selectedGradImage;

// Array of image paths relative to the HTML file
const undergradimages = [
  'images/profiles/gioprofile.jpg',
  'images/profiles/isaprofile.jpg',
];

// Pick a random one
const randomUIndex = Math.floor(Math.random() * undergradimages.length);
const selectedUndergradImage = undergradimages[randomUIndex];

// Set it as the image source
document.getElementById('random-undergrad-image').src = selectedUndergradImage;