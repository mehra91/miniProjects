// let arr = [2,4,6,8,10,18];
// for(const num of arr){
//     // console.log(num);
// }

//  let str = "hello sir";
//  let a=  str.split("")

//  console.log(a)


// const obj1 = {
//      std2:"aman",
//      std11 : "abhishek",
//      std12 : "saurabh",
//      polly: "himani",
//      btech : "kashish"
// }

//   for (const key in obj1) {
     
//     console.log(`key ${key} and its value is ${obj1[key]}`) // for in loop lgta h obj ki value k liye

    
//   }


//   const ary = [24,56,67,78,99] // for of lgta h array k liye  or for in bhi lgta h to ise arrayname[key] krke value milegi 

//   for(const num in ary){
//     console.log(ary[num])
//   }



//*****FOr each  ************

// const lang = [ "c", "cpp",  " js","ruby","angular ", "python", "java"]
// lang.forEach(element => {
//     console.log(element)
    
// });

// const objectsOfArray = [
//     {
//         languageName : "java",
//         languageFormat : "java"
//     },
//     {
//         languageName : "python",
//         languageFormat : "py"
//     },
//     {
//         languageName : "c",
//         languageFormat : "c"
//     },
//     {
//         languageName : "javascript",
//         languageFormat : "js"
//     },
// ] 

// objectsOfArray.forEach((val,idx,Array)=>{
//      console.log(val.languageFormat,idx,Array)
// })


const numbers = [22,52,45,2,78]

  const results = numbers.filter((num)=>{
    return num <30
})

console.log(results)

const res = numbers.reduce((numb)=>{
    console.log(numb)
})