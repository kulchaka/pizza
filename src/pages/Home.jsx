import Pagination from '@mui/material/Pagination'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Sort from '../components/Sort'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import SkeletonPizza from '../components/PizzaBlock/SkeletonPizza'
import { SearchContext } from '../App.js'

const Home = () => {
  const pizzasOnPage = 4
  const { searchValue } = useContext(SearchContext)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeSort, setActiveSort] = useState({
    name: 'Popularity ↑',
    sortProperty: 'rating',
    orderProperty: 0,
  })
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const sortOrder = activeSort.orderProperty ? 'acs' : 'desc'
  const search = searchValue ? `&search=${searchValue}` : ''

  useEffect(() => {
    setCurrentPage(1)
  }, [categoryId])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `https://63075ee4c0d0f2b8012dbe76.mockapi.io/data?page=${currentPage}&limit=${pizzasOnPage}&${category}&sortBy=${activeSort.sortProperty}&order=${sortOrder}${search}`,
      )
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((error) => console.error('ErrorAPI: ', error))
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSort, category, searchValue, currentPage])

  return (
    <>
      <div className='content__top'>
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>
      <h2 className='content__title'>All Pizzas</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(4)].map((_, i) => <SkeletonPizza key={i} />)
          : data
              // .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination
        count={3}
        page={currentPage}
        onChange={(_, value) => setCurrentPage(value)}
        size='large'
        color='primary'
      />
    </>
  )
}

export default Home
