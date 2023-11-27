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

// Generate password
function generatePassword() {
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // Get the password length from the user:
  let passwordLength;
  do {
    // Prompt the user for their input (and cast as a number)
    passwordLength = +prompt("Choose a password length (enter a number between 8 and 128):");
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

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
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

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
}