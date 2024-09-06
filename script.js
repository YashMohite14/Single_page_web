// ////////////////// /--------------- Menu Toggle -------------------- ////////


let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

//////////////////////////////// ------------------- FAQ section ---------------- //////////////


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function () {
            const answer = item.querySelector(".faq-answer");
            const isVisible = answer.style.display === "block";
            answer.style.display = isVisible ? "none" : "block";
            question.classList.toggle("active");
        });
    });
});

//////////////////////////// ---------- Contact Us Validations ----------------///////////

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Clear previous errors before starting validation
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.querySelector('select[name="subject"]').value;
    const message = document.getElementById('message').value.trim();


    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    const phonePattern = /^[0-9]{10}$/;

    let valid = true;

    
    if (name === "") {
        showError('name', 'Name is required.');
        valid = false;
    }
    if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    }
    if (!phonePattern.test(phone)) {
        showError('phone', 'Phone number must be 10 digits.');
        valid = false;
    }
    if (subject === "") {
        showError('subject', 'Please select a subject.');
        valid = false;
    }
    if (message === "") {
        showError('message', 'Message is required.');
        valid = false;
    }

    // If the form is valid, reset the form and clear errors
    if (valid) {
        alert('Message sent successfully!');
        clearErrors();

        document.querySelector('form').reset();

        setTimeout(() => {
            clearErrors();
        }, 0);
    }
});

// Function to display error messages
function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.textContent = message;
    inputField.parentElement.appendChild(errorDiv);
}

// Function to clear previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}
