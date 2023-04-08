import { useState } from "react";
import hot from '../images/hot.png'
import arrow from '../images/arrow2.png'
import Arrows from "./Arrowss";
const PopularPost = () => {
    return ( 
<div className="box ml-12 w-3/4 mb-4">
    <div className="div1" style={{gap:'80px'}}>
<div style={{display:'flex',alignContent:'center'}}>
    <p>Hot</p>
    
    <img src={hot} alt='my image'/>
    
</div>
<div style={{display:'flex',gap:'10px',alignContent:'center',alignItems:'center'}}>
<p style={{color:'#6699CC'}}>UnitedKingdom</p>
<img src="src/images/arrow2.png" alt='my image'/>
   </div>
   <div style={{display:"flex",alignContent:'center',alignItems:'center',gap:"40px"}}>
    <p>New</p>
   </div>
   <div style={{display:"flex",alignContent:'center',alignItems:'center',gap:"10px"}}>
    <p>Top</p>
   </div>
</div>

</div>

     );
}
 
export default PopularPost;