document.addEventListener("DOMContentLoaded", function() {
    // Select the menu item that should be hidden when logged in
    var menuItemToHide = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/registration-form"]');

    // Check if the user avatar is present, which indicates a user is logged in
    var userAvatar = document.querySelector('.user__avatar');

    // If the user is logged in, hide the menu item
    if (userAvatar) {
        if (menuItemToHide) {
            menuItemToHide.parentElement.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var coachToggle = document.getElementById('coachToggle');
  var coachForm = document.getElementById('block-1699916884056');
  var nonCoachForm = document.getElementById('block-1699916941256');

  // Set the default state of the toggle switch
  coachToggle.checked = false;

  coachToggle.addEventListener('change', function() {
    if (this.checked) {
      // If toggle is set to 'I'm not a coach'
      coachForm.style.display = 'none';
      nonCoachForm.style.display = 'block';
    } else {
      // If toggle is set to 'I'm a coach'
      coachForm.style.display = 'block';
      nonCoachForm.style.display = 'none';
    }
  });
});

