import supabase from "../config/supabaseClient.js"
import { Link } from "react-router-dom";

import { useState } from "react"
const SignUp = () => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] =useState(false)
// const [inputs,setInputs] =useState({
//     email:'',
//     password:''
// })
// const handleChange = (e) =>{
// setInputs(prev => ({...prev,[e.target.name]:e.target.value}))
// }

const handleClick = async (e) => {
    e.preventDefault()
   setLoading(true)
        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
          })
     if(data){
        console.log(data)
        setLoading(false)
     }
     if(error){
        console.log(error)
        setLoading(true)
     }
      
    
    
    }    
    
    


    // useEffect(() => {
    //     const fetchThreads = async () => {
    //         let { data, error } = await supabase.auth.signUp({
    //             email: '',
    //             password: ''
    //           })
         
          
    //     }
        
    //     fetchThreads()
        
        
    //       },[])
        
    return (
        <div>
{loading ? (
'it is loading'
):
<form className="myform" style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',gap:'10px'}}>
        <label style={{padding:'15px'}}>Email</label>
        <input
        type='text'
        placeholder="Email"
        name='email'
        value={email}
        className="loginput"
        onChange={(e)=> setEmail(e.target.value)}
        />
        <label >Password</label>
        <input
        type='password'
        onChange={(e)=> setPassword(e.target.value)}
        name='password'
        value={password}
        placeholder="password"
        
        className="loginput"
        />
        
        <button onClick={handleClick} >SignUp</button>
        <p>If you are registered,  <Link to='/Login'>Login</Link></p>
        </form>}
        
        </div>
    );
}
 
export default SignUp ;

