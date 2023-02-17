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