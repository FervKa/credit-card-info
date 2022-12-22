import React, { useState } from 'react'
import mastercardLogo from '../images/mastercardLogo.png'
import visaLogo from '../images/visaLogo.png'
import { useToasts } from 'react-toast-notifications'


export const useCreditCard = (props) => {
  const { setCardsSaved, scrollToBottom } = props
  const { addToast } = useToasts()
  const [toogle, setToogle] = useState(false)
  const [creditNumber, setCreditNumber] = useState('')
  const [monthSelected, setMonthSelected] = useState('')
  const [yearSelected, setYearSelected] = useState('')
  const [ccvNumber, setCcvNumber] = useState('')
  const [nameCard, setNameCard] = useState('')

  const ImageLogo = (firstNumber) => {
    //Used to render depending on the first credit card number.
    let aux;
    if (firstNumber.firstNumber === 4) {
      aux = visaLogo
    } else if (firstNumber.firstNumber === 5) {
      aux = mastercardLogo
    }
    return <img className='imageTypeCard' src={aux} alt='' />
  }

  const onSubmit = (values) => {
    values.preventDefault()

    const data = {
      number: creditNumber,
      name: nameCard,
      ccv: btoa(ccvNumber),
      expiration: monthSelected + '/' + yearSelected
    }
    try {
      setCardsSaved(previousState => {
        return [...previousState, data]
      })
      addToast('Save Succesfully, now you can see it in the Table', { appearance: 'success', autoDismiss: true })
    } catch (error) {
      addToast('Upps... And Error Ocurred', { appearance: 'error', autoDismiss: true })
    }
    scrollToBottom()
  }
  return {
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
  }
}
