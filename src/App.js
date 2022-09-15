import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './scss/theme'
import './scss/app.scss'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className='content'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SearchContext.Provider>
      </div>
    </ThemeProvider>
  )
}

export default App
