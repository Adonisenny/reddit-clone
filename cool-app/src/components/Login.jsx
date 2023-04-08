import { Link,useHistory,useLocation } from "react-router-dom";
import supabase from "../config/supabaseClient.js"
import { useState, useRef } from "react";
import Single from "./single.jsx";

const Login = () => {
     const[email,setEmail] =useState('')
     const [password,setPassword] = useState('')
     const[person,setPerson] =useState(null)
     const history = useHistory()
     const location =useLocation()
    //  console.log(location.pathname.split('/')[1])

    const handleLogin = async(e) => {
        e.preventDefault()
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
          })
          if(data){ 
            setPerson(data)
            // {data? <Single /> :<Login />}
            history.push('/single')
          }
          if(error){
            console.log(error)
          }
    }
    
    return ( 
        <div >
            <form className="myform" style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',gap:'10px'}}>
        <label style={{padding:'15px'}}>Email</label>
        <input
        type='text'
        placeholder="Email"
        className="loginput"
        value={email}

        onChange={(e) => setEmail(e.target.value)}
        />
        <label >Password</label>
        <input
        type='password'
        value={password}
        placeholder="password"
        className="loginput"
        onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={handleLogin}>Login</button>
        <p>If you are not registered, <Link to='/signUp'>SignUp</Link></p>
        </form>
      
        </div>
     );
}
 
export default Login;



