//  for add element on 0 index

let a=[1,2,3,4,5]
console.log(a)
a.unshift(0)
console.log(a)


// for remove element on 0 index

let b=[5,6,7,8]
b.shift()
console.log(b)


//  for show remove element

let c=['a','b','c','d','e']
let d=c.pop()
console.log(d)


// splice

// for remove element on any particular index

let a=[1,2,3,4,5]
a.splice(1,2)
console.log(a)

// for add element  on any particular index

let b=[5,6,7,8,9,3]
b.splice(2,0,10)
console.log(b)


// sort    = for sorting element in given array

let x=[6,3,5,9,1,7,4,8]
a.sort()
console.log(a)



//   for get 2nd biggest no. in given array element

let p=[60,4,5,30,80,50,1,32,6]
numbers.sort()
console.log(numbers[numbers.length-2])



// in given element  check index of any element

let r=[7,8,4,5,3,1,9]
let res=r.indexOf('5')
console.log(res)