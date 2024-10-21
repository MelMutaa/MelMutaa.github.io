// units.js
document.addEventListener('DOMContentLoaded', function () {
    const unitItems = document.querySelectorAll('.unit-item');

    unitItems.forEach(item => {
        const header = item.querySelector('.unit-header');
        const content = item.querySelector('.unit-content');
        const toggleButton = item.querySelector('.toggle-button');
        const icon = toggleButton.querySelector('i');

        // Initialize the content display based on its current state
        if (content.style.display === 'flex') {
            content.style.display = 'flex';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            content.style.display = 'none';
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        header.addEventListener('click', function () {
            const isOpen = content.style.display === 'flex';

            if (!isOpen) {
                content.style.display = 'flex';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                content.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});

