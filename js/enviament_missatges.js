function send_missage() 
{
	var m = $('#message').val();
	$('#messages').append('<li>'+m+'</li>');
	var m = $('#message').val('');
}