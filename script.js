//Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Course Search Functionality
    const courseSearch = document.getElementById('courseSearch');
    const courseGrid = document.getElementById('courseGrid');
    const noResults = document.getElementById('noResults');

    if (courseSearch && courseGrid) {
        courseSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const courseCards = courseGrid.querySelectorAll('.course-card');
            let hasVisibleCards = false;

            courseCards.forEach(card => {
                const title = card.getAttribute('data-course-title')?.toLowerCase() || '';
                const description = card.getAttribute('data-course-description')?.toLowerCase() || '';
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasVisibleCards = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.style.display = hasVisibleCards ? 'none' : 'block';
            }
        });
    }

    // Job Search Functionality
    const jobSearch = document.getElementById('jobSearch');
    const jobGrid = document.getElementById('jobGrid');

    if (jobSearch && jobGrid) {
        jobSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const jobCards = jobGrid.querySelectorAll('.job-card');
            let hasVisibleCards = false;

            jobCards.forEach(card => {
                const title = card.getAttribute('data-job-title')?.toLowerCase() || '';
                const company = card.getAttribute('data-company')?.toLowerCase() || '';
                
                if (title.includes(searchTerm) || company.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasVisibleCards = true;
                } else {
                    card.style.display = 'none';
                }
            });

            const noResultsElement = document.getElementById('noResults');
            if (noResultsElement) {
                noResultsElement.style.display = hasVisibleCards ? 'none' : 'block';
            }
        });
    }

    // Hackathon Filter Tabs - REMOVED FUNCTIONALITY (as hackathons.html is removed)

    // Tab Switching (for course detail page)
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            const activeContent = document.getElementById(tabName);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});