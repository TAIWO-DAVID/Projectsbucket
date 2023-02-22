<?php
// session_start();
// include "includes/connection.php";
// include("includes/functions.php");

// if ($_SERVER['REQUEST_METHOD'] == "POST") {
//     # something was posted
//     $firstname = $_POST['firstname'];
//     $lastname = $_POST['lastname'];
//     $username = $_POST['username'];
//     $email = $_POST['email'];
//     $password = $_POST['userpassword'];
//     $confirmpassword = $_POST['confirmpassword'];

//     if (!empty($firstname) && !empty($lastname) && !empty($username) && !empty($email) && !empty($password) && !empty($confirmpassword)) {
//         // save to database
//         $query = "INSERT INTO users (firstname, lastname, username, email, userpassword) VALUES ('$firstname', '$lastname', '$username', '$email', '$password')";
//         mysqli_query($con, $query);
//     } else {
//         echo "<h1 style='color: white'>please enter some valid information!</h1>";
//     }
// }



//
session_start();


$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "projectsbucket_db";

$con = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// if (!$con) {
//     //Connection failed
//     echo "Failed to connect to the MySQL: " . mysqli_connect_error();
//     // die("failed to connect!");
// } else {
//     // connection successful
//     echo "<p style='color: white;'>Connected to MySQL successfully</p>";
// }

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
echo "<p style='color: white;'>Connected successfully to MySQL</p>";


include "functions.php";

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    # something was posted
    $firstname = mysqli_real_escape_string($con, $_POST['firstname']);
    $lastname = mysqli_real_escape_string($con, $_POST['lastname']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['userpassword']);
    $confirmpassword = mysqli_real_escape_string($con, $_POST['confirmpassword']);

    if (!empty($firstname) && !empty($lastname) && !empty($username) && !empty($email) && !empty($password) && !empty($confirmpassword)) {
        // check if passwords match
        if ($password !== $confirmpassword) {
            echo "<h1 style='color: white'>Passwords do not match!</h1>";
        } else {
            // save to database
            $query = "INSERT INTO users (firstname, lastname, username, email, userpassword) VALUES ('$firstname', '$lastname', '$username', '$email', '$password')";
            if (mysqli_query($con, $query)) {
                echo "<h1 style='color: white'>User created successfully!</h1>";
            } else {
                echo "<h1 style='color: white'>Error creating user: " . mysqli_error($con) . "</h1>";
            }
        }
    } else {
        echo "<h1 style='color: white'>Please enter valid information!</h1>";
    }
}