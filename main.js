document.querySelector('.btn__show-menu').addEventListener('click', function () {
    this.classList.toggle('show');
    console.log(this)
    document.querySelector('.header__nav').classList.toggle('show');
    document.querySelector('.header').classList.toggle('show');
})