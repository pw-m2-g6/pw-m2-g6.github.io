// loading process of the pictures to the gallery carousels

const names = ['pao','salgados', 'doces', 'biscoitos','compotas_manteigas','veggiecinios'];
const num_imgs = [27, 19, 69, 5, 2, 11];

for(let j = 0; j < 6; j++){
    const carousel = document.getElementById(names[j]);

    for (let i = 2; i <= num_imgs[j]; i++) {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        const img = document.createElement('img');
        img.classList.add('d-block','w-100');
        img.src = `/assets/foods/${names[j]}/${i}.jpg`;
        div.appendChild(img);
        carousel.appendChild(div);
    }
}