
$('#submit').click(function() {

	$.ajax({
		url: "lib/php/country.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#data').val(),
			
		},
		success: function(result2) {

			console.log(result2);
			try{
				if (result2.status.name == "ok") {
					$('#name').html("<h3><strong>"+result2['data'][0]['name']+"<strong></h3>");
					$('#name1').html("<h2>    "+result2['data'][0]['name']+" information</h2>");
					$('#capital').html("<h4><b>Capital: </b>"+result2['data'][0]['capital']+" </h4>");
					$('#region').html("<h4><b> Region :</b> "+result2['data'][0]['region']+" </h4>");
					$('#population').html("<h4><b> Population :</b> "+result2['data'][0]['population']+" </h4>");
					$('#languages').html("<h4><b> Languages :</b> "+result2['data'][0]['languages'][0]['name']+" </h4>");
					$('#currencies').html("<h4><b> Currencies :</b> "+result2['data'][0]['currencies'][0]['code']+" </h4>");
					$('#lat').html("<h4><b>Lat and lng : </b>"+result2['data'][0]['latlng']+" </h4>");
					document.querySelector('#country_flag img').src = result2.data[0].flag;
			const currency = result2['data'][0]['currencies'][0]['code'];
				console.log(currency);
               const country =result2['data'][0]['name'];



				var name = currency;
				console.log(name);

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
	

     type: 'POST',
    dataType: 'json',

    data: {
		name: name,
    },
    url: 'lib/php/ex.php',

    success: function(result2) {
console.log(result2);

var cor = result2.data.rates;
console.log(cor);



cor['key'] = name;
if('key' in cor) {      // true
	console.log(cor.key);   // >> value
 var god =cor.key;
 console.log(god);
 var val = cor [god]; 
 console.log(val);

 $('#rate').html("<h4><b>Currency Exchange Rate :</b> "+val+" </h4>");
				
}
}
   
});

					
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
		
	$('#country_flag img').attr('src','');
	$('#name').html('')
	$('#capital').html('')
	$('#regio').html('')
	$('#population').html('')
	$('#currencies').html('')
	$('#languages').html('')
	$('#lat').html('')
	$("#error").html("<div class ='alert alert-danger' id='errorCity'> <a href ='#'class='close' data-dismiss='alert' aria-label='Close'>&times;</a>City field can not be empty</div>");
	}                           


