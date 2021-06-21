import React from 'react'
import styles from './Auth.module.css'
import { Logo } from '../../components/Logo'
import { AuthBlock } from './AuthBlock'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Auth = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth)

  if (isAuth) return <Redirect to='/dashboard' />
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
