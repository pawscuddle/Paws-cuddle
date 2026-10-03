document.addEventListener("DOMContentLoaded", function () {

    console.log("Paws & Cuddles website loaded successfully.");

    // Update copyright year automatically
    document.querySelectorAll("[data-year]").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

});
