const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuToggle && navLinks) {
    const icon = menuToggle.querySelector('i');
    menuToggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', open);
        icon.classList.toggle('fa-bars', !open);
        icon.classList.toggle('fa-xmark', open);
    });

    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }));
}

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim() || 'que bom ter você aqui';
    const feedback = document.querySelector('#form-feedback');
    if (feedback) feedback.textContent = `Obrigada, ${name}! Vamos chamar você para confirmar o melhor horário.`;
    event.currentTarget.reset();
});