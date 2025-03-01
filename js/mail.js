document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("5LAHYmyqnEIylZhIv"); // Replace with your actual Public Key

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mobile").value;
        var service = document.getElementById("service").value;
        var message = document.getElementById("message").value;

        // Define EmailJS parameters
        var templateParams = {
            from_name: name,
            from_email: email,
            phone_number: mobile,
            selected_service: service,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_wfrp8pq", "template_l4w12af", templateParams)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send email. Please try again!");
            console.log(error);
        });
    });
});
