// eg., 1

let person={
    name:"arpita",
    age:19,
    gender:"female"
}

let res=Object.keys(person)            // only show on output all keys of object
console.log(res)



// for only show on output  all values of object

let a=Object.values(person)
console.log(a)



// for show on output 1 array it include  all key-value pairs

let b=Object.entries(person)
console.log(b)



//eg   .,2


const student={
    name:"arpita",
    std:"SyBCS",
    div:'A',
    roll_no:47
}

console.log(student)

console.log(student.roll_no)      // for show value of key roll no

student=0                       // no key value pair in given object
console.log(student)


Object.freeze(student)      // for not change key value pair directly




//   for off loop    and       for in loop

let arr=['red','green','pink','yelloe','blue']
for(let i=0;i<arr.length;i++)
    console.log(arr[i])


for (let i of arr){               // for off loop
    console.log(i)
}


for(let i in arr){                    // for in loop
    console.log(i)
}





let obj={
name="xyz",
city="shevgaon",
edu:"bcs"
}

console.log(obj)

for(let i in obj){                     // show all keys of object
console.log(i)
}


for(let i in obj){                     // show all values of object
console.log(obj[i])
}


for(let i in object){                              // all keys of object and key-value pairs of object
    console.log(`$(i):$(obj[i])`)
}



console.log(obj['city'])             // value of key city in given object