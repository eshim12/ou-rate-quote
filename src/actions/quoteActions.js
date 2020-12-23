import {
	GET_QUOTES_REQUESTED,
	GET_QUOTES_SUCCEEDED,
	GET_QUOTES_FAILED
} from '../constants'

import quoteApi from '../api/quoteApi'

export const getQuotesRequested = () => ({
	type: GET_QUOTES_REQUESTED
})

export const getQuotesSucceeded = (payload) => ({
	type: GET_QUOTES_SUCCEEDED,
	payload
})

export const getQuotesFailed = (err) => ({
	type: GET_QUOTES_FAILED,
	payload: err
})

export const getQuotes = (params) => dispatch => {
	dispatch(getQuotesRequested())

	quoteApi
		.getQuotes(params)
		.then(res => dispatch(getQuotesSucceeded(res.data.rateQuotes)))
		.catch(err => dispatch(getQuotesFailed(err)))
}