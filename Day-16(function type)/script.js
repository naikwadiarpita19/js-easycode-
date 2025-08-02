//   anonimus function

// eg., 1]

function a() {
    console.log("hii")
}

a()

//  or

let hii=function() {
    console.log("hello")
}

hii()

//  or

let hello=function(abc) {
    console.log("hello")
}

hello(abc)


//   eg.,2

function p(){
    return ("hii")
}

let result = p()
console.log(result)

//   eg., 3

let isevenorodd=function(number){
    number%2==0?"even":"odd"
}

isevenorodd()

//     or


let isevenorodd1=function(number){
    if(number%2==0){
        return("even")
    }else{
        return("odd")
    }
}

let answer=isevenorodd1(10)
console.log(answer)





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

let sum1=(a,b)=>{
    return(a+b)
}
console.log(sum1(2,3))


//    or



let add=(a,b)=>(a+b)
console.log(add(19,7))


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