import React from 'react'
import styles from './HelpButton.module.css'

export const HelpButton = ({ width, height, color = '#dddde4', borderColor = '#dddde4' }) => {
  return (
    <button className={styles.button} style={{ width, height, color, borderColor }}>
      помощь
    </button>
  )
}
