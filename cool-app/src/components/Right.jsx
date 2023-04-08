import supabase from "../config/supabaseClient";
import Arrows from "./Arrowss";
import Mypost from "./Mypost";
import PopularPost from "./Popularpost";
import { useEffect,useState } from "react";



const Right = ({ fnews,snews,tnews,lnews}) => {
const[info,setInfo] =useState()
const[formError,setFormError] =useState(null)

const handleDelete = (id)=> {
    setInfo(prev => {
        return prev.filter(sm=> sm.id!==id)
    })
}


  useEffect(() => {
    const fetchData = async()=> {
        const {data,error}= await supabase
        .from('myusers')
        .select()
        if(error){
            setFormError(error)
        }
        if(data){
            setInfo(data)
            console.log(data)
            setFormError(null)

        }
    }
    fetchData()

  },[])

    
    return ( 
        <div style={{background:'#A0A0A0',marginRight:'0px'}} className='w-screen'>
            <div className="myGrid">

<div style={{background:'black',maxWidth:'90%',borderRadius:'12px'}}>
            <p style={{color:'white',marginTop:'55px'}}>{fnews?.title}</p>
        </div>   
        <div style={{background:'black',maxWidth:'90%',borderRadius:'12px'}}>
            <p style={{color:'white',marginTop:'55px'}}>{snews?.title}</p>
        </div>
        <div style={{background:'black',maxWidth:'90%',borderRadius:'12px'}}>
            <p style={{color:'white',marginTop:'55px'}}>{tnews?.title}</p>
        </div>
        <div style={{background:'black',maxWidth:'90%',borderRadius:'12px'}}>
           <p style={{color:'white',marginTop:'55px'}}>{lnews?.title}</p> 
        </div>
        </div>
        <p style={{marginLeft:'25px'}}>Popular Posts</p>

       <div><PopularPost /></div> 
        <div >
        {info?.map((inf)=> (
            <div className="mb-4">
         <Mypost inf={inf} onDelete={handleDelete}/>
        </div>
         
         
        
        ))}
        </div>
        </div>
        
       
    
     );
}
 
export default Right;