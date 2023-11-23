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






//function to customize the form PHONE FIELD
window.onload = function() {



document.addEventListener("DOMContentLoaded", function() {
    var phoneFieldContainers = document.querySelectorAll('.phone-field'); // Select all elements with the 'phone-field' class

    phoneFieldContainers.forEach(function(container) {
        // Find the phone input within this container
        var phoneInput = container.querySelector('input[type="tel"]');
        if (!phoneInput) return; // Skip if no phone input found

        // Define your country codes and names
        var countryCodes = {
            "+961": "Lebanon",
                "+93": "Afghanistan",
    "+355": "Albania",
    "+213": "Algeria",
    "+1684": "American Samoa",
    "+376": "Andorra",
    "+244": "Angola",
    "+1264": "Anguilla",
    "+672": "Antarctica",
    "+1268": "Antigua and Barbuda",
    "+54": "Argentina",
    "+374": "Armenia",
    "+297": "Aruba",
    "+61": "Australia",
    "+43": "Austria",
    "+994": "Azerbaijan",
    "+1242": "Bahamas",
    "+973": "Bahrain",
    "+880": "Bangladesh",
    "+1246": "Barbados",
    "+375": "Belarus",
    "+32": "Belgium",
    "+501": "Belize",
    "+229": "Benin",
    "+1441": "Bermuda",
    "+975": "Bhutan",
    "+591": "Bolivia",
    "+387": "Bosnia and Herzegovina",
    "+267": "Botswana",
    "+55": "Brazil",
    "+246": "British Indian Ocean Territory",
    "+1284": "British Virgin Islands",
    "+673": "Brunei",
    "+359": "Bulgaria",
    "+226": "Burkina Faso",
    "+257": "Burundi",
    "+855": "Cambodia",
    "+237": "Cameroon",
    "+1": "Canada",
    "+238": "Cape Verde",
    "+1345": "Cayman Islands",
    "+236": "Central African Republic",
    "+235": "Chad",
    "+56": "Chile",
    "+86": "China",
    "+57": "Colombia",
    "+269": "Comoros",
    "+682": "Cook Islands",
    "+506": "Costa Rica",
    "+385": "Croatia",
    "+53": "Cuba",
    "+5999": "Curaçao",
    "+357": "Cyprus",
    "+420": "Czech Republic",
    "+243": "Democratic Republic of the Congo",
    "+45": "Denmark",
    "+253": "Djibouti",
    "+1767": "Dominica",
    "+1809": "Dominican Republic",
    "+593": "Ecuador",
    "+20": "Egypt",
    "+503": "El Salvador",
    "+240": "Equatorial Guinea",
    "+291": "Eritrea",
    "+372": "Estonia",
    "+251": "Ethiopia",
    "+500": "Falkland Islands",
    "+298": "Faroe Islands",
    "+679": "Fiji",
    "+358": "Finland",
    "+33": "France",
    "+594": "French Guiana",
    "+689": "French Polynesia",
    "+241": "Gabon",
    "+220": "Gambia",
    "+995": "Georgia",
    "+49": "Germany",
    "+233": "Ghana",
    "+350": "Gibraltar",
    "+30": "Greece",
    "+299": "Greenland",
    "+1473": "Grenada",
    "+590": "Guadeloupe",
    "+1671": "Guam",
    "+502": "Guatemala",
    "+44": "Guernsey",
    "+224": "Guinea",
    "+245": "Guinea-Bissau",
    "+592": "Guyana",
    "+509": "Haiti",
    "+504": "Honduras",
    "+852": "Hong Kong",
    "+36": "Hungary",
    "+354": "Iceland",
    "+91": "India",
    "+62": "Indonesia",
    "+98": "Iran",
    "+964": "Iraq",
    "+353": "Ireland",
    "+44": "Isle of Man",
    "+972": "Israel",
    "+39": "Italy",
    "+225": "Ivory Coast",
    "+1876": "Jamaica",
    "+81": "Japan",
    "+44": "Jersey",
    "+962": "Jordan",
    "+7": "Kazakhstan",
    "+254": "Kenya",
    "+686": "Kiribati",
    "+965": "Kuwait",
    "+996": "Kyrgyzstan",
    "+856": "Laos",
    "+371": "Latvia",
    "+961": "Lebanon",
    "+266": "Lesotho",
    "+231": "Liberia",
    "+218": "Libya",
    "+423": "Liechtenstein",
    "+370": "Lithuania",
    "+352": "Luxembourg",
    "+853": "Macau",
    "+389": "Macedonia",
    "+261": "Madagascar",
    "+265": "Malawi",
    "+60": "Malaysia",
    "+960": "Maldives",
    "+223": "Mali",
    "+356": "Malta",
    "+692": "Marshall Islands",
    "+596": "Martinique",
    "+222": "Mauritania",
    "+230": "Mauritius",
    "+262": "Mayotte",
    "+52": "Mexico",
    "+691": "Micronesia",
    "+373": "Moldova",
    "+377": "Monaco",
    "+976": "Mongolia",
    "+382": "Montenegro",
    "+1664": "Montserrat",
    "+212": "Morocco",
    "+258": "Mozambique",
    "+95": "Myanmar",
    "+264": "Namibia",
    "+674": "Nauru",
    "+977": "Nepal",
    "+31": "Netherlands",
    "+687": "New Caledonia",
    "+64": "New Zealand",
    "+505": "Nicaragua",
    "+227": "Niger",
    "+234": "Nigeria",
    "+683": "Niue",
    "+672": "Norfolk Island",
    "+850": "North Korea",
    "+1670": "Northern Mariana Islands",
    "+47": "Norway",
    "+968": "Oman",
    "+92": "Pakistan",
    "+680": "Palau",
    "+970": "Palestine",
    "+507": "Panama",
    "+675": "Papua New Guinea",
    "+595": "Paraguay",
    "+51": "Peru",
    "+63": "Philippines",
    "+48": "Poland",
    "+351": "Portugal",
    "+1787": "Puerto Rico",
    "+974": "Qatar",
    "+242": "Republic of the Congo",
    "+262": "Réunion",
    "+40": "Romania",
    "+7": "Russia",
    "+250": "Rwanda",
    "+590": "Saint Barthélemy",
    "+290": "Saint Helena",
    "+1869": "Saint Kitts and Nevis",
    "+1758": "Saint Lucia",
    "+590": "Saint Martin",
    "+508": "Saint Pierre and Miquelon",
    "+1784": "Saint Vincent and the Grenadines",
    "+685": "Samoa",
    "+378": "San Marino",
    "+239": "São Tomé and Príncipe",
    "+966": "Saudi Arabia",
    "+221": "Senegal",
    "+381": "Serbia",
    "+248": "Seychelles",
    "+232": "Sierra Leone",
    "+65": "Singapore",
    "+1721": "Sint Maarten",
    "+421": "Slovakia",
    "+386": "Slovenia",
    "+677": "Solomon Islands",
    "+252": "Somalia",
    "+27": "South Africa",
    "+82": "South Korea",
    "+211": "South Sudan",
    "+34": "Spain",
    "+94": "Sri Lanka",
    "+249": "Sudan",
    "+597": "Suriname",
    "+268": "Swaziland",
    "+46": "Sweden",
    "+41": "Switzerland",
    "+963": "Syria",
    "+886": "Taiwan",
    "+992": "Tajikistan",
    "+255": "Tanzania",
    "+66": "Thailand",
    "+228": "Togo",
    "+690": "Tokelau",
    "+676": "Tonga",
    "+1868": "Trinidad and Tobago",
    "+216": "Tunisia",
    "+90": "Turkey",
    "+993": "Turkmenistan",
    "+1649": "Turks and Caicos Islands",
    "+688": "Tuvalu",
    "+256": "Uganda",
    "+380": "Ukraine",
    "+971": "United Arab Emirates",
    "+44": "United Kingdom",
    "+1": "United States",
    "+598": "Uruguay",
    "+1340": "U.S. Virgin Islands",
    "+998": "Uzbekistan",
    "+678": "Vanuatu",
    "+379": "Vatican",
    "+58": "Venezuela",
    "+84": "Vietnam",
    "+678": "Vanuatu",
    "+379": "Vatican City",
    "+681": "Wallis and Futuna",
    "+212": "Western Sahara",
    "+967": "Yemen",
    "+260": "Zambia",
    "+263": "Zimbabwe",
            
            
            // ... add other necessary country codes
        };

        // Create a dropdown for country codes
        var countryCodeDropdown = document.createElement('select');
        countryCodeDropdown.className = 'form-control countryCodeDropdown';

        // Add country codes to the dropdown
        for (var code in countryCodes) {
            var option = document.createElement('option');
            option.value = code;
            option.textContent = code + ' (' + countryCodes[code] + ')';
            countryCodeDropdown.appendChild(option);
        }

        // Insert the dropdown before the phone input
        container.insertBefore(countryCodeDropdown, phoneInput);

        // Modify the phone input field
        phoneInput.type = 'tel';
        phoneInput.placeholder = '+Country Code Phone Number';

        // Event listener for country code dropdown change
        countryCodeDropdown.addEventListener('change', function() {
            var selectedCode = countryCodeDropdown.value;
            phoneInput.value = selectedCode + ' ';
        });

        // Event listener for phone input to ensure '+' is always there
        phoneInput.addEventListener('input', function() {
            if (!this.value.startsWith('+')) {
                this.value = '+' + this.value;
            }
        });
    });
});
