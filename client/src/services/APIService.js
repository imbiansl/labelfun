import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  setAuth(token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  login(user) {
    return apiClient.post('/api/auth/login', {
      grant_type: 'password',
      ...user,
    })
  },
  signup(newUser) {
    return apiClient.post('/api/users', newUser)
  },
}
