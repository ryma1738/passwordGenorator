// Assignment code here
var lowerCase = false;
var upperCase = false;
var specialChar = false;
var includeNum = false;

function generatePassword(){
  
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
