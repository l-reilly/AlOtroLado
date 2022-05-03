import React from 'react'
import "./theBook.css"
import Cover from "../../assets/al otro lado.jpg"

const theBook = () => {
  return (
    <div className='book'>
      <h1>Al otro lado del frío</h1>
      <img src={Cover} alt="book cover" />
      <h2> Autór: Rodrigo López Gutiérrez</h2>
      <h3> Publicado: Enero 2022</h3>
      <h3> Description: </h3>
    </div>
  )
}

export default theBook