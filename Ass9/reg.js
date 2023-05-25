function validateRegistrationForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
  
    // Validate First Name
    if (firstName.length < 6 || !/^[A-Za-z]+$/.test(firstName)) {
      alert('First Name should contain at least 6 alphabetic characters.');
      return false;
    }
  
    // Validate Last Name
    if (lastName.trim() === '') {
      alert('Last Name cannot be empty.');
      return false;
    }
  
    // Validate Address
    if (address.trim() === '') {
      alert('Address cannot be empty.');
      return false;
    }
  
    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid Email. Please enter a valid email address.');
      return false;
    }
  
    // Validate Password
    if (password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return false;
    }
  
    // Validate Mobile Number
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Invalid Mobile Number. Please enter a 10-digit number.');
      return false;
    }
  
    // All fields are valid
    return true;
  }
  