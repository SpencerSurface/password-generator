// Constants
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMERIC = "0123456789"
const SPECIAL = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"   /* as listed at https://owasp.org/www-community/password-special-characters */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user input
function generatePassword() {
  // Get the password length from the user:
  let passwordLength;
  do {
    // Prompt the user for their input (and cast as a number)
    passwordLength = prompt("Choose a password length (enter a number between 8 and 128):");
    // Check if the user hit the 'cancel' button
    if (passwordLength === null) {
      // If so, exit
      return ""
    } else {
      // Else, cast the passwordLength to a number
      passwordLength = +passwordLength;
    }
    // Inform the user if there is a problem with their input
    if (Number.isNaN(passwordLength)) {
      alert("Please enter a number.");
    } else if (!Number.isInteger(passwordLength)) {
      alert("Please enter a whole number.");
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.");
    }
    // Keep prompting until the user gives an appropriate value
  } while (Number.isNaN(passwordLength) || !Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128);



  // Get character type preferences from user:
  let includeLower;
  let includeUpper;
  let includeNumeric;
  let includeSpecial;
  do {
    // Confirm with the user which character types should be used
    includeLower = confirm("Include lowercase letters");
    includeUpper = confirm("Include uppercase letters");
    includeNumeric = confirm("Include numbers");
    includeSpecial = confirm("Include special characters");
    // Inform the user if there is a problem with their input
    if (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
      alert("You must select at least one character type");
    }
    // Keep prompting until the user selects at least one character type
  } while (!(includeLower || includeUpper || includeNumeric || includeSpecial));



  // Generate and return a password based on user input:
  let generatedPassword = "";
  let characterPalette = "";

  // Add the user-selected character types to the character palette
  characterPalette = includeLower ? characterPalette + LOWERCASE : characterPalette;
  characterPalette = includeUpper ? characterPalette + UPPERCASE : characterPalette;
  characterPalette = includeNumeric ? characterPalette + NUMERIC : characterPalette;
  characterPalette = includeSpecial ? characterPalette + SPECIAL : characterPalette;

  // Pick random characters from the character palette and add them to the generated password until length is satisfied
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword = generatedPassword + characterPalette.charAt(Math.floor(Math.random() * characterPalette.length));
  }

  return generatedPassword;
}
