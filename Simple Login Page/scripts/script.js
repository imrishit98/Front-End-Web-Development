let theLogin = document.getElementById('loginForm');
let theSignUp = document.getElementById('signUpForm');

const signUp = () => {
  theLogin.style.display = 'none';
  theSignUp.style.display = 'flex';
};

const logIn = () => {
  theSignUp.style.display = 'none';
  theLogin.style.display = 'flex';
};
