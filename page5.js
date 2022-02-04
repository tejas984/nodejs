//import http to crate web server

const http = require('http')

//create http server

const server = http.createServer((request , Response) => {
   // processing logic
   console.log(`method = ${request.method}`)
   console.log(`path = ${request.url}`)

   
   if(request.method=='GET'){
    if(request.url=='/person'){
        console.log('select * from person')
    }else if(request.url=='/product'){

        console.log('select * from product')

    }

}
else if(request.method=='POST')
{


    if(request.url=='/person'){
        console.log('Insert * from person')
    }else if(request.url=='/product'){

        console.log('Insert * from product')

    }

}
else if(request.method='PUT')
{

    if(request.url=='/person'){
        console.log('Update from person')
    }else if(request.url=='/product'){

        console.log('Update from product')

    }

}

    //process is finished
    Response.end()

})

//start the server
server.listen(4000, '0.0.0.0', () => {
    console.log(`server started on port 4000`)

})