// For typing effect in home section
let text = "And I am a Frontend Developer.";
let i = 0;
let speed = 50;

function typingText() {
    if (i < text.length) {
        document.getElementById('dev').innerHTML += text.charAt(i);
        i++;
        setTimeout(typingText, speed);
    }
}
typingText()


// For hamburger menu
let sidemenu = document.querySelector('#sidemenu')
let burger = document.querySelector('.burger');
let xmark = document.querySelector('.xmark');

burger.addEventListener('click', (e) => {
    sidemenu.style.right = '0';
})

xmark.addEventListener('click', (e) => {
    sidemenu.style.right = '-160px';
})

