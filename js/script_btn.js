window.addEventListener('DOMContentLoaded', () => {
    const slide_menu = document.querySelector('.slide_menu'),
    slide_menu_item = document.querySelector('.slide_menu_item'),
    header_menu = document.querySelectorAll('.header_menu');

    header_menu.forEach(item => {
        item.addEventListener('click', () => {
            slide_menu.classList.toggle('slide_menu_active');
            slide_menu_item.classList.toggle('slide_menu_item_active');
        })
    })
})