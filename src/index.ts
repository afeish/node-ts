import app from './App'
// import './main'
export * from './utils/echo'

// const port = process.env.PORT || 3000
//
// app.listen(port, (err) => {
// 	if (err) {
// 		return console.log(err)
// 	}
//
// 	return console.log(`server is listening on ${port}`)
// })


declare global {
	export const _welcome = 'welcome to the TypeScript jungle world'
}

export const version = '1.0.1'