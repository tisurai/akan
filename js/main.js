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
        //Is a Leap year
        return valid = true;
    } else if (divisibleBy400 != 0) {
        //Is not Leap year.
        return valid = false;
    } else {
        //Not a leap year
        return valid = true;
    } 
}
    
function compareDate(birthDate,currentDate){
    // determine if the date is not in the future
    var time1 = new Date(birthDate); 
    var today = new Date();
    var diff = today - time1;

    //valid = true;
    
    if (diff > 0){
       return valid = false;
    }else if (diff < 0){
        return valid = true;
    }else{
        return valid = true;
    }

}

function checkValidDays(month,day,year) {
    var validDays = ["31","28","31","30","30","30","31","31","30","31","30","31"];

    // check if the user has selected valid day for that month
    // e.g. April has 30 days not 31
    // get the valid date of the month
    valid = true;
    // convert variables to integers
    intMonth = parseInt(month);
    intDay = parseInt(day);
    intYear = parseInt(year);

    // decrement to adjust with array index. Important!
    intMonth--;
    validDate = validDays[intMonth];

    // if the month selected is february, and
    // date is 29, check if it was a leap year
    if(intMonth === 1 && intDay === 29 ){
    
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

function checkValidMonth(month){
    // check if the month input value is greater than 12
    valid = true;
    intMonth = parseInt(month);

    if(intMonth > 12){
        return valid = false;
    }

}

function checkFloat(number) {
    // check if the user input is a float data type
    // return true if input is of float data type

    var floatingPoint = false;
    if (!isNaN(number) && number.toString().indexOf('.') != -1) {
        //console.log("this is a numeric value and I\"m sure it is a float.");
        floatingPoint = true;
        return floatingPoint;
    }

} 

function getName() {
    // The formula used to find the date is  
    // dayBorn = (yearCode + monthCode + centuryCode + date - leapYearCode) % 7
	var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
	var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
	var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthCodeArray = ["0","3","3","6","1","4","6","2","5","0","3","5"];
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	var textCC = year.slice(0,2);
	var textYY = year.slice(2,4);  
	var textMM = month;
    var textDD = day;
    
    // make sure the variables are integers
	var CC = parseInt(textCC);
	var YY = parseInt(textYY);
	var MM = parseInt(textMM);
	var DD = parseInt(textDD);
	var yearCode = 0;
	var monthCode = 0;
	var centuryCode = 0;
	var leapYearCode = 0;

    // determine if it was a leap year
	var isLeapYear = checkLeapYear(year);

    // determine the year code
    // if the year is 00, e.g. 1900 set year code to zerp
    // else calculate the year code.
	if(YY == 0){
	    yearCode = 0;
	} else {
	    yearCode = (YY + (YY/4))%7;
	}

    // adjust month to align with array index
    // and get the month code from the array
	MM--;
	monthCode = parseInt(monthCodeArray[MM]);
   
    // get the century code
    // 17C and 21C have code 4
    // 18C and 22C have code 2
    // 19C and 23C have code 0, 20C has code 6 

	if(CC == 17 || CC == 21){
  	    centuryCode = 4;
	}

	if(CC == 18 || CC == 22){
  	    centuryCode = 2;
	}
	if(CC == 19 || CC == 23){
  	    centuryCode = 0;
	}
	if(CC == 20){
	    centuryCode = 6;
	}

	// determine if it is a leapyear
    // a leap year is assigned a 1, for January and February
    // we need to adjust the days by subtracting 1 from the formula

	if((isLeapYear == true) && (monthCode == 0 || monthCode == 1)){
  	    leapYearCode = 1;
    }
    
    // subtract the leap year code first before determining the final day
    var subTotal = Math.floor(yearCode) + monthCode + parseInt(centuryCode) + DD - parseInt(leapYearCode);
    
    // determine the actual day which will return an integer between 0 and 6
    var dayInt = parseInt(subTotal%7);

    // determine the name of the day from the array
    var dayBorn = weekdays[dayInt];

    // determine the name based on the gender selected by user
    if(male.checked == true){
                
        var akanName = maleName[dayInt];
        let akanSection = document.querySelector('#akan');
        akanTitle = document.getElementsByTagName('h2');
		paraText = akanSection.getElementsByTagName('p');
        
        // write to the HTML document
		if(isLeapYear == true){
            paraText[0].innerHTML = "You were born on a " + dayBorn + ", <br> your Akan name is " + akanName + "<br> It was a leap year!";
            akanTitle[1].innerHTML = akanName;
		} else {
            paraText[0].innerHTML = "You were born on a " + dayBorn + ", <br> your Akan name is " + akanName;
            akanTitle[1].innerHTML = akanName;
		}
	}

	if(female.checked == true){
		//var akanName = femaleName[dayAkan];
		//var dayBorn = weekdays[dayAkan];
        var akanName = femaleName[dayInt];
        akanTitle = document.getElementsByTagName('h2');
		let akanSection = document.querySelector('#akan');
        paraText = akanSection.getElementsByTagName('p');
        
        // write to the HTML document

		if(isLeapYear == true){
            akanTitle[1].innerHTML = akanName;
		    paraText[0].innerHTML = "You were born on a " + dayBorn + ", <br> your Akan name is " + akanName + "<br> It was a leap year!";
		} else {
            akanTitle[1].innerHTML = akanName;
		    paraText[0].innerHTML = "You were born on a " + dayBorn + ", <br> your Akan name is " + akanName;
		}
	}	

}

function validation() {
	var dayTxt = document.getElementById("day").value;
	var monthTxt = document.getElementById("month").value;
	var yearTxt = document.getElementById("year").value;
	var male = document.getElementById("male");
	var female = document.getElementById("female");
    var form = document.getElementById("userForm");
	var errorMessage = document.getElementById("error-message");

	// convert to integer data types
    day = parseInt(dayTxt);
    month = parseInt(monthTxt);
    year = parseInt(yearTxt);
    
    //build birthday DD-MM-YYYY
    var birthDayString = dayTxt + "-" + monthTxt + "-" + yearTxt;
    
	var text = " ";
	var isFloatDay = checkFloat(day);
    var isFloatMonth = checkFloat(month);
	var isFloatYear = checkFloat(year);
    var isLeapYear = checkLeapYear(year);
    var isValidMonth = checkValidMonth(month);
    var isValidDay = checkValidDays(month,day,year);
    var isFutureDate = compareDate(birthDayString);
    

	if(day.length < 1 || day <= 0 || isFloatDay == true ) {
        text="Please Enter Day";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    }

    if(isValidDay == false) {
        text="Day is between 1 - 31";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    }

	if(month.length < 1 || month <= 0 || isNaN(month) || isFloatMonth == true) {
        text="Please Enter Month";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    } 

    if(isValidMonth == false){
        text="Month is between 1 - 12";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    }

	if(year.length < 4 || year <= 0 || isFloatYear == true) {
        text="Please Enter Year";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    }

    // check if the date is in the future
    if(isFutureDate === true){
        text="Birthday must be in the past";
	    errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
    }

    // check if gender is selected
	if(male.checked == false && female.checked == false) {
        text="Please Select Gender";
        errorMessage.style.padding = "10px"; 
        errorMessage.innerHTML = text;
        return false;
	}

    // calculate the name
	getName();
	errorMessage.style.padding = "0px";
	errorMessage.innerHTML = "";

}

