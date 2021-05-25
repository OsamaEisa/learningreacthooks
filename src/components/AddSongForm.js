import React, { useState } from 'react'

 const AddSongForm = ({ addSong }) => {
  
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      <input type="text" value={title} required onChange={handleChange}/>
      <input type="submit" value="add song"/>
    </form>
  )
}

export default AddSongForm;