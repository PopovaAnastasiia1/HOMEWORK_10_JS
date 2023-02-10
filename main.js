const tabs= document.querySelector(".tabs");

tabs.addEventListener("click",function(event){
const data = event.target.dataset.tab;
document.querySelectorAll(".active").forEach(e => e.classList.remove("active"));
document.querySelector(`[data-content = ${data}]`).classList.add("active");
event.target.classList.add("active");
})




