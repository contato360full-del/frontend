const menuToggle = document.querySelector('#menuToggle');
const navMenu = document.querySelector('#navMenu');
const introOverlay = document.querySelector('#introOverlay');
const whatsappFloat = document.querySelector('#whatsappFloat');
const contactForm = document.querySelector('#contactForm');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const accordionItems = document.querySelectorAll('.accordion__item');

const toggleMenu = () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open');
};

menuToggle.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
  }
});

const revealOnScroll = () => {
  const targets = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  targets.forEach((target) => observer.observe(target));
};

const cycleTestimonials = () => {
  let index = 0;
  const slide = () => {
    testimonialCards.forEach((card, current) => {
      card.classList.toggle('active', current === index);
    });
    index = (index + 1) % testimonialCards.length;
  };
  slide();
  setInterval(slide, 5200);
};

const setupAccordion = () => {
  accordionItems.forEach((item) => {
    const button = item.querySelector('.accordion__button');
    button.addEventListener('click', () => {
      accordionItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });
};

const openWhatsApp = (event) => {
  event.preventDefault();
  const clinicPhone = '5511999999999';
  const name = document.querySelector('#inputName').value.trim();
  const phone = document.querySelector('#inputPhone').value.trim();
  const specialty = document.querySelector('#inputSpecialty').value;
  const message = document.querySelector('#inputMessage').value.trim();

  if (!name || !phone || !specialty) {
    alert('Por favor, preencha nome, telefone e especialidade para continuar.');
    return;
  }

  const text = `Olá, meu nome é ${name}. Gostaria de agendar uma consulta para ${specialty}. Meu telefone é ${phone}. ${message ? `Detalhes: ${message}` : ''}`;
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${clinicPhone}?text=${encoded}`;
  window.open(url, '_blank');
};

contactForm.addEventListener('submit', openWhatsApp);

whatsappFloat.addEventListener('click', () => {
  window.open('https://wa.me/5511999999999?text=Olá,+gostaria+de+agendar+uma+consulta.', '_blank');
});

const hideIntro = () => {
  introOverlay.classList.add('hidden');
};

window.addEventListener('load', () => {
  revealOnScroll();
  cycleTestimonials();
  setupAccordion();
  setTimeout(hideIntro, 4000);
});
