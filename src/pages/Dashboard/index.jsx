import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styles from './Dashboard.module.css'

export const Dashboard = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth)

  if (!isAuth) return <Redirect to='/auth' />
  return <div className={styles.wrapper}></div>
}
