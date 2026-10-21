
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

  document.querySelectorAll('.property-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.property-tab').forEach(t => t.classList.remove('active'));
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

const consultationAck =
  document.querySelector('#consultationAck');

const smsConsent =
  document.querySelector('#smsConsent');

const contactSubmit =
  document.querySelector('#contactSubmit');

const contactPhone =
  document.querySelector('#contactPhone');

const consentTimestamp =
  document.querySelector('#consentTimestamp');


function updateContactConsent() {

  if (!consultationAck || !contactSubmit) {
    return;
  }

  contactSubmit.disabled = !consultationAck.checked;
}


function updateSmsPhoneRequirement() {

  if (!smsConsent || !contactPhone) {
    return;
  }

  /*
   * Phone is required only when the consumer
   * specifically elects to receive SMS.
   */
  contactPhone.required = smsConsent.checked;

  if (!smsConsent.checked) {
    contactPhone.setCustomValidity('');
  }
}


if (consultationAck) {

  consultationAck.addEventListener(
    'change',
    updateContactConsent
  );

}


if (smsConsent) {

  smsConsent.addEventListener(
    'change',
    updateSmsPhoneRequirement
  );

}


if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (consentTimestamp) {
      consentTimestamp.value = new Date().toISOString();
    }

    if (contactSubmit) {
      contactSubmit.disabled = true;
      contactSubmit.textContent = 'Sending...';
    }

    const formData = new FormData(contactForm);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      if (contactMessage) {
        contactMessage.textContent =
          'Thank you! Your message has been sent successfully. We will contact you shortly.';

        contactMessage.classList.add('success-message');
      }

      contactForm.reset();

      updateContactConsent();
      updateSmsPhoneRequirement();

    } catch (error) {

      if (contactMessage) {
        contactMessage.textContent =
          'We were unable to send your message. Please try again or call us at 786-863-3549.';

        contactMessage.classList.remove('success-message');
      }

    } finally {

      if (contactSubmit) {
        contactSubmit.textContent = 'Send Message';

        if (consultationAck) {
          contactSubmit.disabled = !consultationAck.checked;
        }
      }
    }
  });
}


/* Initialize form state */

updateContactConsent();
updateSmsPhoneRequirement();

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();

// Placeholder Notary link: replace href="#" in index.html with the final Notary URL when ready.
