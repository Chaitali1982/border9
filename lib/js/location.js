
$('#submit1').click(function(){
var x = document.getElementById("demo");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }



function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;


  var apikey = 'dd23949b2baa4598a19d75070f1be9ae';
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
 

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + apikey
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
   

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status == 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
      //console.log(data);
 

     
     
     
      const countryname = data.results[0].components.country;
   alert(countryname);
      
console.log(countryname);


  
 
      $.ajax({
        url: "lib/php/get.php",
        type: 'POST',
        dataType: 'json',
        data: {
          countryCode: countryname,
          
        },
        success: function(result) {
    
          console.log(result);
        
            if (result.status.name == "ok") {
              
              if (map.hasLayer(border)) {
    
                map.removeLayer(border);
    
            }
    
    
    
            border = L.geoJson(result.data,{
    
                color: '#ff7800',
    
                weight: 2,
    
                opacity: 0.65
    
            }).addTo(map);         
    
           map.fitBounds(border.getBounds());


     

      
      
      $.ajax({
        url: "lib/php/country.php",
        type: 'POST',
        dataType: 'json',
        data: {
          country:countryname,
          
        },
        success: function(result2) {
    
          console.log(result2);
      
            if (result2.status.name == "ok") {
            
              $('#nam').html("<h3><strong>  </strong> "+result2['data'][0]['name']+"</h3>");
              $('#capital1').html("<h4><b>Capital: </b>"+result2['data'][0]['capital']+"</h4>");
              $('#regio').html("<h4><b> Region :</b> "+result2['data'][0]['region']+"</h4>");
              $('#populatio').html("<h4><b> Population :</b> "+result2['data'][0]['population']+"</h4>");
              $('#language').html("<h4><b> Languages :</b> "+result2['data'][0]['languages'][0]['name']+"</h4>");
              $('#currencie').html("<h4><b> Currencies :</b> "+result2['data'][0]['currencies'][0]['name']+"</h4>");
              $('#la').html("<h4><b> Lat and lng :</b> "+result2['data'][0]['latlng']+"</h4>");
              document.querySelector('#countr_flag img').src = result2.data[0].flag;
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
      
       $('#rate1').html("<h4><b>Currency Exchange Rate :</b> "+val+" </h4>");
      }
      }
    })

        
              $.ajax({
                url: "lib/php/getweather.php",
                type: 'POST',
                dataType: 'json',
                data: {
                  country:countryname,
                  
                },
                success: function(result) {
            
                  console.log(result);
    
                  if (result.status.name == "ok" ) {
                    
                    $('#name').html("<h2 > Current weather   "+result['data']['name']+" ,  "+result['data']['sys']['country']+" </h2>");
                    $('#pressur').html("<h4> <b>Pressure:</b> "+result['data']['main']['pressure']+" hpa</p>");
                    $('#tempratur').html("<h4> <b>Temprature: </b>"+result['data']['main']['temp']+" &deg;C </p>");
                    $('#mi').html("<h4><b>Min-Temp:</b> "+result['data']['main']['temp_min']+" </p>");
                    $('#ma').html("<h4><b> Max-temp: </b>"+result['data']['main']['temp_max']+" </p>");
                    $('#humidit').html("<h4><b> Humidity:</b> "+result['data']['main']['humidity']+"% </p>");
                    $('#win').html("<h4><b> Wind Speed: </b>"+result['data']['wind']['speed']+"m/s </p>");
                    
                       
                    $("#weathe").html("<h4><b> Weather Description:</b><img src='https://openweathermap.org/img/wn/"+result['data']['weather'][0]['icon']+".png'>"+result['data']['weather'][0]['description']+"</h3>");
                     
                  }
                }
              });
}
            },
             
              }); 
              
          }
              }
    
 })
              
            
} else if (request.status <= 500){ 
  // We reached our target server, but it returned an error
                       
  console.log("unable to geocode! Response code: " + request.status);
  var data = JSON.parse(request.responseText);
  console.log(data.status.message);
} else {
  console.log("server error");
}
};

request.onerror = function() {
// There was a connection error of some sort
console.log("unable to connect to server");        
};

request.send();  // make the request
}
 
})
              
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       
    



























































































              
        
          