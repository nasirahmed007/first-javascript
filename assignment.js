//Problem 1: Let’s play a mind game
function MindGame(numbers){
    let sum = ((((numbers*3)+10)/2)-5);
    return sum;
    }
    let result = MindGame(33);
    console. log (result)
//Problem 2: Finding even or odd
function evenOdd(numbers){
    let numbersLength = numbers.length;

    if(numbersLength % 2 === 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }

    return numbersLength;
}

let result = evenOdd('Batch7');

//Problem 3: Is Less or Greater than seven
function isLGSeven(numbers){
    const num = numbers;
    const b = 7;
    const c = num - b;
    const d = num*2;

    if(num<b){
        console.log(c);
    }
    else{
        console.log(d);
    }
    return num;     
}
let result = isLGSeven(5);
//Problem 4: Finding Bad data
function findingBadData(numbers){
    let count = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0 ) count++;        
        }
        return count;    
    }
    
    let result = findingBadData([-4,-9,-5,-33,-55]);
    console.log(result)    

//Problem 5: Convert your gems into diamond
function gemsToDiamond(num1,num2,num3){
    const firstGemP = 21;
    const secondGemP = 32;
    const thirdGemP = 43;

    const TotalDiamond1 = num1*firstGemP;
    const TotalDiamond2 = num2*secondGemP;
    const TotalDiamond3 = num3*thirdGemP;

    let TotalDiamond =  TotalDiamond1 +  TotalDiamond2 + TotalDiamond3;
    TotalDiamond5 = TotalDiamond-2000
    if(TotalDiamond>2000){
        console.log(TotalDiamond5);
    }
    else{
        console.log(TotalDiamond);
    }
    return TotalDiamond;
}
let TotalDiamond = gemsToDiamond(20, 200, 50);