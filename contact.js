function showToast(message, isError = false) {
    var toast = document.getElementById("toast");
    var toastMessage = document.getElementById("toast-message");
    var toastContainer = document.getElementById("toast-container");

    toastMessage.textContent = message;

    if (isError) {
        toast.classList.add("error");
    } else {
        toast.classList.remove("error");
    }

    toastContainer.style.display = "block";

    // Hide the toast after 5 seconds (5000 milliseconds)
    setTimeout(() => {
        toastContainer.style.display = "none";
    }, 5000);
}

function sendMail() {
    var params = {
        name: document.getElementById("FullName").value,
        email: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_7jlbiai";
    const templateID = "template_q0eybeb";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("FullName").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            showToast("Your message sent successfully!!");
        })
        .catch((err) => {
            console.log(err);
            showToast("Failed to send message. Please try again later.", true);
        });
}

