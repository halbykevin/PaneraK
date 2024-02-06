document.addEventListener('DOMContentLoaded', function () {
    var langToggle = document.getElementById('lang-toggle');
    var currentLang = document.documentElement.lang; // Get the current page language
    var pathname = window.location.pathname;
    var pageName = pathname.split("/").pop(); // Gets the current file name, e.g., 'pizza.html'
  
    // Function to derive the URL for the other language version of the page
    function getOtherLanguageUrl(currentLang, pageName) {
      var baseName = pageName.split('.')[0]; // Gets the 'pizza' from 'pizza.html'
      var ext = pageName.split('.')[1]; // Gets the 'html' from 'pizza.html'
      if (currentLang === 'ar') {
        // If current language is Arabic, strip '-ar' from the name to get the English version
        return baseName.replace('-ar', '') + '.' + ext;
      } else {
        // If current language is English, add '-ar' to get the Arabic version
        return baseName + '-ar.' + ext;
      }
    }
  
    // Set the toggle switch position based on the current language
    langToggle.checked = (currentLang === 'ar');
  
    // Event listener for the toggle switch
    langToggle.addEventListener('change', function () {
      window.location.href = getOtherLanguageUrl(currentLang, pageName);
    });
  });
  