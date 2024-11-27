<?php
// Capture the form data
$email = $_POST['email'];
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$qualification = $_POST['qualification'];
$services = $_POST['services'];
$city = $_POST['city'];
$comments = $_POST['comments'];

// You can send the details via email or save them to a database.
// Example: Sending an email

$to = "srividya92793@gmail.com"; // Replace with your email address
$subject = "New Form Submission";
$headers = "From: noreply@example.com" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

$message = "You have received a new form submission.\n\n" .
           "Email: $email\n" .
           "Name: $name\n" .
           "Mobile: $mobile\n" .
           "Qualification: $qualification\n" .
           "Services: $services\n" .
           "City: $city\n" .
           "Comments: $comments\n";

if(mail($to, $subject, $message, $headers)) {
    echo "Thank you! Your submission has been received.";
} else {
    echo "Sorry, there was an error sending your submission.";
}

// Example: Saving to a database (MySQL)
/*
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO submissions (email, name, mobile, qualification, services, city, comments)
VALUES ('$email', '$name', '$mobile', '$qualification', '$services', '$city', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Thank you! Your submission has been received.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
*/
?>
