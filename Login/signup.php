<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>

    <div class="container">
        <form method=post>
            <h1>VanyaSparsh</h1>
            <label for="firstName">First Name:</label>
            <input type="text" placeholder="Enter First Name" id="firstName" name="firstname" required>
            <br><br>
            <label for="lastName">Last Name:</label>
            <input type="text" placeholder="Enter Last Name" id="lastName" name="lastname" required>
            <br><br>
            <label for="email">Email Id:</label>
            <input type="email" placeholder="Enter Email Id" id="email" name="emailid" required>
            <br><br>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter Password" id="password" name="password" required>
            <br><br>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    

    <script>
        function submitForm() {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Here you can perform further validation and send the data to the server for processing
            // For a real-world scenario, make sure to handle data securely on the server side.

            console.log("First Name: " + firstName);
            console.log("Last Name: " + lastName);
            console.log("Email: " + email);
            console.log("Password: " + password);
        }
    </script>

<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "VanyaSparsh";

    // Create a connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Die if connection was not successful
    if (!$conn){
        die("Sorry we failed to connect: ". mysqli_connect_error());
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
		$emailid = $_POST['emailid'];
		$password = $_POST['password'];
		echo $password;
        
        $sql = "INSERT INTO `credentials` (`FirstName`, `LastName`, `EmailId`, `Password`) VALUES ('$firstname', '$lastname', '$emailid', '$password')";		

        $result = mysqli_query($conn, $sql);
        if($result){ 
            $insert = true;
            echo "Account Created";

        }
        else{
            echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
        } 
        header("Location: loginPage.php");

		
		// Close connection
		mysqli_close($conn);
    }
		
		
	?>
</body>
</html>
