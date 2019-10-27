//1
const lastCharacter = (str1,str2) => {
  if (str1[str1.length-1] === str2[str2.length-1]) {
      return true;
  } else {
      return false;
  }
}

console.log(lastCharacter('apples', 'pumpkins')); // => true
console.log(lastCharacter('marker', 'pen')); // => false


//2
const createPhoneNumber = numbers => {
  numbers = numbers.join();
  numbers = numbers.replace(/,/g,"");
  return '(' + numbers.substring(0, 3) + ') '  + numbers.substring(3, 6)  + '-'  + numbers.substring(6);
  
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// => (123) 456-7890



//3
const filterTriplets = array => {
  return array.filter(element => element % 3 !== 0)
}

console.log(filterTriplets([3, 4, 5, 6, 9, 13])); // => [4,5,13]
