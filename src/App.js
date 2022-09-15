import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './scss/theme'
import './scss/app.scss'

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className='content'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home searchValue={searchValue} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
