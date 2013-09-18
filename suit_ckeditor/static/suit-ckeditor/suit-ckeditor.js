jQuery(function(){
    		            
    function init_cke(){
    	$('textarea[data-type=ckeditortype]').each(function(){
					// console.log(this, $(this).attr('id'), Suit.$(this).data('processed'))
    	        	if(Suit.$(this).data('processed') == "0" && Suit.$(this).attr('id').indexOf('__prefix__') == -1){
    		            Suit.$(this).data('processed',"1");
    		            CKEDITOR.replace(Suit.$(this).attr('id'), Suit.$(this).data('config'));
    		        }
    		    });
    }
    

	init_cke();

	Suit.$(document).on('click', '.add-row a' , function(event){
		init_cke();
		return true;
	});

	Suit.$(document).on('click', 'a.sortable' , function(event){
		$(this).closest('.form-row').find('textarea[data-type=ckeditortype]').each(function(index, element){
			var id = $(element).attr('id');
			var instance = CKEDITOR.instances[id];
	        if (instance) {
				$('.'+instance.id).remove()
	            CKEDITOR.remove(instance);
	        }
			CKEDITOR.replace(id, $(element).data('config'));
	
		});
		return true;
	});
	
	
});
