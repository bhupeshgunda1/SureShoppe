
// Below function Executes on click of login button.
function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "bhupesh" && password == "123456")
    {
        alert ("Login successful");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    }
    else
    {
        alert("Login Failed, Please try again with correct credentials");
        return false;
    }
}