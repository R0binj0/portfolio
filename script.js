var string = "Welcome to my portfolio! My name is Robin Pruunlep.";
var str = string.split("");
var tt = document.getElementById('typedtext');

var string2 = "I'm a junior developer who is passionate about the power of programming to transform our world. From simple websites to complex applications, software has the ability to solve real-world problems and create value for its users in ways that were previously unimaginable.";
var str2 = string2.split("");
var tt2 = document.getElementById('typedtext2');

const sliderList = document.querySelector('.list');
const projects = Array.from(document.querySelectorAll('.project'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const slideWidth = sliderList.offsetWidth / 3;
const maxIndex = Math.ceil(projects.length / 2) - 1;

function typing() {

    str.length > 0 ? tt.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(typing, 30);

};

function typing2() {

    str2.length > 0 ? tt2.innerHTML += str2.shift() : clearTimeout(running2); 
    var running2 = setTimeout(typing2, 25);

};

function updateSlider() {
    sliderList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function handlePrevClick() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
}

function handleNextClick() {
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSlider();
}

var pyt = function(){
	document.querySelector(".python").className = "python1";
};

var css = function(){
	document.querySelector(".css").className = "css1";
};

var html = function(){
    document.querySelector(".html").className = "html1";	
};

var jav = function(){
    document.querySelector(".javascript").className = "javascript1";	
};

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var first_inside = document.querySelector('.first_inside');
    var second_inside = document.querySelector('.paralax');
    var blur = scrolled * 0.005;

    first_inside.style.filter = "blur(" + blur + "px)";
    first_inside.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    second_inside.style.transform = 'translateY(' + scrolled * -0.2 + 'px)';
});

const themes = {
    light: {
        "--main-color":"#FFFFFF",
        "--scroll-color":"#F5F5F5",
        "--text-color":"#333333",
        "--shade-color":"#E0E0E0",
        "--button-color":"#007AFF",
        "--other-color":"#007AFF",
    },
    dark: {
        "--main-color":"#212121",
        "--scroll-color":"#303030",
        "--text-color":"#FFFFFF",
        "--shade-color":"#424242",
        "--button-color":"#FF5722;",
        "--other-color":"#F44336",
    },
};

document.querySelectorAll('.color-button').forEach(el => {
    el.addEventListener('click', () => {
      const themeName = el.dataset.theme;
      if (themes.hasOwnProperty(themeName)) {
        const theme = themes[themeName];
        for (const variable in theme) {
          if (theme.hasOwnProperty(variable)) {
            document.documentElement.style.setProperty(variable, theme[variable]);
          }
        }
      }
    });
});

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);

setTimeout(typing,1000);
setTimeout(typing2,2800);

setTimeout(html,2000);
setTimeout(css,4000);
setTimeout(jav,6000);
setTimeout(pyt,7000);