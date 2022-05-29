<?php

require_once 'common.php';

$connMgr = new ConnectionManager();
$conn = $connMgr->getConnection();

// STEP 2
$sql = "SELECT * FROM hangmanLeaderboard ORDER BY score"; // SELECT * FROM highscores; 
$stmt = $conn->prepare($sql);

// STEP 3
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_ASSOC);

// STEP 4
$scores = []; // Indexed Array of Post objects
while( $row = $stmt->fetch() ) {
    $scores[] = $row['score']
}

// STEP 5
$stmt = null;
$conn = null;

// make posts into json and return json data
$scoresJSON = json_encode($scores);
echo $scoresJSON;
?>

