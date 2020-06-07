// Assignment code here
function generatePassword() {
  var passwordLength = getPasswordLength();
  //special characters
  var specialCharacters = window.confirm ("Click OK to confirm including special characters.");
  
  // NumericCharacters();
  var numbericCharacters = window.confirm ("Click OK to confirm including numeric characters");

  // LowercaseCharacters();
  var lowerCaseCharacters = window.confirm ("Click OK to confirm including lowercase characters");

  // UppercaseCharacters();
  var upperCaseCharacters = window.confirm ("Click OK to confirm including uppercase characters.");


  if (!specialCharacters && !numbericCharacters && !lowerCaseCharacters && !upperCaseCharacters) {
  window.alert("Password must contain at least one of these characters.");
  }
 
  var character = [];
    if (lowerCaseCharacters) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
      character = character.concat(lowerCase);
    }

    if (upperCaseCharacters) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      character = character.concat(upperCase);
    }

   if (specialCharacters) {
      var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
      character = character.concat(specialChar);
    }

    if (numbericCharacters) {
      var numbers = "0123456789".split("");
      character = character.concat(numbers); 
    }

var finalPassword = "";
for (i=0; i<passwordLength; i++) {
finalPassword = finalPassword.concat (character[Math.floor(Math.random()*character.length)]);
}

return finalPassword
}

// ‘How many characters would you like your password to contain?'
function getPasswordLength() {
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be between 8 and 128 characters")
    getPasswordLength()
  } 
  return passwordLength
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
