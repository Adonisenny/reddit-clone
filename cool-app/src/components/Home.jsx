
import { useState } from "react";
import Left from "./Left";
import Navbar from "./Navbar";
import Right from "./Right";

const Home = ({ fnews,snews,tnews,lnews}) => {
    const [myToggle,setMyToggle] = useState(true)
    const [myToggle2,setMyToggle2] = useState(true)
    
    

    
    return ( 
        <div>
            
           
            
            <div style={{maxWidth:'90%', display:'flex'}}>
                <div>
            <Left />
            </div>
            <div style={{minWidth:'83%',display:'flex',marginLeft:'15px'}}>
            <Right 
             fnews={fnews}
             snews={snews}
             tnews={tnews}
             lnews={lnews}
            
            
            />
            </div>
            </div>


        </div>
     );
}
 
export default Home;