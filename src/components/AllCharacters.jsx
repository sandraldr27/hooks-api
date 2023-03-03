import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function AllCharacters() {
  const [ characters, setCharacters] = useState([])

  useEffect(() => {
  fetch("https://rickandmortyapi.com/api/character")
  .then((res)=>res.json())
  .then((data)=>setCharacters(data.results))
  },[])

  return (
    <div>
      {characters.map((character)=>{
        return(
          <div key={character.id}>
            <p>{character.name}</p>
            <link to={'/character/${character.id}'}><img src={character.image} alt={character.name}></img></link>
          </div>
        )
      })}
    </div> 
  
  )
}
export default AllCharacters

