$(document).ready(function () {
	
	
	
	$('input').keydown(function(event){
		
		if(event.keyCode === 13){ apiStart();}
    });
	
	
	
	
	$('#sendButton').click(apiStart);


	
	function apiStart() {
	
	
		var zaprosText = $('#zapros').val();
	

			$.ajax({
          
			url: 'http://api.riffsy.com/v1/search',
			data: {
				limit: 24,
				tag: zaprosText,
			},
	
			dataType : "json",
			success: function (data) {
						console.log(data);
					
					
					
						if (data.results.length == 0){
							
							var inner = '<p>По запросу <b>' + zaprosText + '</b> ничего не найдено.</p><p>Рекомендации:</p><ul><li> Убедитесь, что все слова написаны без ошибок.</li><li>Попробуйте использовать другие ключевые слова.</li><li>Попробуйте использовать более популярные ключевые слова.</li><li>Попробуйте уменьшить количество слов в запросе.</li></ul>';
							$('.answers').html(inner);	
					
						}
						
						
						else {
							
							
							var ul = document.createElement("ul");
							
							$.each(data.results, function(i, val){
							
								var li = document.createElement("li");
					
								var inner = '<img src="' + val.url + '" class="img">' + '<a href="'+val.url+'" class="imgA" target="_blank">'+val.title+"</a>";
							
								li.innerHTML = inner;
								li.className='newli';
								ul.appendChild(li);
								
								
							});
						
							$('.answers').html(ul);

						};
						
						
						
					}
			
	

	});	
	

	
	
}
	
	

	
	

	
	
});