/* 5 - Kata 'Verificador de senhas': Crie uma função Verify() 
que retorne false para os casos listados no repositório 
e true caso contrário. Não é necessário fazer os itens 
extras (2, 3 e 4) do repositório.

Add the following verifications to a master function called “Verify()”
password should be larger than 8 chars
password should not be null
password should have one uppercase letter at least
password should have one lowercase letter at least
password should have one number at least  */

const assert = require('assert');

const verify = (password) => {
  const arrayPassword = password.split('');
  const sortArray = arrayPassword.sort();
  const newPassword = sortArray.join('');
  const numbersArray = parseInt(newPassword);
  const justStrings = newPassword.replace(numbersArray, '');
  let hasUpper = false;
  let hasLower = false;
  if (password != null && arrayPassword.length > 8 && numbersArray != null) {
    for (let index = 0; index < justStrings.length ; index += 1) {
      if (justStrings[index] === justStrings[index].toUpperCase()) {
        hasUpper = true;
      } else if (justStrings[index] === justStrings[index].toLowerCase()) {
        hasLower = true;
      }
    }
  }
  if (hasUpper == true && hasLower == true && numbersArray != null) {
    return true;
  }
}

const password = '1bbbbbbb464654Aa';
assert.strictEqual(verify(password), true);
