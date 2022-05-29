import getSearchObj from '@/utils/getSearchObj'

describe("getSearchObj", () => {
	it("we can get the search obj", () => {
		window.location.assign('https://www.baidu.com?a=1&b=2')
		// global.jsdom.reconfigure({
		// 	url: 'https://www.baidu.com?a=1&b=2'
		// })
		// Object.defineProperty(window, 'location', {
		// 	configurable: true,
		// 	writable: true,
		// 	value: {
		// 		href: 'https://www.baidu.com?a=1&b=2',
		// 		search: '?a=1&b=2'
		// 	}
		// })
		// window.location.href = 'https://www.baidu.com?a=1&b=2'

		expect(window.location.search).toEqual("?a=1&b=2")
		expect(getSearchObj()).toEqual({
			a: '1',
			b: '2'
		})
	})

	it("return blank obj when no search", () => {
		window.location.assign('https://www.baidu.com')
		// global.jsdom.reconfigure({
		// 	url: 'https://www.baidu.com'
		// })
		// Object.defineProperty(window, 'location', {
		// 	configurable: true,
		// 	writable: true,
		// 	value: {
		// 		href: 'https://www.baidu.com',
		// 		search: ''
		// 	}
		// })
		// window.location.href = 'https://www.baidu.com';

		expect(window.location.search).toEqual("")
		expect(getSearchObj()).toEqual({})
	})
})