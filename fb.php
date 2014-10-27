<?php 

$search = $_GET['search'];
$contents = file_get_contents('https://graph.facebook.com/' . $search);
echo $contents;
