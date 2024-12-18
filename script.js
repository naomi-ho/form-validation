const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const code = document.getElementById('code');
const password = document.getElementById('password');

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

function validCode(country, code) {
  // most common country postal code patterns
  const cPatterns = {
    US: /^\d{5}(-\d{4})?$/, // 5 digits, optional 4-digit extension
    CA: /^[A-Z]\d[A-Z] \d[A-Z]\d$/, // Canadian postal code format
    UK: /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/,
    DE: /^\d{5}$/, // German 5-digit postal codes
    FR: /^\d{5}$/, // French 5-digit postal codes
    JP: /^\d{3}-\d{4}$/, // Japanese postal code format
    AU: /^\d{4}$/, // Australian 4-digit postal codes
    BR: /^\d{5}-\d{3}$/, // Brazilian postal code format
  };

  // default validation for countries without specific rules
  const defaultCValidation = {
    minLength: 3,
    maxLength: 10,
    allowedChars: /^[A-Za-z0-9\s-]+$/,
  };

  // if country has a specific pattern, use it
  if (cPatterns[country]) {
    return cPatterns[country].test(code);
  }

  // otherwise, use default validation
  return (
    defaultCValidation.allowedChars.test(code) &&
    code.length >= defaultCValidation.minLength &&
    code.length <= defaultCValidation.maxLength
  );
}

code.addEventListener('input', (e) => {
  if (validCode(country.value, code.value)) {
    code.setCustomValidity('');
  } else {
    code.setCustomValidity('Please enter a valid postal/zip code.');
  }
});

function validPassword(password) {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  return (
    lowerCaseLetters.test(password) &&
    upperCaseLetters.test(password) &&
    numbers.test(password) &&
    password.length >= 8
  );
}

password.addEventListener('input', (e) => {
  if (validPassword(password.value)) {
    password.setCustomValidity('');
  } else {
    password.setCustomValidity(
      'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.',
    );
  }
});
