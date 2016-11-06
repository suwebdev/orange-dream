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


    });
