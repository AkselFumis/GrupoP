document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
