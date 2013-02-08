<!DOCTYPE html>
<html>
<head >
    <title>Upload Files using XMLHttpRequest</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script src="xhruploader0.1.js"></script>
	<link href="xhruploader0.1.css" type="text/css" rel="stylesheet" />
	<script>
	$(document).ready(function() {
$('#upload_me').xhruploader({
url:'upload.php',
filesize:3000,//in mb
allowExts:['gif','png','jpg','jpeg','avi'],
auto:true
})
});
	</script>
</head>
<body>
    
    <div id="upload_me">
    </div>  
</body>
</html>