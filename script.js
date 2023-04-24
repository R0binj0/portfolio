var string = "Welcome to my portfolio! My name is Robin Pruunlep.";
var str = string.split("");
var tt = document.getElementById('typedtext');

var string2 = "I'm a junior developer who is passionate about the power of programming to transform our world. From simple websites to complex applications, software has the ability to solve real-world problems and create value for its users in ways that were previously unimaginable.";
var str2 = string2.split("");
var tt2 = document.getElementById('typedtext2');

function delay(func, delayTime) {
    setTimeout(func, delayTime);
};

function typing() {

    str.length > 0 ? tt.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(typing, 30);

};

function typing2() {

    str2.length > 0 ? tt2.innerHTML += str2.shift() : clearTimeout(running2); 
    var running2 = setTimeout(typing2, 25);

};

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var first_inside = document.querySelector('.first_inside');
    var second_inside = document.querySelector('.second_inside');
    var blur = scrolled * 0.1;

    first_inside.style.filter = "blur(" + blur + "px)";
    first_inside.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    second_inside.style.transform = 'translateY(' + scrolled * -0.2 + 'px)';
});

delay(function() {typing()}, 1000);
delay(function() {typing2()}, 2800);
