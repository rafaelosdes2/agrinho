// JavaScript para gerenciar as abas
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remover a classe ativa de todas as abas e conteúdos
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Adicionar a classe ativa à aba e conteúdo clicado
        const target = document.querySelector(link.getAttribute('href'));
        link.classList.add('active');
        target.classList.add('active');
    });
});
