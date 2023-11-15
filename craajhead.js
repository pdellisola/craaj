document.addEventListener("DOMContentLoaded", function() {
    /*    restrictPodcastPageAccess(); */
    hideMenuItems();
    toggleForms();
    setUpClosePopupListener(); // Adding the new function call here
});





/* function restrictPodcastPageAccess() {
    // Check if the current page is the podcast page
    if (window.location.href.includes('/podcasts/c-raaj-podcasts')) {
        var userAvatar = document.querySelector('.user__avatar');

        // If the user avatar is not present (user not logged in), redirect to the registration form
        if (!userAvatar) {
            window.location.href = '/registration-form';
        }
    }
}
*/




function hideMenuItems() {
    var registrationMenuItem = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/registration-form"]');
    var userAvatar = document.querySelector('.user__avatar');
    var becomeMemberButton = document.querySelector('a.btn[href="#two-step"]');

    // Hide registration form link if user is logged in
    if (userAvatar && registrationMenuItem) {
        registrationMenuItem.parentElement.style.display = 'none';
    }

    // Hide 'Become a Member' button if user is logged in
    if (userAvatar && becomeMemberButton) {
        becomeMemberButton.style.display = 'none';
    }

    // Check for the presence of 'section.member-directory' or the specific span to hide the Member Directory menu item
    var memberDirectorySection = document.querySelector('section.member-directory');
    var memberDirectorySpan = document.getElementById('member-directory');
    var memberDirectoryMenuItem = document.querySelector('div.link-list__links a.link-list__link[href="https://www.craaj.com/member_dashboard/members"]');

    if ((memberDirectorySection || memberDirectorySpan) && memberDirectoryMenuItem) {
        memberDirectoryMenuItem.style.display = 'none';
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



    // Set up event delegation for the popup close button
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element or its parent has the class 'close-x__part'
        if (event.target.classList.contains('close-x__part') || event.target.parentElement.classList.contains('close-x__part')) {
            resetPopupState();
        }
    });
});


// Function to reset the state of the forms and buttons - added as a separate function
function resetPopupState() {
    var coachForm = document.getElementById('block-1699916884056');
    var nonCoachForm = document.getElementById('block-1699916941256');
    var yesCoachBtn = document.getElementById('yesCoach');
    var noCoachBtn = document.getElementById('noCoach');

    coachForm.style.display = 'none';
    nonCoachForm.style.display = 'none';
    yesCoachBtn.classList.remove('selected-button');
    noCoachBtn.classList.remove('selected-button');
}

// Function to set up event listener for the popup close button - added as a separate function
function setUpClosePopupListener() {
    var closeButton = document.querySelector('.close-x__part');
    if (closeButton) {
        closeButton.addEventListener('click', resetPopupState);
    }
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
