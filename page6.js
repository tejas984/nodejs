// import the express
const express = require('express')


// create express application

const app = express()

//route the application

app.get ('/',(request,response) => {
    console.log('GET /')
    response.end()

})

//start the applocation
app.listen(4000, '0.0.0.0' , () => {
    console.log('server started on port 4000')

})