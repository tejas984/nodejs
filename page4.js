//import the file system 
const fs = require('fs')

function synchronousFunction()

{ 
   //read the file synchronosly

   console.log('reading file stared')

   const data = fs.readFileSync('./myfile.txt')

   console.log('reading file finished')

   console.log('' + data)

   console.log(`math operation started`)

   const num1 = 12

   const num2 = 2

   const multiplication = num1*num2

   console.log(`math operation finished`)

   console.log(`multiplication = ${multiplication}`)
}

synchronousFunction()