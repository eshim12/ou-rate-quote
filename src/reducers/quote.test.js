import reducer from './quote'
import {
	GET_QUOTES_REQUESTED,
	GET_QUOTES_SUCCEEDED,
	GET_QUOTES_FAILED
} from '../constants'

describe('quote reducer', () => {
	const initialState = {
		loading: false,
		failed: false,
		error: null,
		data: []
	}

	test('it should return initial state', () => {
		expect(reducer(undefined, {})).toMatchSnapshot()
	})

	test('should handle quotes request', () => {
		expect(reducer(initialState, {type: GET_QUOTES_REQUESTED})).toMatchSnapshot()
	})

	test('should handle successful quotes request', () => {
		expect(reducer(initialState, {type: GET_QUOTES_SUCCEEDED})).toMatchSnapshot()
	})

	test('should handle failed quotes request', () => {
		expect(reducer(initialState, {type: GET_QUOTES_FAILED, payload: {message: "fetch failed"}})).toMatchSnapshot()
	})
})