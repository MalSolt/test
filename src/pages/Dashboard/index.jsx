import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { Header } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'

export const Dashboard = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth)

  if (!isAuth) return <Redirect to='/auth' />
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
