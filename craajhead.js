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





//Function for the testimonial boxes on homepage
document.addEventListener("DOMContentLoaded", function() {
    var readMoreLinks = document.querySelectorAll('.read-more-link');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var testimonialBlock = link.closest('.testimonial-block');
            var fullText = testimonialBlock.querySelector('.full-text');
            var shortText = testimonialBlock.querySelector('.short-text');

            // Expand the text and show 'X' button
            shortText.style.display = 'none';
            fullText.style.display = 'block';
            createCloseButton(testimonialBlock);
        });
    });

    function createCloseButton(block) {
        var closeBtn = document.createElement('span');
        closeBtn.textContent = 'X';
        closeBtn.classList.add('close-btn');
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '10px';
        closeBtn.style.cursor = 'pointer';

        closeBtn.addEventListener('click', function() {
            var fullText = block.querySelector('.full-text');
            var shortText = block.querySelector('.short-text');

            // Collapse the text and remove 'X' button
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            block.removeChild(closeBtn);
        });

        block.appendChild(closeBtn);
    }
});
