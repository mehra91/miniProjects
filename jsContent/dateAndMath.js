// const otp = Math.floor(Math.random()*1000000);
//  const hero = otp.toString()
// console.log( typeof(otp), otp );
// console.log( typeof(hero),hero);

const date =  new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// const liveTime = date.toLocaleTimeString();
// console.log(liveTime);

 const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
 
console.log(`current time is : ${hours}:${minutes}:${seconds}  ${ampm}`);

const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
console.log(`current date is : ${day}-${month+1}-${year}`);


 const  obj =  date.toLocaleString('default',{
    calendar :'gregory',
    day : '2-digit',
    month : 'short',
    year : 'numeric',
    weekday : "long"
    })

    console.log(obj);