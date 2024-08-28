import axios from 'axios'


const newAxios = axios.create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json'
  }
})
