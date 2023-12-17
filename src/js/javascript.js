// javascript.js
document.addEventListener("DOMContentLoaded", function () {
  var myForm = document.getElementById("myForm");
  var fnameInput = document.getElementById("fname");
  var lnameInput = document.getElementById("lname");
  var textArea = document.getElementById("text");

  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (
      fnameInput.value.trim() === "" ||
      lnameInput.value.trim() === "" ||
      textArea.value.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuBtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    menuBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
            dropdownContent.classList.remove('show');
        }
    });
});
