export function ValidateLuhn(number) {

let arrNumber = (number + '')
// number separated, reverted and converted
.split('')
.reverse()
.map((x) => parseInt(x, 10));

// delete the first element and save in lastNumber
let lastNumber = arrNumber.shift();

// Validated , Value init 0
let sum = arrNumber.reduce(
  (acc, value, index) => {
    // validate the value if it is par
  if(index % 2 === 0){
    value *= 2; // Double the value
    if (value > 9) { // We subtract 9 if it is greater than 9
      value -= 9;
    }
  }

  return acc + value;

},0);

// add the last number
sum += lastNumber;

// Validate if the sum is a multiple of 10

return sum % 10 === 0;

}
