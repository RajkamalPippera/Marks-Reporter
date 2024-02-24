let btn = document.querySelector("button")
let marks;
btn.addEventListener("click",()=>{
    marks = document.querySelector("#inputvalue").value
    if(marks>=35){
        document.querySelector("h1").textContent = `${" 🎉Congratulations You are Pass😍"}`
        document.querySelector("h1").style.backgroundColor = "green"
    }
    else if(marks<35){
        document.querySelector("h1").textContent = `${" Fail😞"}`
        document.querySelector("h1").style.backgroundColor = "red"
    }
    if(marks == ""){
        document.querySelector("h1").textContent = alert("Please enter marks 😊")
        document.querySelector("h1").style.backgroundColor = "white"
    }
    if(marks <0){
        document.querySelector("h1").textContent = `Invaild input try again`
    }
})
let reset = document.querySelector(".resetbtn")
reset.addEventListener("click",()=>{
    document.querySelector("#inputvalue").value = ""
    document.querySelector("h1").textContent = ""
})
