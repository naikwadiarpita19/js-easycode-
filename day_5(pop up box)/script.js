// pop up box

//  1] alert box

alert("hii")
alert("how are you ?")


// 2] prompt box

prompt("enter ypur name :")

let username=prompt("enter your name : ")
console.log(username)

let num1=prompt("1st no : ")
let num2=prompt("2nd no : ")
console.log(num1+num2)


// value in prompt box is by default is string this string type value converted into integer use a 
//   parseInt/number

let str=prompt("enter your name")
let num=parseInt(str)



// 3] confirm box

confirm("Are you sure ? ")

let result=confirm("are you sure ?")
console.log(result)