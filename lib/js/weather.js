

$('#submit').click(function() {

	$.ajax({
		url: "lib/php/getweather.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#data').val(),
			
		},
		success: function(result) {

			console.log(result);
	
try{
			if (result.status.name == "ok" ) {
				
				$('#name1').html("<h2 > Current weather   "+result['data']['name']+" ,  "+result['data']['sys']['country']+" </h2>");
				$('#pressure').html("<h4> <b>Pressure:</b> "+result['data']['main']['pressure']+" hpa</h4>");
				$('#temprature').html("<h4> <b>Temprature: </b>"+result['data']['main']['temp']+" &deg;C </h4>");
				$('#min').html("<h4><b>Min-Temp:</b> "+result['data']['main']['temp_min']+" &deg;C</h4>");
				$('#max').html("<h4><b> Max-temp: </b>"+result['data']['main']['temp_max']+"&deg;C </h4>");
				$('#humidity').html("<h4><b> Humidity:</b> "+result['data']['main']['humidity']+"% </h4>");
				$('#wind').html("<h4><b> Wind Speed: </b>"+result['data']['wind']['speed']+"m/s </h4>");
				
				   
				$("#weather").html("<h4><b> Weather Description:</b><img src='https://openweathermap.org/img/wn/"+result['data']['weather'][0]['icon']+".png'>"+result['data']['weather'][0]['description']+"</h3>");
				 
			
				

			}
		}
		
		catch (err) {
			errorHandler();
			
		}
	 },
	 error: function( jqXHR, textStatus, errorThrown) {
		 //if body is empty we end up here
		 errorHandler();  
	   }
 
	 
 }); 


});
function errorHandler(){
	$('#name').html('')
	$('#main').html('')
	$('#pressure').html('')
	$('#temprature').html('')
	$('#min').html('')
	$('#max').html('')
	$('#humidity').html('')
	$('#wind').html('')
	$("#error").html("<div class ='alert alert-danger' id='errorCity'> <a href ='#'class='close' data-dismiss='alert' aria-label='Close'>&times;</a>City field can not be empty</div>");
}

    