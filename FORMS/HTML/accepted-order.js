document.addEventListener("DOMContentLoaded", () => {
    const reachedBtn = document.getElementById("reached-btn");
    const otpSection = document.getElementById("otp-section");
    const confirmOtpBtn = document.getElementById("confirm-otp-btn");
    const loader = document.getElementById("loader");
    const confirmationMsg = document.getElementById("confirmation-msg");

    // Step 1: Clicked Reached
    reachedBtn.addEventListener("click", () => {
        reachedBtn.classList.add("hidden");
        otpSection.classList.remove("hidden");
    });

    // Step 2: Confirm OTP
    confirmOtpBtn.addEventListener("click", () => {
        const otp = document.getElementById("otp-input").value.trim();
        if (otp === "") {
            alert("Bruh, enter the OTP 😅");
            return;
        }

        otpSection.classList.add("hidden");
        loader.classList.remove("hidden");

        // Step 3: Simulate server confirmation
        setTimeout(() => {
            loader.classList.add("hidden");
            confirmationMsg.classList.remove("hidden");

            // Step 4: Redirect to dashboard after 2.5 seconds
            setTimeout(() => {
                window.location.href = "desboard.html";
            }, 2500);
        }, 2000);
    });

    // Optional: Google Maps button
    const mapBtn = document.getElementById("map-btn");
    mapBtn.addEventListener("click", () => {
        window.open("https://www.google.com/maps/search/?api=1&query=ahmedabad", "_blank");
    });
});
