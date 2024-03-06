const myName = document.getElementById('myName');

myName.addEventListener('mouseover', function() {
  myName.style.fontFamily = 'Baskerville, serif';
});

myName.addEventListener('mouseout', function() {
  myName.style.fontFamily = 'Arial, sans-serif';
});

function changeLanguage(language) {
    const nameElement = document.getElementById('myName');
    const greetings = {
      'en': 'Welcome to conspiracy theories!',
      'zh': '歡迎來到陰謀論！',
      'ja': 'ようこそ、陰謀論の辞書'
    };
    
    const selectedGreeting = greetings[language] || greetings['en'];
    nameElement.textContent = selectedGreeting;
  }

  var iframe = document.getElementById('websiteFrame');

  var arr = [];
  
//get data from google sheet
fetch("https://script.google.com/macros/s/AKfycbwxbliucJ8oT3c3z8H-RaUVxH2pAMBkI8tGiuRcJTCl_EQ_7bJRGMjQka1nsd_SQRN8kg/exec",{
  method: "GET"
}).then(res => res.json()).then(datas => {
  datas.myalldata.map((data,index) => {
    let id = data[0];
    let topic = data[1];
    let content = data[2];
    arr.push(topic + ": " + content)
  })
})

console.log(arr);


function loadRandomWebsite() {
  var userInput = document.getElementById('userInput').value.toLowerCase(); 
  var error = document.getElementById('error');
  var resultDiv = document.getElementById('result');
  var websites = arr;

  if (userInput === '') {
    error.textContent = 'Please enter words';
    resultDiv.textContent = '';
  }else {
   error.textContent = '';
   var index = Math.floor(Math.random() * websites.length);var randomWebsite = websites[index];
   resultDiv.textContent = randomWebsite;

  }
    //iframe.setAttribute('src', randomWebsite);
    //iframe.style.display = 'block';
}

  //function closeWebsite() {
    //iframe.removeAttribute('src');
    //iframe.style.display = 'none';
  //}