import React, { useEffect, useState } from 'react'
import { CreditCard } from '../../components/CreditCard'
import { CreditCardTable } from '../../components/CreditCardTable'
import './index.css'

export const CreditCardContainer = () => {

  const [cardsSaved, setCardsSaved] = useState([])

  useEffect(() => {
    console.log("🚀 ~ file: index.js:9 ~ CreditCardContainer ~ cardsSaved", cardsSaved)

  }, [cardsSaved])

  return <>
    <div className='creditCardContainer'>
      <CreditCard setCardsSaved={setCardsSaved} />
    </div>
    <div className='creditCardTableContainer'>
      <CreditCardTable cardsSaved={cardsSaved} />
    </div>
  </>

}

