document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const jobListings = document.getElementById('job-listings');

    // Sample job listings data (replace with your data)
    const jobData = [
        { title: 'Web Developer', company: 'Tech Co.', location: 'New York', description: 'Web developer position.' },
        { title: 'Graphic Designer', company: 'Design Inc.', location: 'San Francisco', description: 'Graphic designer position.' },
        // Add more job listings here
    ];

    // Function to display job listings
    function displayListings(listings) {
        jobListings.innerHTML = '';
        if (listings.length === 0) {
            jobListings.innerHTML = '<p>No matching jobs found.</p>';
        } else {
            listings.forEach(job => {
                const listingElement = document.createElement('div');
                listingElement.classList.add('job-listing');
                listingElement.innerHTML = `
                    <h2>${job.title}</h2>
                    <p>Company: ${job.company}</p>
                    <p>Location: ${job.location}</p>
                    <p>Description: ${job.description}</p>
                `;
                jobListings.appendChild(listingElement);
            });
        }
    }

    // Event listener for the search button
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredListings = jobData.filter(job => job.title.toLowerCase().includes(searchTerm));
        displayListings(filteredListings);
    });

    // Initial display of job listings
    displayListings(jobData);
});
