const otpInputs = document.querySelectorAll('.otp-input');
const resendTimerSpan = document.getElementById('resend-timer');
let timerSeconds = 10;
let timerInterval;

otpInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      } else {
        input.blur();
        const enteredOtp = Array.from(otpInputs).map(i => i.value).join('');
         
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" && input.value === '' && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});
