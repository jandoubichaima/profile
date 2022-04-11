
   import React from 'react'
import Detail from './Detail';
   
   function P({prof}) {
     return (<div>
        {prof.map((pro)=><Detail pro={pro} />)}
        </div>);
     
   }
   
   export default P;