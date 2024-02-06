document.addEventListener('DOMContentLoaded', function () {
    var langToggle = document.getElementById('lang-toggle');
    var currentLanguage = document.documentElement.lang; // Get the current language from the <html> tag
  
    // Set the checkbox state based on the language
    langToggle.checked = (currentLanguage === 'ar');
  
    langToggle.addEventListener('change', function () {
      if (this.checked) {
        // Redirect to the Arabic version of the site
        window.location.href = 'ArIndex.html';
      } else {
        // Redirect to the English version of the site
        window.location.href = 'index.html';
      }
    });
  }); 