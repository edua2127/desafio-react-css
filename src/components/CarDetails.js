import React from 'react'
import style from './CarDetails.module.css'
const CarDetails = ({listaCarros}) => {
  return (
    <div>
        {listaCarros.map((carro, index)=>(
            <div className={style.item_lista}>
                <h1>Numero do Carro: {index}</h1>
                <p>Marca do Carro: {carro.marca}</p>
                <p>Ano do Carro: {carro.ano}</p>
                <p>Preco do Carro: {carro.preco}</p>
                <br />
            </div>
        ))}
    </div>
  )
}

export default CarDetails