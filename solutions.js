// a parameter is WHAT KIND of thing that is going to be passed into the function
//an argument is the ACTUAL THING being passed into the function

//return will actually produce a value and spit it out of the function allowing other things within the program to use that value
//console.log just shows the developer what value is coming out but doesn't give that info to the program



//checks to see if a string is the same backwards as the original
const checkPalindrome = (string) => {
  let wordLength = Math.floor(string.length / 2);
  for (let i = 0; i < wordLength; i++)
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
    return true;
}
console.log(checkPalindrome("radar"));


//other cheater way
const checkPalindrome2 = (string) => {
  let lowerCase = string.toLowerCase();
  let reverseString = lowerCase.split('').reverse('').join('');
  if (lowerCase === reverseString) {
    return true;
  }else {
    return false;
  }
}
console.log(checkPalindrome2("Radar"));







// //will accecpts a number then adds its digits together
// const sumDigits = (num) => {
//   return (num - 1) % 9 + 1;
//
// }
// console.log(sumDigits(82));
//
//
//
//
//
//
//
// //will calculate a^2 + b^2 = c^2 which is used to find the side of a triangle
// const calculateSide = (num1, num2) => {
//   return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
// }
//
// console.log(calculateSide(8, 6));
//
//
//
//
//
//
//
// //will take in array and calculate sum of the numbers in the array
// const sumArray = (arr) => {
//   let sum = 0;
//   for (let i = arr.length; i--;){
//     sum += arr[i];
//   }
//   return sum;
// }
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
//
//
//
//
// //will take a number and see if its a Prime number or not
// const checkPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
//
// const printPrimes = (num) => {
//   return console.log(checkPrime(num));
//
// }
//
// console.log(printPrimes(97));
