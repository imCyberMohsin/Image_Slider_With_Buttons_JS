//* Image Slider Script 

document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "image1",
        "image2",
        "image3",
        "image4"
    ];

    const buttons = document.querySelectorAll('.btn');
    const imgDiv = document.querySelector('.image_container');

    let counter = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (button.classList.contains('left-btn')) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgDiv.style.background = `url('./img/${pictures[counter]}.jpg')`;
                imgDiv.style.backgroundSize = 'cover';
            }

            if (button.classList.contains('right-btn')) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDiv.style.background = `url('./img/${pictures[counter]}.jpg')`;
                imgDiv.style.backgroundSize = 'cover';

            }
        });
    });
});