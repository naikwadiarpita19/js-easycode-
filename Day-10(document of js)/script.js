// for show title of html file

let a=document.title
console.log(a)


// for change title 

document.title="Document of js"


//for add content in body tag of html file

document.write("we learn javascript")



let n1=parseInt(prompt("enter no. :"))
document.title="table of"+n1
for(let i=1;i<=10;i++){
    let table=i*n1
    console.log(table)
}


let n2=parseInt(prompt("enter no. :"))
document.title="table of"+n2
for(let i=1;i<=10;i++){
    let table2=i*n1
    document.write(table2)
}


let n3=parseInt(prompt("enter no. :"))
document.title="table of"+n3
for(let i=1;i<=10;i++){
    let table=i*n3
    document.write("<h3>"+table3+"</h3>")
}



// string concatnation

let a="arpita"
console.log("hello"+a)


let b="arpita"
let c="naikwdi"
console.log(`hello ${b} ${c}`)


//

for(let i=0;i<=10;i++){
    console.log(`i is : ${i}`)
}