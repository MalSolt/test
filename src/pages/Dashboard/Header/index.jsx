import React from 'react'
import styles from './Header.module.css'
import menuIcon from '../../../img/icons/menu.png'
import bellIcon from '../../../img/icons/bell.svg'
import gearIcon from '../../../img/icons/gear.svg'
import avatarIcon from '../../../img/icons/avatar.png'
import arrowIcon from '../../../img/icons/arrow.svg'
import { Logo } from '../../../components/Logo'
import { HelpButton } from '../../../components/HelpButton'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftBlock}>
          <img className={styles.minuIcon} src={menuIcon} />
          <Logo color='#15195f' fontSize='32px' />
          <input className={styles.searchInput} type='text' placeholder='Поиск' />
          <div className={styles.subdivisions}>
            <span>Подразделения</span>
            <img src={arrowIcon} />
          </div>
        </div>
        <nav className={styles.nav}>
          <span>Система</span>
          <span>Первая система</span>
          <span>Вторая система</span>
          <span>Третья система</span>
          <span>Система</span>
        </nav>
        <div className={styles.rightBlock}>
          <HelpButton width='98px' height='40px' color='#15195F' borderColor='#DDDDE4' />
          <img className={styles.bellIcon} src={bellIcon} />
          <img className={styles.gearIcon} src={gearIcon} />
          <img src={avatarIcon} />
        </div>
      </div>
    </header>
  )
}
