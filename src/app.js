// Hamburger

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}
hamburgerButton.addEventListener('click', toggleButton)

// Scroll progress

const scrollProgressElement = document.querySelector("#scroll-progress");

function scrollProgress() {
const totalheightofWebPage = document.body.scrollHeight;
const currentDistanceFromTop = document.documentElement.scrollTop;

const windowHeight = document.documentElement.clientHeight;

const scrolledPercentage = (currentDistanceFromTop / (totalheightofWebPage - windowHeight)) * 100;

scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";

}


document.addEventListener('scroll', scrollProgress);