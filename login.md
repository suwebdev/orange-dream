<!--<div id="navbar" class="navbar-collapse collapse">
  <div class="navbar-right user-info">Welcome, <span class="user-fullname">First Last</span> <a class="btn btn-default btn-sm">Logout</a></div>
  <form class="navbar-form navbar-right" role="form" id="login-form">
    <div class="form-group">
      <input type="text" placeholder="Email" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" class="form-control">
    </div>
    <a class="btn btn-default btn-sm">Login</a>
  </form>
</div>
</div>
</nav>

 $( document ).ready(function() {
var userInfo = {
    firstName: 'Jane',
    lastName: 'Doe'
};

//function to listen for "login" clicks
$('#login-form .btn').on('click', function() {
  console.log('login button clicked')

    //hide login form elements
        $('#login-form').hide();

    //fill user's first and last name into 'div-user-info'
        // $('.user-info').show(userInfo);
        $( "#user-fullname" ).append( $( "userInfo" ) );


    });-->
