
"use strict";

/*Selects random integer*/
var randomI = randomInt(0, 10);

/* Makes a reference to the quote element using its ID */
var quoteElem = document.getElementById("quote");

/* Inserts the random quote into the element */
quoteElem.innerHTML = getQuote(randomI);

/* Function to generate a random integer */
function randomInt(lowest, size) {
  return Math.floor(lowest + size * Math.random());
}

/* Function to return a quote based on index */
function getQuote(n) {
  var quotes = [
    "Once you learn to read, you will be forever free ~ Frederick Douglass",
    "Today a reader, tomorrow a leader ~ Margaret Fuller",
    "Reading gives you the ability to reach higher ground and keep climbing ~ Oprah Winfrey",
    "Reading brings us unknown friends ~ Balzac",
    "Reading for me is spending time with a friend ~ Moonlight Publishing",
    "There is no friend as loyal as a book ~ Ernest Hemingway",
    "Books are not my whole life, but they make my life whole ~ Wee Bookworms",
    "A mind needs books as a sword needs a whetstone, it is to keep its edge ~ George R.R. Martin",
    "Reading is to the mind what exercise is to the body ~ Joseph Addison",
    "Books are knowledge. Books are reflection. Books change your mind ~ Toni Morrison"
  ];

  return quotes[n];
}