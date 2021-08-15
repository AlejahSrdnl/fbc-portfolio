const navBarIcon = document.querySelector('.navBarIcon');
const sideBar = document.querySelector('.sideBar');
navBarIcon.addEventListener('click', ()=> {
    sideBar.classList.toggle('hide');
})