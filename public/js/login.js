const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/activities');
    } else {
      document.getElementById('pw-fail').classList.remove('d-none');

      document.getElementById('pw-fail').classList.add('bg-warning', 'p-2', 'm-2', 'text-center');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);