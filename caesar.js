const passwordToEncrypt = document.querySelector('.password__input');
const passwordEncrypted = document.querySelector('.new-password__value');
const encryptButton = document.querySelector('.cipher-btn');
const newPasswordValue = document.querySelector('.new-password__value');
let password = '';


const caesar13 = (input) => {

    if (typeof input !== 'string' || input.length === 0) {
      return 'Podany argument nie jest ciągiem znaków lub jest pusty.';
    }
  
    const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      let shiftedChar = char;
      let alphabet;
      
      if (alphabetLowerCase.includes(char)) {
        alphabet = alphabetLowerCase;
      } else if (alphabetUpperCase.includes(char)) {
        alphabet = alphabetUpperCase;
      }
      
      if (alphabet) {
        const index = alphabet.indexOf(char);
        const shiftedIndex = (index + 13) % alphabet.length;
        shiftedChar = alphabet[shiftedIndex];
      }
      
      result += shiftedChar;
    }
    
    passwordEncrypted.textContent = result
    
  };
  
  
  
  encryptButton.addEventListener('click', () => {
    caesar13(password);
  })
  
  passwordToEncrypt.addEventListener('input', event => {
    password = event.target.value
  })

  function animateNewPassword() {
    newPasswordValue.classList.add('animate');
    setTimeout(function() {
      // Po zakończeniu animacji usuń klasę animacji
      newPasswordValue.classList.remove('animate');
    }, 1000); 
  }