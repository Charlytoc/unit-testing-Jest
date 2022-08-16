const sum = (a,b) => {
    return a + b
}

function fromEuroToDollar (e) {
    return e * 1.2
}
console.log(fromEuroToDollar(3.5))

module.exports = {};

function fromDollarToYen (dollarAmount) {
    return dollarAmount * (127.9 / 1.2) /*equivalencia entre yenes y dólares*/

}
function fromYenToPound (yenAmount) {
    return yenAmount * (0.8 / 127.9)
}

module.exports = {fromDollarToYen, fromYenToPound, fromEuroToDollar, sum }
