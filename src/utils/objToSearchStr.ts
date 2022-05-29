const objToSearchStr = (obj: Record<string, string | number>) => {
	let str = ''
	Object.keys(obj).forEach(key => {
		let keyAndValue = `${key}=${obj[key]}`
		str = str ? `${str}&${keyAndValue}` : `${keyAndValue}`
	})
	return str
}

export default objToSearchStr