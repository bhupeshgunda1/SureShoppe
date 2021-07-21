function register()
{
    var uid = document.getElementById("form3Example1c").value;
    var uid_len = uid.length;

    var email = document.getElementById("form3Example3c").value;
    var pwd = document.getElementById("form3Example4c").value;
    var c_pwd = document.getElementById("form3Example4cd").value;

    if(uid_len < 5 || uid_len > 12)
    {
        alert("username should be between 5 and 12");
        return false;
    }

    ValidateEmail(email);

    if (pwd != c_pwd) 
    {
    console.log("Passwords do not match");
    alert("Passwords do not match");
    }

}


function ValidateEmail(input) 
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) 
    {
        alert("Valid email address!");
        return true;
    } 
    else 
    {
        alert("Invalid email address!");
        return false;
    }
}