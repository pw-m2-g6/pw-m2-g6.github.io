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

// Dealing with Textarea Height
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }
  
  let textarea = document.querySelector(".resize-ta");
  textarea.addEventListener("keyup", () => {
    textarea.style.height = calcHeight(textarea.value) + "px";
  });
