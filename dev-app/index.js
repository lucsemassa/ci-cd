const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res, err)=>{
	res.send("Hello Dev app")
})


app.listen(PORT, ()=>{
 console.log('Server is listening on PORT: 3000')
})
