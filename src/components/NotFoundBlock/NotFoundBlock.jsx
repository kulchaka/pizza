import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🤨</span>
        <br />
        <h1>Not Found Page</h1>
      </h1>
      <p className={styles.description}>
        A 404 page is the webpage served to a user who tries to access a page that cannot be located
        at the URL provided.
      </p>
    </div>
  )
}

export default NotFoundBlock
