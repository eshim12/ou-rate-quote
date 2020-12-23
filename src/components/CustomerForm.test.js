import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

import CustomerForm from './CustomerForm';

describe('CustomerForm', () => {
	test('snapshot renders', () => {
		const component = renderer.create(<CustomerForm/>)
		let tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe('Fill inputs in CustomerForm', () => {
	let component;

    beforeEach(() => {
    	component = render(
			<CustomerForm/>
		)
    });

    test('input fields filled correctly', () => {
    	const params = {propertyType: 'Condo', creditScore: 700, loanSize: 200000, occupancy: 'Primary'}

    	const creditScoreInput = component.find("#credit-score")
    	creditScoreInput.value = params.creditScore
    	expect(component.find('#credit-score').length).toBe(1)

    	const proprtyTypeInput = component.find('#property-type')
    	proprtyTypeInput.value = params.proprtyType
    	expect(component.find('#property-type').length).toBe(1)

    	const loanSizeInput = component.find('#loan-size')
    	proprtyTypeInput.value = params.loanSize
    	expect(component.find('#loan-size').length).toBe(1)

    	const occupancyInput = component.find('#occupancy')
    	proprtyTypeInput.value = params.occupancy
    	expect(component.find('#occupancy').length).toBe(1)
    })
})