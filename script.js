let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://vignette.wikia.nocookie.net/theadventuresofgarythesnail/images/e/e6/Sandy_Cheeks.png/revision/latest/scale-to-width-down/340?cb=20171019045057",
    name: "Djaliatou Barry",
    quote: "You gotta put yourself first honnney",
    superlative: "Best smile"
  },
   {
    profileImage:
      "https://i.pinimg.com/originals/98/ef/8c/98ef8c6907cfefed086ba1a6847838de.png",
    name: "Drissa D",
    quote: "Say dahhh",
    superlative: "Most wackoo"
  },
  {
    profileImage:
      "https://i.pinimg.com/originals/d3/fd/a4/d3fda445bba1434038e6f02dfafc83c9.png",
    name: "Hummu Gado",
    quote: "Hope is a cruel joke",
    superlative: "Most terrific"
  },
   {
    profileImage:
      "https://img.favpng.com/2/24/11/ferb-fletcher-phineas-flynn-perry-the-platypus-isabella-garcia-shapiro-png-favpng-Dpe2eys8Fg2xEc10Kb5XcsGT7.jpg",
    name: "Farid O",
    quote: "Can I get a hug?",
    superlative: "Most buffy"
  },
  {
    profileImage:
      "https://i.pinimg.com/originals/0b/af/10/0baf106e328a19dddd2093436197961f.png",
    name: "Worokiya Tunkara",
    quote: "You're an unmitigated disaster",
    superlative: "Best hijab"
  },
   {
    profileImage:
      "https://vignette.wikia.nocookie.net/international-entertainment-project/images/5/54/Candace_Flynn_%28Phineas_and_Ferb%29.png/revision/latest/scale-to-width-down/340?cb=20160805012743",
    name: "Taslima A",
    quote: "oh nah sis",
    superlative: "Best hair"
  },
  {
    profileImage:
      "https://vignette.wikia.nocookie.net/spongebob/images/7/77/Plankton_stock_art.png/revision/latest?cb=20181202012432",
    name: "Aoussa Maliana Toure",
    quote: " Youre a psycho",
    superlative: "Most dramatic"
  },
   {
    profileImage:
      "https://vignette.wikia.nocookie.net/disney/images/4/41/BaljeetFull.JPG/revision/latest?cb=20190722154112",
    name: "Myriam T",
    quote: "Ummmm... i dont like you",
    superlative: "Next President"
  },
  {
    profileImage:
      "https://images-na.ssl-images-amazon.com/images/I/41EOYv0TqNL.jpg",
    name: "Britney Kady-Ann Anderson",
    quote: "Do it yourself",
    superlative: "Most Athletic"
  },
   {
    profileImage:
      "https://vignette.wikia.nocookie.net/phineasandferb/images/1/1b/Isabella.png/revision/latest?cb=20121111183129",
    name: "Alexis C",
    quote: "Turrrrrtlesss",
    superlative: "Zoologist"
  },
  {
    profileImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
    name: "Aisatou Kanuteh",
    quote: "Noo is easy to say",
    superlative: "Most nonchalant"
  },
   {
    profileImage:
      "https://img.favpng.com/23/4/21/dr-heinz-doofenshmirtz-phineas-flynn-ferb-fletcher-candace-flynn-perry-the-platypus-png-favpng-0DRgUHhjbEbDsLxsnctj1tak7.jpg",
    name: "Naomi",
    quote: "Say i wont do it",
    superlative: "Adventerous"
  },
   {
    profileImage:
      "https://vignette.wikia.nocookie.net/nickelodeon/images/7/76/SpongeBob_Schwammkopf_-_Karen_Plankton.png/revision/latest?cb=20181222162719&path-prefix=de",
    name: "Babamayokun O",
    quote: "Yurrrrrr!",
    superlative: "Largest mead"
  },
   {
    profileImage:
      "https://i.pinimg.com/originals/16/c2/a3/16c2a3861bb1d78318216303863f370a.png",
    name: "Adriana C",
    quote: "Girrrrrrllll",
    superlative: "Loudest voice"
  },
  {
    profileImage:
      "https://images-na.ssl-images-amazon.com/images/I/3142jthPe4L._SL500_AC_SS350_.jpg",
    name: "Munira Odigie",
    quote: "You stupid Wallahi ",
    superlative: "Loudest"
  }
  
];

let count = 0;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
  console.log(count);
  if (count == 14) {
  count = 0;
}
  console.log(count);
});


backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML = students[count].superlative;
console.log(count);
  if (count == 0) {
  count = 14;
}
  console.log(count);
});
