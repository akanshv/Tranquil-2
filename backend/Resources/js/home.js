const ham = document.getElementById('ham');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (ham) {
    ham.addEventListener('click',() => {
        nav.style.right="0px";
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.style.right="-500px";
    })
}