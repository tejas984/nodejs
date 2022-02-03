console.log(`welcome to nodeJs`)
function function1()
{
console.log(`inside function1`)
}
//function1()
function add(...parameters)
{
    let addition =0
    for(const value of parameters)
    {
        addition += value
    }
    console.log(`addition = ${addition}`)
}
add(10,90)
add(20,80)
add(30,70)
add(40,60)
add(50,50)