export type Message<T> = {
	createdAt: Date,
	updatedAt: Date,
	body: T
}

export type CallbackVal<T> = Message<T> | T | void

function callback<T>(msg: CallbackVal<T>): CallbackVal<T> {
	return msg
}

export type Callback<T> = typeof callback

type Plugin<T> = {
	name: string,
	id: number,
	callback: Callback<T>
}

export interface Echoable {
	setPayLoad<T>(raw: T): CallbackVal<T>

	echoback<T>(msg: T): CallbackVal<T>

	process(): void

	install<T>(callback: Callback<T>, name?: string): void

	log<T>(msg: T): CallbackVal<T>
}

class Echo implements Echoable {
	arr: Plugin<any>[] = [
		{
			name: 'default',
			id: 0,
			callback: callback
		}
	]

	msgEntity: Message<any> = {
		createdAt: new Date(),
		updatedAt: new Date(),
		body: null
	}

	context: any = {
		arr: this.arr,
		msg: this.msgEntity
	}

	echoback<T>(msg: T): Message<T> {
		this.context.msg = {
			createdAt: new Date(),
			updatedAt: new Date(),
			body: msg
		}

		return this.context.msg
	}

	install<T>(callback: Callback<T>, name: string = 'plugin'): void {
		let index = this.context.arr.length

		if (name === 'plugin' && callback.name !== '') { // the user doesn't supply a name
			name = callback.name
		} else {
			name = 'plugin' + index
		}

		this.context.arr.push({
			id: index,
			name,
			callback
		})

		this[name] = callback
	}

	process(): void {
		this.context.arr.forEach(plugin => {
			plugin.callback.call(null, this.context.msg.body)
		})
	}

	log<T>(msg: T): CallbackVal<T> {
		console.log(`the default impl logs that: ${msg}`)
	}

	setPayLoad<T>(msg: T): CallbackVal<T> {
		this.context.msg = {
			createdAt: new Date(),
			updatedAt: new Date(),
			body: msg
		}
		return this.context.msg;
	}

}

export const EchoInstance: Echoable = new Echo()

export module action {
	export const EchoInstance: Echoable = new Echo()

}
export module view {

	export function showEcho<T>(msg: Message<T>): void {
		console.log(msg)
	}

}

export namespace myLib {
	export class Cat {
		name: string

		constructor(name: string) {
			this.name = name
		}

		greeter() {
			console.log(`Cat ${this.name} miao ~~~`)
		}
	}
}

export const version: string = '1.0.1'