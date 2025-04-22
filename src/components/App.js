
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [update,setUpdate]=useState(0)
  
  useEffect(()=>{
    const interval=setInterval(()=>{
      setUpdate((prev)=>{
        if(prev>=100){
          clearInterval(interval);
          return 0;
        }else{
         return prev+10
        }
      })
      
      
    },2000)
    return ()=> clearInterval(interval)
  },[])
  

  return (
    <div>
        {/* Do not remove the main div */}
        <div id="barOuter">
          <div id="barInner" style={{width:`${update}%`}}></div>
        </div>
        <div>{update}</div>
    </div>
  )
}

export default App
