<!DOCTYPE html>
<html data-ng-app="taApplication">
	<head>
		<link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
		<link href="css/ta.css" rel="stylesheet">
	</head>
	<body>
		<div >
		<header>
			<nav class="navbar navbar-default">
				<ul class="nav navbar-nav">
					<li><a href="#/">Home</a></li>
					<li ng-show="role && role=='applicant'" ng-cloak>
						<a href="#/ta_app_form">TA Application Form</a>
					</li>
					<li ng-show="role && role=='applicant'" ng-cloak>
						<a href="#/app_status">Application Status</a>
					</li>
					<li ng-show="role && role=='admin'" ng-cloak>
						<a href="#/manage_apps">Manage Applications</a>
					</li>
					<li ng-show="loggedIn" ng-cloak>
						<a href="#/logout">Logged in as {{ userName }} | <u>Log Out</u></a>
					</li>
					<li ng-show="!loggedIn" ng-cloak><a href="#/login">Log In</a></li>
					<li ng-show="!loggedIn" ng-cloak><a href="#/register">Register</a></li>
				</ul>
			</nav>
		</header>
		<div class="container">
			<h1 ng-cloak class="text-center">Teaching Assistant Application</h1>
			<div ng-show="loginSuccess && !logoutSuccess" class="bg-success col-lg-4" ng-cloak>
				{{ loginSuccess }}
			</div>
			<div ng-show="logoutSuccess && !loginSuccess" class="bg-success col-lg-4" ng-cloak>
				{{ logoutSuccess }}
			</div>
			<div ng-show="registrationSuccess" class="bg-success col-lg-4" ng-cloak>
				{{ registrationSuccess }}
			</div>
			<div ng-show="appCreationSuccess" class="bg-success col-lg-4" ng-cloak>
				{{ appCreationSuccess }}
			</div>
		</div>
		<div>
		<main>
			<div ng-view class="container"></div>
		</main>
		<footer class="footer">
		</footer>
	</body>

	<!-- Application Dependencies --> 
	<script src="bower_components/angular/angular.js" type="text/javascript"></script>
	<script src="bower_components/angular-route/angular-route.js" type="text/javascript"></script>
	<script src="bower_components/angular-messages/angular-messages.js" type="text/javascript"></script>
	<script src="bower_components/angular-cookies/angular-cookies.js" type="text/javascript"></script>

	<!-- Application Scripts -->
	<script src="scripts/app.js" type="text/javascript"></script>
	<script src="scripts/services/taApplicationFactory.js" type="text/javascript"></script>
	<script src="scripts/controllers/loginController.js" type="text/javascript"></script>
	<script src="scripts/controllers/logoutController.js" type="text/javascript"></script>
	<script src="scripts/controllers/indexController.js" type="text/javascript"></script>
	<script src="scripts/controllers/registrationController.js" type="text/javascript"></script>
	<script src="scripts/controllers/taAppFormController.js" type="text/javascript"></script>
	<script src="scripts/controllers/manageApplicationsController.js" type="text/javascript"></script>
	<script src="scripts/controllers/appStatusController.js" type="text/javascript"></script>
	<script src="scripts/controllers/appShowController.js" type="text/javascript"></script>
	<script src="scripts/directives/passConfirmation.js" type="text/javascript"></script>
</html>