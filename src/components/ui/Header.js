import React, {Fragment, useState } from 'react'
import axios from 'axios';

const Header = () => {
  const [file, setFile] = useState('')

  const onChange = e => {
    setFile(e.target.files[0])
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);
  }
  
try{
  const res = await axios.post('/upload', formData)

}catch(err){

}

  return (
   <div className="header">
      <h1 className="logo">Flicker App</h1>
    <Fragment >
      <form onSubmit={onSubmit}>
      <div className="header-right">
        <input type="file"  id="customFile" onChange={onChange}/> 
       <input className='btn' type="submit" value="Upload"/>
    </div>
      </form>
     
   </Fragment>

   </div>
  
  )
}

export default Header