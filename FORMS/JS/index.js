document.addEventListener('DOMContentLoaded', function() {
  // Update date and time
  function updateDateTime() {
      const now = new Date();
      const dateElement = document.getElementById('current-date');
      const timeElement = document.getElementById('current-time');
      
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateElement.textContent = now.toLocaleDateString('en-US', options);
      
      timeElement.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // New service request buttons
  const acceptBtn = document.getElementById('accept-btn');
  const rejectBtn = document.getElementById('reject-btn');
  const newRequestSection = document.getElementById('new-request-section');
  const currentAppointmentSection = document.getElementById('current-appointment-section');
  const otpSection = document.getElementById('otp-section');
  const completeServiceBtn = document.getElementById('complete-service-btn');
  const verifyOtpBtn = document.getElementById('verify-otp-btn');
  const doneBtn = document.getElementById('done-btn');
  const rejectionModal = document.getElementById('rejection-modal');
  const cancelRejectBtn = document.getElementById('cancel-reject-btn');
  const confirmRejectBtn = document.getElementById('confirm-reject-btn');
  const completedModal = document.getElementById('completed-modal');
  
  // Show other reason textarea when "Other reason" is selected
  const otherReasonRadio = document.querySelector('input[value="other"]');
  const otherReasonContainer = document.getElementById('other-reason-container');
  
  otherReasonRadio.addEventListener('change', function() {
      if (this.checked) {
          otherReasonContainer.style.display = 'block';
      } else {
          otherReasonContainer.style.display = 'none';
      }
  });
  
  // Accept service
  acceptBtn.addEventListener('click', function() {
      newRequestSection.style.display = 'none';
      currentAppointmentSection.style.display = 'block';
  });
  
  // Reject service - show modal
  rejectBtn.addEventListener('click', function() {
      rejectionModal.style.display = 'flex';
  });
  
  // Cancel rejection
  cancelRejectBtn.addEventListener('click', function() {
      rejectionModal.style.display = 'none';
  });
  
  // Confirm rejection
  confirmRejectBtn.addEventListener('click', function() {
      rejectionModal.style.display = 'none';
      newRequestSection.style.display = 'none';
      
      // In a real app, you would send this to your backend
      const selectedReason = document.querySelector('input[name="rejection-reason"]:checked').value;
      console.log('Service rejected. Reason:', selectedReason);
      
      // Show a toast notification or similar feedback
      alert('Service request has been rejected.');
  });
  
  // Complete service - show OTP section
  completeServiceBtn.addEventListener('click', function() {
      currentAppointmentSection.style.display = 'none';
      otpSection.style.display = 'block';
  });
  
  // Verify OTP
  verifyOtpBtn.addEventListener('click', function() {
      const otp1 = document.getElementById('otp1').value;
      const otp2 = document.getElementById('otp2').value;
      const otp3 = document.getElementById('otp3').value;
      const otp4 = document.getElementById('otp4').value;
      
      const enteredOtp = otp1 + otp2 + otp3 + otp4;
      
      // In a real app, you would verify this OTP with your backend
      if (enteredOtp.length === 4) {
          otpSection.style.display = 'none';
          completedModal.style.display = 'flex';
          
          // Clear OTP fields
          document.getElementById('otp1').value = '';
          document.getElementById('otp2').value = '';
          document.getElementById('otp3').value = '';
          document.getElementById('otp4').value = '';
      } else {
          alert('Please enter a valid 4-digit OTP.');
      }
  });
  
  // Done button - back to dashboard
  doneBtn.addEventListener('click', function() {
      completedModal.style.display = 'none';
      newRequestSection.style.display = 'block';
  });
  
  // OTP input auto-focus
  const otpInputs = document.querySelectorAll('.otp-input input');
  
  otpInputs.forEach((input, index) => {
      input.addEventListener('input', function() {
          if (this.value.length === 1) {
              if (index < otpInputs.length - 1) {
                  otpInputs[index + 1].focus();
              }
          }
      });
      
      input.addEventListener('keydown', function(e) {
          if (e.key === 'Backspace' && this.value.length === 0) {
              if (index > 0) {
                  otpInputs[index - 1].focus();
              }
          }
      });
  });
});