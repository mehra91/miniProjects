// async function getDataFunc(){
//    try {
//      const fetchData =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const responseData = await fetchData.json()
//     console.log(responseData);
    
//    } catch (error) {
//     console.log(`error is :${error}`);
    
//    }
// }
// getDataFunc()

fetch('https://jsonplaceholder.typicode.com/users').then((respoonse)=>{
    return respoonse.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(`error is :${error}`);
}).finally(()=>{
    console.log('this is finally block');
})