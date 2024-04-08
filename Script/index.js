const quoteeDisplay = document.querySelector(".quotes");
const author = document.querySelector(".author");

function generateQ() {
  let ramdom = Math.floor(Math.random() * q.length);

  console.log(ramdom);

  quoteeDisplay.innerHTML = q[ramdom].quote;
  author.innerHTML = q[ramdom].author;
}

let q = [
  (quotes = {
    quote: "If you judge people, you have no time to love them.",
    author: " - Mother Teresa",
  }),
  (quotes = {
    quote: "The most courageous act is still to think for yourself. Aloud.",
    author: "  - Coco Chanel",
  }),
  (quotes = {
    quote: "The greatest wealth is to live content with little.",
    author: " - Plato",
  }),
  (quotes = {
    quote: "Do one thing every day that scares you.",
    author: "  -Eleanor Roosevelt",
  }),
  (quotes = {
    quote: "You must be the change you wish to see in the world.",
    author: "  - Mahatma Gandhi",
  }),
  (quotes = {
    quote: "The end doesn’t justify the means.",
    author: " - Sergey Nechayev",
  }),
  (quotes = {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: " - Nelson Mandela",
  }),
  (quotes = {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma.",
    author: " -Steve Jobs",
  }),
  (quotes = {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: " -James Cameron",
  }),
  (quotes = {
    quote:
      "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    author: " -John Lennon",
  }),
  (quotes = {
    quote: "You must be the change you wish to see in the world.",
    author: " -Mahatma Gandhi",
  }),
  (quotes = {
    quote: "Be yourself; everyone else is already taken.",
    author: " -Oscar Wilde",
  }),
  (quotes = {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: " -Ralph Waldo Emerson",
  }),
  (quotes = {
    quote: "The only thing we have to fear is fear itself.",
    author: " -Franklin D. Roosevelt",
  }),
  (quotes = {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: " -Martin Luther King Jr.",
  }),
  (quotes = {
    quote: "Well done is better than well said.",
    author: " -Benjamin Franklin",
  }),
  (quotes = {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: " -Helen Keller",
  }),
  (quotes = {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: " -Aristotle",
  }),
  (quotes = {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: " -Mother Teresa",
  }),
  (quotes = {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: " -Maya Angelou",
  }),
  (quotes = {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: " -Henry David Thoreau",
  }),
  (quotes = {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: " -Babe Ruth",
  }),
  (quotes = {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: " -Thomas A. Edison",
  }),
  (quotes = {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: " -Dr. Seuss",
  }),
  (quotes = {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: " -Eleanor Roosevelt",
  }),
  (quotes = {
    quote: "The only impossible journey is the one you never begin.",
    author: " -Tony Robbins",
  }),
  (quotes = {
    quote: "Only a life lived for others is a life worthwhile.",
    author: " -Albert Einstein",
  }),
  (quotes = {
    quote: "The purpose of our lives is to be happy.",
    author: " -Dalai Lama",
  }),
  (quotes = {
    quote: "You only live once, but if you do it right, once is enough.",
    author: " -Mae West",
  }),
  (quotes = {
    quote:
      "Don't worry when you are not recognized but strive to be worthy of recognition.",
    author: " -Abraham Lincoln",
  }),
  (quotes = {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: " -Confucius",
  }),
  (quotes = {
    quote: "Life itself is the most wonderful fairy tale.",
    author: " -Hans Christian Andersen",
  }),
  (quotes = {
    quote: "Do not let making a living prevent you from making a life.",
    author: " -John Wooden",
  }),
  (quotes = {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: " -Robert Frost",
  }),
  (quotes = {
    quote: "Life is trying things to see if they work.",
    author: " -Ray Bradbury",
  }),
  (quotes = {
    quote:
      "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: " -Marilyn Monroe",
  }),
  (quotes = {
    quote:
      "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: " -Albert Camus",
  }),
  (quotes = {
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
    author: " -F. Scott Fitzgerald",
  }),
  (quotes = {
    quote: "Life is made of ever so many partings welded together.",
    author: " -Charles Dickens",
  }),
  (quotes = {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: " -Winston S. Churchill",
  }),
  (quotes = {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: " -Henry David Thoreau",
  }),
  (quotes = {
    quote:
      "If you want to make your dreams come true, the first thing you have to do is wake up.",
    author: " -J.M. Power",
  }),
];

const btn = document.querySelector(".gen-btn button");
btn.addEventListener("click", generateQ);
