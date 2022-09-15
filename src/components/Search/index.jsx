import styles from './Search.module.scss'
import iconSearch from '../../assets/img/search.svg'
import iconClose from '../../assets/img/close.svg'

const Search = (props) => {
  const { searchValue, setSearchValue } = props
  return (
    <div className={styles.root}>
      {searchValue.length < 1 && <img className={styles.icon} src={iconSearch} alt='search' />}
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder='Search...'
        type='text'
      />
      {searchValue.length > 0 && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.close}
          src={iconClose}
          alt='close'
        />
      )}
    </div>
  )
}

export default Search
