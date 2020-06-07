// Assignment code here
function generatePassword() {
  var passwordLength = getPasswordLength();
  console.log(passwordLength);

  //special characters
  var specialCharacters = window.confirm ("Click OK to confirm including special characters.");
  console.log("special chars", specialCharacters);
  
  // NumericCharacters();
  var numbericCharacters = window.confirm ("Click OK to confirm including numeric characters");
  console.log("numeric", numbericCharacters);

  // LowercaseCharacters();
  var lowerCaseCharacters = window.confirm ("Click OK to confirm including lowercase characters");
  console.log("lower case", lowerCaseCharacters);

  // UppercaseCharacters();
  var upperCaseCharacters = window.confirm ("Click OK to confirm including uppercase characters.");
  console.log("upper case", upperCaseCharacters);


  if (!specialCharacters && !numbericCharacters && !lowerCaseCharacters && !upperCaseCharacters) {
  window.alert("Password must contain at least one of these characters.");
  }
  /*
  
  ['A', '$']
  ['ABDCE', '$^#*&$^*#&', '1287125681726']
  
  */
  var character = [];
    if (lowerCaseCharacters) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
       console.log(lowerCase);
       character = character.concat(lowerCase);
      console.log("character", character);  
    }

    if (upperCaseCharacters) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      console.log(upperCase);
      character = character.concat(upperCase);
      console.log("character", character);  
    }

   if (specialCharacters) {
      var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
      console.log(specialChar);
      character = character.concat(specialChar);
      console.log("character", character);  
    }

    if (numbericCharacters) {
      var numbers = "0123456789".split("");
      console.log(numbers);
      character = character.concat(numbers);
      console.log("character", character);  
    }

var finalPassword = "";
for (i=0; i<=passwordLength; i++) {
finalPassword = finalPassword.concat (character[Math.floor(Math.random()*character.length)]);
}
console.log("final password", finalPassword);

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
