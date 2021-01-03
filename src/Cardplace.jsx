import React from 'react';
import Multicard from './Multicard';
import Sdata from './Sdata';
import './card.css';
const Cardplace=()=>(
  <>
<div className="boxstyle1">
{Sdata.map((val)=>{
  return(
  <Multicard 
   key={val.id}
   status={val.status}
   title={val.title}
   label={val.label}
   img={val.img}
  
   />
  );
 })}
 </div>
 </>
 )


export default Cardplace;
