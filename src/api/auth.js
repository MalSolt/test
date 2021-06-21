export const API = {
  async login({ email, password }) {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'abcxyzazbycx23@mail.ru' && password === 'abcxyzazbycx23') resolve({ code: 200 })
        resolve({ code: 403 })
      }, 1000)
    })
    return response
  },
}
