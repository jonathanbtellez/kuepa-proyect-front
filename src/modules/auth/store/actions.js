import AuthApi from '@/api/authApi'

export const createUser = async ({ commit }, newUser) => {
  try {
    const { data } = await AuthApi.post('auth/sign-up', newUser)
    const userData = await getProfileData(data.access_token)
    const user = {
      username: userData.username,
      role: userData.role
    }
    commit('loginUser', { user, token: data.access_token })
    return { status: true }
  } catch (error) {
    return { status: false, message: error.response.data.message }
  }
}

export const signInUser = async ({ commit }, userInfo) => {
  try {
    const { data } = await AuthApi.post('auth/sign-in', userInfo)

    const userData = await getProfileData(data.access_token)
    const user = {
      username: userData.username,
      role: userData.role
    }
    commit('loginUser', { user, token: data.access_token })

    return { status: true }
  } catch (error) {
    return { status: false, message: error.response.data.message }
  }
}

export const checkAuthentication = async ({ commit }) => {
  const token = localStorage.getItem('token')

  if (!token) {
    commit('logout')
    return { status: false, message: 'There is not token in the request' }
  }
  try {
    const data = await getProfileData(token)
    if (data.name === 'TokenExpiredError') {
      commit('logout')
      return { status: false, message: 'El token expiro' }
    }

    const user = {
      username: data.username,
      role: data.role
    }
    commit('loginUser', { user, token })

    return { status: true }
  } catch (error) {
    commit('logout')
    return { status: false, message: error }
  }
}

export const getProfileData = async (token) => {
  const { data } = await AuthApi.get('auth/profile', {
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token}`
    }
  })

  return data
}
