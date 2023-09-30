import axios from 'axios'
import { getUserRole } from 'utils/helpers'

export async function getConstantData(uri, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let userRole = getUserRole()
    let apiUrl = process.env.REACT_APP_BASE_URL

    return await axios.get(apiUrl + uri, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}

export async function authenticate(uri, payload = {}, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let apiUrl = process.env.REACT_APP_AUTH_URL
    return await axios.post(apiUrl + uri, payload, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}

export async function getData(uri, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let apiUrl = process.env.REACT_APP_BASE_URL

    return await axios.get(apiUrl + uri, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}

export async function postData(uri, payload = {}, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let apiUrl = process.env.REACT_APP_BASE_URL

    return await axios.post(apiUrl + uri, payload, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}

export async function putData(uri, payload = {}, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let apiUrl = process.env.REACT_APP_BASE_URL

    return await axios.put(apiUrl + uri, payload, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}

export async function delData(uri, headers = {}, errorHandler) {
  try {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let apiUrl = process.env.REACT_APP_BASE_URL

    return await axios.delete(apiUrl + uri, { headers: headers })
  } catch (err) {
    if (errorHandler) errorHandler(err)
    console.log(`Request Error:`, err)
    return null
  }
}