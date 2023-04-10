const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
const field = [[]];
let fieldRow = 0;
let fieldColumn = 0;

const up = "u";
const down = "d";
const left = "l";
const right = "r";


function generateField() {
for(let r = 0;  r < row; r++){
    field[r] = [];
    
    for(let c = 0; c < col; c++){
        field[r][c] = fieldCharacter;
    }
}
}

function print() {
    clear();

    const displayCharacter = field.map(row => {
        return row.join('');
    }).join('\n');
    console.log(displayCharacter);
}



function holeGenerator(){
    const generateHole =  10;
    for(let i = 0; i <= generateHole; i++){
        let generateHoleRows = Math.floor(Math.random() * row);
        let generateHoleColumns = Math.floor(Math.random() * col);
        field[generateHoleRows][generateHoleColumns] = hole;
    }
}


function hatGenerator(){
    const generateHat =  1;
    for(let i = 1; i <= generateHat; i++){
        let generateHatRows = Math.floor(Math.random() * row);
        let generateHatColumns = Math.floor(Math.random() * col);
        field[generateHatRows][generateHatColumns] = hat;
    }
}


function setCharacterPosition(){
    field[fieldRow][fieldColumn] = pathCharacter;
}


function askQuestions(){
    let directions;
    
    while (true) {
        directions = prompt("Which Way? ").toUpperCase();
        if(directions !== up.toUpperCase() && directions !== down.toUpperCase() && directions !== left.toUpperCase() & directions !== right.toUpperCase()){
            console.log(`Please enter U , D, L or R`);
        }
        else{
            break;
        }
    }
    return directions;

}

function startPlaying(){
    let isPlaying = true;
    

    while(isPlaying){
        
        setCharacterPosition()
        print();
        const directions = askQuestions();
       


    if(directions == up.toUpperCase() && fieldRow > 0){
        fieldRow--;
    }

    else if(directions == down.toUpperCase() && fieldRow < row - 1){
        fieldRow++;
   }
   else if(directions == left.toUpperCase() && fieldColumn > 0){
        fieldColumn--;
        
   }
   else if(directions == right.toUpperCase() && fieldColumn < col - 1){
        fieldColumn++;
   }
   else{
       isPlaying = false;
   }

   

   if(field[fieldRow][fieldColumn] == hole){
    console.log(`Sorry, you fell down a hole!`);
    isPlaying = false;
   }
   else if(field[fieldRow][fieldColumn] == hat){
    console.log(`Congrats, you found your hat!`);
    isPlaying = false;
   }
   else if(field[fieldRow][fieldColumn] !== fieldCharacter){
    console.log(`Out of bounds - Game End!`);
    isPlaying = false;
   }
   else{
    console.log(`Please check again`);
   }

    }

}


generateField();
holeGenerator();
hatGenerator();
startPlaying();


