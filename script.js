const input = document.querySelector("input");
const sayac = document.getElementById("sayac");
const btn = document.querySelector("button");

input.addEventListener("keyup", () => {
    if (input.value.length > 15){
        sayac.innerHTML = "15 karakterden fazla giriş yapamazsınız";
        input.setAttribute("disabled", true);
        sayac.style.color = "red";
        sayac.style.fontSize = "1.5rem";
        input.style.borderColor = "red";
    }else{
        sayac.innerHTML = input.value.length;
        sayac.style.color = "green";
    }
});

btn.addEventListener("click", () => {
    input.value = "";
    sayac.innerHTML = 0;
    input.style.borderColor = "black";
    input.removeAttribute("disabled", true);
    sayac.style.fontSize = "5rem";
})