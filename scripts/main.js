// Validation Logic
var humanize = function (inputVal) {
  "use strict";
  switch(inputVal) {
    case 'confirm-email':
      return ' email confirmation';
    case 'confirm-password':
      return ' password confirmation';
    case 'postal-code':
      return ' postal code';
    default:
      return inputVal;
  }
};

var validateEmail = function (input) {
  'use strict';
//  var re = /^[^\s@]+@[^\s@]+$/;
//  return re.test(inputVal);
  return input.checkValidity();
};

var validateConfirmation = function(inputVal, confirmAgainst) {
  'use strict';

  return inputVal === document.getElementById(confirmAgainst).value;
};

var validatePassword = function(inputVal) {
  "use strict";
  var validPasswordRe = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#\$%&\?]).{8,}/;
  return validPasswordRe.test(inputVal);

};

var validateTermsOfUse = function(input) {
  "use strict";
  return input.checked;
};


//Style-applying functions
var applyStatusStyles = function(input, isValid, message) {
  var errorMessageElement;
  if (isValid) {
      input.parentNode.className += " valid-field";
    } else {
      errorMessageElement = document.querySelector("." + input.id + " .error-message");
      errorMessageElement.textContent = message;
      errorMessageElement.className += " visible";
      input.parentNode.className += " invalid-field";
    }
};

var inputSwtichboard = function (input) {
  'use strict';

  switch (input.id) {
    case 'email':
      applyStatusStyles(input, validateEmail(input), "Please use a valid Email Address");
      break;
    case 'confirm-email':
      applyStatusStyles(input,
        validateConfirmation(input.value, "email"), "This does not match the email entered above.");
      break;
    case 'country':
      if (input.value === 'United States') {
        console.log("change field to 'zip'");
      } else if (input.value === 'Canada') {
        console.log("change field to 'postal code'");
      } else {
        console.log("redirect to appropriate page");
      }
      break;
    case 'postal-code':
      return "postal code valid?";
    case 'password':
      applyStatusStyles(input, validatePassword(input.value),
        "Password must be 8 or more characters, contain an uppercase letter, a lowercase letter and a symbol.");
      break;
    case 'confirm-password':
      applyStatusStyles(input,
        validateConfirmation(input.value, "password"), "This does not match the password entered above");
      break;
    case 'terms-of-use':
      return validateTermsOfUse(input);
  }
};


var validateInput = function (input) {
  'use strict';
  if (input.value) {
    inputSwtichboard(input);
  } else {
    applyStatusStyles(input, false, "Please enter your " + humanize(input.id) + ".");
  }
};

var init = function () {
  'use strict';
  var signupInputs = document.querySelectorAll(".signup input, .signup select");
  var signupLength = signupInputs.length;

  for (var i = 0; i < signupLength; i++) {
    signupInputs[i].addEventListener('focus', function () {
      this.parentNode.className = this.parentNode.className.replace(/(in)?valid-field/, "").trim();
      var errorMessageElement = document.querySelector("." + this.id + " .error-message");
      errorMessageElement.className = errorMessageElement.className.replace("visible", '').trim();
    }, true);

    signupInputs[i].addEventListener('blur', function () {
      validateInput(this);
    }, true);
  }
};

window.onload = init;