var examples = document.querySelector("#examples");

var imageSwap = function () {
    var $this = $(this);
    var newSource = $this.data('swap');
    $this.data('swap', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
  $('img.playgif').hover(imageSwap, imageSwap);
});

$("#moreInfo").hide(); 
setTimeout(function(){ 
	$("#moreInfo").show(); 
},5000); 
