import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sort from './components/Sort'
import './scss/app.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    axios
      .get('https://63075ee4c0d0f2b8012dbe76.mockapi.io/data')
      .then((response) => setData(response.data))
      .catch((error) => console.error('ErrorAPI: ', error))
  }, [])

  const [data, setData] = useState([])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>All Pizzas</h2>
          <div className='content__items'>
            {data.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
