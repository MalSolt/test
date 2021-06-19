import React from 'react'
import styles from './AuthBlock.module.css'
import { InputWrapper } from '../../../components/common/InputWrapper'

export const AuthBlock = () => {
  const formik = useFormik({
    
  })

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>ДОБРО ПОЖАЛОВАТЬ В TESTSYSTEM</h1>
      <InputWrapper placeholder='Введите логин или e-mail' label='Логин' name='email' type='email' marginBottom={'28px'} />
      <InputWrapper placeholder='Введите пароль' label='Пароль' name='password' type='password' />
      <div className={styles.formFooter}>
        <div className={styles.rememberMe}>
          <span>
            <input type='checkbox' />
          </span>
          <span>Запомнить меня</span>
        </div>
        <a href='#'>Забыли пароль?</a>
      </div>
      <button className={styles.button}>войти</button>
      <div className={styles.footer}>
        <p>
          Вы можете войти через <a href='#'>ЕСИА</a>
        </p>
        <p>
          У Вас еще нет аккаунта? <a href='#'>Зарегистрируйтесь</a>
        </p>
      </div>
    </div>
  )
}
