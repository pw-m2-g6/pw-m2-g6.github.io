function toggle_light_mode(){
    let color_scheme = document.getElementById("color-scheme");

    if(color_scheme.classList.contains("fa-sun")){
        document.body.className = "dark-mode";
        color_scheme.classList.remove("fa-sun");
        color_scheme.classList.add("fa-moon");
    }else{
        document.body.className = "light-mode";
        color_scheme.classList.remove("fa-moon");
        color_scheme.classList.add("fa-sun");
    }
}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    let temp = document.body.style.transitionDuration;
    document.body.style.transitionDuration = '0s';
    toggle_light_mode();

    setTimeout(function() {
        document.body.style.transitionDuration = temp;
    }, 10);
}

// Auto-resize da input textbox de texto
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}