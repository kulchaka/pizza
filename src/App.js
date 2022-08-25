import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sort from './components/Sort'
import './scss/app.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SkeletonPizza from './components/PizzaBlock/SkeletonPizza'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://63075ee4c0d0f2b8012dbe76.mockapi.io/data')
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((error) => console.error('ErrorAPI: ', error))
  }, [])

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
            {isLoading
              ? [...new Array(9)].map((_, i) => <SkeletonPizza key={i} />)
              : data.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
