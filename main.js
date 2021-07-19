$(document).ready(function(){
    $('.header').height($(window).height());
})
// sign up form validation //

function validateform() {
var fname= document.myForm.fname.value;
var lname= document.myForm.lname.value;
var password= document.myForm.password.value;
var secondpassword= document.myForm.password2.value;
var email= document.myForm.email.value;
var gender= document.myForm.gender.value;


if (fname=="")
{
alert ("enter your name");
return false;
} 
else if(lname=="")
{ 
    alert("enter your last name"); 
    return false;
} 
else if (email=="")
{
    alert("enter email");
    return false;
}
else if (gender=="")
{
    alert("choose a gender");
    return false;
}
else if(password=="" || password.length<6) 
{   alert("enter password"); 
    alert("password must be more than six characters")
    return false;
}

else if (password==secondpassword)
{
    return true;
}
else
{
    alert("password must match");
    return false;
}
};

// Log in form validation //
function validateform()
{
    var firstname= document.myForm.firstname.value;
    var lastname= document.myForm.lastname.value;
    var firstpassword= document.myForm.password1.value;
    var secondpassword= document.myForm.password22.value;
    var email= document.myForm.email1.value;
    
if (firstname==""){
    alert("enter firstname");
    return false;
}
else if (lastname=="") {
    alert("enter lastname");
    return false;
}
else if(email=="")
{
    alert("enter email");
    return false;
}
else if (firstpassword==""){
    alert("enter password");
    return false;
}
else if(firstpassword.length<6){
    alert("password must have atleast six characters");
    return false;
}
else if(firstpassword==secondpassword){
    return true;
}
else {
    alert("password must match");
    return false;
}
};    




















