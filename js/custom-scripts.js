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
    animation_duration = document.getElementById("page-top").style.animationDuration;
    animation_duration = '0';
    toggle_light_mode();
    animation_duration = '0.8';
}

