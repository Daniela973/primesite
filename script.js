document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Formulário integrado ao WhatsApp Oficial
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            const targetNumber = "5563991386476";

            const text = `Olá, meu nome é *${name}* (E-mail: ${email} | Tel: ${phone}).\nTenho interesse em: *${service}*.\n\nDetalhes do projeto:\n${message}`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // Atualização automática do Ano no Rodapé
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
