import{useEffect, useState} from 'react'
import supabase from '../config/supabaseClient'
import Account from './Account'


const Single = ({session}) => {
    console.log(session?.user)
     const [formError,setFormError] =useState(null)
     const[Username,setUsername] = useState('')
     const[Title,setTitle] =useState('')
     const[Mypost,setMypost] =useState('')
  

const handleClick =async(e) => {
   e.preventDefault()
   if(!Username || !Mypost || !Title){
      alert('fill it all')
   }

   
      
//    if(image){
//      const {data,error} = await supabase.storage.from('avatar').upload(`${Date.now()}_${image.name}`,image)
     
//      if(error){
//        console.log(error)
//      }
//      if(data){
// setAvatarUrl(data.Key)
// avatarurl = data.Key
//      }
//    }


   
   const {data,error} = await supabase
   .from('myusers')     
   .insert([{Username,Title,Mypost}])
   if(data){
console.log(data)
   }
   if(error){
      console.log(error)
   }

}

   
 
    
    return ( 
        <div  className='ml-96'>
         <form className=''>
            <div className='mt-12'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
            <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            value={Username}

            />
            </div>
            <div className='mt-12'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Title of post</label>
           
            <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         type='text'
         placeholder='title'
         onChange={(e) => setTitle(e.target.value)}
            value={Title}
         
            />
            </div>
            <div className='mt-12'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Post</label>
           
            <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 h-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         type='text'
         placeholder='mypost'
         onChange={(e) => setMypost(e.target.value)}
            value={Mypost}
         
            />
            {/* <input
            type='file'
            
            onChange={(e) => setImage(e.target.files[0])} */}


            
            {/* /> */}

            </div>
            <button className='rounded-md  ml-48 mt-8 p-4 border ' onClick={handleClick}>Submit</button>
         </form>




        <Account session={session} />
        </div>
     );
}
 
export default Single;