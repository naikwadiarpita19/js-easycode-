//   anonimus function

// eg., 1]

function a() {
    console.log("hii")
}

a()

//  or

let hii=functionn() {
    console.log("hello")
}

hii()

//  or

let hello=functionn(a) {
    console.log("hello")
}

hello(a)


//   eg.,2

function a(){
    return ("hii")
}

let res=a()
console.log(res)

//   eg., 3

let isevenorodd=function(number){
    number%2==0?"even":"odd"
}

isevenorodd()

//     or


let isevenorodd=function(number){
    if(number%2==0){
        return{"even"}
    }else{
        return("odd")
    }
}

let res=isevenorodd(10)
console.log(res)





//  arrow function



// eg., 1

let b=()=>{
    console.log("easycode")
}

b()


//    eh., 2

let c=(welcome)=>{
    console.log("easycode")
}

c(welcome)



// eg., 3

let sum=(a,b)=>{
    return(a+b)
}
console.log(sum(2,3))


//    or



let sum=(a,b)=>(a+b)
console.log(sum(19,7))


//    or

let sum=(a,b)=>a+b
console.log(sum(9,7))






// for reverse array using arraow function


let arr=[1,2,3,4,5]
const reversearr=(arr)=>{
    return arr.reverse()
}

let res=reversearr(arr)
console.log(res)