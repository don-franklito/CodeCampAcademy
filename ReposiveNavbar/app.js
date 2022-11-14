const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', function () {
    /* console.info(links.classList); */
    /* console.info(links.classList.contains('random')); */
    /* console.info(links.classList.contains('links')); */

    /* if ( links.classList.contains('show-links') ) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    } */

    links.classList.toggle('show-links');
});

