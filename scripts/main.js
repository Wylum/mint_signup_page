var validateEmail = function (input) {
  'use strict';
//  var re = /^[^\s@]+@[^\s@]+$/;
//  return re.test(inputVal);
  return input.checkValidity();
};

var validateEmailConfirmation = function(inputVal) {
  'use strict';
  return inputVal === document.getElementById('email').value;
};

var validatePassword = function(inputVal) {
  "use strict";
  
};
var inputSwtichboard = function (input) {
  'use strict';

  switch (input.id) {
    case 'email':
      return validateEmail(input);
    case 'confirm-email':
      return validateEmailConfirmation(input.value);
    case 'country':
      if (input.value === 'United States') {
        console.log("change field to 'zip'");
      } else if (input.value === 'Canada') {
        console.log("change field to 'postal code'");
      } else {
        console.log("redirect to appropriate page");
      }
    case 'postal-code':
      return "postal code valid?";
    case 'password':
      console.log(input.checkValidity());
      return "password valid?";
    case 'password-confirm':
      return "password confirmation valid?";
    case 'terms-of-use':
      return "terms of use valid?";
  }
};


var validateInput = function (input) {
  'use strict';
  if (input.value) {
    return inputSwtichboard(input);
  }

  return "empty input";
};

var init = function () {
  'use strict';
  var signupInputs = document.querySelectorAll("#signup input, #signup select");
  var signupLength = signupInputs.length;

  for (var i = 0; i < signupLength; i++) {
    signupInputs[i].addEventListener('focus', function () {

    }, true);

    signupInputs[i].addEventListener('blur', function () {
      console.log(validateInput(this));
    }, true);
  }
};

window.onload = init;