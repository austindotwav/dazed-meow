// this is an application to allow animations for my faq boxes. it is currently unimplemented
const questions = document.querySelectorAll('.question');

questions.forEach(q => {
    q.addEventListener('click', () => {
        q.classList.toggle('active');
    });
});