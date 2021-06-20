export const API = {
  login({ email, password }) {
    if (email === 'abcxyzazbycx23@mail.ru' && password === 'abcxyzazbycx23') return { code: 200 }
    return { code: 403 }
  },
}
