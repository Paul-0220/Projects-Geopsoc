// Function Basic Example....
function fruitProccessor(apple,pineapple){
    console.log(apple,pineapple)
    const juice=`juice with ${apple} apple and ${pineapple} pineapple is ready.`
    return juice;
}

console.log(fruitProccessor(10,5))

// function declaration and expression

// function declaration
function printLog(){
    console.log("logger")
}

// function expression
const logg=function(){
    console.log("logger2")
}

printLog()
logg()


// Arrow Function
const arr=(a,b,c)=>a+b+c
console.log(arr(5,10,20))

// Function calling function
function cutFruit(fruits){
    return fruits*4
}

function fruitJuice(mango,waterMelon){
    const mangoJuice=cutFruit(mango)
    const waterJuice=cutFruit(waterMelon)

    const mixJuice=`juice contains ${mango} mango and ${waterMelon} waterMelon`
    return mixJuice
}

console.log(fruitJuice(2,3))
