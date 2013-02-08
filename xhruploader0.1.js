// jquery xhr upload
jQuery.fn.xhruploader = function(options) {
 var defaults = {
 url:'',
 parms:'',
 allowExts : 'all',
 filesize:2,
 mutiple:false,
 width:'',
 text:'Select File',
 height:'',
 auto:true
 };

 var o = jQuery.extend(defaults, options);
 var maxFileSize=o.filesize;
 var uploadUrl=o.url;
 var inputText=o.text;
 var fileType=o.allowExts;
 var autoUpload=o.auto;
 var multifile=o.mutiple;

 return this.each(function() {
   var e = jQuery(this);
   var elem=e.attr("id")+"_xhruploader";
   if(multifile){
	   e.html('<div class="xhruploader" >'+inputText+'<input type="file" name="'+elem+'fileToUpload" id="'+elem+'fileToUpload" style="cursor:pointer" multiple="" /></div><div id="xhractionparent"><ul id="uploadlist"></ul><div id="xhraction" style="cursor:pointer"> upload </div></div><div class="szlider" id="xhruploaderszlider"><div class="szliderbar" id="xhruploaderszliderbar"></div><div class="szazalek" id="xhruploaderszazalek"></div></div>');
   }else{
   e.html('<div class="xhruploader" >'+inputText+'<input type="file" name="'+elem+'fileToUpload" id="'+elem+'fileToUpload" style="cursor:pointer" /></div><div id="xhractionparent"><ul id="uploadlist"></ul><div id="xhraction" style="cursor:pointer"> upload </div></div><div class="szlider" id="'+elem+'szlider"><div class="szliderbar" id="'+elem+'szliderbar"></div><div class="szazalek" id="'+elem+'szazalek"></div></div>');
   }


if(autoUpload){
jQuery('#xhraction').hide();
jQuery('#xhractionparent').hide();
xhractionparent
jQuery('#'+elem+'fileToUpload').change(function(){
fileSelected();
})
}
else{
	jQuery('#xhraction').show();
	jQuery('#xhractionparent').show();
	jQuery('#xhraction').click(function(){
    fileSelected();
})
jQuery('#'+elem+'fileToUpload').change(function(){
 for (var x = 0; x< document.getElementById(elem+'fileToUpload').files.length; x++) {
	 jQuery('#uploadlist').append('<li>'+document.getElementById(elem+'fileToUpload').files[x].name+'</li>');	
}
												   
													   
})
	
}
function fileSelected() {
	jQuery('#uploadlist').html('');
	var upload=1;
	if(fileType!='all'){
		 for (var x = 0; x< document.getElementById(elem+'fileToUpload').files.length; x++) {
		var ext = document.getElementById(elem+'fileToUpload').files[x].name.split('.').pop().toLowerCase();
		if($.inArray(ext,fileType) == -1) {
		alert('invalid extension!   ');
		upload=0;
		}
		}
	}
	 for (var x = 0; x< document.getElementById(elem+'fileToUpload').files.length; x++) {
      var file = document.getElementById(elem+'fileToUpload').files[x];
        if (file) {
          var fileSize = 0;
          if (file.size > 1024 * 1024){
		    var infileSize=(Math.round(file.size * 100 / (1024 * 1024)) / 100);
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
			if(infileSize>maxFileSize){
			alert('Upload Faild Maximum file size '+maxFileSize+' MB');
			 upload=0;
			}
			}
          else
         fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
        }
	 }
	 if(upload)
	 uploadFile();
      }
function uploadFile() {
        var fd = new FormData();
		 for (var x = 0; x< document.getElementById(elem+'fileToUpload').files.length; x++) {
        fd.append("xhrUpload[]", document.getElementById(elem+'fileToUpload').files[x]);
		 }
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST",uploadUrl);
        xhr.send(fd);
      }
function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById(elem+"szlider").style.display='block';
		  document.getElementById(elem+"szliderbar").style.width=percentComplete+'%';
          document.getElementById(elem+"szazalek").innerHTML=percentComplete+'%';
        }
        else {
        }
      }

      function uploadComplete(evt) {
         document.getElementById(elem+"szlider").style.display='none';
		alert('File uploaded successfully');
      }

      function uploadFailed(evt) {
		alert('There was an error attempting to upload the file');
      }

      function uploadCanceled(evt) {
		alert('The upload has been canceled by the user or the browser dropped the connection.');
      }
  });
};