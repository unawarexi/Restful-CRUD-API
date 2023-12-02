const express = require('express')
const app = express()
const port = 3000

// setting route
app.get('/', (req, res) => res.send('Hello World!'))

// setting port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))