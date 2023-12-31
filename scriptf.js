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

/////////////////////////////////

function submitForm() {
    var comment = document.getElementById("comment").value;
    var option1 = document.getElementById("option1").checked;
    var option2 = document.getElementById("option2").checked;
    var option3 = document.getElementById("option3").checked;
    var currentDate = new Date();
    var path = getSavedPath();
    //var currentTime = currentDate.toISOString();
  
    if (comment.trim() === "") {
      alert("Please enter a comment.");
      return;
    }

    console.log(path);
  
    var formData = new FormData();
    formData.append("comment", comment);
    formData.append("option1", option1);
    formData.append("option2", option2);
    formData.append("option3", option3);
    formData.append("submissionTime", currentDate);
    formData.append("pageURL", window.location.href);
    formData.append("path", path);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbwVotP4Ayi2rY5mwo0FXqsTRn3lp_8UImQH-jGrFsLd6XeB5p_JrgCQTS_Q6EBIcQNO/exec", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("Comment submitted successfully!");
            document.getElementById("comment-form").reset();
          } else {
            console.error("Error: Unable to submit comment", xhr.responseText);
          }
        }
      };
  
    xhr.send(formData);

    // Close the modal
    closeCommentModal();
  }

/////////////////////////////////////////////////

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    return document.selection.createRange().text;
  }
  return '';
}

function getPathFromElement(element) {
  var stack = [];

  while (element.parentNode != document.documentElement) {
      var sibCount = 0;
      var sibIndex = 0;
      var childNodes = element.parentNode.childNodes;
      var childLength = childNodes.length;

      for (var i = 0; i < childLength; i++) {
          var sib = childNodes[i];

          if (sib.nodeName == element.nodeName) {
              if (sib === element) {
                  sibIndex = sibCount;
              }

              sibCount++;
          }
      }

      if (element.hasAttribute("id") && element.id !== "") {
          stack.unshift(`*[@id="${element.id}"]`);
      }
      else if (sibCount > 1) {
          stack.unshift(`${element.nodeName.toLowerCase()}[${sibIndex + 1}]`);
      }
      else {
          stack.unshift(element.nodeName.toLowerCase());
      }

      element = element.parentNode;
  }

  return "//" + stack.join("/")
}

function savePath(path) {
  localStorage.setItem('savedPath', path);
}

// Function to get the saved path from localStorage
function getSavedPath() {
  return localStorage.getItem('savedPath');
}

document.addEventListener('selectionchange', function () {
  var selectedText = getSelectedText();
  if (selectedText) {
    showFloatingWindow(selectedText);
  } else {              ``
    hideFloatingWindow();
  }
  // console.log('selectedText', selectedText);
});


document.addEventListener('click', function(event) {
  var path = getPathFromElement(event.target);
  if (path) {
    showFloatingWindow(event);
  } else {
    hideFloatingWindow();
  }
  // console.log('event.target', event);
  if (event.target.id != 'floating-window' && event.target.id != 'comment-button' && event.target.id != 'highlight-button' && event.target.id != 'comment-modal' && event.target.id != 'comment' && event.target.id != 'submit-button' && event.target.id != 'option1' && event.target.id != 'option2' && event.target.id != 'option3'&& event.target.id != 'comment-form'&& event.target.closest("#comment-modal") == null) {
    savePath(path);
    console.log('Path:', path);
  }
});



function showFloatingWindow(event) {
  var floatingWindow = document.getElementById('floating-window');
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var rect = range.getBoundingClientRect();
    var x=event.clientX;
    var y=event.clientY;

    //console.log(x,y);

    floatingWindow.style.top = y + 'px';
    floatingWindow.style.left = x + 'px';

    floatingWindow.style.display = 'block';

    document.getElementById('comment-button').addEventListener('click', function () {
      showCommentModal();
    });

    document.getElementById('highlight-button').addEventListener('click', function () {
      highlightSelectedText(range);
    });
  }
}

function hideFloatingWindow() {
  var floatingWindow = document.getElementById('floating-window');
  floatingWindow.style.display = 'none';
}

function showCommentModal() {
  var commentModal = document.getElementById('comment-modal');
  commentModal.classList.add('open'); // Add the 'open' class to show the modal
}

function closeCommentModal() {
  var commentModal = document.getElementById('comment-modal');
  commentModal.classList.remove('open'); // Remove the 'open' class to hide the modal
}

function highlightSelectedText(range) {
  var span = document.createElement('span');
  span.style.backgroundColor = 'red';
  span.textContent = range.toString();
  range.deleteContents();
  range.insertNode(span);
}

