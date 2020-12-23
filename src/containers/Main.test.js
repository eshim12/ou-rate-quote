import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Main from './Main';
import { getQuotes } from '../actions/quoteActions'

const mockStore = configureMockStore();

describe('Main', () => {
	let wrapper;
	let store;

	beforeEach(() => {
		const initialState = {
			quote: {
				data: []
			}
		}
		store = mockStore(initialState);
		store.dispatch = jest.fn()
		wrapper = shallow(<Main store={store} />).dive();
	});

	test('should initially have empty array of quotes', () => {
		expect(wrapper.props().quotes).toStrictEqual([]);
	});

	test('should dispatch action on submit button click', () => {
		const e = { preventDefault: jest.fn() }
	    const params = {proprtyType: 'Condo', creditScore: 700, loanSize: 200000, occupancy: 'Primary'}
		const component = renderer.create(
			<Provider store={store}>
				<Main/>
			</Provider>
		)

	    renderer.act(() => {
	    	component.root.findByType('form').props.onSubmit(e, params)
	    })

	    expect(store.dispatch).toHaveBeenCalledTimes(1)
 	 });
});