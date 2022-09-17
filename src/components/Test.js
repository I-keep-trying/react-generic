import React from 'react'
import { NavLink } from 'react-router-dom'

const Test = () => {
  console.log('test')
  return (
    <>
      <h1> Test Page</h1>
      <NavLink to="/">Home</NavLink>
    </>
  )
}

export default Test
