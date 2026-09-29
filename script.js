\
(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  const propertySearch = document.querySelector('#propertySearch');
  const searchMessage = document.querySelector('#searchMessage');
  if (propertySearch && searchMessage) {
    propertySearch.addEventListener('submit', (e) => {
      e.preventDefault();
      searchMessage.textContent = 'Property search is ready for IDX/MLS integration.';
    });
  }

  const valuationForm = document.querySelector('#valuationForm');
  const valuationMessage = document.querySelector('#valuationMessage');
  if (valuationForm && valuationMessage) {
    valuationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      valuationMessage.textContent = 'Thank you. This form is ready to connect to your CRM, email, or Netlify Forms.';
      valuationForm.reset();
    });
  }

  const contactForm = document.querySelector('#contactForm');
  const contactMessage = document.querySelector('#contactMessage');
  if (contactForm && contactMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactMessage.textContent = 'Thank you. The form is ready to connect to your preferred inbox or CRM.';
      contactForm.reset();
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
