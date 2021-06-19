import React from 'react'
import styles from './AuthBlock.module.css'
import { InputWrapper } from '../../../components/common/InputWrapper'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export const AuthBlock = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      
      resetForm()
    },
  })

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>ДОБРО ПОЖАЛОВАТЬ В TESTSYSTEM</h1>

      <InputWrapper
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder='Введите логин или e-mail'
        label='Логин'
        name='email'
        type='email'
        error={!formik.isValid}
      />

      {!formik.isValid && <p className={styles.error}>Неверный логин или пароль</p>}

      <InputWrapper
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder='Введите пароль'
        label='Пароль'
        name='password'
        type='password'
        error={!formik.isValid}
        marginTop={'28px'}
      />

      <div className={styles.formFooter}>
        <div className={styles.rememberMe}>
          <span>
            <input type='checkbox' />
          </span>
          <span>Запомнить меня</span>
        </div>
        <a href='#'>Забыли пароль?</a>
      </div>

      <button onClick={formik.handleSubmit} className={styles.button}>
        войти
      </button>

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
