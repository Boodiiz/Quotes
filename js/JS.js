
var quoteContent = document.getElementById("quoteOutput");
var authorName = document.getElementById("authorOutput");

var quotes = ["Be yourself; everyone else is already taken.", 
"So many books, so little time." ,
 "Be the change that you wish to see in the world.", 
 "In three words I can sum up everything I've learned about life: it goes on." ];
var authors = ["--Oscar Wilde", 
"--Frank Zappa" ,
 "--Mahatma Gandhi", 
 "--Robert Frost" ];



function generateQuote()
{ 
  displayQuote();
}

function displayQuote()
{
  for(var i = 0 ; i < quotes.length; i++)
  {
    var randomNumber = Math.floor(Math.random()*quotes.length);

    quoteContent.innerHTML=quotes[randomNumber];


    var randomNumberr = Math.floor(Math.random()*authors.length);

    authorName.innerHTML=authors[randomNumberr];
  }


}

