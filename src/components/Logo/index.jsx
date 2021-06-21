import React from 'react'
import styles from './Logo.module.css'

export const Logo = ({ color = '#fffefe', fontSize = '36px' }) => {
  return (
    <span style={{ color, fontSize }} className={styles.wrapper}>
      testsystem
    </span>
  )
}
