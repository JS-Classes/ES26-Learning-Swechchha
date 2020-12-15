let x = new Date();
//let xx = new Date("");
//Date.now();
//console.log(x);

x.getFullYear();
//console.log(x.getMonth());
x.getDay();
x.getHours();
x.getMinutes();
x.getSeconds();
x.getMilliseconds();

//Code digital clock

let getTimeDigitally = () => {
    const now = new Date();
    let hour = now.getHours(); //0-23
    let min = now.getMinutes(); //0-59
    let sec = now.getSeconds(); //0-59
    let ms = now.getMilliSeconds(); //0-59
    let period = "AM";
    let hourNormalized;

    if (hour >= 12) {
        period = "PM";
    }

    hourNormalized = hour > 12 ? hour - 12 : hour;
     
    return `${hourNormalized}:${min}:${sec}:${ms} ${period}`;
  };

  //console.log(getTimeDigitally);

  setInterval(() => {
     // console.log(getTimeDigitally());
  }, 1);


  //Find age of the person like: X Years Y Months Z Days

 let calculateAge = (dob) => {
    let dobDate = new Date(dob);
    let now = new Date();
    
    let ageInms = now - dobDate;
    let ageInDays = ageInms / (1000 * 60 * 60 * 24);

    let ageInYears = Math.floor(ageInDays / 365.25);
    let remaniningDays = ageInDays % 365.25;

    let ageInMonths = Math.floor(remaniningDays / 30);
    remaniningDays = Math.round(remaniningDays % 30);

    return `${ageInYears} Years, ${ageInMonths} Months, ${remaniningDays} Days`;
 };

 console.log(calculateAge("1980-11-10"));