const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers

    // we expect the sum of those 2 numbers to be 23
    expect(sum(14, 9)).toBe(23);
});
const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
 

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2);
})

const {fromDollarToYen, fromYenToPound} = require('./app.js')

test("1.2 dollars should be 127.9 yen", () => {
    // const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(1.2)).toBe(127.9)
})

test("127.9 yen should be 0.8 pound", () => {
    expect(fromYenToPound(127.9)).toBe(0.8)
})