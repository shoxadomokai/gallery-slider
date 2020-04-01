var number = Math.round((Math.random() * 300));
number *= Math.random() < 0.5 ? 1 : -1; 
var number2 = Math.round(number * Math.random());

function animation1() {
    anime({targets: ['h1, p, .details-btn'], translateX: [number, 0], opacity: [0,1], easing: 'easeInOutQuad', delay: function(el, i) { return i * 100} })
} 

function animation2() { 
    anime({targets: ['h1, p, .details-btn'], translateY: [number, 0], opacity: [0,1], easing: 'easeInOutQuad', delay: function(el, i) { return i * 100} })
} 
    

if (Math.random() < 0.5) {
    animation1();
} else {
    animation2();
}


$('.gallery-nav').click(function(){
      if (Math.random() < 0.5) {    
        anime({
            targets: '.gallery-image',
            translateY: [number2, 0],
            opacity: [0,1],
            easing: 'easeInOutQuad',
            delay: function(el, i) { return i * 100}
        });
    } else {
        anime({
            targets: '.gallery-image',
            translateX: [number2, 0],
            opacity: [0,1],
            easing: 'easeInOutQuad',
            delay: function(el, i) { return i * 100}
        });    
        }                 

});
