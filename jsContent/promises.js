// const promiseOne = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log('Promise one resolved');
//                 resolve()
            
//     },2000)
// })
// promiseOne.then(()=>{
//     console.log('Promise one then executed');
// })

//  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Promise two resolved');
//         resolve()

//     },1000)
// }).then(()=>{
//     console.log('Promise two then executed');
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Promise three resolved');
//         resolve({id:1,name:'priyanshu',age:22,friend:'Himani'})
//     },1000)
// }).then(({name,id })=>{
//     console.log(`id  ${id}  name is :${name}`);
// })


// const promiseFour = new Promise((resolve,reject)=>{
//     let error  = false
//     if(!error){
//         resolve({id:1,name:'priyanshu',age:22,friend:'Himani'})
//     }else{
//         reject('error : something went wrong')
//     }
// }).then((data)=>{
//     console.log(data);
//     return data.name
    
// }).then((name)=>{
//     console.log(name);
// })
// .catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('Promise four is executed');
// })


const promiseFive = new Promise((resolve,reject)=>{
    let error  =false
    if(!error){
        resolve({id:1,name:'priyanshu',age:22,friend:'Himani'})
    }else{
        reject('error : something went wrong')
    }
})

async function myFunc(){
     try {
        const myFuncHandle = await promiseFive
     console.log(myFuncHandle);
     } catch (error) {
        console.log(`error is :${error}`);
        
     }
}

myFunc()