<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="login.css">
</head>
<body>

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

    session_start();

?>


    <div class="content">

    <form method="post">

        <div class="container">
            <h1>VanyaSparsh</h1>
            <label for="email"><b>Email Id</b></label>
            <input type="email" placeholder="Enter Email Id" name="emailid" required>
            <br><br>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <span class="psw">Forgot <a href="#">password?</a></span>

            <button id="openModal" class="modal_button">Login</button>

            <p>Don't have an account? <a href="./signup.php">Sign Up</a></p>

    </form>
</div>
   
<?php

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
       
		$emailid = $_POST['emailid'];
		$password = $_POST['password'];
		// echo $password;

        $sql = "SELECT FirstName FROM credentials WHERE EmailId ='$emailid' && Password = '$password'";

        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

        $total = mysqli_num_rows($result);
        
        if($total == 0){



            echo'
            <div id="modal" class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <p>Incorrect Email or Password</p>
                </div>
            </div>';

            echo "Incorrect Email-Id or Password";
        }
        else{
            header('location:../Calculators/index.html'); 
            exit();
        }

        // if($result){ 
        //     $insert = true;
        // }
        // else{
        //     echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
        // } 
        // header("Location: page.html");

        // if($total == 1){
        //     // $_SESSION['firstname'] = $row['FirstName'];
        //     header('location:../Calculators/index.html'); 
        // }

		
		// Close connection
		mysqli_close($conn);
    }
		
		
	?>
     <!-- <script>
    const modal = document.getElementById('modal');

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    const modal = document.getElementById('modal');
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  </script> -->
  <script>
// Get the modal
const modal = document.getElementById('modal');

// Get the close button
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
};
</script>

</body>
</html>
