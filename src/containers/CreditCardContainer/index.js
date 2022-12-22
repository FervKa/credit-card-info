import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { CreditCard } from '../../components/CreditCard'
import { CreditCardTable } from '../../components/CreditCardTable'
import './index.css'

export const CreditCardContainer = (props) => {
  const { onClick, showToBottom, scrollToBottom } = props

  const [cardsSaved, setCardsSaved] = useState([])

  return <>
    <div className='creditCardContainer'>
      <CreditCard scrollToBottom={scrollToBottom} setCardsSaved={setCardsSaved} />
    </div>
    <div className='buttonToTopContainer'>
      <button onClick={() => onClick()} className='buttonToTopBotton' >
        {showToBottom ?
          <IoIosArrowDown style={{ marginTop: '10px' }} />
          :
          <IoIosArrowUp style={{ marginTop: '10px' }} />
        }
      </button>
    </div>
    <div className='creditCardTableContainer'>
      <CreditCardTable cardsSaved={cardsSaved} />
    </div>
  </>

}

