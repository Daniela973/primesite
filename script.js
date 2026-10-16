
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // PRIMETECH SOLUTIONS
    // ==========================================

    // MENU MOBILE
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // DEZ SERVIÇOS E NOMES REAIS DAS IMAGENS
    const servicos = [
        {
            titulo: 'Desenvolvimento de Sites',
            imagem: '1792162007681.jpg',
            descricao: 'Sites modernos, responsivos e profissionais para sua empresa.'
        },
        {
            titulo: 'Landing Pages',
            imagem: '1792162017691.jpg',
            descricao: 'Páginas estratégicas para divulgar ofertas e conquistar clientes.'
        },
        {
            titulo: 'Lojas Virtuais',
            imagem: '1792162053519.jpg',
            descricao: 'Lojas virtuais para apresentar produtos e vender pela internet.'
        },
        {
            titulo: 'Cardápios Digitais',
            imagem: '1792162272737.jpg',
            descricao: 'Cardápios digitais modernos para restaurantes e outros negócios.'
        },
        {
            titulo: 'Sistemas e Aplicações Personalizadas',
            imagem: '1792162280443.jpg',
            descricao: 'Soluções digitais desenvolvidas para as necessidades da sua empresa.'
        },
        {
            titulo: 'Gestão de Instagram',
            imagem: '1792162602240.jpg',
            descricao: 'Planejamento de conteúdo para fortalecer a presença da sua marca.'
        },
        {
            titulo: 'Gestão de Redes Sociais',
            imagem: '1792162651987.jpg',
            descricao: 'Planejamento de publicações para as redes sociais da sua empresa.'
        },
        {
            titulo: 'Design para Redes Sociais',
            imagem: '1792162764701.jpg',
            descricao: 'Artes profissionais para divulgar produtos e serviços.'
        },
        {
            titulo: 'Automação e Integrações',
            imagem: '1792167095658.jpg',
            descricao: 'Automação de tarefas e integração entre ferramentas digitais.'
        },
        {
            titulo: 'Suporte Técnico e Infraestrutura',
            imagem: '1792167195079.jpg',
            descricao: 'Suporte em informática, manutenção de computadores e redes.'
        }
    ];

    // ATUALIZA OS DEZ CARTÕES EXISTENTES
    const grade = document.querySelector('#solucoes .solutions-grid');

    if (grade) {
        const cartoes = Array.from(
            grade.querySelectorAll('.service-card')
        );

        cartoes.forEach((cartao, indice) => {
            // Remove os cartões excedentes
            if (indice >= servicos.length) {
                cartao.remove();
                return;
            }

            const servico = servicos[indice];

            const titulo = cartao.querySelector('h3');
            const descricao = cartao.querySelector('p');
            const imagem = cartao.querySelector('.service-img img');
            const link = cartao.querySelector('.service-link');

            if (titulo) {
                titulo.textContent = servico.titulo;
            }

            if (descricao) {
                descricao.textContent = servico.descricao;
            }

            if (imagem) {
                imagem.src = servico.imagem;
                imagem.alt = servico.titulo;
                imagem.loading = indice < 3 ? 'eager' : 'lazy';

                imagem.onerror = function () {
                    console.error(
                        'Imagem não encontrada no repositório:',
                        servico.imagem
                    );
                };
            }

            if (link) {
                link.href = '#contato';
                link.textContent = 'Solicitar orçamento →';
            }
        });

        // Atualiza o título da seção
        const tituloSecao = document.querySelector(
            '#solucoes .section-title'
        );

        if (tituloSecao) {
            tituloSecao.textContent = 'Nossas 10 Soluções Profissionais';
        }
    }

    // ATUALIZA AS OPÇÕES DO FORMULÁRIO
    const seletor = document.getElementById('service');

    if (seletor) {
        seletor.replaceChildren();

        const opcaoInicial = document.createElement('option');
        opcaoInicial.value = '';
        opcaoInicial.textContent = 'Selecione um serviço';
        opcaoInicial.disabled = true;
        opcaoInicial.selected = true;

        seletor.appendChild(opcaoInicial);

        servicos.forEach(servico => {
            const opcao = document.createElement('option');
            opcao.value = servico.titulo;
            opcao.textContent = servico.titulo;
            seletor.appendChild(opcao);
        });
    }

    // FORMULÁRIO DO WHATSAPP
    const formulario = document.getElementById('whatsappForm');

    if (formulario) {
        formulario.addEventListener('submit', event => {
            event.preventDefault();

            const nome =
                document.getElementById('name')?.value.trim() || '';

            const email =
                document.getElementById('email')?.value.trim() || '';

            const telefone =
                document.getElementById('phone')?.value.trim() || '';

            const servico =
                document.getElementById('service')?.value || '';

            const mensagem =
                document.getElementById('message')?.value.trim() || '';

            if (!nome || !telefone || !servico || !mensagem) {
                alert(
                    'Preencha seu nome, telefone, serviço e detalhes do projeto.'
                );
                return;
            }

            const numeroWhatsApp = '5563991386476';

            const texto =
                `Olá, meu nome é ${nome}.\n` +
                `E-mail: ${email}\n` +
                `Telefone: ${telefone}\n\n` +
                `Tenho interesse em: ${servico}.\n\n` +
                `Detalhes do projeto:\n${mensagem}`;

            const url =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank', 'noopener,noreferrer');
        });
    }

    // ANO AUTOMÁTICO NO RODAPÉ
    const ano = document.getElementById('current-year');

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
});
