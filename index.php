
<!doctype html>
<html lang="en">
		<head>
		  <title></title>
		  <meta charset="utf-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1">

		    <!-- Load my style -->
        <link rel="stylesheet" href="lib/css/style.css">
     
      <link rel="shortcut icon" href="">
      <!-- Load Bootstrap -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Load Leaflet from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
    <!-- Load Esri Leaflet from CDN -->
   <script src="https://unpkg.com/esri-leaflet@2.5.1/dist/esri-leaflet.js"
    integrity="sha512-q7X96AASUF0hol5Ih7AeZpRF6smJS55lcvy+GLWzJfZN+31/BQ8cgNx2FGF+IQSA4z2jHwB20vml+drmooqzzQ=="
    crossorigin=""></script>
  <!-- Load Esri Leaflet Geocoder from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.css"
    integrity="sha512-IM3Hs+feyi40yZhDH6kV8vQMg4Fh20s9OzInIIAc4nx7aMYMfo+IenRUekoYsHZqGkREUgx0VvlEsgm7nCDW9g=="
    crossorigin="">
  <script src="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.js"
    integrity="sha512-HrFUyCEtIpxZloTgEKKMq4RFYhxjJkCiF5sDxuAokklOeZ68U2NPfh4MFtyIVWlsKtVbK5GD2/JzFyAfvT5ejA=="
    crossorigin=""></script>
   <script src="https://kit.fontawesome.com//22c417b056.js" crossorigin="anonymous"></script>
</head>

<body>


<div class ="heading"><h4>GAZETTEER</h4></div>


<div class="navbar">

<a href="#"><div class="select"><select  id="data"> <option selected>select country</option></select></div></a>
<a href="#"><button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="submit" data-target="#myModal"><i class="fa fa-bars " style="color:blue"></i></button></a>
<a href="#"><button type="button" class="btn btn-info btn-lg"  id="remove" ><i class="fas fa-minus-circle " style="color:red"></i></button></a><a href="#"><button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="submit1" data-target="#myModal1"><li class="fa fa-home fa-1x" style="color:green"></li></button></a>
<a  href="#"><button type="button" class="btn btn-info btn-lg"  id="airport" ><li class="fas fa-fighter-jet"  style="color:black"></li></button></a>
</div>

<div  id="map"  ></div>
<div id="demo"></div>
<div id="basemaps-wrapper" class="leaflet-bar">
<select id="basemaps">
        <option value="Topographic">Topographic</option>
        <option value="Streets">Streets</option>
        <option value="Oceans">Oceans</option>
        <option value="Gray">Gray</option>
        <option value="Imagery">Imagery</option>
        <option value="ImageryClarity">Imagery (Clarity)</option>
        <option value="ImageryFirefly">Imagery (Firefly)</option>
        <option value="Physical">Physical</option>
      </select>
    
  </div>



  
  

  <div id ="myModal"  class="modal">
		  <div class="modal-dialog">
		  <div class="modal-content" id="row2">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="name"></p>  </h4>
         <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>
        </div>
			  <div class="modal-body">
        <table>
<tr>	<td id="country_flag">
							<img src="" alt=""    style="width:300px;height:150px;" > </tr></table>
              </div>
<div class="modal-footer">
<div class="row" id ="row1">
        <button type="button" class="btn btn-primary" data-toggle="modal"      data-target="#test2"  id="btn1"><h4><b>Country </b></h4> </button>
        <button type="button" class="btn btn-primary" data-toggle="modal"      data-target="#test3"  id="btn2"><h4><b>Weather </b></h4></button>
</div>
</div>
</div>
</div>
</div> 	


  <div id ="test2"  class="modal">
		  <div class="modal-dialog">
		   <div class="modal-content">
      <div class="modal-body">
				<div class="row">
 <h3 style=  "text-align: center;  list-style-type:none;"> Country Information</h3>
 <table>
	<tr><td id="capital"></td></tr>								 
  <tr><td id="region"></td></tr>						  
  <tr><td id="population"></td></tr>								
  <tr><td id="currencies"></td></tr>
  <tr><td id="languages"></td></tr>	
  <tr><td id="rate"></td></tr>					
 </table>	
</div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
 </div> 	





  <div id ="test3"  class="modal">
		  <div class="modal-dialog">
		<div class="modal-content">
			 <div class="modal-body">
				<div class="row">
        <h3 style=  "text-align: center;  "> Country  Weather Information</h3>
       <table>
<tr><td id="weather"></td></tr>	
<tr><td id="temprature"></td></tr>								  
<tr><td id="min"></td></tr>								
<tr><td id="max"></td></tr>							  
<tr><td id="humidity"></td>	</tr>							 
<tr><td id="wind"></td>	</tr>							
							  
<tr><td id="pressure"></td></tr>		
<tr><td id="border"></td></tr>	
</table>	
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 </div>
</div>
 </div>
  </div> 	











  <div id ="myModal1"  class="modal">
		  <div class="modal-dialog">
		    <div class="modal-content" id="row5">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="nam"></p>
        </h4>
        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <div id ="flag">
        <div class = "loader"></div>
      
<table>
          
<tr>	<td id="countr_flag">
							<img src="" alt=""    style="width:300px;height:150px;" > </tr></table>
              </div>
              
<div class="modal-footer">
<div class="row" id ="row1">
        <button type="button" class="btn btn-primary" data-toggle="modal"      data-target="#test4"  id="btn3"><h4><b>Country </b></h4> </button>
        <button type="button" class="btn btn-primary" data-toggle="modal"      data-target="#test5"  id="btn4"><h4><b>Weather </b></h4></button>


</div>
</div>
</div>
</div>
</div> 	


<div id ="test4"  class="modal">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<div class="row6">
 <h3 style=  "text-align: center;  list-style-type:none;"> Country Information</h3>
 <table>
  <tr><td id="capital1"></td></tr>								 
  <tr><td id="regio"></td></tr>						  
  <tr><td id="populatio"></td></tr>								
  <tr><td id="currencie"></td></tr>
  <tr><td id="language"></td></tr>	
  <tr><td id="rate1"></td></tr>					
	</table>	
		</div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
 </div>
  </div> 	





  <div id ="test5"  class="modal">
		  <div class="modal-dialog">
		  <div class="modal-content">
			<div class="modal-body">
				<div class="row5">
        <h3 style=  "text-align: center;  "> Country  Weather Information</h3>
<table>
	<tr><td id="weathe"></td></tr>
<tr><td id="tempratur"></td></tr>								  
<tr><td id="mi"></td></tr>								
<tr><td id="ma"></td></tr>							  
<tr><td id="humidit"></td>	</tr>							 
<tr><td id="win"></td>	</tr>							
<tr><td id="pressur"></td></tr>		
<tr><td id="border"></td></tr>	
</table>	
</div>
</div>
<div class="modal-footer">
      
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
</div>
 </div>
  </div> 



<script src="lib/js/select.js"></script>
<script src="lib/js/border.js"></script>
<script src="lib/js/mark.js"></script>
<script src="lib/js/location.js"></script>
<script src="lib/js/useboundary.js"></script>
<script src="lib/js/country1.js"></script>
<script src="lib/js/weather.js"></script>


</body>
</html>

 
  


