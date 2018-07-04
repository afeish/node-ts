
type Name = {
	first: string,
	last: string
}


let defaultName: Name

export function name(first:string, last:string): void {
	defaultName = {first, last}
}

export function sayHi(name?:Name): void {
	if (!name) {
		name = defaultName
	}

	console.log(`hi ${name.first} ${name.last}`)
}
