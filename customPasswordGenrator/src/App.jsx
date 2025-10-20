 import React from 'react'
 
 const App = () => {
   return (
     <div className='  h-screen w-full  flex items-center justify-center '> 
            <div className='bg-slate-600 h-20 w-md relative  flex items-center justify-center '>
                  <input type="password" placeholder='password' className= ' rounded-2xl border h-10 w-xs flex items-center justify-center pl-20 ' />
                  <button className='h-10 w-15 rounded-3xl bg-blue-600 absolute right-16'>
                    copy
                  </button>

            </div>
     </div>
   )
 }
 
 export default App