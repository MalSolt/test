import React from 'react'
import styles from './AuthBlock.module.css'
import { InputWrapper } from '../../../components/InputWrapper'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/authSlice'
import { Loader } from '../../../components/Loader'

export const AuthBlock = () => {
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector(({ auth }) => auth)

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      dispatch(login(values))
    },
  })

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Loader />
        </div>
      ) : (
        <>
          <h1 className={styles.heading}>ДОБРО ПОЖАЛОВАТЬ В TESTSYSTEM</h1>

          <InputWrapper
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='Введите логин или e-mail'
            label='Логин'
            name='email'
            type='email'
            error={error === 403}
          />

          {error === 403 && <p className={styles.error}>Неверный логин или пароль</p>}

          <InputWrapper
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder='Введите пароль'
            label='Пароль'
            name='password'
            type='password'
            error={error === 403}
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
        </>
      )}
    </div>
  )
}
