<?php
include "connect.php";

$name = $_POST['name'];
$location = $_POST['location'];
$contact = $_POST['number'];
$fd = $_FILES["service_1"];

if($name && $location && $contact)
{
	if($conn)
	{
		if($fd && $fd["name"])
		{
				$n_rand = rand(1,50000);
				move_uploaded_file($fd["tmp_name"], "image/" . $n_rand . $fd["name"]);
				$img = $n_rand . $fd["name"];
		}
		else
			$img = "image/default.png";
		$stmt = $conn->prepare("INSERT INTO products (name,location,contact,img) values (:name,:location,:contact, :img)");
		$stmt->execute(array(
    		':name' => $name,
    		":location" => $location,
    		":contact" => $contact,
    		":img" => $img
  		));

  		if($stmt->rowCount() == 1)
  			header("Location: index.php?insert=true");
  		else
  			header("Location: index.php?insert=false");
  			
	}
}
else 
	header("Location: index.php?insert=false");