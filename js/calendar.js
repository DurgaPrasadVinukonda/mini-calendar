console.log('Hi Prasad');
let date=new Date();
console.log(date);

const month=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

const monthCont=document.getElementsByClassName("month-container");
monthCont[0].innerHTML=month[date.getMonth()];
console.log(month[date.getMonth()]);

const day=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const dateCont=document.getElementsByClassName("date-container");
dateCont[0].innerHTML=day[date.getDay()];
console.log(day[date.getDay()]);


//Date Value

const dayCont=document.getElementsByClassName("day-container");
dayCont[0].innerHTML=date.getDate();
console.log(date.getDate());
// Year Value 
const yearCont=document.getElementsByClassName("year-container");
yearCont[0].innerHTML=date.getFullYear();

console.log(date.getFullYear());
