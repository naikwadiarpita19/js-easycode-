//   JSON

let user={
    "user_name":"arpita",
    "age":19
}



//  for convert JSON into string

// eg., 1]

let per={
    "uname":"aru",
    "rollno":47
}
let res=JSON.stringify(per)
console.log(res)


//   eg., 2]

let obj={
    "name":"chimu",
    "class":"SyBCS"
}

let result=JSON.stringify(obj)
console.log(result)

//  for convert string into JSON

let object={
    "name":"chimu",
    "class":"SyBCS"
}

let result1=JSON.stringify(object)
console.log(result1)

let res1=JSON.parse(result1)
console.log(res1)


//    localStorage

//   setIteam()

// eg., 1]
localStorage.setItem("islogin",true)

//eg., 2]
localStorage.setItem("user_name","easycode")

//  eg., 3]
localStorage.setitem("lastlogin",Date.Now())

//  eg., 4]
let person={
    pname:"arpita",
    age:19
}
localStorage.setItem("person_info",JSON.stringify(object))



//   getItem()


//  eg., 5]
let ans=localStorage.getItem("islogin")
console.log(ans)


//   for remove item()


//  eg., 1]

localStorage.setItem("islogin1",true)
localStorage.removeItem("islogin1");

//  eg., 2]

localStorage.setItem("u_name","easycode")
localStorage.removeItem("u_name")

// eg., 3]
localStorage.removeItem("person_info")



//   for clear all localStorage