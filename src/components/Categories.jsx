import { useState } from 'react'

const Categories = (props) => {
  const { currentId, setCurrentId } = props
  // const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
  return (
    <div className='categories'>
      <ul>
        {categories.map((el, indx) => (
          <li
            key={indx}
            onClick={() => setCurrentId(indx)}
            className={currentId === indx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
