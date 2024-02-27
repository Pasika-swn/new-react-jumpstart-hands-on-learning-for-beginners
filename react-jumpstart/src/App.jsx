import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div className='App'>
      <h1>Hello</h1>

      <div />

      <div>Child</div>

      <div>
        <p>Another Child</p>
      </div>

      <div role="alert" id="foo1">1</div>
      <div role={`alert`} id="foo2">2</div>
    </div>
  )
}

export default App
