import React from 'react'
import './home.css'
import  Cover  from "../../assets/al otro lado.jpg"
import { BsFillStarFill } from "react-icons/bs"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
const home = () => {
  return (
    <div className='homePage'>
    <div className='header'>
      <h1> Al Otro Lado Del Frio</h1>
        <a href="https://www.amazon.es/AL-OTRO-LADO-DEL-FR%C3%8DO/dp/841243711X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VRV5A0BETX84&keywords=al+otro+lado+del+frio&qid=1650962211&sprefix=al+otro+lado+del+frio%2Caps%2C135&sr=8-1" target="_blank"><img src={Cover} alt="book cover" /></a>
        <h2>Rodrigo Lopez Gutierrez</h2>
      </div>
      <div className='aboutBook'>
        <p>"En mitad de un camino de autodescubrimiento, Ava (una chica de Nueva Zelanda) emprenderá un viaje hacia su espacio interior que la llevará hasta sus raíces. En su trayecto, vivirá una experiencia reveladora y liberadora que la ayudará a deshacerse de la angustia que viene experimentando desde largo tiempo."</p>
        <a href="https://www.amazon.es/AL-OTRO-LADO-DEL-FR%C3%8DO/dp/841243711X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3VRV5A0BETX84&keywords=al+otro+lado+del+frio&qid=1650962211&sprefix=al+otro+lado+del+frio%2Caps%2C135&sr=8-1" target="_blank"><h2>Compralo en Amazon <BsFillArrowUpRightCircleFill/></h2></a>
      </div>
      <div className='review-into'>
      <h2>Lo que dice la gente:</h2>
      </div>
      <div className='reviews'>
        <div className='review-box'>
        <h3>	Mª DEL CARMEN: </h3>
        <div className='starZone'>
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        </div>
        <p>Me hablaron de éste libro y aunque no me llamaba mucho la atención, me decidí a leerlo y me encantó. Incluso me emocioné. Me encanta los libros que traspasan la piel. Muchas gracias al autor</p>
        </div>
        <div className='review-box'>
          <h3>PABLO:</h3>
          <div className='starZone'>
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        </div>
        <p>Es un pequeño relato que te atrapa en cada página, cada capítulo y no te deja irte. Te sumerges en él y lo deboras. La descripción tan metódica de cada situación, cada sentimiento de la protagonista, te hace meterte de lleno en su piel.
Simplemente: ¡bravo!</p>
        </div>
        <div className='review-box'>
          <h3>NOELIA GC:</h3>
          <div className='starZone'>
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        <BsFillStarFill />
        </div>
        <p>Me ha encantado!!! Está escrito desde lo más profundo del corazón y por eso este relato me ha llegado a lo más profundo de mi alma. Cuando alguna vez te has sentido como la protagonista entiendes cada palabra. Enhorabuena al autor</p>
        </div>
      </div>
    </div>
  )
}

export default home