// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))




// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    //return the dollar value
    return valueInYen;
}
const fromEuroToPound = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    //return the dollar value
    return valueInPound;
}

console.log(fromEuroToDollar(3.5));
console.log(fromEuroToYen(3.5));
console.log(fromEuroToPound(3.5));
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToPound, fromEuroToYen };