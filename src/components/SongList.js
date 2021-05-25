import React, { useState, useEffect } from 'react'
import {v1 as uuid} from 'uuid' // old version: import uuid from 'uuid/v1'
import AddSongForm from './AddSongForm';

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: 'song 1', id:1 },
    { title: 'song 2', id:2 },
    { title: 'song 3', id:3 }
  ]);

  const addSong = (title) => {
    setSongs([
      ...songs, { title, id: uuid() }
    ])
  }
  /********************** use effect ****************************/
  useEffect(() => {
    console.log('Use Effect ran', songs)
  }, [songs])

  return (
    <div>
      <ul>
      { songs.map(song => {
        return ( 
        <li key={song.id}> {song.title} </li> 
        )
      })}
      </ul>
      <AddSongForm addSong={addSong}/>
    </div>
  )
}
