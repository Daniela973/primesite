
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // PRIMETECH SOLUTIONS
    // Script principal
    // ==========================================

    // 1. MENU MOBILE
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

    // 2. DEZ SERVIÇOS DA PRIMETECH
    const servicos = [
        {
            titulo: 'Desenvolvimento de Sites',
            descricao: 'Sites modernos, responsivos e profissionais para sua empresa.'
        },
        {
            titulo: 'Landing Pages',
            descricao: 'Páginas estratégicas para divulgar ofertas e conquistar clientes.'
        },
        {
            titulo: 'Lojas Virtuais',
            descricao: 'Lojas online profissionais para apresentar produtos e vender pela internet.'
        },
        {
            titulo: 'Cardápios Digitais',
            descricao: 'Cardápios digitais modernos para restaurantes e outros negócios.'
        },
        {
            titulo: 'Sistemas e Aplicações Personalizadas',
            descricao: 'Sistemas desenvolvidos para facilitar a gestão e os processos da sua empresa.'
        },
        {
            titulo: 'Gestão de Instagram',
            descricao: 'Planejamento e organização de conteúdo para fortalecer sua marca.'
        },
        {
            titulo: 'Gestão de Redes Sociais',
            descricao: 'Organização de publicações para manter sua empresa presente nas redes.'
        },
        {
            titulo: 'Design para Redes Sociais',
            descricao: 'Artes profissionais para divulgar seus serviços, produtos e promoções.'
        },
        {
            titulo: 'Automação e Integrações',
            descricao: 'Automação de tarefas e integração entre ferramentas digitais.'
        },
        {
            titulo: 'Suporte Técnico e Infraestrutura',
            descricao: 'Suporte em informática, manutenção de computadores, redes e infraestrutura.'
        }
    ];

    // 3. APROVEITA AS IMAGENS QUE JÁ ESTÃO NO HTML
    const grade = document.querySelector('#solucoes .solutions-grid');

    if (grade) {
        const cartoes = Array.from(
            grade.querySelectorAll('.service-card')
        );

        cartoes.forEach((cartao, indice) => {
            if (indice >= servicos.length) {
                cartao.remove();
                return;
            }

            const servico = servicos[indice];
            const titulo = cartao.querySelector('h3');
            const descricao = cartao.querySelector('p');

            if (titulo) {
                titulo.textContent = servico.titulo;
            }

            if (descricao) {
                descricao.textContent = servico.descricao;
            }

            // Mantém o endereço original da imagem no HTML.
            // Não renomeia nem troca os arquivos de imagem.

            let link = cartao.querySelector('.service-link');

            if (!link) {
                link = document.createElement('a');
                link.className = 'service-link';
                cartao.querySelector('.service-body')?.appendChild(link);
            }

            if (link) {
                link.href = '#contato';
                link.textContent = 'Solicitar orçamento →';
            }
        });

        // Atualiza o título da seção sem alterar o restante.
        const tituloSecao = document.querySelector(
            '#solucoes .section-title'
        );

        if (tituloSecao) {
            tituloSecao.textContent = 'Nossas 10 Soluções Profissionais';
        }
    }

    // 4. ATUALIZA AS OPÇÕES DO FORMULÁRIO
    const seletor = document.getElementById('service');

    if (seletor) {
        const valorAnterior = seletor.value;

        seletor.replaceChildren();

        const inicial = document.createElement('option');
        inicial.value = '';
        inicial.textContent = 'Selecione um serviço';
        inicial.disabled = true;
        inicial.selected = true;
        seletor.appendChild(inicial);

        servicos.forEach(servico => {
            const opcao = document.createElement('option');
            opcao.value = servico.titulo;
            opcao.textContent = servico.titulo;
            seletor.appendChild(opcao);
        });

        const opcaoAnteriorExiste = servicos.some(
            servico => servico.titulo === valorAnterior
        );

        if (opcaoAnteriorExiste) {
            seletor.value = valorAnterior;
        }
    }

    // 5. FORMULÁRIO DE ORÇAMENTO PELO WHATSAPP
    const formulario = document.getElementById('whatsappForm');

    if (formulario) {
        formulario.addEventListener('submit', event => {
            event.preventDefault();

            const campoNome = document.getElementById('name');
            const campoEmail = document.getElementById('email');
            const campoTelefone = document.getElementById('phone');
            const campoServico = document.getElementById('service');
            const campoMensagem = document.getElementById('message');

            const nome = campoNome?.value.trim() || '';
            const email = campoEmail?.value.trim() || '';
            const telefone = campoTelefone?.value.trim() || '';
            const servico = campoServico?.value || '';
            const mensagem = campoMensagem?.value.trim() || '';

            if (!nome || !telefone || !servico || !mensagem) {
                alert(
                    'Preencha seu nome, telefone, serviço desejado e detalhes do projeto.'
                );
                return;
            }

            const numeroWhatsApp = '5563991386476';

            const texto =
                `Olá! Meu nome é ${nome}.\n` +
                `E-mail: ${email}\n` +
                `Telefone: ${telefone}\n\n` +
                `Serviço desejado: ${servico}\n\n` +
                `Detalhes do projeto:\n${mensagem}`;

            const url =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank', 'noopener,noreferrer');
        });
    }

    // 6. ANO AUTOMÁTICO NO RODAPÉ
    const ano = document.getElementById('current-year');

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
});
