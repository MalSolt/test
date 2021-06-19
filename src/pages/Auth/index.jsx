import React from 'react'
import styles from './Auth.module.css'
import { Logo } from '../../components/common/Logo'
import { AuthBlock } from './AuthBlock'
import { useHistory } from 'react-router-dom'

export const Auth = () => {
  const history = useHistory()

  return (
    <div className={styles.authPage}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <AuthBlock />
      </div>
    </div>
  )
}
