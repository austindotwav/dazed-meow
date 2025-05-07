// this is an application to allow animations for my faq boxes. it is currently unimplemented
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('open');
    });
});