<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../home/index.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<nav class="bg-dark">
  <ul class=>
    <li><a href="../home/home.html">Home</a></li>
    <li><a href="../aboutus/aboutus.html">About us</a></li>
    <li><a href="../Activity-Footprint-Project/Index.html" target="_blank">Carbon FootPrints</a></li>

    <!-- <li><a href="../../Calculators/index.html">CFC</a></li> -->

    <li> <a href="../../Login/loginPage.php">CFC</li></a>

    <li class="menu-item has-sub-menu">
      <a href="" class="menu-item-link">
        More
      </a>
      <ul class="sub-menu">
        <li class="menu-item">
          <a href="../Events/events.html" class="menu-item-link">Events</a>
        </li>

        <li class="menu-item">
          <a href="../Gallery/Gallery.html" class="menu-item-link">Gallery</a>
        </li>

        <li class="menu-item">
          <a href="../../QUIZ/quiz.html" class="menu-item-link">Quiz</a>
        </li>

        <li class="menu-item">
          <a href="../contact/contact.html" class="menu-item-link">Contact</a>
        </li>
      </ul>
    </li>
  </ul>

</nav>

<!-- The Tour Section -->
<div style="background-color: rgb(2, 43, 2);" id="tour">
  <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
    <h2 style=color:#fff class="w3-wide w3-center">Events</h2>

    <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
      <div class="w3-third w3-margin-bottom">
        <img src="becach.jpg" alt="Dadar" style="width:100%" class="w3-hover-opacity">
        <div class="w3-container w3-white">
          <h3 id="Event1" name="heading_text"><b>Dadar Beach drive</b></h3>
          <p class="w3-opacity">Fri 7 oct 2023</p>
          <p>Beach drive </p>

          <!-- <button onclick="storeHeading('Dadar Beach drive')" class="w3-button w3-black w3-margin-bottom">Particiapte -->
          <!-- Now</button> -->

          <button class="w3-button w3-black w3-margin-bottom"
            onclick="document.getElementById('ticketModal').style.display='block'; storeHeading('Event1')">Participate
            Now</button>

          <!-- <h2 id="heading3" name="heading_text">Heading 3</h2> -->
          <!-- <button onclick="storeHeading('Event1')">Store Heading</button> -->

        </div>
      </div>
      <div class="w3-third w3-margin-bottom">
        <img src="treep.jpg" alt="tree" style="width:100%" class="w3-hover-opacity">
        <div class="w3-container w3-white">
          <p><b>VESIT</b></p>
          <p class="w3-opacity">Sat 17 Oct 2023</p>
          <h3 id="Event2" name="heading_text">Tree Plantation</h3>
          <button class="w3-button w3-black w3-margin-bottom"
            onclick="document.getElementById('ticketModal').style.display='block'; storeHeading('Event2')">Participate
            Now</button>
        </div>
      </div>
      <div class="w3-third w3-margin-bottom">
        <img src="plastic.jpg" alt="Plastic" style="width:100%" class="w3-hover-opacity">
        <div class="w3-container w3-white">
          <p><b>VESIT</b></p>
          <p class="w3-opacity">Sun 9 Oct 2023</p>
          <h3 id="Event3" name="heading_text">Plastic Donation</h3>
          <button name="Plastic Donation" class="w3-button w3-black w3-margin-bottom"
            onclick="document.getElementById('ticketModal').style.display='block'; storeHeading('Event3')">Participate
            Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Ticket Modal -->
<div id="ticketModal" class="w3-modal">
  <div class="w3-modal-content w3-animate-top w3-card-4">
    <header class="w3-container w3-teal w3-center w3-padding-32">
      <span onclick="document.getElementById('ticketModal').style.display='none'"
        class="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
      <h2 class="w3-wide"><i class="fa fa-user"></i>Enter Details</h2>
    </header>

    <div class="w3-container">
      <form method="post">
        <label>Name </label>
        <input class="w3-input w3-border" type="text" placeholder="Enter your Name" name="UserName">

        <label>Email ID</label>
        <input class="w3-input w3-border" type="text" placeholder="Email Id" name="EmailId">

        <label>Phone Number</label>
        <input class="w3-input w3-border" type="tel" placeholder="Enter Phone Number" name="PhoneNo">
        <input type="hidden" name="variableName" id="eventHeading">

        <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PARTICIPATE<i
            class="fa fa-check"></i></button>
        <button class="w3-button w3-red w3-section"
          onclick="document.getElementById('ticketModal').style.display='none'">Close <i
            class="fa fa-remove"></i></button>
        <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
      </form>
    </div>
  </div>
</div>


<script>
  function storeHeading(id) {
    var headingText = document.getElementById(id).innerText;
    $.ajax({
      type: "POST",
      // url: "./eventHeading.php",
      data: { heading_text: headingText },
      success: function (response) {
        alert(response);
      }
    });
    console.log(headingText);
  }


</script>


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












