import React from 'react'
import styles from './Marketplace.module.css'

export const Marketplace = ({ variant = '#EB5757', count }) => {
  return (
    <div style={{ borderTopColor: variant }} className={styles.wrapper}>
      <header className={styles.header}>
        <span style={{ color: variant }}>маркетплейс</span>
        <svg
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
          fill={variant}
          width='20px'
          style={{ transform: 'rotate(90deg)' }}
        >
          <polygon points='9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828' />
        </svg>
      </header>
      <footer className={styles.footer}>
        <span className={styles.positionCount}>{count}</span>
        <span>новых позиций</span>
      </footer>
    </div>
  )
}
