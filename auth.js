// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
    // For demo purposes, redirect to a dashboard
    alert('Login successful!');
    window.location.href = 'dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you would typically make an API call to register
    console.log('Signup attempt:', { fullName, email, password });
    // For demo purposes, show success and redirect to login
    alert('Registration successful! Please log in.');
    switchTab('login');
});

// Tab switching functionality
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const tabs = document.querySelectorAll('.auth-tab');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}