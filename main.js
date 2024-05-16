let num = document.getElementById("number");
const button = document.getElementById("convert-btn");
let output = document.getElementById("output");

//Roman numeral table

const romanTable={
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};



//create roman numeral accumulator


button.addEventListener("click",() => {

    if (num.value === ""){
        output.innerText="Please enter a valid number";
    }else if(num.value < 0){
        output.innerText="Please enter a number greater than or equal to 1";
    }else if(num.value >= 4000){
        output.innerText="Please enter a number less than or equal to 3999";
    }else{
        inputToRoman(num.value);
    }

})

function inputToRoman(num){
    let accumulator ='';
    for(const key in romanTable ){
        const numbervalue = romanTable[key];
        while(num >= numbervalue){
            num -= numbervalue;
            accumulator += key;
        }
        
    }

    output.innerText = accumulator;
}

