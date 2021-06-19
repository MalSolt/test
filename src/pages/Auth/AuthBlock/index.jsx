import React from 'react'
import styles from './AuthBlock.module.css'
import { InputWrapper } from '../../../components/common/InputWrapper'

export const AuthBlock = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>ДОБРО ПОЖАЛОВАТЬ В TESTSYSTEM</h1>
      <InputWrapper placeholder='Введите логин или e-mail' label='Логин' name='email' type='email' marginBottom={'28px'} />
      <InputWrapper placeholder='Введите пароль' label='Пароль' name='password' type='password' />
      <div>
        <div className={styles.rememberMe}>
          <input type='checkbox' />
          <span>Запомнить меня</span>
        </div>
      </div>
    </div>
  )
}
