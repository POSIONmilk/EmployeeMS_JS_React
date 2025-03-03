import { useState } from 'react'
import InfoPage from "./pages/infoPage";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <InfoPage />
      </div>
    </>
  )
}

export default App
