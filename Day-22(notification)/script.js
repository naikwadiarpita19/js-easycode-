
let inputText=document.getElementById("notification-input");
let btn=document.getElementById("btn");
let notification=document.querySelector(".notification-body")

const notify={notification_text="dummy text",notification_text=1000}=>{

    notification.innerText=notification_text;
    notification.Style.top="-4%"

    setTimeout(()=>{
        notification.Style.top="-40%"
    }, notification_time)

}

btn.addEventListener("click",()=>{
    let text=inputText.Value
    if(text == " ") {
    notify("please add text",2000)
} else {
notify(text,3000)
inputText.Value=" "
}
})