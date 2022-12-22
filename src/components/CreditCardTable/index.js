import React from 'react'
import './index.css'

export const CreditCardTable = (props) => {

  const { cardsSaved = [] } = props

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Card Name</th>
          <th>Card Number</th>
          <th>Expiration</th>
          <th>CCV</th>
        </tr>
      </thead>
      <tbody>
        {cardsSaved?.map((element, index) => {
          return <tr key={index}>
            <td>
              {element.name}
            </td>
            <td>
              {`**** **** **** ${element.number.split(' ')[3]}`}
            </td>
            <td>
              {element.expiration}
            </td>
            <td>
              {element.ccv}
            </td>
          </tr>
        })}
      </tbody>
    </table >
  )
}