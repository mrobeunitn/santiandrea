<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Loading Effects for Grid Items | Demo 1</title>
		<meta name="description" content="Loading Effects for Grid Items with CSS Animations" />
		<meta name="keywords" content="css animation, loading effect, google plus, grid items, masonry" />
		<meta name="author" content="Codrops" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/modernizr.custom.js"></script>
		<link rel="shortcut icon" href="../favicon.ico"> 
		<link rel="stylesheet" type="text/css" href="css/default.css" />
        <link rel="stylesheet" type="text/css" href="css/image_mask.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	</head>
	<body>
        <div class="container-fluid">
		<div class="container">
			<header>
                <a href="index.html" style="text-decoration:none"><h1>andrea santi</h1></a>
                    <nav class="navbar navbar-default" style="background-color:white; border:0px; text-align:center;">
                      <div class="container-fluid">
                        <div class="navbar-header" style="text-align:center;">
                            <!-- Brand and toggle get grouped for better mobile display -->
                              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"  style="border:0px;">
                                <span class="sr-only">Toggle navigation</span>
                              </button>
                        </div>
			    <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul class="nav navbar-nav">
                            <li>
                               <a href="works.html">about me</a>
                            </li>
                            <li><a href="works.html">works</a></li>
                            <!--<li><a href="photo.html">photography</a></li>-->
                            <li><a href="contacts.html">contacts</a></li>
                          </ul>
                        </div><!-- /.navbar-collapse -->
                      </div><!-- /.container-fluid -->
                    </nav>
            </header>
            <form action = "http://127.0.0.1:1337/" method="post">
                <input type="submit" value="1">
            </form>
			<ul class="grid effect-2" id="grid">
				(:html_formatted:)
			</ul>
		</div>
		<script src="js/masonry.pkgd.min.js"></script>
		<script src="js/imagesloaded.js"></script>
		<script src="js/classie.js"></script>
		<script src="js/AnimOnScroll.js"></script>
		<script>
			new AnimOnScroll( document.getElementById( 'grid' ), {
				minDuration : 0.4,
				maxDuration : 0.7,
				viewportFactor : 0.2
			} );
		</script>
        </div>
        <div class="panel-footer" id="footer">
			Marco Roberti. <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"> </span> All rights reserved.
		</div>
	</body>
</html>