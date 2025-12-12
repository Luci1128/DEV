document.addEventListener('DOMContentLoaded', function() {
    const h3 = document.querySelector('h3');
    // const h3=document.createElement('h3');
    const form = document.getElementById('donationForm');
    const successMessage = document.getElementById('successMessage');
    const newRegistrationBtn = document.getElementById('newRegistration');
    const today = new Date();
    const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    document.getElementById('dob').max = minAgeDate.toISOString().split('T')[0];
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            contact: document.getElementById('contact').value,
            weight: document.getElementById('weight').value,
            city: document.getElementById('city').value
        };
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
            console.log('Donor Data:', formData);
        }, 1000);
    });
    document.querySelector('.btn').addEventListener('click', function() {
        h3.innerText = "Registration successful";
        successMessage.classList.remove('hidden');  // Show success message
        form.style.display = 'none';               // Hide form
    });
});
