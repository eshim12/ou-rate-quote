import axios from 'axios'

const { REACT_APP_API_KEY } = process.env

axios.defaults.headers.common['Authorization'] = `OU-AUTH ${REACT_APP_API_KEY}`

export const getQuotes = (params) => axios.get('https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes', params)

export default {
	getQuotes
}