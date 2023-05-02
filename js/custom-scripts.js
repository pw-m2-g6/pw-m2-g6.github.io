//control of the dark mode features off the website pages
function toggle_light_mode(){
    let color_scheme = document.getElementById("color-scheme");

    if(color_scheme.classList.contains("fa-sun")){
        document.body.className = "dark-mode";

        const elements = document.querySelectorAll('.light-mode');
        elements.forEach(element => {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        });

        color_scheme.classList.remove("fa-sun");
        color_scheme.classList.add("fa-moon");
    }else{
        document.body.className = "light-mode";

        const elements = document.querySelectorAll('.dark-mode');
        elements.forEach(element => {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        });

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

var links = document.querySelectorAll('.categorias ul li a');
links.forEach(function (element) {
  element.addEventListener('click', function () {
    links.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
  });
});