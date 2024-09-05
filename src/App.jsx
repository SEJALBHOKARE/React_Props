import { useState } from 'react'

import './App.css'
import Person from './person'
import Button from './Button'
import Heading from './Heading'
import List from './List'

function App() {

  return (
    <>
    <Person  name="rena" age ="22"/>
    <Button text="Click me!" onClick={() => console.log("Button clicked")}  />
      <Heading title="Hi rena  here"/>
      <List items={['apple','banana','orange']}/>
    </>

  )
}

export default App
