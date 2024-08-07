import React, { useState } from 'react';
import './creditCard.css';
import imgCard from './../assets/images/14.jpeg';
import imgChip from './../assets/images/chip.png';
import { ValidateLuhn } from './../assets/Luhm/ValidateLuhm';

function CreditCard() {

  const [ inputValue, setInputValue ] = useState('');
  const [ logoValue, setLogoValue ] = useState('visa');
  const [ isValid, setIsValid ] = useState(null);

  
  const handleChange = (event) => {
    const { value } = event.target;
    // Permitir solo valores numéricos
    if (/^\d{0,16}$/.test(value)) {
      setInputValue(value);
      
    }
    
    if (value.startsWith('4')){
      setLogoValue('visa');
    } else if (value.startsWith('34')){
      setLogoValue('amex');
    } else if (value.startsWith('5')){
      setLogoValue('mastercard');
    }
  };


  const formatNumer = (number) => {
    let formattedNumber = number.replace(/(\d{4})(?=\d)/g, '$1  ');
    // Quitar espacios y añadir 'X' para los dígitos faltantes
    let cleanNumber = formattedNumber.replace(/ /g, '');
    while (cleanNumber.length < 16) {
      cleanNumber += '#';
    }

    // Volver a formatear el número completo en grupos de 4
    return cleanNumber.match(/.{1,4}/g).join('  -  ');
  };
  

  const handleValidate = () => {

    // Convertir input a numero
    const numero = parseInt(inputValue, 10);
    
    if (inputValue.length === 16 && ValidateLuhn(numero)){
      setIsValid(true);
      console.log('Valid');
    } else {
      setIsValid(false);
      console.log('Invalid');
    }
  
  }
  
  

  return (
    <>
      <div className='wrapper'>
        <div className='card-form'>
          <div className='card-list'>
            <div className='card-item'>
              <div className='card-item-inner'>
                <div className='card-item-cover'>
                  <img src={imgCard} className='card-item-img'></img>
                </div>
                <div className='card-item-dates'>
                  <div className='card-item-top'>
                    <img src={imgChip} className='card-chip'></img>
                    <div className='card-logo'>
                      <img src={`/src/assets/images/${logoValue}.png`} className='card-logo-img'>
                      </img>
                    </div>
                  </div>
                  <label className='card-item-number'>
                    {formatNumer(inputValue)}
                  </label>
                  <div className="card-item-content">
                    <label className="card-item-info">
                      <div className="card-item-holder">Card Holder</div> 
                      <div className="card-item-name">JUAN NARANJO</div></label> 
                      <div className="card-item-date">
                        <label className="card-item-dateTitle">Expires</label> 
                        <label className="card-item-dateItem"><span>08 / 35</span></label>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <form className='card-form-inner'>
            <div className='card-input'>
              <label className='card-label'>Card Number</label>
              <input 
                type='number' 
                className='card-input-inner'
                onChange={handleChange} 
                value={inputValue}
                maxLength='16'
                placeholder='Ingresa Numero de Tarjeta' ></input>
            </div>
            <button type="button" className='card-form-button' onClick={handleValidate}>Varificar</button>
            {isValid === true ? 
            <p className='card-label '>Valido!</p> : 
            <p className='card-label '></p>} 
          </form>

        </div>
      </div>
      
    </>
  )
}

export default CreditCard