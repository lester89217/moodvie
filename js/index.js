// MovieVerse Interaction Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('MovieVerse application loaded.');

    // Example: Add simple hover effects or interaction logging
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Button clicked:', e.target.innerText || 'Icon Button');
        });
    });

    // Search input focus effect (optional visual enhancement)
    const searchInput = document.querySelector('.search-bar input');
    const searchBar = document.querySelector('.search-bar');
    
    if(searchInput && searchBar) {
        searchInput.addEventListener('focus', () => {
            searchBar.style.borderColor = '#82b1ff';
        });

        searchInput.addEventListener('blur', () => {
            searchBar.style.borderColor = '#2c2c2e';
        });
    }
});
