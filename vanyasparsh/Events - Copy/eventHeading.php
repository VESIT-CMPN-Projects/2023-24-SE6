
<?php
// Check if heading text is sent via POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST'  && isset($_POST['heading_text'])) {
    // Retrieve heading text
    // $heading_text = $_POST['heading_text'];

    // Connect to your MySQL database
    $servername = "localhost";
    $username = "root"; // Replace with your MySQL username
    $password = ""; // Replace with your MySQL password
    $dbname = "database"; // Replace with your MySQL database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    // if($_SERVER['REQUEST_METHOD'] == 'POST' ){
        // Get data from POST request
        // $buttonId = $_POST['button_id'];
        // $Event = $_POST['variableName'];
        $heading_text = $_POST['heading_text'];
        $UserName = $_POST['UserName'];
        $EmailId = $_POST['EmailId'];
        $PhoneNo = $_POST['PhoneNo'];
        echo $heading_text;
        
        $sql = "INSERT INTO `eventCredentials` (`UserName`,`EmailId`,`PhoneNo`,`Event`) VALUES ('$UserName','$EmailId','$PhoneNo', '$heading_text')";		



    // Prepare SQL statement to insert heading text into database
    // $sql = "INSERT INTO headings (heading_text) VALUES ('$heading_text')";
    // echo 'done';
    // Execute SQL statement


    if ($conn->query($sql) === TRUE) {
        echo "Heading text inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close database connection
    $conn->close();
} else {
    echo "Heading text not received.";
}

?>












