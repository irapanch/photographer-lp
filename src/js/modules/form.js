export const form = () => {
  const TOKEN = '6601245170:AAHgGq7563Eg190N1_9ueIMCcCwmxa3nfv4';
  const CHAT_ID = '-1002038976037';
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const form = document.querySelector('form');

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
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  function serializeForm(formNode) {
    const formData = new FormData(formNode);

    let message = 'Заявка з сайту: \n';

    for (let data of formData.entries()) {
      const [label, value] = data;
      message += `${label}: ${value} \n`;
    }

    // console.log(message);

    sendMessageToTelegram(message);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(event.target);
  }

  const applicantForm = document.getElementById('contact-us');
  applicantForm.addEventListener('submit', handleFormSubmit);
};
