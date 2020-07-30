var randomNumber1 = Math.floor(Math.random()*(7-1)+1);

var randomNumber2 = Math.floor(Math.random()*(7-1)+1);


document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

function check(){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText="Player1 Wins";
    }
    else
    if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerText="Player2 Wins";
    }
    else
    if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerText="DRAW";
    }

}
    
check();