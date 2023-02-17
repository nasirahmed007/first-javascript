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
