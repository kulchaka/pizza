import { useState } from 'react'

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
  return (
    <div className='categories'>
      <ul>
        {categories.map((el, indx) => (
          <li
            key={indx}
            onClick={() => setActiveIndex(indx)}
            className={activeIndex === indx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
