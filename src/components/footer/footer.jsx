import React from 'react'
import "./footer.css"
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillAmazonSquare } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer'>
    <div className='socials'>
      <ul>
        <li><a href="https://www.instagram.com/alotroladodelfrio/" target="_blank"><AiOutlineInstagram /></a></li>
        <li><a href="https://www.amazon.es/AL-OTRO-LADO-DEL-FR%C3%8DO/dp/841243711X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VRV5A0BETX84&keywords=al+otro+lado+del+frio&qid=1650962211&sprefix=al+otro+lado+del+frio%2Caps%2C135&sr=8-1" target="_blank"><AiFillAmazonSquare /></a></li>
      </ul>
      </div>
      <h2>Website created by <a href="https://lillireilly-portfolio.herokuapp.com/" target="_blank">Lilli</a></h2>
    </div>

  )
}

export default footer