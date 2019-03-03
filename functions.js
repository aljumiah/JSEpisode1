/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  // Your code here
  if(name){
    console.log(`Hello ${name}`);
  }else{
    console.log('Hello');
  }
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  // Your code here
  if(Math.abs(n % 2) == 1){
    return true
  }else{
    return false
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  // Your code here
  return Math.floor(n/2);
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  //console.log(`My code${101 % 2}`);

  if (n % 2 !== 0){
    return n*n;
  }else{
    return 2 * n;
  }
}

/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate(19870506) -> 31 (because the birthday already passed)
 *    ageFromBirthDate(19971110) -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

  // Your code here 
  let year = birthDate.slice(0,4);
  let month = birthDate.slice(4,6);
  let day = birthDate.slice(6,8);

  let newDate = `${year}-${month}-${day}`;
  console.log(`Got the new Date: ${newDate}`);

  let finalDate = new Date(newDate);
  console.log(`Final Date is: ${finalDate}`);

  let dInMS = finalDate.getTime();
  console.log(`Date in milliseconds is: ${dInMS}`);

  let nowMs =  Date.now();
  console.log(`Get the Time now in milliseconds: ${nowMs}`);

  let diff = nowMs - dInMS;
  console.log(`Get the Difrence between now and the date given in milliseconds: ${diff}`);

  let age = diff/_MS_PER_YEAR;
  console.log(`Age in milliseconds: ${age}`);

  console.log(`return the closest number of age ${Math.floor(age)}`);
  return Math.floor(age);
  
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate
};
