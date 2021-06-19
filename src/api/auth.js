export const API = {
  login({ email, password }) {
    if (email === 'user@mail.ru' && password === 'user') return { data: { email, password }, code: 200 }
    return { code: 403 }
  },
}
