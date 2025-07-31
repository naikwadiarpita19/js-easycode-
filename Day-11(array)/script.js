// Array

//  create simple array and print its element

let a=[1,2,3,4,5]
console.log(a)

let b=['a','b','c','d','e']
console.log(b)


// array me multiple datatype ke element le sakte hai 
//   eg.,

let c=[1,'a','@',"aru",5]
console.log(c)


// kisibi array ka kisibi index ka element print karne ke liye
//   console.log(arrayname[array index])
//   eg.,

console.log(a[0])

console.log(b[3])

console.log(c[2])


//   for find no. of elements give in given array
//   console.log(arrayname.length)
//   eg.,

console.log(a.length)
console.log(b.length)
console.log(c.length)


//  print array element using for loop

let day=["sunday","monday","tuesday","wednesday","thuresday","friday","satuarday"]
for( let i=0;i<=7;i++){
    console.log(day[i])
}


// when we dont know length of array then take condition in for loop i<=arrayname.length
//   eg.,

let colours=["red","pink","yellow","purple","white","black","gray","green","brown","orange","blue","gold"]
for(let i=0;i<=colours.length;i++){
    console.log(colours[i])
}


//  push  &  pop

// push = add 1 element in array in the last position
//   eg.,

let subject=["english","math","c language","electronics"]
console.log(subject)
subject.push("OE")
console.log(subject)


//  pop = remove 1 last element in array
//  eg.,

let flower=["rose","mogra","lily","hibiscus"]
console.log(flower)
flower.pop()
console.log(flower)