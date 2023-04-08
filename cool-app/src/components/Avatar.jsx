import Icon from '../images/Face.png'
import camera from '../images/camera on.png'
import { useState,useEffect } from 'react'
const Avatar = ({url,size,onUpload}) => {
    const [avatar,setAvatar] = useState(null)
    const [uploading,setUploading] =useState(false)
    
  useEffect(()=> {
if(url) downloadImage(url)
  },[url])
  const downloadImage = async(path) => {
    try{
        const {data,error} = await supabase.storage.from('avatar').download(path)
        if(error){
    throw error           
    }
    const url =URL.createObjectURL(data)
    setAvatar(url)
  } catch (error){
    console.log('Error downloading image:',error.message)
  }
}
const uploadAvatar = async (event) => {
    try{
        setUploading(true)
        if(!event.target.files || event.target.files.length ===0){
            throw new Error('you must select a message')
        }
        const file = event.target.files[0]
        const fileExt =file.name.split('.').pop()
        const fileName =`${Math.random()}.${fileExt}`
        const filePath =`${fileName}`
    let {error:uploadError} = await supabase.storage.from('avatars').upload(filePath,file)
    if(uploadError){
        throw uploadError
    }
    

    onUpload(filePath)
    }catch(error){
        console.log(error.message)
}finally{
    setUploading(false)

}}
    return ( 
        <div>
            <div>
                {/* <label for="files">

                </label> */}
                <img
                src={avatar ? avatar : camera}
                alt={avatar ? 'avatar':'No Image'}
                style={{height:size,width:size}}
/>
{uploading ? 'Uploading...': (
    <>
    <input
    type='file'
    id='files'
    accept='image/*'
    className='hidden'
    onChange={uploadAvatar}
    disabled={uploading}
    
    />
    </>
)}
            </div>
        </div>
     );
}
 
export default Avatar;