import React from 'react'

import CustomerForm from './CustomerForm'
import QuotesTable from './QuotesTable'

const Main = ({getQuotes, quotes, error, loading}) => {
	const handleSubmit = (e, params) => {
		e.preventDefault()
		getQuotes({params})
	}

	return (
		<div>
			<h1>Rate Quote</h1>
			<CustomerForm handleSubmit={handleSubmit} /> 
			<br/>
			<QuotesTable quotes={quotes} loading={loading} />
		</div>
	)
}

export default Main