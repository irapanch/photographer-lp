export const form = () => {
  const TOKEN = '6601245170:AAHgGq7563Eg190N1_9ueIMCcCwmxa3nfv4';
  const CHAT_ID = '-1002038976037';
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const sendMessageToTelegram = message => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })
      .then(res => res.json())

      .catch(err => console.error(err));
  };

  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';

    document.querySelector('#contact-us').reset();
  }

  function serializeForm(formNode) {
    const formData = new FormData(formNode);

    let message = 'Заявка з сайту: \n';

    for (let data of formData.entries()) {
      const [label, value] = data;
      message += `${label}: ${value} \n`;
    }

    sendMessageToTelegram(message);

    // Close modal and clear form
    closeModal();
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    serializeForm(e.target);
  }

  const applicantForm = document.querySelector('#contact-us');

  if (applicantForm) {
    applicantForm.addEventListener('submit', handleFormSubmit);
  } else {
    console.error('Form not found');
  }
};
