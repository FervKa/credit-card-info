import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export const CreditCardForm = (props) => {
  const {
    creditNumber,
    setCreditNumber,
    setMonthSelected,
    setYearSelected,
    toogle,
    setToogle,
    ccvNumber,
    setCcvNumber,
    setNameCard,
    onSubmit,
  } = props

  //This useEffect, is used to call the functions that create the months and years, for input of the select
  useEffect(() => {
    createMonths()
    createYears()
  }, [])

  const createMonths = () => {
    const months = []
    for (let i = 1; i < 13; i++) {
      if (months.length < 12) {
        if (i < 10) {
          months.push('0' + i)
        } else {
          months.push(i)
        }
      }
    }
    return months
  }

  const createYears = () => {
    const years = []
    const actualYear = new Date().getFullYear()
    for (let i = actualYear; i <= actualYear + 10; i++) {
      years.push(i)
    }
    return years
  }

  return (
    <form id='cardForm' className='cardForm' onSubmit={onSubmit}>
      <div className='inputGroup'>
        <label className='labelNumber' htmlFor='inputCreditNumber'>
          Credit Card Number:
        </label>
        <input
          required
          value={creditNumber}
          onChange={(event) => {
            let inputNumber = event.target.value
            setCreditNumber(inputNumber.replace(/\s/g, '')
              .replace(/\D/g, '')
              .replace(/([0-9]{4})/g, '$1 ')
              .trim())
          }}
          id='inputCreditNumber'
          maxLength='19'
          autoComplete='off'
          type='text'
        />
      </div>

      <div className='inputGroup'>
        <label className='nameLabel' htmlFor='nameInput'>Card Name</label>
        <input
          required
          onChange={(event) => {
            setNameCard(event.target.value)
          }}
          onClick={() => toogle ? false : ''}
          maxLength='25'
          type='text'
          autoComplete='off'
          className='nameInput'
          name='nameInput'
        />
      </div>

      <div className='flexContainer'>
        <div className='inputGroup expiration'>
          <label htmlFor='monthInput'>Expiration</label>
          <div className='flexContainer'>
            <div className='selectGroup'>
              <select
                required
                defaultValue='DEFAULT'
                onChange={(event) => {
                  setMonthSelected(event.target.value)
                }}
              >
                <option disabled value=''>MM</option>

                {createMonths()?.map((month, index) => {
                  return <option
                    key={index}
                    value={month}
                  >
                    {month}
                  </option>
                })}

              </select>
              <div className='arrowDown'>
                <IoIosArrowDown />
              </div>
            </div>

            <div className='selectGroup'>
              <select
                required
                defaultValue='DEFAULT'
                onChange={(event) => {
                  setYearSelected(event.target.value.slice(event.target.value.length - 2))
                }}
              >
                <option disabled value=''>YY</option>
                {createYears().map((year, index) => {
                  return <option
                    key={index}
                    value={year}
                  >
                    {year}
                  </option>
                })}
              </select>
              <div className='arrowDown'>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>

        <div className='inputGroup ccv'>
          <label className='ccvLabel' htmlFor='ccvInput'>
            CCV
          </label>
          <input
            required
            value={ccvNumber}
            data-value={ccvNumber}
            onFocus={() => setToogle(!toogle)}
            onBlur={() => setToogle(!toogle)}
            onChange={(event) => {
              let inputNumber = event.target.value
              setCcvNumber(inputNumber.replace(/\s/g, '')
                .replace(/\D/g, '')
                .trim())
            }}
            name='ccvInput'
            type='text'
            maxLength='3'
          />
        </div>
      </div>

      <div className='buttonsGroup'>
        <button className='submitButton' type='submit'>Submit</button>
        <button className='resetButton' type='reset' onClick={() => {
          setCcvNumber('')
          setCreditNumber('')
          setMonthSelected('')
          setYearSelected('')
          setNameCard('')
        }}>Reset</button>
      </div>
    </form >
  )
}