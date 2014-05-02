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

var inputSwtichboard = function (input, inputVal) {
  'use strict';
  switch (input.getAttribute("id")) {
    case 'email':
      return validateEmail(input);
    case 'confirm-email':
      return validateEmailConfirmation(inputVal);
    case 'country':
      return "country is valid?";
    case 'postal-code':
      return "postal code valid?";
    case 'password':
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
  var signupInputs = document.querySelectorAll("#signup input");
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