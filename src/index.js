module.exports = function toReadable (number) {
const num = ['zero','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine '];
const nums = ['eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const tens = ['ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let numToArr = number.toString().split('');

if (number < 10) return num[number].trim();

if (number < 20 && number !== 10) return nums[number%10 - 1].trim();

if (number < 100) {
  if (number%10 === 0) {
    return tens[(number/10) - 1];
  } else {  
    return `${tens[Number(numToArr[0]) - 1]}` + ' ' + `${num[Number(numToArr[1])].trim()}`;
  }
}

else if (number < 1000) {
  if (number%100 === 0) {
    return `${num[number/100]}` + 'hundred';
  }

  if (numToArr[2] === '0') {
    return `${num[Number(numToArr[0])]}` + 'hundred' + ' ' + `${tens[Number(numToArr[1]) - 1].trim()}`;
  }

  if (numToArr[1] === '0') {
    return `${num[Number(numToArr[0])]}` + 'hundred' + ' ' + `${num[Number(numToArr[2])].trim()}`;
  }

  if (number%100 < 20) {
    return `${num[Number(numToArr[0])]}` + 'hundred' + ' ' + `${nums[(number%100)%10 - 1].trim()}`;
  }

  else {
    return `${num[Number(numToArr[0])]}` + 'hundred' + ' ' + `${tens[Number(numToArr[1]) - 1].trim()}` + ' ' + `${num[Number(numToArr[2])].trim()}`;
  }

  }

} 
