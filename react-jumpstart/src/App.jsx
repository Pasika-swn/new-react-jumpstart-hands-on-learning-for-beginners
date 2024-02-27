import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyComponent = () => {
  return null;
}

function App() {
  return(
    <div className='App'>
      <h1>Hello</h1>

      {/* ขึ้นด้วยตัวใหญ่ คิดว่าเป็น component เสมอ */}
      <MyComponent />
    </div>
  )
}

export default App
