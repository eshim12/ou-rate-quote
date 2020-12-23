import axios from 'axios'
import { getQuotes } from './quoteApi'

jest.mock('axios')

describe('fetch quotes', () => {
	test('fetches quotes successfully from API', async () => {
		const quotes = [{lender: 'Credit union', product: '7/1 ARM', closingCosts: '1200'}]
		const res = {data: quotes}
		const params = {propertyType: 'Condo', creditScore: 700, loanSize: 200000, occupancy: 'Primary'}

		axios.get.mockImplementationOnce(() => Promise.resolve(res))

		await expect(getQuotes({params})).resolves.toEqual(res)
	})

	test('fails to fetch quotes from API', async () => {
		const error = "Failed to fetch quotes"

		axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)))

		await expect(getQuotes()).rejects.toThrow(error)
	})
})
