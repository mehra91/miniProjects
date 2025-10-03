 const btn = document.querySelectorAll('button');
 const body = document.querySelector('body');


 btn.forEach((button)=>{
    console.log(button)
     button.addEventListener('click',(e)=>{
         console.log(e.target.id)
         if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
         }else {
            body.style.backgroundColor = e.target.id
         }
             
          
        
    
     })
 }) 