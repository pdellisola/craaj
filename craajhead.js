document.addEventListener("DOMContentLoaded", function() {
    /*    restrictPodcastPageAccess(); */
    hideMenuItems();
    toggleForms();
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
    var registrationMenuItem = document.querySelector('span.dropdown__item a[href="https://www.craaj.com/registration"]');
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


        // Hide 'Library' menu item if on a page that contains '/library'
    var libraryMenuItem = document.querySelector('a.link-list__link[href="https://www.craaj.com/library"]');
    if (window.location.href.includes('/library') && libraryMenuItem) {
        libraryMenuItem.style.display = 'none';
    }

    // Hide specific divs on pages containing '/business-growth-bootcamp-for-coaches-free-sample'
    if (window.location.href.includes('/business-growth-bootcamp-for-coaches-free-sample')) {
        var div1 = document.getElementById('block-1555988491313');
        var div2 = document.getElementById('block-1699412894617');
        var div3 = document.getElementById('block-1699412864848');

        if (div1) div1.style.display = 'none';
        if (div2) div2.style.display = 'none';
        if (div3) div3.style.display = 'none';
    }
}



/*
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
} */


/*
function toggleForms() {
    // Website pages forms
    var coachForm = document.getElementById('block-1699916884056');
    var nonCoachForm = document.getElementById('block-1699916941256');

    // Registration landing page forms
    var registrationCoachForm = document.getElementById('block-1700083222628');
    var registrationNonCoachForm = document.getElementById('block-1700082963385');

    var yesCoachBtn = document.getElementById('yesCoach');
    var noCoachBtn = document.getElementById('noCoach');

    // Event listeners for buttons
    yesCoachBtn.addEventListener('click', function() {
        if (coachForm && nonCoachForm) {
            coachForm.style.display = 'block';
            nonCoachForm.style.display = 'none';
        }
        if (registrationCoachForm && registrationNonCoachForm) {
            registrationCoachForm.style.display = 'block';
            registrationNonCoachForm.style.display = 'none';
        }
        this.classList.add('selected-button');
        noCoachBtn.classList.remove('selected-button');
    });

    noCoachBtn.addEventListener('click', function() {
        if (coachForm && nonCoachForm) {
            coachForm.style.display = 'none';
            nonCoachForm.style.display = 'block';
        }
        if (registrationCoachForm && registrationNonCoachForm) {
            registrationCoachForm.style.display = 'none';
            registrationNonCoachForm.style.display = 'block';
        }
        this.classList.add('selected-button');
        yesCoachBtn.classList.remove('selected-button');
    });
} */

function toggleForms() {
    // Website pages forms
    var coachForm = document.getElementById('block-1699916884056');
    var nonCoachForm = document.getElementById('block-1699916941256');

    // Registration landing page forms
    var registrationCoachForm = document.getElementById('block-1700083222628');
    var registrationNonCoachForm = document.getElementById('block-1700082963385');

    var yesCoachBtn = document.getElementById('yesCoach');
    var noCoachBtn = document.getElementById('noCoach');

    function isFormVisible(form) {
        return form && form.style.display === 'block';
    }

    function toggleForm(formToShow, formToHide, buttonToSelect, otherButton) {
        var showForm = !isFormVisible(formToShow);
        formToShow.style.display = showForm ? 'block' : 'none';
        formToHide.style.display = 'none';
        buttonToSelect.classList.toggle('selected-button', showForm);
        otherButton.classList.remove('selected-button');
    }

    yesCoachBtn.addEventListener('click', function() {
        toggleForm(coachForm, nonCoachForm, yesCoachBtn, noCoachBtn);
        toggleForm(registrationCoachForm, registrationNonCoachForm, yesCoachBtn, noCoachBtn);
    });

    noCoachBtn.addEventListener('click', function() {
        toggleForm(nonCoachForm, coachForm, noCoachBtn, yesCoachBtn);
        toggleForm(registrationNonCoachForm, registrationCoachForm, noCoachBtn, yesCoachBtn);
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














document.addEventListener("DOMContentLoaded", function() {
    // Function to add first name and surname fields
    function addNameSurnameFields() {
        // Select all text type input elements with 'form-control' class and 'Name' placeholder
        var nameFields = document.querySelectorAll('input.form-control[type="text"][placeholder="Name"]');

        nameFields.forEach(function(nameField) {
            // Check if the nameField has been already processed
            if (nameField.getAttribute('data-processed') === 'true') return;

            // Mark the field as processed to avoid duplications
            nameField.setAttribute('data-processed', 'true');

            // Create input field for the first name
            var firstNameInput = document.createElement('input');
            firstNameInput.type = 'text';
            firstNameInput.className = 'form-control';
            firstNameInput.placeholder = 'First Name'; // Adjust the placeholder text as needed

            // Create input field for the surname
            var surnameInput = document.createElement('input');
            surnameInput.type = 'text';
            surnameInput.className = 'form-control surname-subfield';
            surnameInput.placeholder = 'Surname'; // Adjust the placeholder text as needed

            // Insert the new fields before the original name field
            nameField.parentNode.insertBefore(firstNameInput, nameField);
            nameField.parentNode.insertBefore(surnameInput, nameField);

            // Hide the original name field
            nameField.style.visibility = 'hidden';
            nameField.style.position = 'absolute';

            // Combine the first name and surname into the original name field
            function combineName() {
                var firstName = firstNameInput.value.trim();
                var surname = surnameInput.value.trim();
                nameField.value = firstName && surname ? firstName + ' ' + surname : '';
            }

            // Add event listeners to update the original name field
            firstNameInput.addEventListener('input', combineName);
            surnameInput.addEventListener('input', combineName);
        });
    }

    // Initial invocation of the function
    addNameSurnameFields();

    // Instantiate a MutationObserver to handle dynamically added form fields
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                // Only run the function if a new element node has been added
                if (node.nodeType === Node.ELEMENT_NODE) {
                    addNameSurnameFields();
                }
            });
        });
    });

    // Start observing the document body for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
