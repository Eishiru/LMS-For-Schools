// Set current date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = new Date().toLocaleDateString('en-US', options);
document.getElementById('current-date').textContent = currentDate;

// Tab navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Add active class to clicked nav item
        this.classList.add('active');
        
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        // Update dashboard header title
        const headerTitle = document.querySelector('.dashboard-header h2');
        switch(tabId) {
            case 'overview':
                headerTitle.textContent = 'Dashboard Overview';
                break;
            case 'subjects':
                headerTitle.textContent = 'My Subjects';
                break;
            case 'assignments':
                headerTitle.textContent = 'Assignments';
                break;
            case 'quizzes':
                headerTitle.textContent = 'Quizzes & Tests';
                break;
            case 'grades':
                headerTitle.textContent = 'Grades & Performance';
                break;
            case 'calendar':
                headerTitle.textContent = 'Academic Calendar';
                break;
            case 'resources':
                headerTitle.textContent = 'Learning Resources';
                break;
        }
    });
});