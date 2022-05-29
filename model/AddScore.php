<?php
//common.php since connectionmanager is witihin model
require_once "common.php";
$data = json_decode(file_get_contents("php://input"),true);

// var_dump($highscore,$HSname);
//Data passed by axios
$score = $data["score"];
$connMgr = new ConnectionManager();
$conn = $connMgr->getConnection();
    
    
$sql = "INSERT INTO hangmanLeaderboard (score) VALUES (:score)";
$stmt = $conn->prepare($sql);

$stmt->bindParam(":score", $score, PDO::PARAM_INT);

$stmt->execute();

$stmt = null;
$conn = null;
}
?>
