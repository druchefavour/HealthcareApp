<!DOCTYPE html>
<html lang="en"> 
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
	<title>Nurses - Responsive HTML &amp; Bootstrap Template</title>
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:600italic,400,800,700,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=BenchNine:300,400,700' rel='stylesheet' type='text/css'>
	<script src="js/modernizr.js"></script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBplrQwIrMCLwjxzLP4TapghkjsP5mzKRY&libraries=places"></script>
	<!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->

</head>
<body>
	
	<!-- ====================================================
	header section -->
	<header class="top-header">
		<div class="container">
			<div class="row">
				<div class="col-xs-3 header-logo">
					<br>
					<a href="index.html"><img src="img/lifelinklogo.jpg" alt="" class="img-responsive logo"></a>
				</div>

				<div class="col-md-9">
					<nav class="navbar navbar-default">
					  <div class="container-fluid nav-bar">
					    <!-- Brand and toggle get grouped for better mobile display -->
					    <div class="navbar-header">
					      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					        <span class="sr-only">Toggle navigation</span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					      </button>
					    </div>

					    <!-- Collect the nav links, forms, and other content for toggling -->
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      
					      <ul class="nav navbar-nav navbar-right">
					        <li><a class="menu active" href="#home" >Home</a></li>
					        <li><a class="menu" href="#about">about us</a></li>
					        <li><a class="menu" href="#service">how it works </a></li>
					        <li><a class="menu" href="#team">profile</a></li>
					        <li><a class="menu" href="#contact">free consult</a></li>
					      </ul>
					    </div><!-- /navbar-collapse -->
					  </div><!-- / .container-fluid -->
					</nav>
				</div>
			</div>
		</div>
	</header> <!-- end of header area -->

	<section class="slider" id="home">
		<div class="container-fluid">
			<div class="row">
			    <div id="carouselHacked" class="carousel slide carousel-fade" data-ride="carousel">
					<div class="header-backup"></div>
			        <!-- Wrapper for slides -->
			        <div class="carousel-inner" role="listbox">
			            <div class="item active">
			            	<img src="img/slide-one.jpg" alt="">
			                <div class="carousel-caption">
		               			<h1>Linking</h1>
		               			<p>patients with nurses</p>
		               			<button><a href="#about">learn more</a></button>
			                </div>
			            </div>
			            <div class="item">
			            	<img src="img/slide-two.jpg" alt="">
			                <div class="carousel-caption">
		               			<h1>Linking</h1>
		               			<p>healthcare organizations with nurses</p>
		               			<button><a href="#about">learn more</a></button>
			                </div>
			            </div>
			            <div class="item">
			            	<img src="img/slide-three.jpg" alt="">
			                <div class="carousel-caption">
		               			<h1>Linking</h1>
		               			<p>patients with concierge healthcare providers</p>
		               			<button><a href="#about">learn more</a></button>
			                </div>
			            </div>
			        </div>
			        <!-- Controls -->
			        <a class="left carousel-control" href="#carouselHacked" role="button" data-slide="prev">
			            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			            <span class="sr-only">Previous</span>
			        </a>
			        <a class="right carousel-control" href="#carouselHacked" role="button" data-slide="next">
			            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			            <span class="sr-only">Next</span>
			        </a>
			    </div>
			</div>
		</div>
	</section><!-- end of slider section -->

	<!-- about section -->
	<section class="about text-center" id="about">
		<div class="container">
			<div class="row">
				<h2>about us</h2>
				<h4>Welcome to LifeLink. Our passion is linking those who are in need of skilled nursing services with highly-qualified, professional nurses. Whether you are a nurse, patient, healthcare organization or insurance agency we have the right link for you!</h4>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail clearfix">
						<div class="about-img">
							<img class="img-responsive" src="img/item1.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<img class="img-responsive" src="img/nurseIcon.png" alt=""></img>
							</div>
							<h3>Nurses</h3>
							<p>Nurses, are you looking for work? Whether it's full-time, part-time, temporary or permanent-we can help!</p> 
							<p><a href="Nurses_Register/nurses_register_1.html">Click Here To Register For Free</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail">
						<div class="about-img">
							<img class="img-responsive" src="img/item2.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<img class="img-responsive" src="img/patientIcon.png" alt=""></img>
							</div>

							<h3>Patients</h3>
							<p>Are you a healthcare organization or patient needing professional nursing services? We can help!</p>
							<p><a href="SignInLink/registration.html">Click Here To Register For Free</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-about-detail">
						<div class="about-img">
							<img class="img-responsive" src="img/item3.jpg" alt="">
						</div>
						<div class="about-details">
							<div class="pentagon-text">
								<img class="img-responsive" src="img/physicianIcon.png" alt=""></img>
							</div>
							<h3>Concierge Care</h3>
							<p>Are you in need of physician services provided in the convenience of your home? We can help!</p>
							<p><a href="Nurses_Register/nurses_register.html">Click Here To Register For Free</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section><!-- end of about section -->


	<!-- service section starts here -->
	<section class="service text-center" id="service">
		<div class="container">
			<div class="row">
				<h2>How It Works</h2>
				<h4>Using LifeLink can be done in four simple steps:</h4>
				<div class="col-md-3 col-sm-6">
					<div class="single-service">
						<div class="single-service-img">
							<div class="service-img">
								<h1 class="number">1</h1>
							</div>
						</div>
						<h3><a class="stepOne" href="SignInLink/registration.html">Register for FREE</a></h3>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="single-service">
						<div class="single-service-img">
							<div class="service-img">
								<h1 class="number">2</h1>
							</div>
						</div>
						<h3>Answer a few questions related to your needs.</h3>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="single-service">
						<div class="single-service-img">
							<div class="service-img">
								<h1 class="number">3</h1>
							</div>
						</div>
						<h3>Search for nurses in your area.</h3>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="single-service">
						<div class="single-service-img">
							<div class="service-img">
								<h1 class="number">4</h1><!-- <img class="bone img-responsive" src="img/service4.png" alt=""> -->
							</div>
						</div>
						<h3>Pick your nurse and confirm the schedule</h3>
					</div>
				</div>
			</div>
		</div>
	</section><!-- end of service section -->


	<!-- team section -->
	<section class="team" id="team">
		<div class="container">
			<div class="row">
				<div class="team-heading text-center">
					<h2>Profile of our nurses</h2>
					<h4>Below is the profile of featured nurses. Check it out.</h4>
				</div>
				<div class="col-md-4 single-member col-sm-4">
					<div class="person">
						<img class="img-responsive" style="height:250px" src="https://files.slack.com/files-pri/T2E15A9E3-F3FMZ566T/student-profile-helen-jervis.jpg" alt="member-1">
					</div>
					<div class="person-detail">
						<div class="arrow-bottom"></div>
						<h3> Mary McCain</h3>
						<p>Enthusiastic, compassionate nursing professional with 11+ years of experience as a Registered Nurse. Possess incomparable knowledge of the nursing processes, professional standards of nursing and a track record of maintaining confidentiality and protecting sensitive data at all times. Dynamically capable of initiating discharge planning based on assessed needs specifically keeping in mind the organizational and department safety standards. Current Texas State Licensure as a Registered Nurse and BLS certificate. Devoted to provide utmost level of ease and care to patients</p>
					</div>
				</div>
				<div class="col-md-4 single-member col-sm-4">
					<div class="person-detail">
						<div class="arrow-top"></div>
						<h3>Jenny Page</h3>
						<p>Energetic, sensible individual working over the last 9 years as an Occupational Health Nurse. Diversely experienced in conducting clinical assessments. Substantial knowledge of coordinating occupational health programs and advising employees on prevention of illness and injury. Well versed in providing emergency treatment for injury and illness, communicating with management on occupational health issues along with proficiently handling health screening procedures. Assured exhibition of professionalism and integrity at all times. Active Certifications include: Audiometry, Blood-borne Pathogens Training Certificate and CPR (Cardio Pulmonary Resuscitation)</p>
					</div>
					<div class="person">
						<img style="height:250px" class="img-responsive" src="https://files.slack.com/files-tmb/T2E15A9E3-F3F1R1GSW-3470ab019c/anglade_2015_360.jpg" alt="member-2">
					</div>
				</div>
				<div class="col-md-4 single-member col-sm-4">
					<div class="person">
						<img class="img-responsive" style="height:250px" src="https://files.slack.com/files-tmb/T2E15A9E3-F3EAD5STA-4c091ec7c9/team-3_360.jpg" alt="member-3">
					</div>
					<div class="person-detail">
						<div class="arrow-bottom"></div>
						<h3>Martha Spaine</h3>
						<p>A compassionate professional with 7+ years’ experience as a Plant Nurse. Specializes in conducting pre-employment, post-accident, and random drug screens. Proficient in supervising pre-placement physicals on all new hires along with recording all information on the medical health questionnaire. Adept at performing emergency first aid to all employees who require it and ordering first aid supplies for facility. A conscientious and resolute individual determined to accomplish quality performance that meets expectations of the position/company.</p>
					</div>
				  </div>
				</div>
				<div class="row">
				  <div class="col-md-4 single-member col-sm-4">
				   <div class="person-detail">
						<div class="arrow-top"></div>
						<h3>Celine Harbor</h3>
						<p>Highly-accomplished, achievement-driven healthcare expert having more than a decade of experience in the field of nursing as a Registered Nurse. Unsurpassed knowledge of symptoms and complications associated with surgery and anesthesia including initial treatment. Demonstrated ability to immediately identify medical and surgical complications by conducting ongoing surveillance. Thorough working knowledge of catheterization, ventilator care and pain management. Committed to enhance the quality of patient care through competent, skilled nursing diagnosis, promising patients a healthier and happy life</p>
					</div>
					<div class="person">
						<img class="img-responsive" style="height: 250px" src="https://files.slack.com/files-tmb/T2E15A9E3-F3F4AQKRT-2f232b4cd1/liverpoolc_360.jpg" alt="member-4">
					</div>
				</div>
				<div class="col-md-4 single-member col-sm-4">
					<div class="person">
						<img class="img-responsive" src="img/member5.jpg" alt="member-5">
					</div>
					<div class="person-detail">
						<div class="arrow-bottom"></div>
						<h3>Concierge Doctor</h3>
						<p>My name is Dr. Fransisco Gonzalez and I am a licensed physician that specializes in Geriatrics. I have ten years of experience and am willing to travel to all of Houston.</p>
					</div>
				</div>
				<div class="col-md-4 single-member col-sm-4">
					<div class="person-detail">
						<div class="arrow-top"></div>
						<h3>Pediatric Nurse</h3>
						<p>My name is Shelly and I have four years of Pediatric nursing experience. I am a licensed LVN and prefer to work with patients that live in Northwest Houston.</p>
					</div>
					<div class="person">
						<img class="img-responsive" src="img/member6.jpg" alt="member-5">
					</div>
				  </div>
				</div>
			</div>
		</div>
	</section><!-- end of team section -->

	<!-- map section -->
	<div class="api-map" id="contact">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12 map" id="map"></div>
			</div>
		</div>
	</div><!-- end of map section -->

	<!-- contact section starts here -->
	<section class="contact">
		<div class="container">
			<div class="row">
				<div class="contact-caption clearfix">
					<div class="contact-heading text-center">
						<h2>Want to learn more on how we can help you or your patient?</h2>
					</div>
					<div class="col-md-5 contact-info text-left">
						<h3>contact information</h3>
						<div class="info-detail">
							<ul><li><i class="fa fa-calendar"></i><span>Monday - Friday:</span> 9:30 AM to 6:30 PM</li></ul>
							<ul><li><i class="fa fa-map-marker"></i><span>Address:</span> 123 Some Street , London, UK, CP 123</li></ul>
							<ul><li><i class="fa fa-phone"></i><span>Phone:</span> (032) 987-1235</li></ul>
							<ul><li><i class="fa fa-fax"></i><span>Fax:</span> (123) 984-1234</li></ul>
							<ul><li><i class="fa fa-envelope"></i><span>Email:</span> info@doctor.com</li></ul>
						</div>
					</div>
					<div class="col-md-6 col-md-offset-1 contact-form">
						<h3>request a free consultation</h3>

						<form class="form">
							<input class="name" type="text" placeholder="Name">
							<input class="email" type="email" placeholder="Email">
							<input class="phone" type="text" placeholder="Phone No:">
							<textarea class="message" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
							<input class="submit-btn" type="submit" value="SUBMIT">
						</form>
					</div>
				</div>
			</div>
		</div>
	</section><!-- end of contact section -->

	<!-- footer starts here -->
	<footer class="footer clearfix">
		<div class="container">
			<div class="row">
				<div class="col-xs-6 footer-para">
					<p>Front-End Development: &copy;Mostafizur and &copy;Two Guys One Girl All right reserved
					and Back-End Development: &copy;Two Guys One Girl All rights reserved</p>
				</div>
				<div class="col-xs-6 text-right">
					<a href=""><i class="fa fa-facebook"></i></a>
					<a href=""><i class="fa fa-twitter"></i></a>
					<a href=""><i class="fa fa-skype"></i></a>
				</div>
			</div>
		</div>
	</footer>

	<!-- script tags
	============================================================= -->
	<script src="js/jquery-2.1.1.js"></script>
	<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script src="js/gmaps.js"></script>
	<script src="js/smoothscroll.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/custom.js"></script>
</body>
</html>