document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("5LAHYmyqnEIylZhIv");

    // Add event listener to the form
    document.getElementById("quote-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

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
            message: message,
        };

        // Log form data for debugging
        console.log("Form data:", templateParams);

        // Send email using EmailJS
        emailjs
            .send("service_wfrp8pq", "template_ibxh64l", templateParams)
            .then(
                function (response) {
                    console.log("Email sent successfully!", response);
                    alert("Email sent successfully!");
                    document.getElementById("quote-form").reset(); // Reset the form
                },
                function (error) {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email. Please try again!");
                }
            );
    });
});