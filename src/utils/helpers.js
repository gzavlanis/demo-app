export function getUserRole() {
    let userInfoStorage = localStorage.getItem('userInfo')
    if (!userInfoStorage) return null
    let role = JSON.parse(userInfoStorage).role_id
    return role
  }