const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config({ path: './config.env' })


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})