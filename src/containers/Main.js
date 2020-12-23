import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'

import Main from '../components/Main'
import { getQuotes } from '../actions/quoteActions'

const mapStateToProps = (state) => {
	const quotes = get(state, 'quote.data', [])
	const error = get(state, 'quote.error')
	const loading = get(state, 'quote.loading', false)

	return {
		quotes,
		error,
		loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getQuotes: (params) => dispatch(getQuotes(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)