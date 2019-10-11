import app from './App'
// import './main'
export * from './utils/echo'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
	if (err) {
		return console.log(err)
	}

	return console.log(`server is listening on ${port}`)
})


export const version = '1.0.1'