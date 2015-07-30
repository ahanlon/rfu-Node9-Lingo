$(document).on('ready', function () {

	var randomWords = ['juice', 'coffee', 'bottle', 'mountain', 'boots', 'chicken', 'table', 'cat', 'dog',
	'house', 'street', 'number', 'glass', 'car', 'hair', 'pen', 'hello', 'goodbye', 'lamp', 'hat', 'beard',
	'book', 'computer', 'keys', 'mouse']

	$('#translateWord').on('submit', function(e){
		e.preventDefault();
		$.ajax ({
			method  : 'POST',
			url     : '/trans',
			data    : $(this).serialize(),
			success : function(data){
				$('#translated').text(data)
			}
		})
		console.log('WORD TEST')
	})

	$('#Whatever').on('submit', function(e){
		e.preventDefault();
		$.ajax ({
			method   : 'POST'
			url      : '/quiz'
			data     : $(this).serialize(),
			success  : function(data){
				$('.randomWord').text(data)	
			}
		})

	})







});