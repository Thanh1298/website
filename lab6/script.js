// This can be used for adding interactive features if needed
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.category.active').classList.remove('active');
        button.classList.add('active');
    });
});
