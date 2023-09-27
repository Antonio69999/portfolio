const header = document.querySelector('.navbar');

window.onscroll = function() {   // se declanche lors du scroll
    let top = window.scrollY;   // retourne le nombre de pixel à laquelle le document est scroll
    if(top >=100) {
        header.classList.add('navbarDark');     //si la valeur de top est > à 100 la classe 'navbarDark' est ajouté
    }
    else {
        header.classList.remove('navbarDark');
    }
}

$(document).ready(function() {
    $('.menu-item').click(function() {
        $(this).find('.menu-content').slideToggle();
    });
});