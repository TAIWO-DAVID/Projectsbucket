<?php

function check_login()
{
    if (isset($_SESSION['firstname'])) {
        $firstname = $_SESSION['firstname'];
        $query = "SELECT * FROM users where firstname = '$firstname' limit 1";

        $result = mysqli_query($con, $query);
        if ($result && mysqli_num_rows($result) > 0) {

            $user_data = mysqli_fetch_assoc($result);
            return $user_data;
        }
    }

    //redirect to login (if the individual is not logged in yet)
    header("Location: includes/login.php");
    die;
}