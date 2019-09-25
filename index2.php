<?php
var $variaveltest = 3;
?> 
<html>
<head>
<title>Color Palette</title>
<link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<input type="color" onchange="alert(this.value)">
<table border ="1">
<caption>a caption</caption>
<tr><th>ok1</th><th>ok2</th></tr>
<tr><td rowspan="2">Catherine</td><td>dad</td></tr>
<tr><td>mom<?=htmlentities($variaveltest)?></td></tr>
</body>
</html>