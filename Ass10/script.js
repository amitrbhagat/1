function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
    // Regular expressions for validation
    var usernamePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate username
    if (!usernamePattern.test(username)) {
        alert("Username is invaild");
        return;
    }

    // Validate password
    if (!passwordPattern.test(password)) {
        alert("Password is invaild");
        return;
    }

    else
        alert("Login sucessfull");

    // Valid form, submit it
    document.getElementById("loginForm").submit();
}
