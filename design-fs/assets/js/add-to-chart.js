//order values

$( document ).ready(function() {

$(".values-order").click(function(e){
		e.preventDefault();
		//alert("The paragraph was clicked.");
		
		$(this).toggleClass("unselect-values select-values"); 
		$(this)
			.parents('.col-md-6')
			.parent('.canvas-order')
			.children('.image-canvas')
			.children('.img__description_layer').toggleClass("img__description_layer-unselect img__description_layer-select")
			.children('p').toggleClass('img__description-unselect img__description-select ');
});

});
//order values 




//order values

$( document ).ready(function() {

$(".healthy-order").click(function(e){
		e.preventDefault();
		//alert("The paragraph was clicked.");
		
		$(this).toggleClass("unselect-healthy select-healthy"); 
		$(this)
			.parents('.col-md-6')
			.parent('.canvas-order')
			.children('.image-canvas')
			.children('.img__description_layer').toggleClass("img__description_layer-unselect img__description_layer-select")
			.children('p').toggleClass('img__description-unselect img__description-select ');
});

});
//order values 

//order values

$( document ).ready(function() {

$(".gourmet-order").click(function(e){
		e.preventDefault();
		//alert("The paragraph was clicked.");
		
		$(this).toggleClass("unselect-gourmet select-gourmet"); 
		$(this)
			.parents('.col-md-6')
			.parent('.canvas-order')
			.children('.image-canvas')
			.children('.img__description_layer').toggleClass("img__description_layer-unselect img__description_layer-select")
			.children('p').toggleClass('img__description-unselect img__description-select ');
});

});
//order values 


