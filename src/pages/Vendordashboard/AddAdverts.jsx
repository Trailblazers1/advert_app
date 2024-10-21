import axios from 'axios';


const AddAdverts = () => {
const saveAdvert = async () =>{
    event.preventDefault();
   
    const formData = new FormData(event.target)
    await axios.post(`${import.meta.env.VITE_BASE_URL}/adverts`, formData)
}

  return (
 <div>
    <h1>add an advert</h1>
    <form className='grid justify-center' onSubmit={saveAdvert}>
        <input className='border-2 w-[50vw]' type="text" placeholder='enter your title' required name='title' />
         <input className='border-2' type="text" placeholder='enter your description' required name='description' />
        <input className='border-2' type="text" placeholder='enter your price' required name='price' />
        <input className='border-2' type="text" placeholder='enter your category' required name='category'/> 
        <input className='border-2' type="file"  required name='icon' />
        <button className='border-2' type="submit">submit</button>
    </form>
 </div>
  )
}

export default AddAdverts