document.addEventListener("DOMContentLoaded", function() {
    // Hide the menu item if the user is logged in
    var menuItemToHide = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/registration-form"]');
    var userAvatar = document.querySelector('.user__avatar');
    if (userAvatar && menuItemToHide) {
        menuItemToHide.parentElement.style.display = 'none';
    }

    // Initialize the forms based on the toggle state
    var coachToggle = document.getElementById('coachToggle');
    var coachForm = document.getElementById('block-1699916884056');
    var nonCoachForm = document.getElementById('block-1699916941256');

    // Set initial visibility of forms (non-coach form visible, coach form hidden)
    coachForm.style.display = 'none'; // Hide coach form
    nonCoachForm.style.display = 'block'; // Show non-coach form

    // Add event listener to the toggle switch
    coachToggle.addEventListener('change', function() {
        if (this.checked) {
            // If toggle is set to 'I'm a coach'
            coachForm.style.display = 'block'; // Show coach form
            nonCoachForm.style.display = 'none'; // Hide non-coach form
        } else {
            // If toggle is set to 'I'm not a coach'
            coachForm.style.display = 'none'; // Hide coach form
            nonCoachForm.style.display = 'block'; // Show non-coach form
        }
    });
});
