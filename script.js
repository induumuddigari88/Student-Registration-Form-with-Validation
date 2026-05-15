const form = document.getElementById("registrationForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  // Input Values
  const name =
    document.getElementById("name").value.trim();
  const email =
    document.getElementById("email").value.trim();
  const phone =
    document.getElementById("phone").value.trim();
  const course =
    document.getElementById("course").value;
  const password =
    document.getElementById("password").value;
  const confirmPassword =
    document.getElementById("confirmPassword").value;
  // Error Elements
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("courseError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";
  document.getElementById("successMessage").innerText = "";
  let isValid = true;
  // Name Validation
  if(name === ""){
    document.getElementById("nameError").innerText =
      "Full Name is required";
    isValid = false;
  }
  // Email Validation
  const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email === ""){
    document.getElementById("emailError").innerText =
      "Email is required";
    isValid = false;
  }
  else if(!email.match(emailPattern)){
    document.getElementById("emailError").innerText =
      "Enter valid email";
    isValid = false;
  }
  // Phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if(phone === ""){
    document.getElementById("phoneError").innerText =
      "Phone number is required";
    isValid = false;
  }
  else if(!phone.match(phonePattern)){
    document.getElementById("phoneError").innerText =
      "Enter valid 10-digit number";
    isValid = false;
  }
  // Course Validation
  if(course === ""){
    document.getElementById("courseError").innerText =
      "Please select course";
    isValid = false;
  }
  // Password Validation
  if(password.length < 6){
    document.getElementById("passwordError").innerText =
      "Password must contain 6 characters";
    isValid = false;
  }
  // Confirm Password
  if(password !== confirmPassword){
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match";
    isValid = false;
  }
  // Success
  if(isValid){
    // Store Data in Local Storage
    const studentData = {
      name,
      email,
      phone,
      course
    };
    localStorage.setItem(
      "studentData",
      JSON.stringify(studentData)
    );
    document.getElementById("successMessage").innerText =
      "🎉 Registration Successful!";
    form.reset();
  }
});
// DARK / LIGHT THEME TOGGLE
const themeToggle =
  document.getElementById("themeToggle");
// Load Saved Theme
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  themeToggle.innerText = "☀️";
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    themeToggle.innerText = "☀️";
  }
  else{
    localStorage.setItem("theme","light");
    themeToggle.innerText = "🌙";
  }
});
