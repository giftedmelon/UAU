let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

function submitForm() {
    var comment = document.getElementById("comment").value;
  
    if (comment.trim() === "") {
      alert("Please enter a comment.");
      return;
    }
  
    var formData = new FormData();
    formData.append("comment", comment);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbySwILxCO99CPbKA0XW0Adkb7f00xq-_4xbnbN2UkfVqVRhp51SmerhmvlaQ2AshzY/exec", true); 
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert("Comment submitted successfully!");
        document.getElementById("commentForm").reset();
      }
    };
  
    xhr.send(formData);
  }