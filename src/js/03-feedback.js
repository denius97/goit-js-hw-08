const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  try {
    const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
    feedbackForm.email.value = storageData.email;
    feedbackForm.message.value = storageData.message;
  } catch (err) {
    console.log('Error local storage parse', err);
  }
}

feedbackForm.addEventListener(
  'input',
  throttle(
    () =>
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({
          email: feedbackForm.email.value,
          message: feedbackForm.message.value,
        })
      ),
    500
  )
);

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({
    email: evt.target.email.value,
    message: evt.target.message.value,
  });
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
});
