// FSJS - Random Quote Generator

// An array named Quotes with 5 quote objects
var quotes = [
  {
    quote: 'It\'s much better to do good in a way that no one knows anything about it.',
    source: 'Leo Tolstoy',
    citation: 'Anna Karenina',
    year: 1877,
  },
  {
    quote: 'We need never be ashamed of our tears.',
    source: 'Charles Dickens',
    citation: 'Great Expectations',
    year: 1890,
    tag: 'Sorrow'
  },
  {
    quote: 'You are your best thing.',
    source: 'Toni Morrison',
    citation: 'Beloved',
    year: 1987,
    tag: 'Self-Esteem'
  },
  {
    quote: 'You forget what you want to remember, and you remember what you want to forget.',
    source: 'Cormac McCarthy',
    citation: 'The Road',
    year: 2006,
    tag: 'Life'
  },
  {
    quote: 'Sometimes we get sad about things and we don\'t like to tell other people that we are sad about them. We like to keep it a secret. Or sometimes, we are sad but we really don\'t know why we are sad, so we say we aren\'t sad but we really are.',
    source: 'Mark Haddon',
    citation: 'The Curious Incident of the Dog in the Night-Time',
    year: 2003,
    tag: 'Sadness'
  },
];

// getRandomQuote function which returns a random object from an array
function getRandomQuote (quoteArray) {
  var randomNumber = Math.floor(Math.random() * 5); // Generates a random number
  var randomQuote = quoteArray[randomNumber]; // Gets a random quote object from an array
  return randomQuote; // Returns the object
}

// printQuote function that prints objects to the DOM
function printQuote () {
  var quoteObject = getRandomQuote(quotes); // The getRandomQuote function is called, the quotes array has been passed as an argument and the function is stored in a variable.

  var html = ''; // An empty string is created and stored in a variable.
  html+= '<p class="quote">' + quoteObject.quote + '</p>'; //Quote has been added
  html+= '<p class="source">' + quoteObject.source; // Source has been added
  
  // This conditional checks to see if the object has the property 'citation'
  if (quoteObject.hasOwnProperty('citation')) {
    html += '<span class="citation">' + quoteObject.citation + '</span>';
  }
  // This conditional checks to see if the object has the property 'year'
  if (quoteObject.hasOwnProperty('year')) {
    html += '<span class="year">' + quoteObject.year + '</span>';
  }
  // This conditional checks to see if the object has the property 'tag'
  if (quoteObject.hasOwnProperty('tag')) {
    html += '<span class="tag">' + quoteObject.tag + '</span>';
  }
  html += '</p>';

  // getRandomColor function to generate a random color
  function getRandomColor () {
    function generateRandomColor () {
      return Math.floor(Math.random() * 256);
    } // Generates a random number from 0 to 256
    var r = generateRandomColor (); // for red value
    var g = generateRandomColor (); // for green value
    var b = generateRandomColor (); // for blue value
    var color = 'rgb(' + r + ',' + g + ', ' + b  + ')'; // Generates an RGB
    return color; // Returns the color
  }
  
  document.getElementById('quote-box').innerHTML = html; // Prints the string to the DOM
  document.getElementById('body').style.backgroundColor = getRandomColor(); // Changes the background color of quote
}

setInterval(printQuote, 20000);

/*
  This is a button. When the user clicks on it, it calls the printQuote
  function and shows another quote.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);