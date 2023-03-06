
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Photos from './pages/Photos'
import Card from './pages/Cart'

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/cart' element={<Card />} />
      </Routes>

    </div>
  )
}

export default App










// import React, { useState, useEffect, useRef } from 'react'

// const App = () => {
//   const [name, setName] = useState('')
//   const inputRef = useRef()

//   function focus() {
//     inputRef.current.focus()
//     inputRef.current.value='Khaled Mohsen '
//   }

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <h1>My name is {name}</h1>
//       <button onClick={focus}>Focus</button>
//     </div>
//   )
// }

// export default App
