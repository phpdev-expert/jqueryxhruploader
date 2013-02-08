<?php
/*$uploaddir ='ajaxupload';
echo $uploadfile = $uploaddir . basename($_FILES['xhrUpload']['name']);
echo "<p>";
if (move_uploaded_file($_FILES['xhrUpload']['tmp_name'], $uploadfile)) {
  echo "File is valid, and was successfully uploaded.\n";
} else {
   echo "Upload failed";
}
echo "</p>";
echo '<pre>';
echo 'Here is some more debugging info:';*/
print_r($_FILES);
/*print "</pre>";*/

?>