document.getElementById("survey-form").addEventListener("submit", function(event) {
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("dropdown").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');
    const favFeature = document.getElementById("fav-feature").value.trim();
  
    if (name === "") {
      alert("Name is required.");
      isValid = false;
    }
  
    if (email === "") {
      alert("Email is required.");
      isValid = false;
    }
  
    if (role === "") {
      alert("Current role is required.");
      isValid = false;
    }
  
    if (!rating) {
      alert("Please select a rating.");
      isValid = false;
    }
  
    if (favFeature === "") {
      alert("Favorite feature is required.");
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault();
    }
  });
  