$(document).on('ready', function () {


	$('#translateWord').on('submit', function(e){
		e.preventDefault();
		var input = $('.word').text()
		$.ajax ({
			method : 'POST',
			url    : '/trans',
			data   :  $(this).serialize()
		})
		console.log('WORD TEST')
	})







});