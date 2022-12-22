import './index.css'
import React from 'react'
import chipCard from '../../images/chipCard.png'
import { CreditCardForm } from '../CreditCardForm'
import { useCreditCard } from '../../customeHooks/useCreditCard'

export const CreditCard = (props) => {

  const {
    toogle,
    nameCard,
    onSubmit,
    setToogle,
    ccvNumber,
    ImageLogo,
    setNameCard,
    setCcvNumber,
    creditNumber,
    yearSelected,
    monthSelected,
    setYearSelected,
    setCreditNumber,
    setMonthSelected,
  } = useCreditCard(props)

  return <div className='containerCard'>
    <div onClick={() => setToogle(!toogle)} >
      <section className={`card ${toogle ? 'active' : null} `} id='card'>

        <div className='frontCard'>
          <div className='dataCard'>
            <div className='dataGroup' id='numberCard'>
              <p className='labelCard'>Number Card</p>
              <p className='numberCreditCard'>{creditNumber || '#### #### #### ####'}</p>
            </div>
            <img src={chipCard} className='chip-card' alt='' />

            <div className='logoTypeCard'>
              <ImageLogo firstNumber={parseInt(creditNumber[0])} />
            </div>

            <div className='flexContainer'>
              <div className='groupInfo' id='name'>
                <p className='labelCard'>Name Card</p>
                <p className='nameCard'>{nameCard || 'NAME CARD'}</p>
              </div>
              <div className='groupInfo' id='expiration'>
                <p className='labelCard'>Expiration</p>
                <p className='expiration'>
                  <span className='month'>{monthSelected || 'MM'}</span>
                  /
                  <span className='year'>{yearSelected || 'YY'}</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className='backCard'>
          <div className='blackSpace'></div>
          <div className='dataCard'>
            <div className='backGroup' id='signature'>
              <p className='labelCard'>Signature</p>
              <div className='signature'>
                <p>
                  {nameCard ? `${nameCard.split(' ')[0]}
               ${nameCard.split(' ')[1] || ''}` : ''}
                </p>
              </div>
            </div>
            <div className='backGroup' id='ccv'>
              <p className='labelCard'>CCV</p>
              <p className='ccvCard'>{ccvNumber}</p>
            </div>
          </div>
          <p className='infoCard'>
            AUTORIZED SIGNATURE / NOT VALID UNLESS SIGNED / VALIDO SOLAMENTE
            CON UNA FIRMA AUTORIZADA
          </p>
          <a href='http://www.facebook.com' className='bankLink'>www.anybank.com</a>
        </div>

      </section>
    </div >
    <CreditCardForm
      {...props}
      onSubmit={onSubmit}
      toogle={toogle}
      setToogle={setToogle}
      creditNumber={creditNumber}
      setCreditNumber={setCreditNumber}
      monthSelected={monthSelected}
      setMonthSelected={setMonthSelected}
      setYearSelected={setYearSelected}
      ccvNumber={ccvNumber}
      setCcvNumber={setCcvNumber}
      nameCard={nameCard}
      setNameCard={setNameCard}
    />
  </div>
}