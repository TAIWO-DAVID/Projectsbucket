<?php
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