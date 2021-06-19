import React from 'react'
import styles from './Auth.module.css'
import { Logo } from '../../components/common/Logo'
import { AuthBlock } from './AuthBlock'

export const Auth = () => {
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
