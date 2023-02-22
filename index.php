<?php
session_start();
include "includes/connection.php";
include("includes/functions.php");

// $user_data = check_login($con);
?>
<!DOCTYPE html>
<html>

<head>
    <title>PROJECTS' BUCKET</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <!--font awesome cdn-js library-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!--Bootstrap css-->
    <link rel="stylesheet" href="bootstrap-5/css/bootstrap.min.css" />
    <!--My local css-->
    <link rel="stylesheet" href="assets/css/indexthree.css" />
    <link rel="stylesheet" href="assets/css/modal.css" />
    <link rel="stylesheet" href="assets/css/form.css" />
</head>

<body>
    <!-- The Modal form-->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <!--form-->
            <div class="form form-container col-6">
                <span id="close">&times;</span>
                <!-- Rounded switch -->
                <div id="conSwitch" class="switchContainer">
                    <label class="switch" for="checkboxSwitch">
                        <input type="checkbox" id="checkboxSwitch" />
                        <div class="slider round">
                            <span class="switch-option" id="signinSwitch">LOGIN</span>
                            <span class="switch-option" id="signupSwitch">SIGNUP</span>
                        </div>
                    </label>
                </div>
                <!---->



                <?php
                //learnt I'll have to create another page to take login users into
                // include("includes/login.php");
                // include("includes/signup.php");
                ?>


                <!--signup form-->
                <div id="signupForm">
                    <form action="includes/signup.php" method="POST" autocomplete="off" id="innerSignupForm">
                        <p id="signup_error" class="submition_error"></p>
                        <p class="inputs">
                        <div id="fname-error" class=""></div>
                        <input type="text" id="firstname" class="namings my_input signup_input" name="firstname"
                            placeholder="FirstName" />
                        </p>
                        <p>
                        <div id="lname-error" class=""></div>
                        <input type="text" id="lastname" class="namings my_input signup_input" name="lastname"
                            placeholder="LastName" />
                        </p>
                        <div id="username-error" class=""></div>
                        <p>
                            <input type="text" id="username" class="userIcon my_input signup_input" name="username"
                                placeholder="UserName" />
                        </p>
                        <div id="email-error" class=""></div>
                        <p>
                            <input type="text" id="email" class="email my_input signup_input" name="email"
                                placeholder="E-mail" />
                        </p>
                        <div id="pwd-error" class=""></div>
                        <p>
                            <input type="password" id="_password" class="password my_input signup_input"
                                name="userpassword" placeholder="Password" />
                        </p>
                        <div id="pwd2-error" class=""></div>
                        <p>
                            <input type="password" id="passwordConfirm" class="password my_input signup_input"
                                name="confirmpassword" placeholder="Confirm-password" />
                        </p>
                        <div id="submit-error" class=""></div>
                        <input type="submit" name="" value="SIGNUP" id="signupsubmitbtn" class="submitBtn" />

                    </form>

                    <p class="loginOrSignup">Already have an account?
                        <span id="switchLogin" class="links linkToLoginOrSignup">
                            Login
                        </span>
                    </p>
                </div>




                <!--login form-->
                <div id="loginForm">
                    <form action="" method="GET" autocomplete="off">
                        <p id="signin_error" class="submition_error"></p>
                        <p>
                        <div id="userNmail_error" class=""></div>
                        <input name="username_or_email" type="text" id="username_or_email"
                            class="namings my_input signin_input" name="username" placeholder="UserName / Email" />
                        </p>

                        <p>
                        <div id="loginPwd_error" class=""></div>
                        <input name="loginpassword" type="password" id="loginpassword"
                            class="password my_input signin_input" name="password" placeholder="Password" />
                        </p>
                        <p class="">
                            <a href="#" id="switchForgotPwd" class="forgotpwd">
                                Forgot password?<i class="key_icon"></i>
                            </a>
                        </p>
                        <br />
                        <div class=""></div>
                    </form>
                    <input name="loginsubmitbtn" type="button" name="forms" value="LOGIN" id="loginsubmitbtn"
                        class="submitBtn" />
                    <p class="loginOrSignup">Don't have an account?
                        <span id="switchSignup" class="links linkToLoginOrSignup">
                            Signup
                        </span>
                    </p>
                </div>





                <!--forgot password form-->
                <div id="forgot_pwd" class="forgotpwdForm">
                    <form action="/" method="GET" autocomplete="off">
                        <p class="backToLogin" id="backToLogin">
                            <image alt="back arrow" src="assets/icons/arrow_back/back_arrow.png"></image>
                            <span class="loginFromForgotPwd">Back to login</span>
                        </p>
                        <p class="resetPwdEmailMsg" id="resetPwdEmailMsg">Submit your Email to reset your password!</p>
                        <div>
                            <div id="forgotPwdEmail_error" class=""></div>
                            <input type="text" id="forgotPwd_email" class="namings my_input" name=""
                                placeholder="E-mail" />
                        </div>

                    </form>
                    <p class="">
                    <div class=""></div>
                    <input type="submit" id="submitforgotpwdemail" class="submitForgotPwdEmailContainer submitBtn"
                        placeholder="SUBMIT" />
                    </p>
                </div>

            </div>

        </div>
    </div>


    <header class="section_one">
        <div class="header text-center">
            <p class="project-title">
                <!-- My -->Projects' Bucket
            </p>
            <image class="bucket-logo" src="assets/logo/bucket.png"></image>
            <p class="motto">bringing projects together in one click</p>
            <hr style="color: white" />
        </div>
    </header>
    <image class="background-image" src="assets/img/background.jpg" alt="bkg-img"></image>
    <main>
        <div>
            <p>WELCOME</p>
            <!-- Intro to the page -->
            <p>
                This is where you get yourself to see some of my personal projects. <br>
                It'll be a nice time working through this page.<br>
                Let's roll on......<br>
                Signup with us if this is your first
                time of coming here <br>
                and login to have a walk through of
                what I'm capable of doing.
            </p>
        </div>

        <!--form in a modal form-->
        <div class="text-center" id="loginSignup">
            <!---link must be inputed or left as an hash tag i.e as a dead link--->
            <span>
                <a href="#" id="_login" class="login">Login</a>
            </span>
            <span class="linkslineDivider">
                <a href="#" id="_signup" class="signup">Signup</a>
            </span>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </main>
    <hr style="color: white" class="hr_b">
    <footer>
        <div id="footer">
            <div>
                <h3>Covita</h3>
                <p>some lorem ipsum text some lorem ipsum text some lorem ipsum text some lorem ipsum textsome lorem
                    ipsum
                    textsome lorem ipsum textsome lorem ipsum textsome lorem ipsum text some lorem ipsum text some lorem
                    ipsum textsome lorem ipsum textsome lorem ipsum text vv</p>

                <ul class="mysocials">
                    <li><i class="fa fa-facebook-square" aria-hidden="true"><a href="#"></a></i>
                    </li>
                    <li><i class="fa fa-linkedin-square" aria-hidden="true"><a href="#"></a></i></li>
                    <li><i class="fa fa-whatsapp-square" aria-hidden="true"
                            style="font-size:20px; color :green; border-radius: 5px;"><a href="#"></a></i>
                    </li>
                    <li><i class="fa fa-twitter-square" aria-hidden="true"><a href="#"></a></i></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p class="text-center copyright">copyright &copy;2020</p>
            </div>
        </div>
    </footer>


    <?php
    $isLoggedIn = false; // Set a boolean variable to control whether the user is logged in

    if ($isLoggedIn) {
        // Display content for logged-in users
        echo "<p>Welcome back!</p>";
    } else {
        // Display content for non-logged-in users
        echo "<p>Please log in to access this content.</p>";
    }
    ?>





    <!--Bootstrap popper and js-->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>
    <!--font awesome-->
    <script src="https://use.fontawesome.com/ab5a554622.js"></script>
    <!--Local js-->
    <script src="assets/js/modal.js"></script>
    <script src="assets/js/form.js"></script>
</body>


</html>