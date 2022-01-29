import React, { useEffect } from 'react';



export function MyGraph(props){
  useEffect(()=>{
   // props.graphdata.maindata[0].last1days.prices
   console.log("yellow",props.graphdata)
  },[])
 
      
if(props.graphdata){
  return <div>yes</div>;
}
else{
  return <div>Sorry</div>;
}

}

