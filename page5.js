//import http to crate web server

const http = require('http')

//create http server

const server = http.createServer((request , Response) => {
   // processing logic
   console.log(`method = ${request.method}`)
   console.log(`path = ${request.url}`)

    //process is finished
    Response.end()

})

//start the server
server.listen(4000, '0.0.0.0', () => {
    console.log(`server started on port 4000`)

})