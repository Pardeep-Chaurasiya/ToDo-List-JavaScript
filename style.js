let btn = document.querySelector(".button")
btn.addEventListener("click",()=>{
let li = document.createElement("li");
let input = document.querySelector(".item").value;
li.innerText = input;
console.log(input)
let list = document.querySelector(".list");
list.appendChild(li)
document.querySelector(".item").value = "";
})
