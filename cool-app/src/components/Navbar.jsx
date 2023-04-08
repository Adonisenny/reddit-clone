import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
    const location =useLocation()
    const locateAccount = location.pathname.split('/')[1]
    console.log(locateAccount)

    return ( 
        <div className="container">
            <div className="leftDiv">
                <div style={{marginBottom:'0px'}}>
            <img src="src/Images/logo.png" alt="nothing" />
            </div>
            <p>reddit</p>
            </div>
        <div className="middleDiv"></div>
        <input 
        type='text'
        className="search border"
        placeholder="search reddit"
        />
        <div className="rightDiv">
    
        
            <button style={{border:"none", borderRadius:"7px", width:"80px",height:'40px'}}>GET APP</button>
            <button style= {{border:"none", borderRadius:"7px", width:"80px",height:'40px',background:'#4169E1'}}>{locateAccount=='single' ?<Link to='/login' style={{textDecoration:'none',color:'white'}}>SignOut</Link>   : <Link to='/login' style={{textDecoration:'none',color:'white'}}>LOGIN</Link>}</button>
        
        
        <img src="src/Images/person3.png" alt="nothing" style={{height:'25px',marginTop:'10px'}} />
        
        <div style={{display:'flex',alignContent:'center',alignItems:'center',marginRight:'0px'}}>
        <img src="src/images/arrow2.png"  alt="nothing" style={{}}/>
        </div>
       
        
            </div>
        
        
        </div>
     );
}
 
export default Navbar;