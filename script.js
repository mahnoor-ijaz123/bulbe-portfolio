function witch_on(){
document.getElementById('preview').src='yellow.png';
}
function witch_off(){
document.getElementById('preview').src='white.jpg';
}
$('#changeImage').change(function(){$('#img')[0].src=this.value;

});