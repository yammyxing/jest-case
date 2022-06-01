import "jest-location-mock";
import mockConsole from "jest-mock-console";

mockConsole();

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }))
})

// jest.spyOn(console, 'log').mockReturnValue();
// jest.spyOn(console, 'info').mockReturnValue();
// jest.spyOn(console, 'warn').mockReturnValue();
// jest.spyOn(console, 'error').mockReturnValue();

// Object.defineProperty(global, 'localStorage', {
// 	value: {
// 		store: {} as Record<string, string>,
// 		setItem(key: string, value: string) {
// 			this.store[key] = value;
// 		},
// 		getItem(key: string) {
// 			return this.store[key]
// 		},
// 		removeItem(key: string) {
// 			delete this.store[key]
// 		},
// 		clear() {
// 			this.store = {}
// 		}
// 	}
// })

