const hamburguerBotao = document.querySelector("#hamburguerBotao")
const fecharBotao = document.querySelector("#fecharBotao")
const mobileMenu = document.querySelector("#mobileMenu")

hamburguerBotao.addEventListener("click",function(){
    mobileMenu.classList.add("flex")
});

fecharBotao.addEventListener("click",function(){
    mobileMenu.classList.remove("flex")
});