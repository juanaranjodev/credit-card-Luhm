import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './App.css'

function App() {


  return (
    <>
      <h1>Credit Card with Luhm Algorithm</h1>
      <div className="card">
        <CreditCard />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
