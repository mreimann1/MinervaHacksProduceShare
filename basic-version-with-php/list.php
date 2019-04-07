<?php
include "connect.php";

function generateHtml($conn)
{
	if($conn)
	{
		$stmt = $conn->query("SELECT * FROM  products LIMIT 20");
		while($product = $stmt->fetch(PDO::FETCH_OBJ))
		{
			$html = "<div class='col-md-4'> " .
						"<div class='col-md-12 product'> "  . "<img src='image/" . $product->img . "'/>" . "</div>"  .
						"<div class='col-md-12 product'> "  . "Name: " . $product->name . "</div>"  .
						"<div class='col-md-12 product'> "  . "Location: " . $product->location . "</div>" .
						"<div class='col-md-12 product'> "  . "Contact: " . $product->contact . "</div>" .
					"</div>";
			echo $html;
		}
	}

	else
	{
		echo "Some error occuer";
	}
}

/*
$html = "<div class='col-md-4'> " .
						"<div class='col-md-12 product'> "  . "<img src='image/" . $product->img . "'/>" "</div>"  .
						"<div class='col-md-12 product'> "  . "Name: " . $product->name . "</div>"  .
						"<div class='col-md-12 product'> "  . "Location: " . $product->location . "</div>" .
						"<div class='col-md-12 product'> "  . "Contact: " . $product->contact . "</div>" .
					"</div>";*/
?>