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


let calculator=(sum,sub,multi,div)=>{
    (sum(2,2))
    (sub(2,2))
    (multi(2,2))
    (div(2,2))
}

const sum=(a,b)=>{
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


calculator(sum,sub,multi,div)