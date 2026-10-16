
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // PRIMETECH SOLUTIONS
    // Menu, serviços, imagens e formulário
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

    // DEZ SERVIÇOS OFICIAIS
    // Os arquivos de imagem devem ficar na mesma pasta
    // do index.html e usar os nomes abaixo.

    const servicos = [
        {
            titulo: 'Desenvolvimento de Sites',
            imagem: 'servico-01.jpg',
            descricao: 'Sites modernos, responsivos e profissionais para destacar sua empresa na internet.'
        },
        {
            titulo: 'Landing Pages',
            imagem: 'servico-02.jpg',
            descricao: 'Páginas estratégicas para apresentar ofertas, captar contatos e gerar oportunidades.'
        },
        {
            titulo: 'Lojas Virtuais',
            imagem: 'servico-03.jpg',
            descricao: 'Lojas online para apresentar produtos e facilitar as vendas pela internet.'
        },
        {
            titulo: 'Cardápios Digitais',
            imagem: 'servico-04.jpg',
            descricao: 'Cardápios digitais modernos para restaurantes, lanchonetes e outros negócios.'
        },
        {
            titulo: 'Sistemas e Aplicações Personalizadas',
            imagem: 'servico-05.jpg',
            descricao: 'Soluções digitais desenvolvidas para as necessidades e os processos da sua empresa.'
        },
        {
            titulo: 'Gestão de Instagram',
            imagem: 'servico-06.jpg',
            descricao: 'Organização e planejamento de conteúdo para fortalecer a presença da sua marca.'
        },
        {
            titulo: 'Gestão de Redes Sociais',
            imagem: 'servico-07.jpg',
            descricao: 'Planejamento de publicações para manter sua empresa presente nas redes sociais.'
        },
        {
            titulo: 'Design para Redes Sociais',
            imagem: 'servico-08.jpg',
            descricao: 'Artes digitais profissionais para divulgar seus produtos, serviços e promoções.'
        },
        {
            titulo: 'Automação e Integrações',
            imagem: 'servico-09.jpg',
            descricao: 'Integração de ferramentas e automação de tarefas para otimizar processos.'
        },
        {
            titulo: 'Suporte Técnico e Infraestrutura',
            imagem: 'servico-10.jpg',
            descricao: 'Suporte em informática, manutenção, redes e infraestrutura de TI.'
        }
    ];

    // CRIA OS CARTÕES DOS DEZ SERVIÇOS
    const gradeServicos = document.querySelector(
        '#solucoes .solutions-grid'
    );

    if (gradeServicos) {
        gradeServicos.replaceChildren();

        servicos.forEach((servico, indice) => {
            const card = document.createElement('article');
            card.className = 'service-card';

            const areaImagem = document.createElement('div');
            areaImagem.className = 'service-img';

            const img = document.createElement('img');
            img.src = servico.imagem;
            img.alt = servico.titulo;
            img.loading = indice < 3 ? 'eager' : 'lazy';
            img.decoding = 'async';

            // Alternativa visual caso o arquivo não seja encontrado
            img.addEventListener('error', () => {
                img.remove();

                if (!areaImagem.querySelector('.image-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'image-fallback';
                    fallback.textContent = servico.titulo;

                    Object.assign(fallback.style, {
                        width: '100%',
                        height: '100%',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '20px',
                        color: '#00ffff',
                        fontWeight: '600',
                        background:
                            'radial-gradient(circle at center, #172c38, #0b0c10)'
                    });

                    areaImagem.appendChild(fallback);
                }
            });

            areaImagem.appendChild(img);

            const corpo = document.createElement('div');
            corpo.className = 'service-body';

            const titulo = document.createElement('h3');
            titulo.textContent = servico.titulo;

            const descricao = document.createElement('p');
            descricao.textContent = servico.descricao;

            const link = document.createElement('a');
            link.className = 'service-link';
            link.href = '#contato';
            link.textContent = 'Solicitar orçamento →';

            corpo.append(titulo, descricao, link);
            card.append(areaImagem, corpo);
            gradeServicos.appendChild(card);
        });
    }

    // ATUALIZA O TÍTULO DA SEÇÃO
    const secaoSolucoes = document.getElementById('solucoes');

    if (secaoSolucoes) {
        const tituloSecao = secaoSolucoes.querySelector('.section-title');

        if (tituloSecao) {
            tituloSecao.textContent = 'Nossas 10 Soluções Profissionais';
        }
    }

    // ATUALIZA AS OPÇÕES DO FORMULÁRIO
    const seletorServico = document.getElementById('service');

    if (seletorServico) {
        const valorAnterior = seletorServico.value;

        seletorServico.replaceChildren();

        const opcaoInicial = document.createElement('option');
        opcaoInicial.value = '';
        opcaoInicial.textContent = 'Selecione um serviço';
        opcaoInicial.disabled = true;
        opcaoInicial.selected = true;
        seletorServico.appendChild(opcaoInicial);

        servicos.forEach(servico => {
            const opcao = document.createElement('option');
            opcao.value = servico.titulo;
            opcao.textContent = servico.titulo;
            seletorServico.appendChild(opcao);
        });

        if (servicos.some(s => s.titulo === valorAnterior)) {
            seletorServico.value = valorAnterior;
        }
    }

    // FORMULÁRIO PARA WHATSAPP
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', event => {
            event.preventDefault();

            const name = document.getElementById('name')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const phone = document.getElementById('phone')?.value.trim() || '';
            const service = document.getElementById('service')?.value || '';
            const message = document.getElementById('message')?.value.trim() || '';

            if (!name || !phone || !service || !message) {
                alert('Preencha os campos obrigatórios antes de continuar.');
                return;
            }

            const targetNumber = '5563991386476';

            const text =
                `Olá, meu nome é *${name}*.\n` +
                `E-mail: ${email}\n` +
                `Telefone: ${phone}\n\n` +
                `Tenho interesse em: *${service}*.\n\n` +
                `Detalhes do projeto:\n${message}`;

            const whatsappUrl =
                `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // ANO AUTOMÁTICO NO RODAPÉ
    const yearSpan = document.getElementById('current-year');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
