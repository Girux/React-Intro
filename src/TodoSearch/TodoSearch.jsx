import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  return (
    <input
      placeholder='Cortar cebolla' className='TodoSearch'
      onChange={(event)=>{
        console.log('Escribiste en el TODOSearch')
        console.log(event)
        console.log(event.target)
      }}
    />
  );
}

export { TodoSearch } 
