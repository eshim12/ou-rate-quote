import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const CustomerForm = ({handleSubmit}) => {
	const [loanSize, setLoanSize] = useState(null)
	const [propertyType, setPropertyType] = useState(null)
	const [creditScore, setCreditScore] = useState(null)
	const [occupancy, setOccupancy] = useState(null)

	const propertyTypes = [
		{name: "Single Family", value: "SingleFamily"},
		{name: "Condo", value: "Condo"},
		{name: "Townhouse", value: "Townhouse"},
		{name: "Multi-Family", value: "MultiFamily"},
	]

	const occupancyTypes = [
		{name: "Primary", value: "Primary"},
		{name: "Secondary", value: "Secondary"},
		{name: "Investment", value: "Investment"},
	]

	return (
		<div>
			<Form onSubmit={(e) => handleSubmit(e, {loanSize, propertyType, creditScore, occupancy})}>
				<Form.Row>
					<Form.Group controlId='loan-size' as={Col}>
						<Form.Label>Loan Size</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Loan Size"
							onChange={(e) => setLoanSize(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId='property-type' as={Col}>
						<Form.Label>Property Type</Form.Label>
						<Form.Control as="select" required onChange={(e) => setPropertyType(e.target.value)}>
							<option></option>
							{propertyTypes.map((type, i) => <option key={i} value={type.value}>{type.name}</option>)}
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group controlId='credit-score' as={Col}>
						<Form.Label>Credit Score</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Credit Score"
							min="300"
							max="850"
							onChange={(e) => setCreditScore(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId='occupancy' as={Col}>
						<Form.Label>Occupancy</Form.Label>
						<Form.Control as="select" required onChange={(e) => setOccupancy(e.target.value)}>
							<option></option>
							{occupancyTypes.map((type, i) => <option key={i} value={type.value}>{type.name}</option>)}
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Button variant="outline-primary" type="submit">Quote Rates</Button>
			</Form>
		</div>
	)
}

export default CustomerForm