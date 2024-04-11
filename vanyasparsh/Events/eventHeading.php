
<?php
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "VanyaSparsh"; // Replace with your MySQL database name

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}

// Check if heading text is sent via POST request
if(isset($_POST['heading_text'])) {
    $UserName = $_POST['form_data']['UserName'];
    $EmailId = $_POST['form_data']['EmailId'];
    // $PNo = $_POST['form_data']['PhoneNo'];
    $heading_text = $_POST['heading_text'];
        
    $sql = "INSERT INTO `eventCredentials` (`UserName`,`EmailId`,`Event`) VALUES ('$UserName','$EmailId','$heading_text')";	

    $result = mysqli_query($conn, $sql);
    if($result){ 
        $insert = true;
        echo "Details Stored";
    }
    else{
        echo "Detail Not Stored". mysqli_error($conn);
    } 

    mysqli_close($conn);
} 
        





    

   
?>