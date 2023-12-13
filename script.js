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
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbygLOAslc6EapkwoINOiVH_ZG9CbpbqgGp88EwKMUU2jcH6nF4FiILvmlz0J_YooHsV/exec", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Comment submitted successfully!");
            document.getElementById("commentForm").reset();
          } else {
            console.error("Error: Unable to submit comment", xhr.responseText);
          }
        }
      };
  
    xhr.send(formData);
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Hide the comment form initially
    var commentForm = document.getElementById("commentForm");
    commentForm.style.display = "none";
  })

  function toggleContent() {
    var content = document.getElementById("content");
    var helloContent = document.getElementById("helloContent");
    var byeContent = document.getElementById("byeContent");
    var switchInput = document.querySelector('.toggle-switch input');
    var modeText = document.getElementById("modeText");
    var commentForm = document.getElementById("commentForm");

  
    if (switchInput.checked) {
      // Switching to Edit Mode
      modeText.innerText = "Edit Mode ON";
      helloContent.style.display = "none";
      byeContent.style.display = "block";
      commentForm.style.display = "block";
    } else {
      // Switching to Common Mode
      modeText.innerText = "Edit Mode";
      helloContent.style.display = "block";
      byeContent.style.display = "none";
      commentForm.style.display = "none";
    }
  }

  function toggleContentJ() {
    var content = document.getElementById("content");
    var helloContent = document.getElementById("helloContent");
    var byeContent = document.getElementById("byeContent");
    var switchInput = document.querySelector('.toggle-switch input');
    var modeText = document.getElementById("modeText");
    var commentForm = document.getElementById("commentForm");

  
    if (switchInput.checked) {
      // Switching to Edit Mode
      modeText.innerText = "編輯モード　オン";
      helloContent.style.display = "none";
      byeContent.style.display = "block";
      commentForm.style.display = "block";
    } else {
      // Switching to Common Mode
      modeText.innerText = "編輯モード";
      helloContent.style.display = "block";
      byeContent.style.display = "none";
      commentForm.style.display = "none";
    }
  }