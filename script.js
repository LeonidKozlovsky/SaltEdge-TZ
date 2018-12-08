let image_1 = document.getElementById('image_1');
let image_2 = document.getElementById('image_2');
let image_3 = document.getElementById('image_3');
let content_image_1 = document.getElementById('image-1');
let content_image_2 = document.getElementById('image-2');
let content_image_3 = document.getElementById('image-3');
let wrapper = document.getElementById('wrapper');

let hamburger_menu = document.getElementById('hamburger_menu');
let mobile_menu = document.getElementById('mobile_menu');

//swap default image to image_1
image_1.onmouseover = function() {
    content_image_1.classList.add('show');
    content_image_1.style.animation = 'glow-green 0.5s ease-in-out infinite alternate';
    setTimeout(function() { wrapper.style.overflow = "unset"; }, 1000);
}
image_1.onmouseout = function() {
    content_image_1.classList.remove('show');
    content_image_1.style.animation = '';
    wrapper.style.overflow = 'hidden';
}
//swap default image to image_2
image_2.onmouseover = function() {
    content_image_2.classList.add('show');
    content_image_2.style.animation = 'glow-blue 0.5s ease-in-out infinite alternate';
    setTimeout(function() { wrapper.style.overflow = "unset"; }, 1000);
}
image_2.onmouseout = function() {
    content_image_2.style.rotateX = "(360deg)";
    content_image_2.style.transition = "all 1s ease-in-out";
    content_image_2.classList.remove('show');
    content_image_2.style.animation = '';
    wrapper.style.overflow = 'hidden';
}
//swap default image to image_3
image_3.onmouseover = function() {
    content_image_3.classList.add('show');
    content_image_3.style.animation = 'glow-red 0.5s ease-in-out infinite alternate';
    setTimeout(function() { wrapper.style.overflow = "unset"; }, 1000);
}
image_3.onmouseout = function() {
    wrapper.style.overflow = 'hidden';
    content_image_3.style.transform = "scale(1)";
    content_image_3.style.transition = "all 1s ease-in-out";
    content_image_3.classList.remove('show');
    content_image_3.style.animation = '';
    setTimeout(function() { content_image_3.style.transform = ""; }, 1000);
}

//hamburger menu toogler
hamburger_menu.onclick = function() {
    hamburger_menu.classList.toggle('change');
    document.body.classList.toggle('blocked');
}