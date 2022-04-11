import { prettyDOM } from '@testing-library/react'
import React from 'react'

function Detail({pro}) {
  return (
    <div>
        <p>fullName : {pro.fullName} </p>
        <p>Bio :{pro.Bio} </p>
        <p>profession :{pro.profession}</p>
        
    </div>
  )
}

export default Detail