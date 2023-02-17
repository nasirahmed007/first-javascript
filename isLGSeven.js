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