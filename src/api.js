import axios from 'axios'
import { BASE_URL } from './constants'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
})

const get = async () => await axiosInstance.get('/api/users?page=2')
