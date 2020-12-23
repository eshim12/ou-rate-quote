import {
	GET_QUOTES_REQUESTED,
	GET_QUOTES_SUCCEEDED,
	GET_QUOTES_FAILED
} from '../constants'

export default (state={}, {payload, type}) => {
	switch(type) {
		case GET_QUOTES_REQUESTED:
			return {
				loading: true,
				failed: false,
				error: null,
				data: []
			}

		case GET_QUOTES_SUCCEEDED:
			return {
				loading: false,
				failed: false,
				error: null,
				data: payload
			}

		case GET_QUOTES_FAILED:
			return {
				loading: false,
				failed: true,
				error: payload.message,
				data: []
			}

		default:
			return state
	}
}