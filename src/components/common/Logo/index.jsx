import React from 'react'
import styles from './Logo.module.css'

export const Logo = ({ type = 'white', size = 'large' }) => {
  return <span className={styles.wrapper + ' ' + styles[size] + ' ' + styles[type]}>testsystem</span>
}
