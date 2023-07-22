import React, { useState } from 'react'
import './App.css'
import MainHeader from "./components/MainHeader";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader></MainHeader>
    </>
  )
}

export default App
