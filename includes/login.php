<?php
session_start();
include "includes/connection.php";
include("includes/functions.php");

"<p>connected successfully</p>";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //something was posted
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password) && !is_numeric($username)) {
        //read from database
        $query = "SELECT * from users where username = '$username' limit 1";

        $result = mysqli_query($con, $query);

        if ($result) {
            if ($result && mysqli_num_rows($result) > 0) {
                $user_data = mysqli_fetch_assoc($result);
                if ($user_data['password'] === $password) {

                    $_SESSION['username'] = $user_data['username'];
                    header("Location: ../pages/calculator/calculator.php"); // redirect to the nextpage
                    die;
                }
            }
        }
    } else {
        echo "please enter valid information!";
    }
}