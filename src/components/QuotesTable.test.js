import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

import QuotesTable from './QuotesTable';

describe('QuotesTable', () => {
	let component

	test('snapshot renders', () => {
		component = renderer.create(<QuotesTable quotes={[]}/>)
		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})

	test('Message appears when there are no quotes', () => {
		component = render(<QuotesTable quotes={[]}/>)
		expect(component.find("h3").text()).toEqual("No quotes available")
	})

	test('Snapshot renders with spinner', () => {
		component = renderer.create(<QuotesTable loading={true}/>)
		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})

	test('Message appears when there are no quotes', () => {
		component = render(<QuotesTable loading={true}/>)
		expect(component.find(".spinner-border").length).toBe(1)
	})

	test('Snapshot renders with data in table', () => {
		const quotes = [{lenderName: 'Lender', loanType: 'type', interestRate: '12.01', closingCosts: '2.01', monthlyPayment: '12', apr: '11.01'}]
		component = renderer.create(<QuotesTable quotes={quotes}/>)
		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})

	test('Data populates table', () => {
		const quotes = [{lenderName: 'Lender', loanType: 'type', interestRate: '12.01', closingCosts: '2.01', monthlyPayment: '12', apr: '11.01'}]
		component = render(<QuotesTable quotes={quotes}/>)
		expect(component.find('tbody').find('th').length).toBe(6)
	})
})