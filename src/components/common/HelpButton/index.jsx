import React from 'react'
import styles from './Button.module.css'

export const LelpButton = ({ width, height }) => {
  return <button className={styles.button} styles={{ width, height }}></button>
}
