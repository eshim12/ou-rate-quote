import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'

const QuotesTable = ({quotes, loading}) => (
	<div>
		<Table bordered>
			<thead>
				<tr>
					<th>Lender</th>
					<th>Product</th>
					<th>Rate</th>
					<th>Closing Costs</th>
					<th>Monthly Payment</th>
					<th>APR</th>
				</tr>
			</thead>
			<tbody>
				{quotes && quotes.map((quote, i) => (
					<tr key={i}>
						<th>{quote.lenderName}</th>
						<th>{quote.loanType}</th>
						<th>{quote.interestRate}</th>
						<th>{quote.closingCosts}</th>
						<th>{quote.monthlyPayment}</th>
						<th>{quote.apr}</th>
					</tr>
				))}
			</tbody>
		</Table>
		{loading && (<Spinner animation="border" />)}
		{!loading && quotes.length == 0 &&(<h3>No quotes available</h3>)}
	</div>
)

export default QuotesTable