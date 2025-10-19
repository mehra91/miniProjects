const  userSymbol = Symbol("password");

const priyanshuObj = {
    name:"Priyanshu Mehra ",
    age: 22,
    city : "Haldwani",
    [userSymbol] : 'pm12345',
    email: "pm@gmail.com",
    skills : ['Html', 'Css', 'JavaScript','reactJS' ],
    isLoggedIn : false, 
    doingInternship : false ,
    "dost ka naam" : "aman"

}

// console.log(priyanshuObj["dost ka naam"]);  // tareeka no. 1 
// console.log (priyanshuObj.city);    // tareeka no. 2 

//   console.log(typeof userSymbol);  
//  console.log(priyanshuObj[userSymbol]);

// Object.freeze(priyanshuObj)  // object ko freeze kar diya hai ab usme kuch bhi change nahi kar sakte
 


//console.log(priyanshuObj)

priyanshuObj.greeting = function(){
    console.log("hello world");
    
}
priyanshuObj.greetingOne = function(){
    console.log(`hello mr.${this.name}`);
    
}

//console.log(priyanshuObj.greetingOne());  // error aayega kyuki object freeze kar diya hai
 
const obj1 ={1: 'a', 2:'b'}
const obj2 ={3: 'c', 4:'d'}
const mergeObj =  Object.assign({},obj1,obj2)  // method 1
// const mergeObj = {...obj1,...obj2}   // method 2



// console.log(mergeObj);

const { email : mail,age } = priyanshuObj // mtlb ki object destructuring aise hoti h ek khali curly braces ko open krke usme  passes object ki value ko use kr skte h ya usko ham kisi aur naam se use bhi kr skte h 
console.log(mail);
console.log(age); 