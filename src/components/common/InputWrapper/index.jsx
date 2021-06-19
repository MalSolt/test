import React from 'react'
import styles from './InputWrapper.module.css'

export const InputWrapper = ({ name, type, label, placeholder, marginBottom, marginTop }) => {
  return (
    <div calssName={styles.wrapper} style={{ marginBottom, marginTop }}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} type={type} id={name} placeholder={placeholder} />
    </div>
  )
}
