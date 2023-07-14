const list = document.querySelector('.list-group');

//delete item
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.closest('.list-group-item').remove();
    }
});

//search item
