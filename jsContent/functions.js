function addNumbers(num1,num2) {
    return num1 + num2;
}

  const res = addNumbers(2,8) 
//   console.log(res);
  

function calculateTotalArguments(...props ){
    return  props
}

 console.log(calculateTotalArguments( 4,2,4 ))  // jab hame pta ni hota ki kitne arguments pass honge to hum rest operator ka use krte h aur ye hame ek array return krta h jisme sare arguments hote h



 //**********check truthy nd falsy values  ***********

 if(0){
    console.log("this is truthy");
 }else{
    console.log("this is falsy");
 }