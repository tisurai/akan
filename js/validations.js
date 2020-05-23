var validMonths = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];

var validDays = ["31","28","31","30","30","30","31","31","30","31","30","31"];

function checkLeapYear(year) {
  valid = false;
  // is number evenly divisible by 4
  divisibleBy4 = year%4;
  // is number evenly divisible by 100
  divisibleBy100 = year%100;
  // is number evenly divisible by 400
  divisibleBy400 = year%400;

  if (divisibleBy4 === 0 && divisibleBy100 != 0) {
    //console.log("Is a Leap year");
    return valid = true;
  } else {
    if (divisibleBy100 === 0 && divisibleBy400 ===  0) {
      //console.log("Is a Leap year.");
      return valid = true;
    } else {
      //console.log("Not a leap year.");
      return valid = false;
    }

  }

}


function checkValidDays(month,day) {
  // check if the user has selected valid day for that month
  // e.g. April has 30 days not 31
  // get the valid date of the month
  valid = true;
  validDate = validDays[month];
  //console.log(day);
  //console.log(month);
  //
  // if the month selected is february, and
  // date is 29, check if it was a leap year
  if(month === 1 && day === 29 ){
    year = prompt("Please enter year: ");
    if (checkLeapYear(year) === true) {
      //console.log("Must have been a leap year");
      return valid = true;
    }
  } else {
    if (day > validDate || day <= 0){
      return valid = false;
    }

  }


}
function checkFloat(number){
  // check if the user input is a float data type
  // return true if input is of float data type

  var floatingPoint = false;
  if (!isNaN(number) && number.toString().indexOf('.') != -1) {
    //console.log("this is a numeric value and I\"m sure it is a float.");
    floatingPoint = true;
    return floatingPoint;
  }

}

// End of Functions //

var monthTxt = prompt("Please enter month:");
var month = monthTxt;

// check if user input is a float data type
var isFloat = checkFloat(month);

// convert to an integer
month = parseInt(monthTxt);

// check for valid input from user
if (month > validMonths.length || month == 0 || isNaN(month) || isFloat === true) {
  console.log("Invalid month!");
} else {
  month--;
  for (x in validMonths) {
    //console.log(validMonths[month]);
    break;
  }

}

var dayTxt = prompt("Please enter day of month:");

var isFloat = checkFloat(dayTxt);
day = parseInt(dayTxt);
//console.log(day);

isValidDay = checkValidDays(month,day);

if (day > 31 || day <= 0 || isFloat === true || isValidDay === false) console.log("Invalid date");

var yearTxt = prompt("Please enter year:");
var isFloat = checkFloat(yearTxt);
year = parseInt(yearTxt);

isLeapYear = checkLeapYear(year);
