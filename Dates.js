let x = new Date();
//let xx = new Date("");
//Date.now();
console.log(x);

x.getFullYear();
console.log(x.getMonth());
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

  console.log(getTimeDigitally);

  setInterval(() => {
      console.log(getTimeDigitally());
  }, 1);


  //Find age of the person like: X Years Y Months Z Days

  let x = "2020-12-12";
  let y = new Date(1980, 2, 12);