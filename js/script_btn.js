window.addEventListener('DOMContentLoaded', () => {
    const flow_menu = document.querySelector('.flow_menu'),
    flow_menu_items = document.querySelector('.flow_menu_items'),
    menu = document.querySelectorAll('.menu');

    menu.forEach(item => {
        item.addEventListener('click', () => {
            flow_menu.classList.toggle('flow_menu_active');
            flow_menu_items.classList.toggle('flow_menu_items_active');
        })
    })
})