let btnd = document.querySelector('.btnd')
let body = document.querySelector('body')
let container = document.querySelector('.seaContainer')
let sub = document.querySelector('.submarine__shadow-arcLight')
let btn = document.createElement('button');
btnd.appendChild(btn);
btn.innerText = 'Click Me To Start Again';

sub.addEventListener('click', () => {
    setTimeout(() => {
        container.style.display = 'none';
    }, 1000)

})

btn.addEventListener('click', () => {
    setTimeout(() => {
        container.style.display = 'block'
    }, 1500)
})

