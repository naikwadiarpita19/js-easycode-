//     higher order function



//   eg.,  1)



let a=()=>{
    console.log("hii")
}

let b=(function)=>{
    console.log("hello")
    a()
}

b(a)




//    eg., 2)


let sum=(a,b)=>{
    console.log(a+b)
}

let hof=(a)=>{
    console.log("I am higher order function")
    a(3,4)
}

hof(sum)


//   eg.,   3)


const getdata=()=>{
    console.log("data load successfully")
}

const loaddata=()=>{
    console.log("loading data")
    getdata()
}

loaddata(getdata())



//    eg., 4)


let calculator=(add,sub,multi,div)=>{
    (add(2,2))
    (sub(2,2))
    (multi(2,2))
    (div(2,2))
}

const add=(a,b)=>{
    console.log(a+b)
}

const sub=(a,b)=>{
    console.log(a-b)
}

const multi=(a,b)=>{
    console.log(a*b)
}

const div=(a,b)=>{
    console.log(a/b)
}


calculator(add,sub,multi,div)




//  eg., 5

const abc=()=>{
    console.log("i am call back function")
}

const xyz=(p)=>{
console.log("i am higher order function")
a()
}

xyz(abc)

// in eg., 5    abc() is a call back function and xyz() is a higher order function