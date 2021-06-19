import React from 'react'
import { useState } from 'react'
import styles from './InputWrapper.module.css'
import eyeIcon from '../../../img/icons/eye.svg'
import classNames from 'classnames'

export const InputWrapper = ({ error, value, onChange, name, type, label, placeholder, marginBottom, marginTop }) => {
  const [visiblePass, setVisiblePass] = useState(false)

  const toggleVisiblePass = () => {
    setVisiblePass(prev => !prev)
  }

  return (
    <div className={styles.wrapper} style={{ marginBottom, marginTop }}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          value={value}
          onChange={onChange}
          className={classNames(styles.input, { [styles.error]: error })}
          type={visiblePass ? 'text' : type}
          id={name}
          placeholder={placeholder}
        />
        {type === 'password' && <img className={styles.eye} onClick={toggleVisiblePass} src={eyeIcon} />}
      </div>
    </div>
  )
}
