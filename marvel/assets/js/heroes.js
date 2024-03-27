const marvelQuotes = [
  {
    image: "../assets/images/animated-ironman.png",
    text: "Part Of The Journey Is The End.",
  },
  {
    image: "../assets/images/charles.png",
    text: "While You Slept, The World Changed.",
  },
  {
    image: "../assets/images/spiderman.png",
    text: "The One And Only.",
  },
  {
    image: "../assets/images/hulk.png",
    text: "That's My Secret, Cap. I'm Always Angry.",
  },
  {
    image: "../assets/images/spiderman-power.png",
    text: "With Great Power Comes Great Responsibility",
  },
  {
    image: "../assets/images/thanos.png",
    text: "I am inevitable.",
  },
  {
    image: "../assets/images/captain-america.png",
    text: "I can do this all day.",
  },
  {
    image: "../assets/images/fury.jpg",
    text: "I'm Here To Talk To You About The Avengers Initiative.",
  },
];
const getRandomIndex = () => Math.floor(Math.random() * marvelQuotes.length);
const randomIndex = getRandomIndex();
const heroImage = document.querySelector(".Hero-image");
const heroText = document.querySelector(".Hero-text");

heroImage.src = marvelQuotes[randomIndex].image;
heroText.textContent = marvelQuotes[randomIndex].text;
