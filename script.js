// Menu Mobile Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Efeito de rolagem no cabeçalho
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contador numérico para o Dashboard
const metricValues = document.querySelectorAll('.metric-value');
let animated = false;

function runCounters() {
    metricValues.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString();
                clearInterval(timer);
            } else {
                el.innerText = target % 1 !== 0 ? current.toFixed(1) : Math.floor(current).toLocaleString();
            }
        }, 30);
    });
}

// Observer para disparar o contador quando visível
const dashboardSection = document.getElementById('dashboard');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            runCounters();
            animated = true;
        }
    });
}, { threshold: 0.3 });

if (dashboardSection) {
    observer.observe(dashboardSection);
}

// Seletor de período do Dashboard (interativo)
const controlBtns = document.querySelectorAll('.control-btn');
const chartBars = document.querySelectorAll('.bar');

const mockData = {
    '24h': [65, 40, 85, 95, 70, 90, 75],
    '7d': [50, 70, 60, 80, 95, 85, 90],
    '30d': [75, 85, 90, 60, 70, 95, 88]
};

controlBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        controlBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const period = e.target.getAttribute('data-period');
        const data = mockData[period];
        
        chartBars.forEach((bar, index) => {
            bar.style.height = data[index] + '%';
        });
    });
});

// Seleção automática do serviço no formulário
function selectService(serviceName) {
    const select = document.getElementById('serviceType');
    if (select) {
        select.value = serviceName;
    }
}

// Acordeão do FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

// Envio do Formulário -> Redirecionamento Inteligente para WhatsApp
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const serviceType = document.getElementById('serviceType').value;
        const description = document.getElementById('description').value;

        const message = `*Nova Solicitação de Orçamento - Site*\n\n` +
                        `*Nome:* ${name}\n` +
                        `*E-mail:* ${email}\n` +
                        `*WhatsApp:* ${whatsapp || 'Não informado'}\n` +
                        `*Serviço:* ${serviceType}\n` +
                        `*Descrição:* ${description}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/5563991386476?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

// Ano atual automático no rodapé
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
