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