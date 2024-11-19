
    
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form fields
        if (!validateForm(firstName, lastName, email, phone, message)) {
            return; 
        }
        
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        };

        // Send the form data (you'll need to implement this function)
        sendFormData(formData);
    });

    function validateForm(firstName, lastName, email, phone, message) {
        let isValid = true;

        // Check if required fields are filled
        if (firstName === '') {
            alert('Please enter your first name.');
            isValid = false;
        }

        if (lastName === '') {
            alert('Please enter your last name.');
            isValid = false;
        }

        if (email === '') {
            alert('Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (phone === '') {
            alert('Please enter your phone number.');
            isValid = false;
        }

        if (message === '') {
            alert('Please enter a message.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function sendFormData(formData) {
    
        console.log('Form data to be sent:', formData);
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form
        document.getElementById('contactForm').reset();
    }