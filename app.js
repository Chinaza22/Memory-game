const cardArray =[
    {
        name: "Burger",
        img : "images/burger.jpg",

    },

    {
        name: "Fries",
        img : "images/fries.jpg",

    },

    {
        name: "Kebab",
        img : "images/kebab.jpg",

    },

    {
        name: "Pizza",
        img : "images/pizza.jpg",

    },

    {
        name: "Shawarma",
        img : "images/shawarma.jpg",

    },

    {
        name: "Wings",
        img : "images/wings.jpg",

    },

    {
        name: "Burger",
        img : "images/burger.jpg",

    },

    {
        name: "Fries",
        img : "images/fries.jpg",

    },

    {
        name: "Kebab",
        img : "images/kebab.jpg",

    },

    {
        name: "Pizza",
        img : "images/pizza.jpg",

    },

    {
        name: "Shawarma",
        img : "images/shawarma.jpg",

    },

    {
        name: "Wings",
        img : "images/wings.jpg",

    }
];

//console.log(cardArray);

//The below code is a js method for sorting numbers randomly. sort algorithm compares two values and sort through them 

cardArray.sort(() => 0.5 - Math.random())
//console.log(cardArray)

const displayGrid= document.querySelector("#grid");
//console.log(displayGrid);
const displayResult= document.querySelector("#result");



let cardsChosen=[]
let cardsChosenId =[]
const cardsMatched=[]


function createBoard(){
    //FOR LOOP
    for (let i=0; i<12; i++){

    //CREAES A HTML ELEMENT
     const card =   document.createElement ("img")

     //SETS ATTRIBUTE OF THE ABOVE CREATED ELEMENT
     card.setAttribute("src", "images/back.jpg")

     card.setAttribute( "data-id", i)

     card.setAttribute("width", "70%")
    
     //let flipCard
     card.addEventListener("click", flipCard)
     displayGrid.append(card)
     //console.log(card, i)
    }
}
createBoard()

function checkMatch(){
  const cards = document.querySelectorAll("#grid img")

  //Saving the chosen options as variables
  const firstChoice =cardsChosenId[0]
  const secondChoice = cardsChosenId[1]


  if (firstChoice==secondChoice){
    cards[firstChoice].setAttribute("src", "images/back.jpg")

    cards[secondChoice].setAttribute("src", "images/back.jpg")

    alert("You Clicked twice!")
  }
//console.log(cards)
 if(cardsChosen[0] == cardsChosen[1]){
    alert('Your memory is lit')

    cards[firstChoice].setAttribute("src", "images/match.jpg")

    cards[secondChoice].setAttribute("src", "images/match.jpg")

    //STOPS ACTIVITY ON THE MATCHED CARD
    cards[firstChoice].removeEventListener("click", flipCard)
    cards[secondChoice].removeEventListener("click", flipCard)

    cardsMatched.push(cardsChosen)

 }else {
    cards[firstChoice].setAttribute("src", "images/back.jpg")

    cards[secondChoice].setAttribute("src", "images/back.jpg")

    alert ("Try Again")
 }
  displayResult.textContent = cardsMatched.length
  cardsChosen=[]
  cardsChosenId=[]

 if (cardsMatched.length == cardArray.length/2){
    displayResult.textContent = "Congratulations you found them all"
 }
}

function flipCard(){
  const cardId=  this.getAttribute ( "data-id")

 cardsChosen.push(cardArray[cardId].name)

 cardsChosenId.push(cardId)


 this.setAttribute("src", cardArray[cardId].img)

 if (cardsChosen.length ===2){
    //setTimeOut calls a function after a stated amount of time
    setTimeout( checkMatch, 500)
 }
};
