import axios from 'axios'

const clientId = '66062'
const clientSecret = 'a2c33ad6c389d42f128730b6694dc1f123695c35'

// http://www.strava.com/oauth/authorize?client_id=66062&response_type=code&redirect_uri=http://localhost:8080&approval_prompt=force&scope=read_all,activity:read_all

export function getAuthUrl () {
  return 'https://www.strava.com/oauth/authorize?client_id=66062&redirect_uri=http://localhost:8080&response_type=code&scope=read_all,activity:read_all'
}

export function getToken (code) {
  return axios.post(`https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`)
}

export function getAthlete (token) {
  return axios.get('https://www.strava.com/api/v3/athlete', { headers: { 'Authorization': `Bearer ${token}` } })
}

export function getActivities (token) {
  return axios.get('https://www.strava.com/api/v3/athlete/activities', { headers: { 'Authorization': `Bearer ${token}` } })
}
