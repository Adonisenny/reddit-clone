import { useEffect,useState } from "react"
import supabase from "../config/supabaseClient"
import { Link,useHistory } from "react-router-dom";
import Avatar from "./Avatar"
const Account = ({session}) => {
    console.log(session)
    const {loading,setLoading} = useState(false)
    const[userName,setUsername] = useState(null)
    const[email,setEmail] =useState()
    const history =useHistory()
    useEffect(() => {
        const fetchSmoothies = async () => {
          const { data, error } = await supabase
            .from('myusers')
            .select('avatarurl')
            
            
          
          if (error) {
            
            console.log(error)
          }
          if (data) {
            setEmail(data)
        console.log(email)
        // history.push('/Account')
            
          }
        }
    
        fetchSmoothies()
    
      }, [session])
    

    return ( 
        
            <div>


       {email?.map((mail) => {
return <div>{mail?.email}</div>
       })}




            </div>
             );
}
            
            
        //     {loading ? (
        //         'saving...'
        //     ):(
        //         <form onSubmit={updateProfile}>
        //             <Avatar
        //             url={avatar}
        //             size={150}
        //             onUpload={()=>{
        //                 setAvatar(url)
        //                 updateProfile({userName,avatar:url})
        //             }}
                    
        //             />

        //             <div>
                        // <input
                        //  type='text'
                        //  name='text'
                        //  id='username'
                        //  placeholder='Your name'
                        //  value={userName || ''}
                        //  onChange={(e)=> setUsername(e.target.value)} 
                        
                        
                        // />
                //     </div>
                //     <div>
                //         <input 
                //         type='text'
                //         value={avatar || ''}
                //         onChange={(e) => setAvatar(e.target.value)}
                        
                //         />
                //     </div> 
                //     <div>
                //         <button type='button' onClick={() => supabase.auth.signOut()}>signOut</button>
                //     </div>
                // </form>
        //     )}
        // </div>
    
 
export default Account;
