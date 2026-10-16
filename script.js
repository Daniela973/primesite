
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const WHATSAPP = "5563991386476";
    const EMAIL = "primetech130790@gmail.com";

    // As 20 imagens devem estar na mesma pasta do index.html.
    const servicos = [
        { nome: "Criação de Sites", descricao: "Sites modernos, responsivos e profissionais para sua empresa.", imagem: "1792162007681.jpg" },
        { nome: "Lojas Virtuais", descricao: "Venda seus produtos pela internet com uma loja profissional.", imagem: "1792162017691.jpg" },
        { nome: "Aplicativos Personalizados", descricao: "Aplicações desenvolvidas para as necessidades do seu negócio.", imagem: "1792162053519.jpg" },
        { nome: "Sistemas de Gestão", descricao: "Organize processos, informações e tarefas da sua empresa.", imagem: "1792162272737.jpg" },
        { nome: "Automação de Processos", descricao: "Automatize tarefas repetitivas e economize tempo.", imagem: "1792162280443.jpg" },
        { nome: "Inteligência Artificial", descricao: "Soluções inteligentes para aumentar a produtividade.", imagem: "1792162602240.jpg" },
        { nome: "Chatbots e Atendimento", descricao: "Facilite o atendimento e automatize respostas.", imagem: "1792162651987.jpg" },
        { nome: "Integração de APIs", descricao: "Conecte sistemas e automatize a troca de informações.", imagem: "1792162764701.jpg" },
        { nome: "Cardápio Digital", descricao: "Apresente seus produtos em um cardápio digital moderno.", imagem: "1792167095658.jpg" },
        { nome: "Catálogo Digital", descricao: "Mostre seus produtos e serviços de forma profissional.", imagem: "1792167195079.jpg" },
        { nome: "Landing Pages", descricao: "Páginas para divulgar ofertas e captar clientes.", imagem: "1792167335495.jpg" },
        { nome: "Marketing Digital", descricao: "Fortaleça a presença da sua marca na internet.", imagem: "1792167795344.jpg" },
        { nome: "Gestão de Redes Sociais", descricao: "Profissionalize a comunicação da sua empresa.", imagem: "1792169632461.jpg" },
        { nome: "Design para Empresas", descricao: "Materiais visuais alinhados à identidade da sua marca.", imagem: "1792182622449.jpg" },
        { nome: "Manutenção de Computadores", descricao: "Diagnóstico, manutenção e otimização de computadores.", imagem: "1792182734345.jpg" },
        { nome: "Suporte Técnico", descricao: "Ajuda técnica para resolver problemas de informática.", imagem: "1792182790344.jpg" },
        { nome: "Redes e Infraestrutura", descricao: "Soluções de conectividade e infraestrutura de TI.", imagem: "1792182844507.jpg" },
        { nome: "Segurança Digital", descricao: "Proteção de sistemas, dispositivos e informações.", imagem: "1792182905872.jpg" },
        { nome: "Consultoria em Tecnologia", descricao: "Orientação para escolher as melhores tecnologias.", imagem: "1792183189504.jpg" },
        { nome: "Projetos Digitais Personalizados", descricao: "Soluções digitais sob medida para sua ideia.", imagem: "file_000000000e48820e864837fb986cca30.png" }
    ];

    const estilo = document.createElement("style");
    estilo.textContent = `
        #solucoes .solutions-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 24px !important;
            align-items: stretch !important;
        }

        #solucoes .service-card {
            display: flex !important;
            flex-direction: column !important;
            min-width: 0 !important;
            overflow: hidden !important;
            border: 1px solid rgba(0,210,255,.2) !important;
            border-radius: 16px !important;
            background: #12141a !important;
            transition: transform .25s ease, border-color .25s ease,
                        box-shadow .25s ease !important;
        }

        #solucoes .service-card:hover {
            transform: translateY(-5px);
            border-color: #00d2ff !important;
            box-shadow: 0 10px 30px rgba(0,210,255,.12) !important;
        }

        #solucoes .service-img {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 1 / 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
            padding: 10px !important;
            box-sizing: border-box !important;
            background: #0b0c10 !important;
        }

        #solucoes .service-img img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
        }

        #solucoes .service-body {
            display: flex !important;
            flex-direction: column !important;
            flex: 1 !important;
            gap: 12px !important;
            padding: 20px !important;
        }

        #solucoes .service-body h3 {
            color: #fff !important;
            margin: 0 !important;
        }

        #solucoes .service-body p {
            color: #b8c5d1 !important;
            line-height: 1.6 !important;
            margin: 0 0 8px !important;
        }

        .orcamento-whatsapp {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 9px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            margin-top: auto !important;
            padding: 12px !important;
            border: 0 !important;
            border-radius: 8px !important;
            background: linear-gradient(100deg,#00d2ff,#3a7bd5) !important;
            color: #071018 !important;
            font-weight: 700 !important;
            text-align: center !important;
            text-decoration: none !important;
            cursor: pointer !important;
        }

        .orcamento-whatsapp:hover {
            filter: brightness(1.12);
        }

        .orcamento-whatsapp svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }

        /* Esconde apenas o quadro de código da seção Tecnologia */
        #tecnologia .tech-visual {
            display: none !important;
        }

        footer h3, footer h4, footer .footer-title {
            color: #fff !important;
        }

        footer p, footer li,
        footer a:not(.footer-contact-button) {
            color: #00d2ff;
        }

        .footer-contact-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            max-width: 280px !important;
            box-sizing: border-box !important;
            padding: 12px 16px !important;
            margin: 5px 0 !important;
            border: 1px solid rgba(0,210,255,.4) !important;
            border-radius: 8px !important;
            background: #12141a !important;
            color: #00d2ff !important;
            font-weight: 600 !important;
            text-decoration: none !important;
        }

        .footer-contact-button svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }

        .primetech-footer-contacts {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            margin-top: 12px;
        }

        @media (max-width: 900px) {
            #solucoes .solutions-grid {
                grid-template-columns: repeat(2, minmax(0,1fr)) !important;
                gap: 18px !important;
            }
        }

        @media (max-width: 560px) {
            #solucoes .solutions-grid {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
            }

            #solucoes .service-body {
                padding: 16px !important;
            }
        }
    `;
    document.head.appendChild(estilo);

    const iconeWhatsApp = `
        <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
            <path d="M16 .8A15.1 15.1 0 0 0 3.1 23.8L1 31l7.4-1.9A15.1 15.1 0 1 0 16 .8Zm0 27.4c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.4 1.1 1.2-4.3-.3-.5A12.2 12.2 0 1 1 16 28.2Zm6.7-9.1c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 3.9c.2.3 2.7 4.1 6.5 5.7.9.4 1.7.6 2.2.7.9.3 1.8.2 2.5.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5Z"/>
        </svg>`;

    const iconeEmail = `
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"
             stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <path d="m3 7 9 6 9-6"/>
        </svg>`;

    function linkWhatsApp(mensagem) {
        return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    }

    // Menu para celular
    const menuToggle = document.querySelector(
        ".menu-toggle, .hamburger, #menu-toggle"
    );
    const navMenu = document.querySelector(
        ".nav-links, .navigation, #nav-links"
    );

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const aberto = navMenu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(aberto));
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Cria os 20 cartões
    const grade = document.querySelector("#solucoes .solutions-grid");

    if (grade) {
        grade.replaceChildren();

        servicos.forEach((servico, indice) => {
            const cartao = document.createElement("article");
            cartao.className = "service-card";

            const areaImagem = document.createElement("div");
            areaImagem.className = "service-img";

            const imagem = document.createElement("img");
            imagem.src = servico.imagem;
            imagem.alt = servico.nome;
            imagem.loading = indice < 6 ? "eager" : "lazy";
            imagem.decoding = "async";

            imagem.addEventListener("error", () => {
                console.error("Imagem não encontrada:", servico.imagem);
                areaImagem.style.display = "none";
            }, { once: true });

            areaImagem.appendChild(imagem);

            const corpo = document.createElement("div");
            corpo.className = "service-body";

            const titulo = document.createElement("h3");
            titulo.textContent = servico.nome;

            const descricao = document.createElement("p");
            descricao.textContent = servico.descricao;

            const botao = document.createElement("a");
            botao.className = "orcamento-whatsapp";
            botao.href = linkWhatsApp(
                `Olá! Gostaria de solicitar um orçamento para: ${servico.nome}. Poderia me informar os valores e detalhes?`
            );
            botao.target = "_blank";
            botao.rel = "noopener noreferrer";
            botao.innerHTML = `${iconeWhatsApp}<span>Solicitar orçamento</span>`;

            corpo.append(titulo, descricao, botao);
            cartao.append(areaImagem, corpo);
            grade.appendChild(cartao);
        });

        const tituloSecao = document.querySelector(
            "#solucoes h2, #solucoes .section-title"
        );

        if (tituloSecao) {
            tituloSecao.textContent = "Nossas Soluções Profissionais";
        }
    }

    // Atualiza o seletor de serviços do formulário
    const seletor = document.querySelector("#service");

    if (seletor) {
        const inicial = document.createElement("option");
        inicial.value = "";
        inicial.textContent = "Selecione um serviço";
        inicial.disabled = true;
        inicial.selected = true;
        seletor.replaceChildren(inicial);

        servicos.forEach(servico => {
            const opcao = document.createElement("option");
            opcao.value = servico.nome;
            opcao.textContent = servico.nome;
            seletor.appendChild(opcao);
        });

        const outro = document.createElement("option");
        outro.value = "Outro projeto";
        outro.textContent = "Outro projeto";
        seletor.appendChild(outro);
    }

    // Formulário de contato para WhatsApp
    const formulario = document.querySelector("#whatsappForm");

    if (formulario) {
        formulario.addEventListener("submit", evento => {
            evento.preventDefault();

            const nome = document.querySelector("#name")?.value.trim() || "";
            const email = document.querySelector("#email")?.value.trim() || "";
            const telefone = document.querySelector("#phone")?.value.trim() || "";
            const servico = document.querySelector("#service")?.value || "";
            const mensagem = document.querySelector("#message")?.value.trim() || "";

            if (!nome || !servico || !mensagem) {
                alert("Preencha seu nome, escolha um serviço e escreva sua mensagem.");
                return;
            }

            const texto = [
                "Olá! Vim pelo site da PrimeTech Solutions.",
                "",
                `Nome: ${nome}`,
                `E-mail: ${email || "Não informado"}`,
                `Telefone: ${telefone || "Não informado"}`,
                `Serviço: ${servico}`,
                `Mensagem: ${mensagem}`
            ].join("\n");

            window.open(linkWhatsApp(texto), "_blank", "noopener,noreferrer");
        });
    }

    // Botões de contato no rodapé
    const rodape = document.querySelector("footer");

    if (rodape) {
        const tituloContato = Array.from(
            rodape.querySelectorAll("h2, h3, h4")
        ).find(titulo => /contato direto|contato/i.test(titulo.textContent));

        if (tituloContato) {
            const area = tituloContato.parentElement;

            if (area && !area.querySelector(".primetech-footer-contacts")) {
                const contatos = document.createElement("div");
                contatos.className = "primetech-footer-contacts";

                const botaoWhatsApp = document.createElement("a");
                botaoWhatsApp.className = "footer-contact-button";
                botaoWhatsApp.href = linkWhatsApp(
                    "Olá! Gostaria de conhecer os serviços da PrimeTech Solutions."
                );
                botaoWhatsApp.target = "_blank";
                botaoWhatsApp.rel = "noopener noreferrer";
                botaoWhatsApp.innerHTML =
                    `${iconeWhatsApp}<span>Conversar no WhatsApp</span>`;

                const botaoEmail = document.createElement("a");
                botaoEmail.className = "footer-contact-button";
                botaoEmail.href = `mailto:${EMAIL}`;
                botaoEmail.innerHTML =
                    `${iconeEmail}<span>Enviar e-mail</span>`;

                contatos.append(botaoWhatsApp, botaoEmail);
                tituloContato.insertAdjacentElement("afterend", contatos);
            }
        }
    }

    // Ano atual
    const ano = document.querySelector("#current-year");
    if (ano) ano.textContent = new Date().getFullYear();
});
