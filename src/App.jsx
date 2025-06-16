import { useState } from 'react'

import './App.css'


import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen' >
      <div className="flex justify-center items-center h-screen bg-blue-500">
      <h1 className="text-4xl text-white font-bold">Hello, Tailwind CSS!</h1>
    </div>
    </div>
  )
}

export default App
