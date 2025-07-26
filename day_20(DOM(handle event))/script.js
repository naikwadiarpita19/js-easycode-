
let btn = document.getElementById("container")

let isdarkTheame = true

btn.addEventListener("click" , () => {
    if(isdarkTheame){
        document.body.style.backgroundColor = "white"
        isdarkTheame = false
    }else{
        document.body.style.backgroundColor = "black"
        isdarkTheame = true
    }
})
