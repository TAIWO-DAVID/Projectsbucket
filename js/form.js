const signinForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotPwdForm = document.getElementById("forgot_pwd");
const checkSwitch = document.getElementById("checkboxSwitch");
checkSwitch.checked = true; //true;
//checkSwitch.style.display = checkboxSwitch.checked ? "block" : "none";

//login-signup $  signup-login switch
checkSwitch.addEventListener("click", function (e) {
  //console.log("checkbox clicked");
  console.log(this.checked);
  if (this.checked) {
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    forgotPwdForm.style.display = "none";
  } else {
    signinForm.style.display = "block";
    signupForm.style.display = "none";
    forgotPwdForm.style.display = "none";
  }
});

const switchContainer = document.getElementById("conSwitch");
// switchContainer.style.display = "block";

const onSignup = function () {
  // password validation
  function checkPassword() {
    // console.log("getting password checked");
    // pwd.onfocus() = pwdConfirm.blur();
    var pwd_value = pwd.value.trim();
    var pwdconfirmValue = pwdConfirm.value.trim();
    const regPwd = /^[A-Za-z0-9]+$/;

    if (
      !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      !(
        pwdconfirmValue === "" ||
        pwdconfirmValue === null ||
        pwdconfirmValue === undefined
      ) &&
      pwd_value !== pwdconfirmValue
    ) {
      console.log("reaching ...");
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Password doesn't match";
    } else if (
      !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      !(
        pwdconfirmValue === "" ||
        pwdconfirmValue === null ||
        pwdconfirmValue === undefined
      ) &&
      pwd_value === pwdconfirmValue
    ) {
      console.log("reaching ...");
      pwdConfirm.classList.remove("error");
      pwdConfirm.classList.add("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "";
    } else if (pwdconfirmValue.length > 0 && pwd_value.length < 1) {
      console.log("pwd is empty and confirmpwd isn't says checkpwd");
      // pwdConfirmError.innerHTML = "Must";
      pwdConfirm.value = "";
      pwdConfirm.classList.remove("success");
      pwdConfirm.classList.remove("error");
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdError.style = "font-family: papyrus; font-size: 15px; color : red;";
      pwdError.innerHTML = "Input your password";
    } else if (
      pwd_value === "" ||
      pwd_value === null ||
      pwd_value === undefined
    ) {
      // console.log("Love that. It's checking password input......");
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      pwdError.innerHTML = "Enter a strong password";
    } else if (!pwd_value.match(regPwd)) {
      pwd.classList.remove("success");
      pwd.classList.add("error");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;"; // pwdError.innerHTML = "password not strong enough";
      pwdError.innerHTML =
        "must include: <br> 8 + characters including special characters e.g @ _ "; //"character must be 8 and above";
    } else if (pwd_value.match(regPwd)) {
      // console.log("password matches with regex");
      pwd.classList.add("success");
      pwd.classList.remove("error");

      pwdError.innerHTML = "";
      console.log(
        comparePwd() + " that password value is equal to confirmPassword value"
      );
    } else if (
      pwd_value.length > 0 &&
      (pwdconfirmValue === undefined ||
        pwdconfirmValue === null ||
        pwdconfirmValue === "") &&
      pwd_value !== pwdconfirmValue
    ) {
      pwdConfirm.classList.remove("success");
      pwdConfirm.classList.add("error");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "confirm password is empty";
    } else if (pwdconfirmValue !== pwd_value) {
      pwdConfirm.classList.remove("success");
      pwdConfirm.classList.add("error");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Passwords don't match";
      console.log(
        comparePwd() + " that password value is equal to confirmPassword value"
      );
    } else if (pwd_value === pwdconfirmValue) {
      pwdConfirm.click();
      pwdConfirm.classList.add("success");
      pwdConfirm.classList.remove("error");
      console.log(
        comparePwd() + " that password value is equal to confirmPassword value"
      );
    } else {
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdError.innerHTML = "Error, something is wrong!";
    }
    console.log(
      comparePwd() + " that password value is equal to confirmPassword value"
    );
  }

  //firstname validation
  function checkFirstName() {
    // console.log("Got here");
    var first_name_value = firstName.value.trim(); //variable only work within this scope or function; won't work if made a global variable;
    var regfirstName = /^([a-zA-z0-9]+)$/;
    // fNameError.style = "color : lightslategray; font-family: papyrus; font-size: 15px";
    if (
      // trim() should be properly used else can cause error in integration; use with the braces
      first_name_value === "" ||
      first_name_value === null ||
      first_name_value === undefined
    ) {
      firstName.classList.remove("success");
      firstName.classList.add("error");
      fNameError.style =
        "color : lightslategray; font-family: papyrus; font-size: 15px";
      fNameError.innerHTML = "Enter your firstname";
    } else if (!first_name_value.match(regfirstName)) {
      //check for non-match
      firstName.classList.add("error");
      firstName.classList.remove("success");
      fNameError.style = "color : red; font-family: papyrus; font-size: 15px";
      fNameError.innerHTML = "Error! cant't take special characters";
    } else if (first_name_value.length < 3) {
      console.log("firstName value less than 3");
      fNameError.style = "color : red; font-family: papyrus; font-size: 15px";
      firstName.classList.remove("success");
      firstName.classList.add("error");
      fNameError.innerHTML = "Firstname can't be too short ";
    } else if (first_name_value.match(regfirstName)) {
      // check for match
      firstName.classList.add("success");
      firstName.classList.remove("error");
      fNameError.innerHTML = "";
    } else {
      console.log(firstName.value.trim() + " is the first-name error value");
      firstName.classList.remove("success");
      firstName.classList.add("error");
      fNameError.innerHTML = "";
      console.log("moving...");
    }
  }

  //lastname validation
  function checkLastName() {
    var last_name_value = lastName.value.trim();
    var regLastName = /^([a-zA-z0-9]+)$/;
    // var regLastNameMatch = last_name_value.match(regLastName);
    // var regLastNameMatchError = !last_name_value.match(regLastName);
    if (
      //check for any input
      last_name_value === "" ||
      last_name_value === null ||
      last_name_value === undefined
    ) {
      lastName.classList.remove("success");
      lastName.classList.add("error");
      // lNameError.style = "font-family: papyrus; font-size: 15px";
      lNameError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray";
      lNameError.innerHTML = "Enter your lastname";
    } else if (!last_name_value.match(regLastName)) {
      //check for non-match
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.style = "font-family: papyrus; font-size: 15px; color : red";
      lNameError.innerHTML = "Error! cant't take special characters";
    } else if (
      last_name_value.length < 3 /*must not forget to get the input length*/
    ) {
      console.log("lastName value less than 3");
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.style = "font-family: papyrus; font-size: 15px; color : red";
      lNameError.innerHTML = "lastname too short";
    } else if (last_name_value.match(regLastName)) {
      // check for match
      lastName.classList.add("success");
      lastName.classList.remove("error");
      lNameError.innerHTML = "";
    } else {
      console.log(lastName.value.trim() + " is the first-name error value");
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.innerHTML = "Error!";
    }
  }

  //username validation
  function checkUsername() {
    // userName.style.borderColor = "blue";
    var username_value = userName.value.trim();
    const regUsername = /^[a-zA-Z]+[._@]?[a-zA-Z0-9]*$/;
    // const regUnderscore = /^[^ ]*[._]+[^ ]*$/; //new RegExp("_"); check for any underscore
    // const regAlphabet = /^[^ ]*[A-Za-z]{0,1}[^ ]*$/; // check for atleast two letters
    // console.log(regUnderscore.test(username_value));
    // console.log(regAlphabet.test(username_value));
    if (
      username_value === "" ||
      username_value === null ||
      username_value === undefined
    ) {
      // console.log("check for username input.....");
      userName.classList.remove("success");
      userName.classList.add("error");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      userNameError.innerHTML = "Enter your username";
    } else if (
      username_value.length < 3 //must not forget to get the input length
    ) {
      console.log("username value less than 3");

      userName.classList.add("error");
      userName.classList.remove("success");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML = "Username too short";
    } else if (!username_value.match(regUsername)) {
      console.log(
        "Error! username value contain special character other than underscore, period and @"
      );
      userName.classList.remove("success");
      userName.classList.add("error");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML =
        "first char must be letter while digits, underscore and period can also be included"; // used as special character';
    } else if (username_value.match(regUsername)) {
      console.log("username choosen wisely");
      userName.classList.add("success");
      userName.classList.remove("error");
      userNameError.innerHTML = "";
    } else {
      console.log("username value not choosen wisely");
      userName.classList.add("error");
      userName.classList.remove("success");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML = "sorry, choose your username wisely !";
    }
  }

  //email validation
  function checkEmail() {
    var email_value = email.value.trim();
    const regEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/; //this works and the below also works
    //note: regular expressions are always wrapped in between  "/^" and "$/" to show the character to begin and end with
    //var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   //it works also

    if (
      email_value === "" ||
      email_value === null ||
      email_value === undefined
    ) {
      email.classList.remove("success");
      email.classList.add("error");
      emailError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      emailError.innerHTML = "Enter your email";
    } else if (!email_value.match(regEmail)) {
      console.log("email contain special");
      email.classList.remove("success");
      email.classList.add("error");
      emailError.style = "font-family: papyrus; font-size: 15px; color : red;";
      emailError.innerHTML = "Error, invalid email !";
    } else if (email_value.match(regEmail)) {
      console.log("email is valid...");
      email.classList.add("success");
      email.classList.remove("error");
      emailError.innerHTML = "";
    } else {
      console.log("invalid email here...");
      email.classList.remove("success");
      email.classList.add("error");
      emailError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      emailError.innerHTML = "Enter a valid email";
    }
  }

  function comparePwd() {
    // var firstName = "dewale";
    // var lastName = "Adewale";
    var pwd = document.getElementById("_password").innerHTML;
    var pwdConfirm = document.getElementById("passwordConfirm").innerHTML;
    var pwdCompare = pwd.localeCompare(pwdConfirm);
    if (pwdCompare > 0 || pwdCompare < 0) {
      return false;
    } else if (pwdCompare == 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * ONBLUR FUNCTIONS HERE
   */

  //lastname blur
  function LastNameBlur() {
    var last_name_value = lastName.value.trim();
    var regLastName = /^([a-zA-z0-9]+)$/;
    // var regLastNameMatch = last_name_value.match(regLastName);
    // var regLastNameMatchError = !last_name_value.match(regLastName);
    if (
      //check for any input
      last_name_value === "" ||
      last_name_value === null ||
      last_name_value === undefined
    ) {
      lastName.classList.remove("success");
      lastName.classList.remove("error");
      // lNameError.style = "";
      lNameError.innerHTML = "";
    } else if (!last_name_value.match(regLastName)) {
      //check for non-match
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.style = "font-family: papyrus; font-size: 15px; color : red";
      lNameError.innerHTML = "Error! cant't take special characters";
    } else if (
      last_name_value.length < 3 /*must not forget to get the input length*/
    ) {
      console.log("lastName value less than 3");
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.style = "font-family: papyrus; font-size: 15px; color : red";
      lNameError.innerHTML = "lastname too short";
    } else if (last_name_value.match(regLastName)) {
      // check for match
      lastName.classList.add("success");
      lastName.classList.remove("error");
      lNameError.innerHTML = "";
    } else {
      console.log(lastName.value.trim() + " is the first-name error value");
      lastName.classList.add("error");
      lastName.classList.remove("success");
      lNameError.style = "font-family: papyrus; font-size: 15px; color : red";
      lNameError.innerHTML = "Error!";
    }
  }

  // firstname blur
  function FirstNameBlur() {
    var first_name_value = firstName.value.trim(); //variable only work within this scope or function; won't work if made a global variable;
    var regfirstName = /^([a-zA-z0-9]+)$/;
    // fNameError.style =
    //   "color : lightslategray; font-family: papyrus; font-size: 15px"; //coming back to this
    if (
      // trim() should be properly used else can cause error in integration; use with the braces
      first_name_value === "" ||
      first_name_value === null ||
      first_name_value === undefined
    ) {
      firstName.classList.remove("success");
      firstName.classList.remove("error");
      // fNameError.style = "";
      fNameError.innerHTML = "";
    } else if (!first_name_value.match(regfirstName)) {
      //check for non-match
      firstName.classList.add("error");
      firstName.classList.remove("success");
      fNameError.style = "color : red; font-family: papyrus; font-size: 15px";
      fNameError.innerHTML = "Error! cant't take special characters";
    } else if (first_name_value.length < 3) {
      console.log("firstName value less than 3");
      fNameError.style = "color : red";
      firstName.classList.remove("success");
      firstName.classList.add("error");
      fNameError.style = "color : red; font-family: papyrus; font-size: 15px";
      fNameError.innerHTML = "Firstname can't be too short ";
    } else if (first_name_value.match(regfirstName)) {
      // check for match
      firstName.classList.add("success");
      firstName.classList.remove("error");
      fNameError.innerHTML = "";
    } else {
      console.log(firstName.value.trim() + " is the first-name error value");
      firstName.classList.remove("success");
      firstName.classList.add("error");
      fNameError.innerHTML = "";
      console.log("moving...");
    }
  }

  //username blur
  function UsernameBlur() {
    // userName.style.borderColor = "blue";
    var username_value = userName.value.trim();
    const regUsername = /^[a-zA-Z]+[._@]?[a-zA-Z0-9]*$/;
    // const regUnderscore = /^[^ ]*[._]+[^ ]*$/; //new RegExp("_"); check for any underscore
    // const regAlphabet = /^[^ ]*[A-Za-z]{0,1}[^ ]*$/; // check for atleast two letters
    // console.log(regUnderscore.test(username_value));
    // console.log(regAlphabet.test(username_value));
    if (
      username_value === "" ||
      username_value === null ||
      username_value === undefined
    ) {
      console.log("check for username input.....");
      userName.classList.remove("success");
      userName.classList.remove("error");
      // userNameError.style = "color : lightslategray;";
      userNameError.innerHTML = "";
    } else if (
      username_value.length < 3 //must not forget to get the input length
    ) {
      console.log("username value less than 3");

      userName.classList.add("error");
      userName.classList.remove("success");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML = "Username too short";
    } else if (!username_value.match(regUsername)) {
      console.log(
        "Error! username value contain special character other than underscore, period and @"
      );
      userName.classList.remove("success");
      userName.classList.add("error");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML =
        "only letters, digits, underscore and period can be included to your username"; // used as special character';
    } else if (username_value.match(regUsername)) {
      console.log("username choosen wisely");
      userName.classList.add("success");
      userName.classList.remove("error");
      userNameError.innerHTML = "";
    } else {
      console.log("username value not choosen wisely");
      userName.classList.add("error");
      userName.classList.remove("success");
      userNameError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNameError.innerHTML = "sorry, choose your username wisely !";
    }
  }

  //email blur
  function EmailBlur() {
    var email_value = email.value.trim();
    const regEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/; //this works and the below also works
    //note: regular expressions are always wrapped in between  "/^" and "$/" to show the character to begin and end with
    //var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   //it works also

    if (
      email_value === "" ||
      email_value === null ||
      email_value === undefined
    ) {
      email.classList.remove("success");
      email.classList.remove("error");
      emailError.style = "color : lightslategray;";
      emailError.innerHTML = "";
    } else if (!email_value.match(regEmail)) {
      console.log("email contain special");
      email.classList.remove("success");
      email.classList.add("error");
      emailError.style = "font-family: papyrus; font-size: 15px; color : red;";
      emailError.innerHTML = "Error, invalid email !";
    } else if (email_value.match(regEmail)) {
      console.log("email is valid...");
      email.classList.add("success");
      email.classList.remove("error");
      emailError.innerHTML = "";
    } else {
      console.log("invalid email here...");
      email.classList.remove("success");
      email.classList.add("error");
      emailError.style = "font-family: papyrus; font-size: 15px; color : red;";
      emailError.innerHTML = "Enter a valid email";
    }
  }

  console.log(comparePwd()); // Comparing passwords

  // passwordconfirm validation
  function checkConfirmPassword() {
    // console.log("getting ConfirmPassword checked");
    var pwdconfirmValue = passwordConfirm.value.trim();
    pwd_value = pwd.value.trim();
    // var checkpasswords = "password value is equal to confirmPassword value ";
    if (pwd_value === "" || pwd_value === null || pwd_value === undefined) {
      pwdConfirm.blur();
      pwd.focus();
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdConfirm.classList.remove("error");
      pwdConfirm.classList.remove("success");
      pwdco = "";
      pwdError.style = "font-family: papyrus; font-size: 15px; color : red;";
      pwdError.innerHTML = "Enter your password";
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      // passwordConfirm.setAttribute("disabled", "");
      // pwdConfirmError.innerHTML = "Enter password first";
      pwd.addEventListener("input", function removeConfirmPwdError() {
        pwdConfirmError.innerHTML = "";
      });
    } else if (
      !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      (pwdconfirmValue === "" ||
        pwdconfirmValue === null ||
        pwdconfirmValue === undefined)
    ) {
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      pwdConfirmError.innerHTML = "Confirm your password";
    } else if (
      !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      !(
        pwdconfirmValue === "" ||
        pwdconfirmValue === null ||
        pwdconfirmValue === undefined
      ) &&
      pwd_value !== pwdconfirmValue
    ) {
      console.log("pwdValue not equal to confirmPaasswordValue....");
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Password doesn't match";
    } else if (
      pwdconfirmValue !== pwd_value
      // !checkConfirmPassword().match(checkPassword())
    ) {
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Password doesn't match";
      console.log("confirm pwd value is different from pwd value");
    } else if (pwdconfirmValue == pwd_value) {
      pwdConfirm.classList.remove("error");
      pwdConfirm.classList.add("success");
      pwdConfirmError.innerHTML = "";
    }
  }

  function PasswordBlur() {
    console.log("getting PasswordBlur checked");

    const regPwd = /^[A-Za-z0-9]+$/;
    var pwdconfirmValue = passwordConfirm.value.trim();
    var pwd_value = pwd.value.trim();
    // const regPwd = /^[a-zA-Z0-9]*[^ ]*[a-zA-Z0-9]*$/;
    // const regPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{2,10}$/;
    // const regPwd = /[a-zA-Z0-9[^a-zA-Z0-9]+]+/;
    // const regPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',\?\/\*~\$\^+=<>]).{8,20}$/;

    if (pwdconfirmValue.length > 0 && pwd_value.length < 1) {
      console.log("pwd is empty and confirmpwd isn't (says pwdblur)");
      // pwdConfirmError.innerHTML = "Must";
      pwdConfirm.value = "";
      pwdConfirm.classList.remove("success");
      pwdConfirm.classList.remove("error");
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdError.style = "font-family: papyrus; font-size: 15px; color : red;";
      pwdError.innerHTML = "Input first your password";
    } else if (
      pwd_value === "" ||
      pwd_value === null ||
      pwd_value === undefined
    ) {
      // console.log("Love that. It's checking password input......");
      pwd.classList.remove("error");
      pwd.classList.remove("success");
      // pwdError.style = "font-family: papyrus; font-size: 15px; color : lightslategray;";
      pwdError.innerHTML = "";
    } else if (!pwd_value.match(regPwd)) {
      pwd.classList.remove("success");
      pwd.classList.add("error");
      pwdError.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;"; // pwdError.innerHTML = "password not strong enough";
      pwdError.innerHTML =
        "must include: <br> 8 + characters including special characters e.g @ _ "; //"character must be 8 and above";
    } else if (pwd_value.match(regPwd)) {
      pwd.classList.add("success");
      pwd.classList.remove("error");

      // pwdError.innerHTML = "strong password";
    } else if (pwd_value !== pwdconfirmValue) {
      pwdConfirm.classList.remove("success");
      pwdConfirm.classList.add("error");
      pwdConfirmError.innerHTML = "passwords don't match";
      console.log(
        comparePwd() + " that password value is equal to confirmPassword value"
      );
    } else {
      pwd.classList.add("error");
      pwd.classList.remove("success");
      pwdError.innerHTML = "Error, something is wrong!";
    }
  }

  // passwordconfirm blur
  function ConfirmPasswordBlur() {
    console.log("getting ConfirmPasswordBlur checked");

    var pwdconfirmValue = passwordConfirm.value.trim();
    pwd_value = pwd.value.trim();
    // var checkpasswords = "password value is equal to confirmPassword value ";

    console.log(
      comparePwd() + " that password value is equal to confirmPassword value"
    );

    if (
      (pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      pwdconfirmValue.length > 0
    ) {
      pwdConfirm.innerText = "";
    } else if (
      // !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      pwdconfirmValue === "" ||
      pwdconfirmValue === null ||
      pwdconfirmValue === undefined
    ) {
      // console.log("confirm password is blurred and empty");
      pwdConfirm.classList.remove("error");
      pwdConfirm.classList.remove("success");
      // pwdConfirmError.style = "font-family: papyrus; font-size: 15px; color : lightslategray;";
      pwdConfirmError.innerHTML = "";
    } else if (
      !(pwd_value === "" || pwd_value === null || pwd_value === undefined) &&
      !(
        pwdconfirmValue === "" ||
        pwdconfirmValue === null ||
        pwdconfirmValue === undefined
      ) &&
      pwd_value !== pwdconfirmValue
    ) {
      console.log("reaching its blur...");
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Password doesn't match";
    } else if (
      pwdconfirmValue != pwd_value
      // !checkConfirmPassword().match(checkPassword())
    ) {
      ConfirmPasswordBlur();
      pwdConfirm.classList.add("error");
      pwdConfirm.classList.remove("success");
      pwdConfirmError.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      pwdConfirmError.innerHTML = "Password doesn't match";
    } else if (pwdconfirmValue == pwd_value) {
      pwdConfirm.classList.remove("error");
      pwdConfirm.classList.add("success");
      pwdConfirmError.innerHTML = "";
      // console.log("pwds matches");
    }
  }

  var signup_error = document.getElementById("signup_error");

  /*
  SIGNUP VALIDATION STARTS HERE
  */
  //Signup form elements
  var firstName = document.getElementById("firstname");
  var lastName = document.getElementById("lastname");
  var userName = document.getElementById("username");
  var email = document.getElementById("email");
  var pwd = document.getElementById("_password");
  var pwdConfirm = document.getElementById("passwordConfirm");

  //input error variables
  var fNameError = document.getElementById("fname-error");
  var lNameError = document.getElementById("lname-error");
  var userNameError = document.getElementById("username-error");
  var emailError = document.getElementById("email-error");
  var pwdError = document.getElementById("pwd-error");
  var pwdConfirmError = document.getElementById("pwd2-error");

  signupForm.style.display = "block";

  var signup = document.getElementById("_signup");

  //Click Event on each input
  firstName.addEventListener("click", function (e) {
    checkFirstName();
  });

  lastName.addEventListener("click", function (e) {
    checkLastName();
    // console.log("clicked");
  });

  userName.addEventListener("click", function (e) {
    checkUsername();
  });

  email.addEventListener("click", function (e) {
    checkEmail();
  });

  pwd.addEventListener("click", function (e) {
    checkPassword();
  });

  pwdConfirm.addEventListener("click", function (e) {
    checkConfirmPassword();
  });

  signup.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("reaching 4.....");
    switchContainer.style.display = "block";
    checkSwitch.checked = true; //true;
    signupForm.style.display = "block";
    signinForm.style.display = "none";
    forgotPwdForm.style.display = "none";
  });

  var signUpInput = document.querySelectorAll("signup_input");

  // Focus Event on each input
  firstName.addEventListener("focus", function (e) {
    checkFirstName();
  });

  lastName.addEventListener("focus", function (e) {
    checkLastName();
    console.log("clicked");
  });

  userName.addEventListener("focus", function (e) {
    checkUsername();
  });

  email.addEventListener("focus", function (e) {
    checkEmail();
  });

  pwd.addEventListener("focus", function (e) {
    checkPassword();
  });

  pwdConfirm.addEventListener("focus", function (e) {
    checkConfirmPassword();
  });

  //Input Event on each input
  firstName.addEventListener("input", function (e) {
    checkFirstName();
  });

  lastName.addEventListener("input", function (e) {
    checkLastName();
  });

  userName.addEventListener("input", function (e) {
    checkUsername();
  });

  email.addEventListener("input", function (e) {
    checkEmail();
  });

  pwd.addEventListener("input", function (e) {
    checkPassword();
  });

  pwdConfirm.addEventListener("input", function (e) {
    checkConfirmPassword();
  });

  //SIGNUP WAITING TO BE CLICKED
  var signupSubmitBtn = document.getElementById("signupsubmitbtn");
  signupSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //check for empty input starts here

    var signup_error = document.getElementById("signup_error");

    var signUpInput = document.querySelectorAll("signup_input");

    /**
    //signup input array
    var everyInputIsEmpty = Array.from(signUpInput).filter(
      (signup_input) =>
        signup_input.value === null ||
        signup_input.value === undefined ||
        signup_input.value === ""
    );
     */

    /**
    if (!everyInputIsEmpty) {
      console.log("all signup inputs are empty");

      signup_error.style =
        "text-align: center; color: red; font-family: lightslategray; padding: 0";

      // focus on firstname first
      firstName.focus();

      checkFirstName();
      checkLastName();
      checkUsername();
      checkEmail();
      pwd.classList.add("error");
      pwdConfirm.classList.add("error");

      signup_error.innerHTML = "ALL INPUTS MUST BE FILLED!";
    } else {
      signup_error.innerHTML = "!";

      console.log("it's well");
    }
    //check for empty input ends here
     */
    console.log("you have successfully signed up!");
  });

  signupForm.addEventListener("focusout", (e) => {
    e.preventDefault();

    signup_error.innerHTML = "";

    FirstNameBlur();
    LastNameBlur();
    UsernameBlur();
    EmailBlur();
    PasswordBlur();
    ConfirmPasswordBlur();
  });

  //switch to login
  var switchtoLogin = document.getElementById("switchLogin");
  switchtoLogin.addEventListener("click", function (e) {
    // switchContainer.style.display = "block";
    checkSwitch.checked = false; //false;
    signupForm.style.display = "none";
    signinForm.style.display = "block";
    // forgotPwdForm.style.display = "none";
    console.log("reaching two.....");
  });

  var switchtoSignup = document.getElementById("switchSignup");
  switchtoSignup.addEventListener("click", (event) => {
    console.log(event.target + "is the event");
  });

  //
  //Blur Event on each input
  firstName.addEventListener("blur", function (e) {
    FirstNameBlur();
  });

  lastName.addEventListener("blur", function (e) {
    LastNameBlur();
    console.log("clicked");
  });

  userName.addEventListener("blur", function (e) {
    UsernameBlur();
  });

  email.addEventListener("blur", function (e) {
    EmailBlur();
  });

  pwd.addEventListener("blur", function (e) {
    PasswordBlur();
  });

  pwdConfirm.addEventListener("blur", function (e) {
    ConfirmPasswordBlur();
  });
};

const onSignin = function () {
  function checkLoginUsername() {
    var username_email_value = username_or_email.value.trim();

    const regLogInUsername = /^[a-zA-Z]+[._@]?[a-zA-Z0-9]*$/;
    const regLogInEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    if (
      username_email_value === "" ||
      username_email_value === null ||
      username_email_value === undefined
    ) {
      username_or_email.classList.add("error");
      username_or_email.classList.remove("success");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      userNmail_error.innerHTML = "Enter your username or email";
      console.log("loginusername is undefined or null or empty");
    } else if (
      // username_email_value.length >= 3 &&
      !(
        username_email_value.match(regLogInEmail) ||
        username_email_value.match(regLogInUsername)
      )
      //!(true && ( true || true ) )
    ) {
      username_or_email.classList.add("error");
      username_or_email.classList.remove("success");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "Invalid input";
      console.log("less than 3 chars or doesn't match regex");
    } else if (
      username_email_value.match(regLogInEmail) ||
      username_email_value.match(regLogInUsername)
    ) {
      console.log("email || username input is valid");
      username_or_email.classList.add("success");
      username_or_email.classList.remove("error");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "";
      console.log("Valid input");
    } else {
      username_or_email.classList.add("error");
      username_or_email.classList.remove("success");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "something must be wrong";
      console.log("something else is wrong");
    }
    // else if (
    //   // username_email_value.match(regLogInEmail)
    // ) {
    //   // console.log("username or email matches the regex");
    //   username_or_email.classList.add("success");
    //   username_or_email.classList.remove("error");
    //   userNameError.innerHTML = "";
    // }
    // else {
    //   console.log("username or email is wrong ");
    //   username_or_email.classList.add("error");
    //   username_or_email.classList.remove("success");
    //   userNameError.style = "color : red";
    //   userNameError.innerHTML = "wrong input received!";
    // }
  }

  function checkLoginPassword() {
    var loginPasswordValue = loginPassword.value.trim();

    const regPwd = /^[A-Za-z0-9]+$/;

    if (
      loginPasswordValue === "" ||
      loginPasswordValue === null ||
      loginPasswordValue === undefined
    ) {
      loginPassword.classList.remove("success");
      loginPassword.classList.add("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      loginPwd_error.innerHTML = "Enter  your  Password";
    } else if (!loginPasswordValue.match(regPwd)) {
      loginPassword.classList.remove("success");
      loginPassword.classList.add("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      loginPwd_error.innerHTML = "Incorrect password";
    } else if (loginPasswordValue.match(regPwd)) {
      loginPassword.classList.add("success");
      loginPassword.classList.remove("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      loginPwd_error.innerHTML = "";
    } else {
      loginPassword.classList.add("error");
      loginPassword.classList.remove("success");
      loginPwd_error.innerHTML = "Something must be wrong";
    }
  }

  function checkLoginUsernameBlur() {
    var username_email_value = username_or_email.value.trim();

    const regLogInUsername = /^[a-zA-Z]+[._@]?[a-zA-Z0-9]*$/;
    const regLogInEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;

    if (username_email_value === "") {
      username_or_email.classList.remove("error");
      username_or_email.classList.remove("success");
      userNmail_error.innerHTML = "";
    }
    // else if (
    //   username_email_value === "" ||
    //   username_email_value === null ||
    //   username_email_value === undefined
    // ) {
    //   console.log(
    //     username_email_value === null || username_email_value === undefined
    //   );
    //   username_or_email.classList.add("error");
    //   username_or_email.classList.remove("success");
    //   userNmail_error.style =
    //     "font-family: papyrus; font-size: 15px; color : lightslategray;";
    //   userNmail_error.innerHTML = "Enter your username or email";
    //   // console.log("undefined or null or empty");
    // }
    else if (
      // username_email_value.length >= 3 &&
      !(
        username_email_value.match(regLogInEmail) ||
        username_email_value.match(regLogInUsername)
      )
      //!(true && ( true || true ) )
    ) {
      username_or_email.classList.add("error");
      username_or_email.classList.remove("success");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "Invalid input";
      console.log("less than 3 chars or doesn't match regex");
    } else if (
      username_email_value.match(regLogInEmail) ||
      username_email_value.match(regLogInUsername)
    ) {
      console.log("email and username input is valid");
      username_or_email.classList.add("success");
      username_or_email.classList.remove("error");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "";
      console.log("Valid input");
    } else {
      username_or_email.classList.add("error");
      username_or_email.classList.remove("success");
      userNmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      userNmail_error.innerHTML = "something must be wrong";
      console.log("something else is wrong");
    }
    // else if (
    //   // username_email_value.match(regLogInEmail)
    // ) {
    //   // console.log("username or email matches the regex");
    //   username_or_email.classList.add("success");
    //   username_or_email.classList.remove("error");
    //   userNameError.innerHTML = "";
    // }
    // else {
    //   console.log("username or email is wrong ");
    //   username_or_email.classList.add("error");
    //   username_or_email.classList.remove("success");
    //   userNameError.style = "color : red";
    //   userNameError.innerHTML = "wrong input received!";
    // }
  }

  function checkLoginPasswordBlur() {
    var loginPasswordValue = loginPassword.value.trim();

    const regPwd = /^[A-Za-z0-9]+$/;

    if (loginPasswordValue === "") {
      loginPassword.classList.remove("success");
      loginPassword.classList.remove("error");
      loginPwd_error.innerHTML = "";
    } else if (
      loginPasswordValue === "" ||
      loginPasswordValue === null ||
      loginPasswordValue === undefined
    ) {
      loginPassword.classList.remove("success");
      loginPassword.classList.add("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      loginPwd_error.innerHTML = "Enter    your  Password";
    } else if (!loginPasswordValue.match(regPwd)) {
      loginPassword.classList.remove("success");
      loginPassword.classList.add("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      loginPwd_error.innerHTML = "Incorrect password";
    } else if (loginPasswordValue.match(regPwd)) {
      loginPassword.classList.add("success");
      loginPassword.classList.remove("error");
      loginPwd_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      loginPwd_error.innerHTML = "";
    } else {
      loginPassword.classList.add("error");
      loginPassword.classList.remove("success");
      loginPwd_error.innerHTML = "Something must be wrong";
    }
  }

  /**
   * LOGIN VALIDATION STARTS HERE
   */

  // Login form elements
  var username_or_email = document.getElementById("username_or_email");
  var loginPassword = document.getElementById("loginpassword");
  var loginPwd_error = document.getElementById("loginPwd_error");
  // console.log(loginPassword.classList);

  signinForm.style.display = "none";
  var login = document.getElementById("_login");

  username_or_email.addEventListener("click", function (e) {
    checkLoginUsername();
  });

  loginPassword.addEventListener("click", function (e) {
    checkLoginPassword();
  });

  login.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("reaching 3.....");
    switchContainer.style.display = "block";
    checkSwitch.checked = false; //false;
    signupForm.style.display = "none";
    signinForm.style.display = "block";
    forgotPwdForm.style.display = "none";
  });
  // console.log("login ")

  username_or_email.addEventListener("focus", function (e) {
    checkLoginUsername();
  });

  loginPassword.addEventListener("focus", function (e) {
    checkLoginPassword();
  });

  // var signin_error = document.getElementById("signin_error");

  var signinSubmitBtn = document.getElementById("loginsubmitbtn");
  /*
  signinForm.addEventListener("click", (e) => {
    e.preventDefault();

    var signin_error = document.getElementById("signin_error");

    var signInInput = document.querySelectorAll("signin_input");

    //signup input array
    var everyInputIsEmpty = Array.from(signInInput).filter(
      (signin_input) =>
        signin_input.value === null ||
        signin_input.value === undefined ||
        signin_input.value === ""
    );

    if (everyInputIsEmpty) {
      console.log("all signup inputs are empty");

      signin_error.style =
        "text-align: center; color: red; font-family: lightslategray; padding: 0";
      signin_error.innerHTML = "ALL INPUTS MUST BE FILLED!";

      // focus on login-username  first
      username_or_email.focus();
      username_or_email.classList.add("error");
      loginPassword.classList.add("error");

      checkLoginUsername();
      checkLoginPassword();
      checkLoginUsername();
    } else {
      signin_error.innerHTML = "ALL INPUTS FILLED!";
    }
  });
*/

  //LOGIN WAITING TO BE CLICKED
  signinSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //check for empty input starts here

    var signin_error = document.getElementById("signin_error");

    var signInInput = document.querySelectorAll("signin_input");

    //login input array
    var everyInputIsEmpty = Array.from(signInInput).filter(
      (signin_input) =>
        signin_input.value === null ||
        signin_input.value === undefined ||
        signin_input.value === ""
    );

    if (everyInputIsEmpty) {
      console.log("all signup inputs are empty");

      signin_error.style =
        "text-align: center; color: red; font-family: lightslategray; padding: 0";

      // focus on login-username  first
      username_or_email.focus();

      checkLoginUsername();
      checkLoginPassword();

      signin_error.innerHTML = "ALL INPUTS MUST BE FILLED!"; //Notice: this error must be placed below here
    } else {
      signup_error.innerHTML = "!";

      console.log("it's well");
    }
  });

  // signinSubmitBtn
  // signinForm
  signinForm.addEventListener("focusout", (e) => {
    e.preventDefault();

    signin_error.innerHTML = "";

    checkLoginUsernameBlur();
    checkLoginPasswordBlur();

    // console.log("jksdfghjkl");
  });
  let innerSignupForm = document.getElementById("innerSignupForm");
  innerSignupForm.addEventListener("focus", (e) => {
    let targetEl = e.target; // clicked element
    // let innerSignupForm = document.getElementById("innerSignupForm");
    do {
      console.log("inside the do...");
      if (targetEl == innerSignupForm) {
        // Operation can be performed here
        console.log(
          "the click operation was performed BETWEEN the signinForm boundary"
        );

        if (switchtoSignup.clicked) {
          console.log("switchtoSignup.clicked.......");
          signupForm.style.display = "block";
          signinForm.style.display = "none";
          console.log("I am all I am......");
        } else if (document.getElementById("switchLogin").clicked) {
          console.log("switchtoLogin.clicked.......");
          signupForm.style.display = "none";
          signinForm.style.display = "block";
        } else {
          // signupForm.style.display = "block";
          console.log("jksdfghjkl.......");
        }
      }

      //Getting the node of the element
      targetEl = targetEl.parentNode;
    } while (targetEl);

    console.log(
      "the clicked operation was performed OUTSIDE the signinform boundary"
    );
  });

  let switchtoLogin = document.getElementById("switchLogin");
  switchtoLogin.addEventListener("click", (event) => {
    console.log(event.target + "was the event");
  });
  /**
  signinSubmitBtn.addEventListener("focusout", (e) => {
    e.preventDefault();
    console.log("focusing out of signinsubmitbtn");

    var signin_error = document.getElementById("signin_error");

    var signInInput = document.querySelectorAll("signin_input");

    //signup input array
    var everyInputIsEmpty = Array.from(signInInput).filter(
      (signin_input) =>
        signin_input.value === null ||
        signin_input.value === undefined ||
        signin_input.value === ""
    );

    if (everyInputIsEmpty) {
      checkLoginUsernameBlur();
      checkLoginPasswordBlur();

      signin_error.innerHTML = "ehnnnn";
      console.log("inputs are empty in signinsubmit btn.....");
    } else {
      console.log("qwerty");
    }
  });
   */

  var switchtoSignup = document.getElementById("switchSignup");
  //switch to signup
  switchtoSignup.addEventListener("click", function (e) {
    // switchContainer.style.display = "block";
    checkSwitch.checked = true; //true;
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    // forgotPwdForm.style.display = "none";
    console.log("reaching one.....");
  });

  var switchtoForgotPwd = document.getElementById("switchForgotPwd");
  switchtoForgotPwd.addEventListener("click", function (e) {
    signupForm.style.display = "none";
    signinForm.style.display = "none";
    forgotPwdForm.style.display = "block";
    forgotPwdForm.style.marginTop = "10%";
    switchContainer.style.display = "none";
  });

  username_or_email.addEventListener("input", function (e) {
    checkLoginUsername();
  });

  username_or_email.addEventListener("blur", function (e) {
    checkLoginUsernameBlur();
  });

  loginPassword.addEventListener("blur", function (e) {
    checkLoginPasswordBlur();
  });

  loginPassword.addEventListener("input", function (e) {
    checkLoginPassword();
  });
};

const onForgotPassword = function () {
  function checkForgotPwdEmail() {
    var forgotPwd_email_value = forgotPwd_email.value.trim();
    const regEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/; //this works and the below also works
    //note: regular expressions are always wrapped in between  "/^" and "$/" to show the character to begin and end with
    //var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   //it works also

    if (
      forgotPwd_email_value === "" ||
      forgotPwd_email_value === null ||
      forgotPwd_email_value === undefined
    ) {
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.add("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      forgotPwdEmail_error.innerHTML = "Enter your email";
      // console.log("getting it");
    } else if (!forgotPwd_email_value.match(regEmail)) {
      console.log("email contain special");
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.add("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      forgotPwdEmail_error.innerHTML = "Error, invalid email !";
    } else if (forgotPwd_email_value.match(regEmail)) {
      console.log("email is valid...");
      forgotPwd_email.classList.add("success");
      forgotPwd_email.classList.remove("error");
      forgotPwdEmail_error.innerHTML = "";
    } else {
      console.log("invalid email here...");
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.add("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      forgotPwdEmail_error.innerHTML = "Enter a valid email";
    }
  }

  function ForgotPwdEmailBlur() {
    var forgotPwd_email_value = forgotPwd_email.value.trim();
    const regEmail = /^[a-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/; //this works and the below also works
    //note: regular expressions are always wrapped in between  "/^" and "$/" to show the character to begin and end with
    //var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   //it works also

    if (
      forgotPwd_email_value === "" ||
      forgotPwd_email_value === null ||
      forgotPwd_email_value === undefined
    ) {
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.remove("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      forgotPwdEmail_error.innerHTML = "";
      console.log("getting it");
    } else if (!forgotPwd_email_value.match(regEmail)) {
      console.log("email contain special");
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.add("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : red;";
      forgotPwdEmail_error.innerHTML = "Error, invalid email !";
    } else if (forgotPwd_email_value.match(regEmail)) {
      console.log("email is valid...");
      forgotPwd_email.classList.add("success");
      forgotPwd_email.classList.remove("error");
      forgotPwdEmail_error.innerHTML = "";
    } else {
      console.log("invalid email here...");
      forgotPwd_email.classList.remove("success");
      forgotPwd_email.classList.add("error");
      forgotPwdEmail_error.style =
        "font-family: papyrus; font-size: 15px; color : lightslategray;";
      forgotPwdEmail_error.innerHTML = "Enter a valid email";
    }
  }

  //FORGOT PASSWORD
  var forgotPwd_email = document.getElementById("forgotPwd_email"); //

  forgotPwdForm.style.display = "none";

  var submitForgotPwdEmail = document.getElementById("submitforgotpwdemail");
  var forgotPwdEmailMessage = "Submit your Email to reset your password!";
  submitForgotPwdEmail.onclick = function () {
    if (forgotPwd_email.innerText === "") {
      // forgotPwd_email.click();
      forgotPwd_email.focus(); //focus event is more preferable here
      console.log("g.......");
    }
  };

  //forgot password
  forgotPwdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkForgotPwdEmail();
  });

  forgotPwdForm.addEventListener("focusout", (e) => {
    e.preventDefault();
    ForgotPwdEmailBlur();
    console.log(
      "fogotPwd form and its input are responsible for the blur outputs...(this is why we are having two outputs)"
    );
  });

  var resetPwdEmailMsg = document.getElementById("resetPwdEmailMsg");

  forgotPwd_email.onblur = function () {
    if (forgotPwd_email.innerText === "") {
      resetPwdEmailMsg.classList.add("resetPwdEmailMsg");
      resetPwdEmailMsg.innerText = forgotPwdEmailMessage;

      console.log("k.......");
    }
  };

  //Back to login
  var backToLogin = document.getElementById("backToLogin");
  var login = document.getElementById("_login");

  backToLogin.addEventListener("click", (e) => {
    e.preventDefault();

    login.click();
    // signinForm.style.display = "block";
    // forgotPwdForm.style.display = "none";
    // signupForm.style.display = "none";
    // switchContainer.style.display = "block";
  });

  forgotPwd_email.addEventListener("blur", function (e) {
    if (submitForgotPwdEmail.clicked == true) {
      submitForgotPwdEmail.click();
      console.log("................");
    }
    ForgotPwdEmailBlur();
  });

  // click event rarely get triggered
  forgotPwd_email.addEventListener("click", function (e) {
    console.log("asdfghjkl;'");
    // checkForgotPwdEmail();

    checkForgotPwdEmail();

    resetPwdEmailMsg.innerHTML = "";
    resetPwdEmailMsg.removeAttribute("class");
  });

  forgotPwd_email.addEventListener("focus", function (e) {
    console.log("focusing on forgotPwd input...");

    checkForgotPwdEmail();

    resetPwdEmailMsg.innerHTML = "";
    resetPwdEmailMsg.removeAttribute("class"); // get classList and remove your desired class from the list
  });

  forgotPwd_email.addEventListener("input", function (e) {
    checkForgotPwdEmail();
  });
};

onSignup();

onSignin();

onForgotPassword();

// check for Navigation Timing API support
if (window.Performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info("This page is reloaded");
} else {
  console.info("This page is not reloaded");
}
