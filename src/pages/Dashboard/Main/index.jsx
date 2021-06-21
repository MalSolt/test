import React from 'react'
import styles from './Main.module.css'
import { Marketplace } from '../../../components/Cards/Marketplace'

const marketplaces = [
  { count: 32, variant: '#EB5757' },
  { count: 16, variant: '#2F80ED' },
  { count: 42, variant: '#27AE60' },
  { count: 11, variant: '#F2994A' },
  { count: 7, variant: '#9B51E0' },
]

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      {marketplaces.map(e => (
        <Marketplace variant={e.variant} count={e.count} />
      ))}
    </div>
  )
}
