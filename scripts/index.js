let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("#dice1").setAttribute("src", "./assets/images/dice" + randomNumber1
+ ".png");
document.querySelector("#dice2").setAttribute("src", "./assets/images/dice" + randomNumber2
+ ".png");

if(randomNumber1 < randomNumber2){
    document.querySelector(".title").textContent = "Player 2 wins!";
    //document.querySelector("#wreath2").classList.toggle(".hidden");
}else if(randomNumber1 > randomNumber2){
    document.querySelector(".title").textContent = "Player 1 wins!";
    //document.querySelector("#wreath1").classList.toggle(".hidden");
}else{
    document.querySelector(".title").textContent = "Draw!";
    //document.querySelector("#wreath1").classList.toggle(".hidden");
    //document.querySelector("#wreath2").classList.toggle(".hidden");
}