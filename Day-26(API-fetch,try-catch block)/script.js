//    1st  eg of API call

async function loadData(){
    let responce = await fetch("https://api.practice-snowy.vercel.app/songs");
    let data = await responce.json()
    console.log(data)
}

loadData()

//   or

 let loadData1 = async ()=>{
    let responce1 = await fetch("https://api.practice-snowy.vercel.app/songs");
    let dataa = await responce1.json()
    console.log(dataa)
}

loadData()


//   2nd eg of APL call

let loadUerGithub = async()=>{
    let result=await fetch("https://api.github.com/users/naikwadiarpita19");
    let data1=await result.json()
    console.log(data1)
}
loadUserGithub()



//   or
//   using try catch block

let loadUerGithub1 = async()=>{
    try{
    let result1=await fetch("https://api.github.com/users/naikwadiarpita19");
    let data2=await result1.json()
    console.log(data2)
}catch(error){
    console.log(error)
}
}
loadUserGithub1()
