import { useEffect,useState } from "react"
import supabase from "../config/supabaseClient.js"
import { useHistory } from "react-router-dom"

const Mypost = ({inf,onDelete}) => {
    
    
    const [displays,setDisplays] =useState(false)
    const history = useHistory()
const handleClick =()=> {
  setDisplays(prev=> !prev)
}

 const handleDelete=async()=> {
   console.log('delete')
  const { data,error } = await supabase
  .from('myusers')
  .delete()
  .eq('id',inf.id)
  .select()
  if(data){
    console.log(data)
    onDelete(inf.id)
  }
  if(error){
    console.log(error)
  }
  
}

  
    return ( 
        <div className="w-3/4 h-auto bg-white ml-12 rounded-md relative">

          {/* username,date,join */}
                <div className=" flex mb-3 gap-48" >
                  
            <p className="ml-8 mt-2">Posted by {inf.Username}</p>
            
            <p className="mt-2">{inf.updated_at?.slice(0,10)}</p>
            <p className='flex rounded-xl pl-3 pr-3 mt-2 items-end absolute right-5' style={{backgroundColor:'#4169E1' }}>Join</p>
            </div>


            <p className="ml-8 text-2xl">{inf.Title}</p>
            
           <p className="text-xl ml-8">{inf.Mypost}</p>

           {/* images div */}
           <div className="w-6 h-6 flex gap-3 ml-8 mt-6">
           <img src='src/images/chat.png' alt='save' />
           comments
           <img src='src/images/share.png' alt='save' />
           share
           
           <img src='src/images/save.png' alt='save' />
           save
          <ul>
      <li onClick={handleClick} className='cursor-pointer relative text-2xl' style={{top:'-10px'}} >...</li>
        <ul style={{display:displays?'block':'none',zIndex:'1',position:'absolute'}} className='rounded-md'>
          <li onClick={handleDelete} className="bg-slate-400 p-2 rounded-lg cursor-pointer relative" style={{top:'-10px'}} >delete</li>
          
        </ul>
     

          </ul>
           </div>
        </div>
     );
}
 
export default Mypost;