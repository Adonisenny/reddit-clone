import { useState } from "react";

const Left = () => {
     const [toggle,setToggle] = useState(true);
   const [user,setUser] = useState(true)
   const [toggle3,setToggle3] = useState(true)
   const [toggle4,setTogle4] = useState(true)
   const [toggle5,setTogle5] = useState(true)
   const [toggle6,setTogle6] = useState(true)
   
  const[fimg,setImg] = useState(true)
  const[simg,setSmg] = useState(true)
  const [tImg,setTimg] = useState(true)
  const [img4,setImg4] = useState(true)
  const [img5,setImg5] =useState(true)
  const [img6,setImg6] =useState(true)
   //   const handleImgClicks =() => {
   //    
   //   }
   
    const handleClick = (event) => {
   console.log(event.currentTarget.id)
       setToggle(!toggle)
       setImg(prev => !prev)
       
    }
   const handleClicks = () => {
      setUser(prev => !prev)
      setSmg(prev => !prev)
      

   }
   const handleclickss =() => {
setToggle3(prev => !prev)
setTimg(!tImg)

   }
   const handeClick4 = () => {
      setTogle4(prev => !prev)
      setImg4(prev => !prev)
   }
   const handleClick5 = () => {
      setTogle5(prev => !prev)
      setImg5(prev => !prev)
   }
   const handleClick6 = () => {
      console.log('handle')
      setTogle6(prev => !prev)
      setImg6(prev => !prev)
   }
   

   
    return ( 
        <div style={{maxWidth:'95%'}} className='scroll'>
        <hr style={{minWidth:'330px',marginTop:'0px'}}></hr>

        <p>Feeds</p>

        <div className='popular' style={{marginLeft:'7px', paddingTop:'12px',paddingLeft: '10px',
    paddingBottom: '12px'}}>Popular
    </div>

    <p style={{color:'gray',marginLeft:'5px'}}>Topics</p>


    

        
        {/* first div */}
        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}} className='fimgdiv'> <img src="src/images/game.png" alt="nothing" /></div>
           <ul className="firul">
           <li>Gaming</li>
           <ul style={{display:toggle?'none':'block'}} className='secul'>
           <li>Valheim </li>
           <li >Genshin  </li>
           <li >Minecraft</li>
           <li >Pokimane </li>
           <li >Halo Infinite </li>
           <li>Path of Exile </li>
           <li >Escape from Tarkov </li>
           <li>Hello Knight:Silksong </li>
           </ul>

</ul>
         <div className="arrow" style={{marginTop:'4px'}}  >
               <img src="src/images/arrow2.png"  className="arrow2" style={{display:fimg?'block':'none' }} onClick={handleClick}/>
               <img src="src/images/arrowup.png"  className="arrow2" style={{display:fimg?'none':'block' }} onClick={handleClick}/>
            </div>
        </div>











        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}}> <img src="src/images/football.png" alt="nothing"/></div> 
           <ul>
           <li>Sport</li>
           <ul style={{display:user?'none':'block'}} className='fourthul'>
           <li >NFL</li>
           <li >NBA </li>
           <li>Soccer </li>
           
           </ul>

</ul>






           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" style={{display:simg?'block':'none' }} onClick={handleClicks} />
           <img src="src/images/arrowup.png"  className="arrow2" style={{display:simg?'none':'block' }} onClick={handleClicks}/>

           </div>
        </div>


        

        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}}> <img src="src/images/business.png" alt="nothing"/></div> 
           <ul>
           <li>Business,Economics...</li>
         
         
           <ul style={{display:toggle3?'none':'block'}} className="business">
         <li >GameStop </li>
           <li >Morderna </li>
           <li>Pfizer </li>
           <li>Tesla</li>
           <li>Best Buy</li>
           <li>Space X</li>
           

           </ul>
           </ul>


           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" onClick={handleclickss} style={{display:tImg?'block':'none'}}/>
           <img className='arrow2' src="src/images/arrowup.png" onClick={handleclickss} style={{display:tImg?'none':'block'}}/>
           </div>
        </div>



        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}}> <img src="src/images/crypto.png" alt="nothing"/></div> 
           <ul>
           <li>Crypto</li>
           <ul style={{display:toggle4?'none':'block'}} className ='crypto'>
            <li>Bitcoin</li>
            <li>Dogecoin</li>
            <li>Cardano</li>
            <li>Etherium</li>
            <li>Litecoin</li>
           </ul>
           </ul>
           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" onClick={handeClick4}  style={{display:img4?'block':'none'}} />
           <img className='arrow2' src="src/images/arrowup.png" onClick={handeClick4} style={{display:img4?'none':'block'}} />
           </div>
        </div>

        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}}> <img src="src/images/tv.png" alt="nothing"/></div> 
           <ul>
            
         <li>Television</li>
         <ul className="television" style ={{display:toggle5? 'none':'block'}}>
            <li>Real Housewives</li>
            <li>Sister Wives</li>
            <li>The Bachelors</li>
            <li>Married at First Sight</li>
            <li>Wife swap</li>

         </ul>
</ul>
           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" onClick={handleClick5} style={{display:img5?'block':'none'}}/>
           <img className='arrow2' src="src/images/arrowup.png" onClick={handleClick5} style={{display:img5?'none':'block'}}/>
           </div>
        </div>

        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{marginTop:'16px'}}> <img src="src/images/star.png" alt="nothing"/></div> 
           <ul>
            
         <li>Celebrity</li>
         <ul className="celebrity" style={{display:toggle6?'none':'block'}}>
            <li>Kim Khadarsian</li>
            <li>Drake</li>
            <li>Cardi B</li>
            <li>Beyonce</li>
             <li>Ronaldo</li>

         </ul>
</ul>
           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" onClick={handleClick6} style={{display:img6 ? 'block' :'none'}}/>
           <img className='arrow2' src="src/images/arrowup.png" onClick={handleClick6} style={{display:img6 ? 'none' :'block'}}/>
           </div>
        </div>





        <div className='game' style={{display:'flex',gap:'15px'}}>
           <div style={{}}><p>...</p> </div> 
           <p>Popular</p>
           <div style={{marginTop:'4px'}}>
           <img className='arrow2' src="src/images/arrow2.png" />
           </div>
        </div>
      <div style={{paddingTop:'20px', maxWidth:'75%',marginLeft:'5px',marginRight:'5px'}}>
        <hr style={{minWidth:'300px'}}></hr>
        </div>
        <div style={{marginLeft:'5px',marginRight:'5px',minWidth:'200px'}}>
        <p>Create an account to follow your <br /> favourite commuinity and start <br /> taking part in conversations</p>
        </div>
        <div style={{marginLeft:'5px',marginRight:'5px', minWidth:'200px',background:'#4169E1',borderRadius:'20px',padding:'0.08px'}}>
         <p style={{textAlign:'center',color:'white'}}>Join Reddit</p>
         
        </div>
        
        </div>
     );
}
 
export default Left;