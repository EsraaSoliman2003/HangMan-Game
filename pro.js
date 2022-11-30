//letters
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = letters.split("");
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let text = document.createTextNode(letter);
    span.appendChild(text);
    span.className = "letterBox";
    lettersContainer.appendChild(span);  

})

const words={
    programing: ["php", "javascript", "go", "ruby", "html", "mysql", "python"],
    movies: ["twilight saga", "divergent", "aladdin", "coco", "inside out", "robanzl", "lion king", "luca"],
    people: ["kareem esmail", "amir mounir", "mohammed salah", "Albert Einstein"],
    countries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
};


let allKeys = Object.keys(words);

let randomKeyNumber=Math.floor(Math.random() * allKeys.length );
let randomKeyValue=allKeys[randomKeyNumber];
let randomKeyValuevalue=words[randomKeyValue];

let randomNumber=Math.floor(Math.random() * randomKeyValuevalue.length);
let correctWord=randomKeyValuevalue[randomNumber];


let mySpan=document.querySelector(".gameInfo .category span").innerHTML=randomKeyValue;

//////////////////////////////////////

let myLetterGuss = document.querySelector(".lettersGuess");
let letterAndSpace = Array.from(correctWord);

letterAndSpace.forEach(Letter=>{
    let emptySpan = document.createElement("span");
    if(Letter===" "){
        emptySpan.className="space";
    }

    myLetterGuss.appendChild(emptySpan);

});

let gussSpans = document.querySelectorAll(".lettersGuess span");

let wrongAttempts = 0;
let time = 0;
let theDraw = document.querySelector(".Hangman");


document.addEventListener("click", (e)=>{

    let theStatus=false;

    if(e.target.className==="letterBox"){
        
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML.toLowerCase();
        //letterAndSpace
        letterAndSpace.forEach((wordLetter, wordindex)=>{
            if(wordLetter==clickedLetter){
                theStatus = true;
                gussSpans.forEach((span, spanindex) => {

                    if(spanindex===wordindex){
                        span.innerHTML=wordLetter;
                        time++;
                    }

                })

            }
        });



        if(theStatus!==true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            document.getElementById("fail").play();

            if(wrongAttempts===8){
                endGame();
                lettersContainer.classList.add("finished");
                document.getElementById("failture").play();
            }
        }
        else{
            let x=0;
            document.getElementById("success").play();

            letterAndSpace.forEach((el)=>{
                if(el===" "){
                    x++;
                }
            });
            
            if(time===(correctWord.length) && x===0){
                EndGame();
                lettersContainer.classList.add("finished");
                document.getElementById("successful").play();
            }
            else if(time===(correctWord.length-1) && x===1){
                EndGame();
                lettersContainer.classList.add("finished");
                document.getElementById("successful").play();
            }
            
        }


    }
});


function endGame(){
    let myDiv=document.createElement("div");
    let myText=document.createTextNode(`Game Over, The word is ${correctWord}`);
    myDiv.appendChild(myText);
    myDiv.className="popup";
    document.body.appendChild(myDiv);

}

function EndGame(){
    let myDiv2=document.createElement("div");
    let myText2=document.createTextNode(`Game Over, Congratulation ^___^`);
    let myText3=document.createTextNode(`The number of your wrong choices is ${wrongAttempts}`);
    let myText4;
    if(wrongAttempts<=3){
        myText4=document.createTextNode("You are Excellent");
    }
    else if(wrongAttempts>3 && wrongAttempts<=6){
        myText4=document.createTextNode("You are Good");
    }
    else{
        myText4=document.createTextNode("That was so close !!");
    }
    
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    
    myDiv2.appendChild(myText2);
    myDiv2.appendChild(br1);
    myDiv2.appendChild(myText3);
    myDiv2.appendChild(br2);
    myDiv2.appendChild(myText4);
    myDiv2.className="popup";
    document.body.appendChild(myDiv2);

}




