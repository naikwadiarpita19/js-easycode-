
let UserName=document.getElementById("UserName");
let email=document.getElementById("email");
let password=document.getElementById("password");
let button=document.getElementById("btn");
let form=document.getElementById("form");
let errorcontainer=document.getElementById("error")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let UserName=UserName.value;
    let email=email.value;
    let password=password.value;
    console.log

    if(UserName.length <=4){
        errorcontainer.style.display = "block"
        errorcontainer.innerText= `user must be greater than 4 letters`
        errorcontainer.style.color = "red"

    }else if(!email.includes("@") || !email.includes(".")){
      errorcontainer.style.display = "block"
        errorcontainer.innerText= `select valid email`
        errorcontainer.style.color = "red"  

    }else if(password.length<6){
       errorcontainer.style.display = "block"
        errorcontainer.innerText= `password must be greater than 6 letters`
        errorcontainer.style.color = "red"

    }else{
        errorcontainer.style.display = "none"
    } 
    
}

)