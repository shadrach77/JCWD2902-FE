import React from 'react'
import { map } from 'zod'

function Category([header, title, price]props) {
  return (
    <div>
      <h1>{props.header}</h1>
      {map((props) => (
        <div>{child}</div>
      ))}
    </div>
  )
}

export default Category
