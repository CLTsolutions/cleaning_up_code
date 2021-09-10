import React from 'react'
import Cats from './Cats'
import Dogs from './Dogs'
// import '../styles/AnimalIndex.css'

const AnimalIndex = () => {
  return (
    <div>
      <div className='animal-photos'>
        {/* where my cats and dogs will live (parent component) */}
        <Cats />
        <Dogs />
      </div>
    </div>
  )
}

export default AnimalIndex
