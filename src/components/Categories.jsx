const Categories = (props) => {
  const { categoryId, setCategoryId } = props
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
  return (
    <div className='categories'>
      <ul>
        {categories.map((el, indx) => (
          <li
            key={indx}
            onClick={() => setCategoryId(indx)}
            className={categoryId === indx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
