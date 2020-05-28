var validMonths = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];
var monthCodeArray = ["0","3","3","6","1","4","6","2","5","0","3","5"];

function checkLeapYear(year) {
    valid = false;
    // is number evenly divisible by 4
    divisibleBy4 = year%4;
    // is number evenly divisible by 100
    divisibleBy100 = year%100;
    // is number evenly divisible by 400
    divisibleBy400 = year%400;

    if (divisibleBy4 != 0) {
      // not a leap year
        return valid = false;
    } else if (divisibleBy100 != 0) {
        //console.log("Is a Leap year");
        return valid = true;
    } else if (divisibleBy400 != 0) {
        //console.log("Is not Leap year.");
        return valid = false;
    } else {
        //console.log("Not a leap year.");
        return valid = true;
    } 
}


function checkValidDays(month,day,year) {
  var validDays = ["31","28","31","30","30","30","31","31","30","31","30","31"];

  // check if the user has selected valid day for that month
  // e.g. April has 30 days not 31
  // get the valid date of the month
  valid = true;
  // decrement to adjust with array index
  intMonth = parseInt(month);
  intDay = parseInt(day);
  intYear = parseInt(year);

  intMonth--;
  validDate = validDays[intMonth];
  //console.log(day);
  //console.log(month);
  //console.log(validDate);

  // if the month selected is february, and
  // date is 29, check if it was a leap year
  if(intMonth === 1 && intDay === 29 ){
    //year = prompt("Please enter year: ");
    if (checkLeapYear(intYear) === true) {
      //console.log("Must have been a leap year");
      return valid = true;
    }
  } else {
    if (intDay <= 0 || intDay > 31){
      return valid = false;
    }
  }
  
}