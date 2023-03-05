const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>kasam meow ki!!!</h1>')
})

app.get('/about', (req, res) => {
    res.send(process.env.API_KEY)
})

app.listen(5000,()=>{
    console.log('server is running on port 5000...')
})