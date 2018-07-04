import * as hello from './hello/hello'
import {view, action, Message, version, Callback, CallbackVal, Echoable, myLib} from "./utils/echo";
import Cat = myLib.Cat;

hello.name('xiaofei', 'chen')

hello.sayHi({
	first: 'neo',
	last: 'chen'
})

let encoding: BufferEncoding

hello.sayHi()

console.log(version)

let instance:Echoable= action.EchoInstance

instance.log('hello')

instance.install((res:CallbackVal<any>)=> {
	console.log(`the new installed plugin [log] says that: ${JSON.stringify(res, null, 4)}`)
}, 'log')

instance.log('hello')

instance.install((res: CallbackVal<any>)=>{
	if (res.age) {
		res.age ++
	}
	console.log(`the new installed plugin [incrementor] says that: ${JSON.stringify(res, null, 4)}`)

}, 'incrementor')

instance.setPayLoad({age: 20, name: 'neo', id: 1})

instance.process()

let cat: myLib.Cat = new Cat('Kate')
cat.greeter()