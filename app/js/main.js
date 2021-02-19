let body = document.querySelector(".body"); // Body
let button = document.querySelector(".button"); // Button Start
let handMan = document.querySelector(".body_handMan"); // White Man Svg Bg
let enterYourName = document.querySelector(".enterYourName"); // Enter Your Name Box
let enterInput = document.querySelector(".enterYourName_Input"); // Enter Input
let enterLabel = document.querySelector(".enterYourName_Label"); // Enter Label

const MAIN_BLACK = "#292929";
const MAIN_WHITE = "#ffffff";
const MAIN_GREEN = "#03DAC5";
const MAIN_PURPLE = "#BB86FC";

// Start Button + Click
function startButton() {
    button.classList.remove("button_show");
    button.classList.add("button_bounce");
};

setTimeout(startButton, 3000);


button.addEventListener("click", function() {
    button.classList.remove("button_bounce");
    button.classList.add("button_hide");

    
    handMan.classList.add("body_handMan-off");

    // Button Start Hide
    setTimeout(function() {
        button.style.display = "none";
    },2000);

    // White Man Hide
    setTimeout(function() {
        handMan.style.display = "none";
    },2000);

    // Focus Input
    setTimeout(function() {
        enterYourName.classList.add("enterYourName-on");
        setTimeout(function() {
            enterInput.focus();  
        }, 1000)
    },2020);
});


// Input check status
let enterInputValue = enterInput.value; // Value Input
let enterButton = document.querySelector(".enterYourName_Button"); // Enter Button Next


// Function Check Valid Input Value + Show Button
let checkName = () => {
    if (enterInput.value.length >= 6) {
        enterInput.style.borderBottom = `3px solid ${MAIN_GREEN}`;
        enterButton.classList.add("enterYourName_Button-show");
    } 
    else if (enterInput.value.length < 6 && enterInput.value.length > 1) {
        enterInput.style.borderBottom = `3px solid ${MAIN_PURPLE}`;
        enterButton.classList.remove("enterYourName_Button-show");
    }
    else {
        enterInput.style.borderBottom = `3px solid ${MAIN_WHITE}`;        
    }
}


// Interval Check Valid Input Value + Show Button
let checkNameInterval = setInterval(checkName, 1);


// Apply Button + Click + Name
let name; // Name

// Welcome Modal
let welcomeModal = document.querySelector(".body_welcome");
let welcomeTitle = document.querySelector(".welcome_title");


enterButton.addEventListener("click", function(event) {

    // Hide Button
    enterButton.classList.remove("enterYourName_Button-show");
    enterButton.classList.add("enterYourName_Button-hide");

    // Get Name
    name = enterInput.value;

    // Off Check Valid Input
    clearInterval(checkNameInterval);

    // Hide Input
    enterInput.classList.add("enterYourName_Input-hide");

    // Hide Label
    enterLabel.classList.add("enterYourName_Label-hide");

    // Off Window Enter Your Name
    setTimeout(function() {
        enterYourName.classList.remove("enterYourName-on");
    }, 1480);

    // Show Welcome
    setTimeout(function() {
        welcomeTitle.innerHTML = welcomeTitle.innerHTML + " " + name.toUpperCase(); 
        welcomeModal.classList.add("welcome");
    }, 1550)
});



// Click Welcome Ok
let welcomeButton = document.querySelector(".welcome_button");

// Main Screen Game
let mainScreen = document.querySelector(".body_mainScreen");

// Show Name In Game
let playName = document.querySelector(".mainScreen_nameText");

welcomeButton.addEventListener("click", function() {
    // Hide Modal
    welcomeModal.classList.add("welcome-hide");
    setTimeout(function() {
        welcomeModal.style.display = "none";
    }, 2000)

    // Show Main Screen
    setTimeout(function(){
        mainScreen.classList.add("mainScreen");
        playName.innerHTML = name.toUpperCase();
    }, 2010)
});



// GAME STRUCTURE


// Words
let words = [
    "Автомат",
    "Конопля",
    "Стрела",
    "Суровый",
    "Реферат",
    "Хотение",
    "Хвоя",
    "Хлипать",
    "Царство",
    "Час",
    "Чванный",
    "Частный",
    "Щеколда",
    "Швея",
    "Щепяной",
    "Щепотка",
    "Ящер",
    "Яйцо",
    "Юмор",
    "Юстиция",
    "Шеф",
    "Шалом",
    "Четверг",
    "Флигель",
    "Форсить",
    "Фабрика",
    "Катить",
    "Таможня",
    "Склад",
    "Брод"
];






// Random Word Choice
let randomWordGet = words => words[Math.floor(Math.random() * words.length)];
let randomWord = randomWordGet(words).toUpperCase();


// Left Letter
let leftLetter = randomWord.length;

// Answer Array + Append Children + Show Panel Answer
let answerArray = [];
let score = document.querySelector(".mainScreen_score");

for (let i = 0; i < randomWord.length; i++) {
    answerArray[i] = "–";

    // Append Child Letter
    if (i > 0) {
    document.querySelector(".mainScreen_score")
        .appendChild(document.querySelector(".score_letter")
        .cloneNode(true));
    }
};

// Find And Change Letter 
let characters = document.querySelectorAll(".score_letter > .score_letterText");
for (let character of characters) {
    character.innerHTML = "–";
}
// Add Class For Every Letter
for (let k = 0; k < characters.length; k++) {
    characters[k].classList.add(`letter${k + 1}`);
}

// Show Panel Score
score.classList.add("score");


// Show Button
let checkCharBtn = document.querySelector(".mainScreen_checkLetter");
checkCharBtn.classList.add("mainScreen_checkLetter-on");



// Lifes
let lifes = 8;

// Man 
let man = document.querySelector(".man");
let pit = document.querySelector(".man_pit"); // Pit Draw

// Modal Actions
let modal = document.querySelector(".mainScreen_modalLetter"); // Modal
let input = document.querySelector(".modalLetter_char"); // Modal Input


// Show Modal
checkCharBtn.addEventListener("click", function() {
    modal.classList.add("modalLetter"); 
    input.focus();
});

// Hide Modal
let closeModal = document.querySelector(".modalLetter_close");
closeModal.addEventListener("click", function() { // Click Hide
    modal.classList.remove("modalLetter");
});
document.addEventListener("keydown", function(event) { // Escape Hide
    if (event.keyCode === 27) {
        modal.classList.remove("modalLetter");        
    };
});

// Save Character
let checkChar; 

// Show Mistake Letter
let showMistakeLetter;

// Life Heart Screen
let heart = document.querySelector(".mainScreen_lifeValue");
let heartIco = document.querySelector(".mainScreen_lifeIco");

// Modal Button Check
let sendChar = document.querySelector(".modalLetter_enter");




/* CHECK MISTAKE LETTER START*/
let miss1;
let miss2;
let miss3;
let miss4;
let miss5;
let miss6;
let miss7;

let miss1f = () => {
    return miss1 = document.querySelector(".mistake_item1").innerHTML;
};
let miss2f = () => {
    return miss2 = document.querySelector(".mistake_item2").innerHTML;
};
let miss3f = () => {
    return miss3 = document.querySelector(".mistake_item3").innerHTML;
};
let miss4f = () => {
    return miss4 = document.querySelector(".mistake_item4").innerHTML;
};
let miss5f = () => {
    return miss5 = document.querySelector(".mistake_item5").innerHTML;
};
let miss6f = () => {
    return miss6 = document.querySelector(".mistake_item6").innerHTML;
};
let miss7f = () => {
    return miss7 = document.querySelector(".mistake_item7").innerHTML;
};
/* CHECK MISTAKE LETTER END*/

/* CHECK LETTER START*/
let let1;
let let2;
let let3;
let let4;
let let5;
let let6;
let let7;

let let1f = () => {
    return let1 = document.querySelector(".letter1").innerHTML;
};
let let2f = () => {
    return let2 = document.querySelector(".letter2").innerHTML;
};
let let3f = () => {
    return let3 = document.querySelector(".letter3").innerHTML;
};
let let4f = () => {
    if (randomWord.length === 4) {
        return let4 = document.querySelector(".letter4").innerHTML;
    } else {
        return null;
    };
};
let let5f = () => {
    if (randomWord.length === 5) {
        return let5 = document.querySelector(".letter5").innerHTML;
    } else {
        return null;
    };

};
let let6f = () => {
    if (randomWord.length === 6) {
        return let6 = document.querySelector(".letter6").innerHTML;
    } else {
        return null;
    };

};
let let7f = () => {
    if (randomWord.length === 7) {
        return let7 = document.querySelector(".letter7").innerHTML;
    } else {
        return null;
    };

};
/* CHECK LETTER END*/


sendChar.addEventListener("click", function() {
    miss1f();
    miss2f();
    miss3f();
    miss4f();
    miss5f();
    miss6f();
    miss7f();

    let1f();
    let2f();
    let3f();
    let4f();
    let5f();
    let6f();
    let7f();

    // Check Length And Check Error/Again Letter
    if (input.value.length !== 1 || input.value.toUpperCase() === let1 || input.value.toUpperCase() === let2 || input.value.toUpperCase() === let3 || input.value.toUpperCase() === let4 || input.value.toUpperCase() === let5 || input.value.toUpperCase() === let6 || input.value.toUpperCase() === let7 || input.value.toUpperCase() === miss1 || input.value.toUpperCase() === miss2 || input.value.toUpperCase() === miss3 || input.value.toUpperCase() === miss4 || input.value.toUpperCase() === miss5 || input.value.toUpperCase() === miss6 || input.value.toUpperCase() === miss7){

        modal.classList.add("modalLetter-err");
        setTimeout(function() {
            modal.classList.remove("modalLetter-err"); 
        }, 2000)
    } else {
        checkChar = input.value.toUpperCase(); // Write Character
        showMistakeLetter = checkChar; // Mistake Letter


        let countFindLetter = 0;
        for (let j = 0; j < randomWord.length; j++) {
            if (checkChar === randomWord[j] && checkChar !== answerArray[j]) {
                answerArray[j] = checkChar;

                leftLetter--;

                countFindLetter++;

                document.querySelector(`.letter${j + 1}`).innerHTML = checkChar;
            }
        };




        // Substrate LIFE And Update
        if (countFindLetter === 0) {
            lifes--;
            heart.innerHTML -= 1;
            heart.classList.add("mainScreen_lifeBox-minus");
            setTimeout(function() {
                heart.classList.remove("mainScreen_lifeBox-minus");
            }, 500)
            heartIco.classList.add("mainScreen_lifeIco-minus");
            setTimeout(function() {
                heartIco.classList.remove("mainScreen_lifeIco-minus");
            }, 500)

            // Show Error Letter
            for (let f = 1; f <= 7; f++) {
                if (document.querySelector(`.mistake_item${f}`).innerHTML === "") {
                    document.querySelector(`.mistake_item${f}`).innerHTML = showMistakeLetter;
                    break;
                }
            }



            // Draw Man
            if (lifes === 7) {
                man.classList.add("man-one");
            }
            else if (lifes === 6) {
                man.classList.add("man-two"); 
            }
            else if (lifes === 5) {
                man.classList.add("man-three"); 
            }
            else if (lifes === 4) {
                man.classList.add("man-four"); 
            }
            else if (lifes === 3) {
                man.classList.add("man-five"); 
            }
            else if (lifes === 2) {
                man.classList.add("man-six"); 
            }
            else if (lifes === 1) {
                man.classList.add("man-seven"); 
            }
            else if (lifes === 0) {
                man.classList.add("man-eight"); 
            }
        } else {
            countFindLetter = 0;
        }

        // Close Modal + Clear Input
        modal.classList.remove("modalLetter");
        input.value = "";        

        // Check Win Or Lose
        if (lifes < 1) {
            for (let w = 0; w < randomWord.length; w++) {
                document.querySelector(`.letter${w + 1}`).innerHTML = randomWord[w];
            }

            score.classList.add("mainScreen_score-lose");

            pit.classList.add(".man-lose");


            setTimeout(function() {
                body.classList.add("body-lose");
            },1400)

            setTimeout(function() {
                body.classList.add("body-loseHide");
                setTimeout(function() {
                    body.style.display = "none";
                }, 600)
            }, 5000)

            setTimeout(function() {
                window.location.reload()
            }, 7500)
        }
        let modalWin = document.querySelector(".mainScreen_modalWin");
        if (leftLetter < 1) {
            score.classList.add("mainScreen_score-win");
            modalWin.classList.add("mainScreen_modalWin-on")
            checkCharBtn.style.display = "none";
        }
    }
});



