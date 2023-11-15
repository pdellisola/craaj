document.addEventListener("DOMContentLoaded", function() {
    // Group for hiding menu items
    hideMenuItems();

    // Group for form toggling
    toggleForms();
});

function hideMenuItems() {
    // Existing code to hide registration form link
    var menuItemToHide = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/registration-form"]');
    var userAvatar = document.querySelector('.user__avatar');
    if (userAvatar && menuItemToHide) {
        menuItemToHide.parentElement.style.display = 'none';
    }

    // Code to hide Member Directory menu item if URL contains 'member_dashboard/'
    var memberDirectoryMenuItem = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/member_dashboard/members"]');
    if (window.location.href.includes('member_dashboard/') && memberDirectoryMenuItem) {
        memberDirectoryMenuItem.parentElement.style.display = 'none';
    }
}

function toggleForms() {
    var coachForm = document.getElementById('block-1699916884056');
    var nonCoachForm = document.getElementById('block-1699916941256');
    var yesCoachBtn = document.getElementById('yesCoach');
    var noCoachBtn = document.getElementById('noCoach');

    // Hide both forms initially
    coachForm.style.display = 'none';
    nonCoachForm.style.display = 'none';

    // Event listeners for buttons
    yesCoachBtn.addEventListener('click', function() {
        coachForm.style.display = 'block';
        nonCoachForm.style.display = 'none';
        this.classList.add('selected-button');
        noCoachBtn.classList.remove('selected-button');
    });

    noCoachBtn.addEventListener('click', function() {
        coachForm.style.display = 'none';
        nonCoachForm.style.display = 'block';
        this.classList.add('selected-button');
        yesCoachBtn.classList.remove('selected-button');
    });
}







//Function for the testimonial boxes on homepage
document.addEventListener("DOMContentLoaded", function() {
    // Functionality for the testimonial boxes on the homepage
    var readMoreLinks = document.querySelectorAll('.read-more-link');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var testimonialBlock = link.closest('.testimonial-block');
            var fullText = testimonialBlock.querySelector('.full-text');
            var shortText = testimonialBlock.querySelector('.short-text');

            // Toggle visibility of full text and short text
            fullText.style.display = fullText.style.display === 'none' ? 'block' : 'none';
            shortText.style.display = shortText.style.display === 'none' ? 'block' : 'none';
            // Update the 'X' button's visibility
            updateCloseButtonVisibility(testimonialBlock);
        });
    });

    function updateCloseButtonVisibility(block) {
        var closeBtn = block.querySelector('.close-btn');
        if (!closeBtn) {
            createCloseButton(block);
        } else {
            block.removeChild(closeBtn);
        }
    }

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
