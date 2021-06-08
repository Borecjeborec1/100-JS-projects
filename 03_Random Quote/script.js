//console.log('Hello World');

//Declaring the variables
const button = document.getElementById('btn');
const quote_div = document.getElementById('quote');
const author_div = document.getElementById('author');
const quotesAndAuthor = [
  { quote: "It always seems impossible until it's done.", author: 'Nelson Mandela' },
  {
    quote:
      'Your smile will give you a positive countenance that will make people feel comfortable around you.',
    author: 'Les Brown',
  },
  { quote: "If opportunity doesn't knock, build a door.", author: 'Milton Berle' },
  {
    quote: "Open your eyes, look within. Are you satisfied with the life you're living?",
    author: 'Bob Marley',
  },
  {
    quote: 'It is no use walking anywhere to preach unless our walking is our preaching.',
    author: 'Francis of Assisi',
  },
];

//Event Listeners
button.addEventListener('click', function () {
  var randomIndex = Math.floor(Math.random() * 5);
  quote_div.innerHTML = quotesAndAuthor[randomIndex].quote;
  author_div.innerHTML = quotesAndAuthor[randomIndex].author;
});

//Functions
