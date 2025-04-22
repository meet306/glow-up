function openModal() {
  document.getElementById('termsModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('termsModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('termsModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function validateForm() {
  const fullName = document.getElementById('fullName').value;
  const dob = document.getElementById('dob').value;
  const address1 = document.getElementById('address1').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const pincode = document.getElementById('pincode').value;
  const terms = document.getElementById('terms').checked;

  if (!fullName || !dob || !address1 || !city || !state || !pincode || !terms) {
    alert('Please fill all required fields and accept the terms and conditions');
    return false;
  }

  if (!/^\d{6}$/.test(pincode)) {
    alert('Please enter a valid 6-digit pincode');
    return false;
  }

  return true;
}
