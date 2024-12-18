const form = document.querySelector('form');
const email = document.getElementById('email');

function validEmail(email) {
  const ePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return ePattern.test(email);
}

email.addEventListener('input', (e) => {
  if (validEmail(email.value)) {
    email.setCustomValidity('');
  } else {
    email.setCustomValidity('Please enter a valid email address.');
  }
});
